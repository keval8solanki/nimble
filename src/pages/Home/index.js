import { useState } from 'react'
import { Redirect } from 'react-router'
import {
	Container,
	CreateChatRoomButton,
	EnterRoomButton,
	EnterRoomForm,
	EnterRoomInput,
	OptionContainer,
} from './homepage.styled'
import { v4 } from 'uuid'

export default function HomePage() {
	const [newRoom, setNewRoom] = useState(false)

	return (
		<Container>
			<h1>Nimble</h1>
			<OptionContainer>
				<CreateChatRoomButton onClick={() => setNewRoom(true)}>
					Create Chat Room
				</CreateChatRoomButton>
				<p>OR</p>
				<EnterRoomForm onSubmit={(e) => e.preventDefault()}>
					<EnterRoomInput type='text' placeholder='Enter room name' />
					<EnterRoomButton type='submit'>Join</EnterRoomButton>
				</EnterRoomForm>
			</OptionContainer>
			{newRoom && <Redirect to={`/r/${v4()}`} />}
		</Container>
	)
}
