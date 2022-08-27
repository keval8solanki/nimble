import { useState, useRef, useEffect } from 'react'
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

import { useDarkMode, useLocalStorage } from 'use-hooks'
import DarkIcon from '../../assets/icons/dark.svg'
import LightIcon from '../../assets/icons/light.svg'

import {
	uniqueNamesGenerator,
	adjectives,
	colors,
	animals,
} from 'unique-names-generator'
import { useBG } from '../../hooks'

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
	const [bg, setBG] = useBG()

	const bgChangeHandler = (e) => {
		const file = e.target.files[0]
		const reader = new FileReader()

		reader.onload = function () {
			setBG(reader.result)
		}
		reader.readAsDataURL(file)
	}

	const [darkMode, setDarkMode] = useDarkMode()

	const inputRef = useRef(null)

	return (
		<Container>
			<button onClick={() => setBG('')}>Clear BG</button>
			<input type='file' accept='image/*' onChange={bgChangeHandler} />
			<DarkModeToggle
				src={darkMode ? LightIcon : DarkIcon}
				onClick={() => setDarkMode(!darkMode)}
			/>

			<Title style={{ fontSize: '3em' }} darkMode={darkMode}>
				n<Highlight>i</Highlight>mble
			</Title>
			<OptionContainer>
				<EnterRoomForm
					onSubmit={(e) => {
						e.preventDefault()
						if (roomname) {
							setNewRoom(true)
						}
						inputRef.current.blur()
					}}>
					<EnterRoomInput
						autoFocus
						required
						darkMode={darkMode}
						value={roomname}
						ref={inputRef}
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
