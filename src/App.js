import { useEffect } from 'react'
import { Switch, Route } from 'react-router'
import styled from 'styled-components'
import { useLocalStorage } from 'use-hooks'
import { useBG } from './hooks'
import ChatPage from './pages/Chat'
import HomePage from './pages/Home'

function App() {
	// const [bg, setBG] = useLocalStorage('bg', '')
	const [bg, setBG] = useBG()
	console.log(bg)
	return (
		<Container style={{ background: `url(${bg})` }}>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/r/:id' component={ChatPage} />
			</Switch>
		</Container>
	)
}

export default App

const Container = styled.div`
	text-align: center;
	height: 100%;
	background-repeat: no-repeat;
	background-size: cover;
`
