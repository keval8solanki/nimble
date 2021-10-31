import React, { useEffect, useRef, useState } from 'react'
import { Redirect } from 'react-router'

import { socket, SOCKET_EVENTS } from '../../socket'
import { Highlight, Title } from '../Home/homepage.styled'
import {
	MessageBubble,
	InputContainter,
	LeaveButton,
	ChatContainer,
	TitleContainer,
} from './chat.styled'

export default function ChatPage({ match }) {
	const { id } = match?.params || {}
	const [user, setUser] = useState()
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
			chatRef.current.innerText = 'ROOM FULL'
		}
	})

	const emit = (data) => {
		socket.emit(SOCKET_EVENTS.NEW_MESSAGE, { room: id, data })
	}

	socket.on(SOCKET_EVENTS.JOINED_ROOM, (data) => {
		setUser(data.user)
	})

	socket.on(SOCKET_EVENTS.LEFT_ROOM, (data) => {
		setIsLeft(true)
	})

	socket.on(`${SOCKET_EVENTS.RECEIVE_MESSAGE}/${user}`, (data) => {
		if (messageRef.current) {
			messageRef.current.innerText = data?.data
		}
	})

	return (
		<ChatContainer ref={chatRef}>
			<TitleContainer>
				<Title style={{ margin: '0' }}>
					n<Highlight>i</Highlight>mble
				</Title>
				<LeaveButton onClick={() => socket.emit(SOCKET_EVENTS.LEAVE_ROOM, id)}>
					Leave
				</LeaveButton>
			</TitleContainer>

			<MessageBubble ref={messageRef}></MessageBubble>
			<InputContainter>
				<textarea
					rows='3'
					ref={textareaRef}
					onChange={(e) => emit(e.target.value)}></textarea>
				<button
					onClick={() => {
						textareaRef.current.value = ''
						textareaRef.current.focus()
						emit('')
					}}>
					Clear
				</button>
			</InputContainter>

			{isLeft && <Redirect to='/' />}
		</ChatContainer>
	)
}
