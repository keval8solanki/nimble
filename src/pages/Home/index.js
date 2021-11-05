import { useState } from 'react'
import { Redirect } from 'react-router'
import {
	Container,
	DarkModeToggle,
	EnterRoomButton,
	EnterRoomForm,
	EnterRoomInput,
	Highlight,
	OptionContainer,
	Title,
} from './homepage.styled'

import { useDarkMode } from 'use-hooks'
import DarkIcon from '../../assets/icons/dark.svg'
import LightIcon from '../../assets/icons/light.svg'

import {
	uniqueNamesGenerator,
	adjectives,
	colors,
	animals,
} from 'unique-names-generator'

const customConfig = {
	dictionaries: [colors, adjectives, animals],
	separator: '-',
	length: 3,
}

export default function HomePage() {
	const [newRoom, setNewRoom] = useState(false)
	const [roomname, setRoomname] = useState(() =>
		uniqueNamesGenerator(customConfig)
	)

	const [darkMode, setDarkMode] = useDarkMode()

	return (
		<Container>
			<DarkModeToggle
				src={darkMode ? LightIcon : DarkIcon}
				onClick={() => setDarkMode(!darkMode)}
			/>

			<Title darkMode={darkMode}>
				n<Highlight>i</Highlight>mble
			</Title>
			<OptionContainer>
				<EnterRoomForm
					onSubmit={(e) => {
						e.preventDefault()
						if (roomname) {
							setNewRoom(true)
						}
					}}>
					<EnterRoomInput
						autoFocus
						required
						darkMode={darkMode}
						value={roomname}
						onChange={(e) => {
							const val = e.target.value.toLowerCase().split(' ').join('-')
							setRoomname(val)
						}}
						type='text'
						placeholder='Enter room name'
					/>
					<EnterRoomButton darkMode={darkMode} type='submit'>
						Join
					</EnterRoomButton>
				</EnterRoomForm>
			</OptionContainer>
			{newRoom && <Redirect to={`/r/${roomname}`} />}
		</Container>
	)
}
