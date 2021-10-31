import styled from 'styled-components'
import { CHARCOAL, GREEN, RED } from '../../styles/colors'
import { Button } from '../../styles/common.style'

export const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: sticky;
	top: 0;
	background-color: white;
`

export const MessageBubble = styled.p`
	padding: 20px;

	background-color: #c8d5db;
	border-radius: 8px;
	margin: 0 auto;
	color: ${CHARCOAL};

	margin-bottom: 125px;

	font-weight: bold;
	text-align: left;
	overflow-wrap: break-word;
	min-height: 100px;

	border: ${(props) =>
		props && props.onlineStatus ? '1px solid #2a9d8f' : 'none'};

	margin-top: 20px;
	@keyframes cursor-blink {
		0% {
			opacity: 0;
		}
	}

	&::after {
		content: '';
		width: 5px;
		height: 15px;
		margin-left: 2px;
		background: ${(props) => props && (props.onlineStatus ? GREEN : RED)};
		display: inline-block;
		animation: cursor-blink 0.7s steps(2) infinite;
	}
`

export const InputContainter = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;

	background-color: white;
	position: fixed;
	bottom: 20px;
	width: calc(100% - 40px);

	flex-direction: column;
	margin-top: 10px;

	textarea {
		width: calc(100% - 23px);
		margin: 0;
		padding: 10px;
		border-radius: 8px;
		margin-bottom: 10px;
		color: ${CHARCOAL};
		font-weight: bold;

		&:focus {
			outline: ${CHARCOAL};
		}
	}
	button {
		background-color: ${RED};
		color: white;
		border-radius: 8px;
		border: 1px solid #1a4e1a63;
		width: 100%;
		padding: 5px;
	}
`

export const LeaveButton = styled(Button)`
	background-color: ${RED};
	color: white;
	border-radius: 8px;
	border: 1px solid #1a4e1a63;
`

export const ChatContainer = styled.div`
	padding: 20px;
`
