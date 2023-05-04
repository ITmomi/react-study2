import { css } from '@emotion/react';

export const PlusButton = css`
  position: relative;
  & > button {
    border-color: #061178;
    background: #061178;
		z-index: 1;
		&:hover{
			border-color: #061178;
	    background: #061178;
		}
	}
	& .ant-btn-primary {
		width: 0;
	} 
	`;

export const SubButton = css`

	& > button {
		border-color: #40A9FF;
    background: #40A9FF;
    position: absolute;
    transition: all 0.3s ease-in-out;
    top: 4px;
    left: 4px;
	}
	&.move {
		& > .sub-button1 {
	    transform: translate(-38px, 6px);
		}	
		& > .sub-button2 {
			transform: translateY(38px);
	    transition-delay: 0.2s;
		}
	  & > .sub-button3 {
		  transform: translate(38px, 6px);
	    transition-delay: 0.4s;
		}
	}

	`;