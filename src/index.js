import { StrictMode } from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

render(
	<StrictMode>
		<BrowserRouter>
			<RecoilRoot>
				<App />
			</RecoilRoot>
		</BrowserRouter>
	</StrictMode>,
	document.getElementById('root')
)
