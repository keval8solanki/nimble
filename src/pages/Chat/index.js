import React, { useEffect, useRef } from 'react'
import { socket, SOCKET_EVENTS } from '../../socket'

export default function ChatPage({ match }) {
	const { id } = match?.params || {}

	useEffect(() => {
		socket.emit(SOCKET_EVENTS.JOIN_ROOM, id)
		return () => {
			socket.emit(SOCKET_EVENTS.LEAVE_ROOM, id)
		}
	}, [id])

	const messageRef = useRef()
	const emit = (data) => {
		socket.emit(SOCKET_EVENTS.NEW_MESSAGE, { room: id, data })
	}
	socket.on(SOCKET_EVENTS.NEW_MESSAGE, (data) => {
		if (messageRef.current) {
			messageRef.current.innerText = data?.data
		}
	})

	console.log(messageRef)

	return (
		<div>
			<p ref={messageRef}>:</p>
			<input onChange={(e) => emit(e.target.value)} />
		</div>
	)
}
