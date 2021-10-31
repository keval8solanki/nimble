import { useState } from 'react'
import { Redirect } from 'react-router'
import {
	Container,
	EnterRoomButton,
	EnterRoomForm,
	EnterRoomInput,
	OptionContainer,
} from './homepage.styled'
import { v4 } from 'uuid'

export default function HomePage() {
	const [newRoom, setNewRoom] = useState(false)
	const [roomname, setRoomname] = useState(() => v4())

	return (
		<Container>
			<h1>Nimble</h1>
			<OptionContainer>
				<EnterRoomForm
					onSubmit={(e) => {
						e.preventDefault()
						setNewRoom(true)
					}}>
					<EnterRoomInput
						autoFocus
						value={roomname}
						onChange={(e) => setRoomname(e.target.value)}
						type='text'
						placeholder='Enter room name'
					/>
					<EnterRoomButton type='submit'>Join</EnterRoomButton>
				</EnterRoomForm>
			</OptionContainer>
			{newRoom && <Redirect to={`/r/${roomname}`} />}
		</Container>
	)
}
