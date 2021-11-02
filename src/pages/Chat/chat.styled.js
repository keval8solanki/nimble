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
	padding: 10px 20px;
`

export const MessageBubble = styled.p`
	padding: 20px;
	flex: 2;
	background-color: #c8d5db;
	border-radius: 8px;
	margin: 0 auto;
	color: ${CHARCOAL};
	font-size: 1.3em;
	margin: 20px 20px 0 20px;
	font-weight: bold;
	text-align: left;
	overflow-wrap: break-word;
	/* min-height: 150px; */
	outline: none;
	border: ${(props) =>
		props && props.onlineStatus ? '1px solid #2a9d8f' : 'none'};

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

export const ChatDisplayContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: calc(100vh - 63px);
`

export const InputContainter = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	padding: 20px;
	background-color: white;
	/* position: fixed;
	bottom: 0; */
	width: calc(100% - 40px);
	flex: 1;
	flex-direction: column;

	textarea {
		width: calc(100% - 41px);
		margin: 0;
		padding: 20px;
		border-radius: 8px;
		border: none;
		background-color: #e76f5136;
		margin-bottom: 10px;
		color: ${CHARCOAL};
		font-weight: bold;
		flex: 1;
		font-size: 1.5em;
		&:focus {
			outline: ${CHARCOAL};
			border: 1px solid ${RED};
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
	/* padding: 20px; */
`
