import styled from 'styled-components'
import { CHARCOAL, GREEN, RED } from '../../styles/colors'

export const MessageBubble = styled.p`
	padding: 20px;

	background-color: ${GREEN};
	border-radius: 16px;
	margin: 0 auto;
	color: white;

	margin-top: 20px;
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
		animation: cursor-blink 1s steps(2) infinite;
	}
`

export const InputContainter = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	margin-top: 40px;
	flex-direction: column;

	textarea {
		width: 87%;
		margin: 0;
		padding: 20px;
		border-radius: 16px;
		margin-bottom: 10px;
		color: ${CHARCOAL};
		font-weight: bold;

		&:focus {
			outline: ${CHARCOAL};
		}
	}
	button {
		width: 100%;
		background-color: ${RED};
		color: white;
		border-radius: 16px;
		padding: 5px;
		border: none;
	}
`

export const Button = styled.button`
	width: 100%;
	color: white;
`

export const LeaveButton = styled.button`
	background-color: ${RED};
	color: white;
	border-radius: 16px;
	padding: 5px 10px;
	border: none;
`

export const ChatContainer = styled.div`
	padding: 20px;
`
