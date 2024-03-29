import React, { useEffect, useRef, useState } from 'react'
import { Redirect } from 'react-router'
import { useDarkMode, useLocalStorage } from 'use-hooks'

import { socket, SOCKET_EVENTS } from '../../socket'
import { GREEN, RED } from '../../styles/colors'
import { DarkModeToggle, Title } from '../Home/homepage.styled'
import {
	MessageBubble,
	InputContainter,
	LeaveButton,
	ChatContainer,
	TitleContainer,
} from './chat.styled'

import DarkIcon from '../../assets/icons/dark.svg'
import LightIcon from '../../assets/icons/light.svg'

// import SoundOnWhite from '../../assets/icons/volume_up_white.svg'
// import SoundOnBlack from '../../assets/icons/volume_up_black.svg'
// import SoundOffWhite from '../../assets/icons/volume_off_white.svg'
// import SoundOffBlack from '../../assets/icons/volume_off_black.svg'

import ClearAudio from '../../assets/sound/clear.mp3'
import ClickAudio from '../../assets/sound/click.wav'

const clearPress = new Audio(ClearAudio)
const clickAudio = new Audio(ClickAudio)

export default function ChatPage({ match }) {
	const { id } = match?.params || {}

	const [darkMode, setDarkMode] = useDarkMode()
	const [sound, setSound] = useLocalStorage('sound', true)
	const [vibration, setVibration] = useLocalStorage('vibration', true)

	const [onlineStatus, setOnlineStatus] = useState(false)

	const messageRef = useRef()
	const chatRef = useRef()
	const [isLeft, setIsLeft] = useState(false)
	const textareaRef = useRef()

	function onChange() {
		if (document.hidden) {
			socket.emit(SOCKET_EVENTS.BLUR, id)
		} else {
			socket.emit(SOCKET_EVENTS.FOCUS, id)
		}
	}

	useEffect(() => {
		document.addEventListener('visibilitychange', onChange, false)
		return () => {
			document.removeEventListener('visibilitychange', onChange)
		}
	})

	useEffect(() => {
		socket.emit(SOCKET_EVENTS.JOIN_ROOM, id)
		return () => {
			socket.emit(SOCKET_EVENTS.LEAVE_ROOM, id)
		}
	}, [id])

	socket.on(SOCKET_EVENTS.ROOM_FULL, (data) => {
		if (chatRef.current) {
			chatRef.current.innerText =
				'This Room is expired please create new one: https://nimble-chat.vercel.app'
		}
	})

	const emit = (data) => {
		socket.emit(SOCKET_EVENTS.NEW_MESSAGE, { room: id, data })
	}

	socket.on(SOCKET_EVENTS.LEFT_ROOM, (data) => {
		setIsLeft(true)
	})

	socket.on(SOCKET_EVENTS.RECEIVE_MESSAGE, (data) => {
		clickAudio.currentTime = 0
		clickAudio.play()

		const isCleared = data?.data === ''
		if (isCleared) {
			clearPress.currentTime = 0
			if (sound) clearPress.play()
			if (vibration) navigator.vibrate(50)
		}

		if (messageRef.current) {
			messageRef.current.innerText = data?.data
		}
	})

	socket.on(SOCKET_EVENTS.ONLINE, (data) => {
		setOnlineStatus(true)
	})
	socket.on(SOCKET_EVENTS.OFFLINE, (data) => {
		setOnlineStatus(false)
	})

	return (
		<ChatContainer ref={chatRef}>
			<TitleContainer darkMode={darkMode}>
				<Title darkMode={darkMode} style={{ margin: '0' }}>
					n<span style={{ color: onlineStatus ? GREEN : RED }}>i</span>mble
				</Title>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						width: '110px',
					}}>
					{/* <img
						src={
							darkMode
								? sound
									? SoundOnWhite
									: SoundOffWhite
								: sound
								? SoundOnBlack
								: SoundOffBlack
						}
						onClick={() => setSound(!sound)}
						alt='sound-icon'
					/> */}
					<DarkModeToggle
						style={{ position: 'static' }}
						src={darkMode ? LightIcon : DarkIcon}
						onClick={() => setDarkMode(!darkMode)}
					/>
					<LeaveButton
						darkMode={darkMode}
						onClick={() => socket.emit(SOCKET_EVENTS.LEAVE_ROOM, id)}>
						Leave
					</LeaveButton>
				</div>
			</TitleContainer>

			<MessageBubble
				onlineStatus={onlineStatus}
				darkMode={darkMode}
				ref={messageRef}>
				Your partner's message will appear here!
			</MessageBubble>

			<InputContainter darkMode={darkMode}>
				<textarea
					rows='4'
					autoFocus
					ref={textareaRef}
					onChange={(e) => emit(e.target.value)}
					placeholder='Type here...'></textarea>

				<button
					onClick={() => {
						textareaRef.current.value = ''
						textareaRef.current.focus()
						clearPress.currentTime = 0
						if (sound) clearPress.play()
						if (vibration) navigator.vibrate(50)
						emit('')
					}}>
					Clear
				</button>
			</InputContainter>

			{isLeft && <Redirect to='/' />}
		</ChatContainer>
	)
}
