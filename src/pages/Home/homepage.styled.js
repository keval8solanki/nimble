import styled from 'styled-components'
import { CHARCOAL, RED } from '../../styles/colors'
import { Button } from '../../styles/common.style'

export const Container = styled.div`
	padding: 20px;
	margin-top: 120px;
`

export const Title = styled.h1`
	color: ${CHARCOAL};
	font-weight: bold;
	font-size: 2em;
	text-shadow: 7px 7px 20px #264653ab;
`
export const Highlight = styled.span`
	color: ${RED};
`

export const CreateChatRoomButton = styled.button`
	background: #7ecb84;
	padding: 1em;
	border-radius: 16px;
	font-size: 2em;
	font-weight: bold;
	color: #1a4e1a;
	border: 1px solid #1a4e1a63;
	margin-bottom: 1em;
	width: 100%;
	cursor: pointer;
`

export const OptionContainer = styled.div``

export const EnterRoomForm = styled.form``

export const EnterRoomInput = styled.input`
	border: 1px solid ${CHARCOAL};
	border-radius: 8px;
	padding: 5px 10px;
	margin-right: 10px;
	color: ${CHARCOAL};
	outline: none;
`

export const EnterRoomButton = styled(Button)`
	background: ${RED};
	color: white;
	border-radius: 8px;
	border: 1px solid #1a4e1a63;
	cursor: pointer;
`
