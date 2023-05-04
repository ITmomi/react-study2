import { css } from '@emotion/react';

export const ItemsHeader = css`
	position: relative;
	padding: 1rem;
	& .item-icon {
		position: absolute;
    right: 25px;
    top: 20px;
	}
	`;

export const ButtonStyle = css`
	display: flex;
  align-items: center;
  gap: 10px;
	& button {
		width: 100px;
    height: 100px;
    background: #FCD34D;
    border-radius: 16px;
    & svg {
      width: 30px;
      height: 30px;
    }
	}
	`;