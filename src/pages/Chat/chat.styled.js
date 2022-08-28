import styled from 'styled-components'
import { CHARCOAL, GREEN, RED } from '../../styles/colors'
import { Button } from '../../styles/common.style'

export const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: sticky;
	top: 0;
	z-index: 10;
	background-color: ${(props) =>
		props && props.darkMode ? '#2a2a2a' : 'white'};
	padding: 10px 20px;
`

export const MessageBubble = styled.p`
	padding: 20px;
	/* transform: translateY(-100vh); */
	/* opacity: 0; */
	flex: 2;
	background: ${(props) => (props && props.darkMode ? '#c8d5db24' : '#c8d5db')};
	border-radius: 8px;
	margin: 0 auto;
	color: ${(props) => (props && props.darkMode ? 'white' : CHARCOAL)};

	/* font-size: 1.2em; */

	font-weight: bold;

	margin: 0px 20px 0 20px;

	text-align: left;
	overflow-wrap: break-word;
	height: calc(100% - 288px);
	overflow: scroll;
	outline: none;
	border: ${(props) =>
		props && props.onlineStatus ? '1px solid #2a9d8f' : 'none'};

	@keyframes cursor-blink {
		0% {
			opacity: 0;
		}
	}

	@keyframes come {
		0% {
			opacity: 1;
			transform: scale(0.2) translateY(-200vh);
			border-radius: 100px;
			padding: 0;
			margin: 0;
			font-size: 0;
		}

		25% {
			transform: scale(0.2);
			border-radius: 100px;
			padding: 0;
			margin: 0;
			font-size: 0;
		}
		50% {
			padding: 0;
			margin: 0;
			font-size: 0;
		}

		85% {
			font-size: 0;
		}

		100% {
		}
	}
	/* animation-fill-mode: both; */
	/* animation: come 1.5s forwards; */

	animation: come 1s ease-in-out 1s 1 normal both;

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
	/* display: flex;
	flex-direction: column; */
`

export const InputContainter = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	padding: 20px;
	padding-top: 0px;
	background: ${(props) => (props && props.darkMode ? '#2a2a2a' : 'white')};

	position: fixed;
	bottom: 0;
	width: calc(100% - 40px);
	flex: 1;
	flex-direction: column;

	textarea {
		@keyframes come2 {
			0% {
				transform: scale(0.2) translateY(100vh);
				border-radius: 1000px;
				width: 0px;
				padding: 0;
				margin: 0;
				font-size: 0;
			}

			25% {
				transform: scale(0.2);
				border-radius: 100px;
				padding: 0;
				width: 0px;
				margin: 0;
				font-size: 0;
			}
			50% {
				width: 50%;
			}

			100% {
			}
		}

		animation: come2 1.5s ease-in-out 0s 1 normal both;

		width: calc(100% - 43px);
		resize: none;
		margin: 0;
		padding: 20px;
		border-radius: 8px;
		border: none;
		background-color: ${(props) =>
			props && props.darkMode ? ' #e76f5126' : '#e76f5136'};

		margin-bottom: 10px;
		color: ${(props) => (props && props.darkMode ? 'white' : CHARCOAL)};

		flex: 1;
		/* font-size: 1.3em; */
		font-weight: bold;
		line-height: 1.4em;
		&:focus {
			outline: ${CHARCOAL};
			border: 1px solid ${RED};
		}
	}
	button {
		@keyframes come3 {
			0% {
				transform: translateY(100vh);
			}
			100% {
			}
		}
		animation: come3 2s ease-in-out 0.5s 1 normal both;
		width: 100%;
		padding: 5px;

		background: ${(props) => (props && props.darkMode ? 'transparent' : RED)};
		color: ${(props) => (props && props.darkMode ? RED : 'white')};
		border-radius: 8px;
		border: 1px solid
			${(props) => (props && props.darkMode ? RED : '#1a4e1a63')};
		cursor: pointer;
	}
`

export const LeaveButton = styled(Button)`
	background: ${(props) => (props && props.darkMode ? 'transparent' : RED)};
	color: ${(props) => (props && props.darkMode ? RED : 'white')};
	border-radius: 8px;
	/* border: 1px solid ${(props) =>
		props && props.darkMode ? RED : '#1a4e1a63'}; */
	cursor: pointer;
`

export const ChatContainer = styled.div`
	background: transparent;
	height: 100%;
	/* padding: 20px; */
`

export const Icon = styled.img``
