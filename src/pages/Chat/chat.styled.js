import styled from 'styled-components'

export const MessageBubble = styled.p`
	width: 340px;
	padding: 20px;

	background-color: #206a81;
	border-radius: 16px;
	margin: 0 auto;
	color: white;

	@keyframes cursor-blink {
		0% {
			opacity: 0;
		}
	}

	&::after {
		content: '';
		width: 3px;
		height: 15px;
		margin-left: 2px;
		background: white;
		display: inline-block;
		animation: cursor-blink 1.5s steps(2) infinite;
	}
`
