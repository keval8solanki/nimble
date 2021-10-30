import {
	Container,
	CreateChatRoomButton,
	EnterRoomButton,
	EnterRoomForm,
	EnterRoomInput,
	OptionContainer,
} from './homepage.styled'

export default function HomePage() {
	return (
		<Container>
			<h1>Nimble</h1>

			<OptionContainer>
				<CreateChatRoomButton>Create Chat Room</CreateChatRoomButton>
				<EnterRoomForm onSubmit={(e) => e.preventDefault()}>
					<EnterRoomInput type='text' placeholder='Enter room name' />
					<EnterRoomButton type='submit'>Join</EnterRoomButton>
				</EnterRoomForm>
			</OptionContainer>
		</Container>
	)
}
