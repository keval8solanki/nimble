import React, { useEffect, useRef, useState } from 'react'
import { Redirect } from 'react-router'

import { socket, SOCKET_EVENTS } from '../../socket'
import { GREEN, RED } from '../../styles/colors'
import { Title } from '../Home/homepage.styled'
import {
	MessageBubble,
	InputContainter,
	LeaveButton,
	ChatContainer,
	TitleContainer,
	ChatDisplayContainer,
} from './chat.styled'

export default function ChatPage({ match }) {
	const { id } = match?.params || {}

	const [onlineStatus, setOnlineStatus] = useState(false)

	const messageRef = useRef()
	const chatRef = useRef()
	const [isLeft, setIsLeft] = useState(false)
	const textareaRef = useRef()

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
			<TitleContainer>
				<Title style={{ margin: '0' }}>
					n<span style={{ color: onlineStatus ? GREEN : RED }}>i</span>mble
				</Title>
				<LeaveButton onClick={() => socket.emit(SOCKET_EVENTS.LEAVE_ROOM, id)}>
					Leave
				</LeaveButton>
			</TitleContainer>

			<ChatDisplayContainer>
				<MessageBubble onlineStatus={onlineStatus} ref={messageRef}>
					Your partner's message will appear here!
				</MessageBubble>

				<InputContainter>
					<textarea
						rows='3'
						ref={textareaRef}
						onChange={(e) => emit(e.target.value)}
						placeholder='Type your message here...'></textarea>

					<button
						onClick={() => {
							textareaRef.current.value = ''
							textareaRef.current.focus()
							emit('')
						}}>
						Clear
					</button>
				</InputContainter>
			</ChatDisplayContainer>

			{isLeft && <Redirect to='/' />}
		</ChatContainer>
	)
}
