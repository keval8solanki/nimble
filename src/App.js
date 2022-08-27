import { Switch, Route } from 'react-router'
import styled from 'styled-components'
import ChatPage from './pages/Chat'
import HomePage from './pages/Home'

function App() {
	return (
		<Container>
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
`
