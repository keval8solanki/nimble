import { io } from 'socket.io-client'
import { socketBaseUrl } from '../config/app.config'

export const socket = io(socketBaseUrl)

export const SOCKET_EVENTS = Object.freeze({
	JOIN_ROOM: 'join_room',
	JOINED_ROOM: 'joined_room',

	LEAVE_ROOM: 'leave_room',
	LEFT_ROOM: 'left_room',

	ROOM_FULL: 'room_full',

	NEW_MESSAGE: 'new_message',
	RECEIVE_MESSAGE: 'receive_message',
})
