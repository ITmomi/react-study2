import { css } from '@emotion/react';


export const CollapseStyle = css`
	position: relative;
	padding: 1rem;
	& .off-card {
		min-height: 46px;
	  border: 1px solid var(--ckr-blue-3);
	}
`;

export const RibbonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 200px;
  height: 41px;
  left: -9px;
  top: -5px;
  background: var(--ckr-blue-5);
  border-radius: 6px 6px 6px 0px;
  cursor: pointer;
  color: white;
  transition: all 0.5s;
  &::after {
    position: absolute;
    left: 0px;
    top: 41px;
    border: 13px solid var(--ckr-blue-9);
    z-index: 5;
    border-left-color: transparent;
    border-bottom-color: transparent;
    content: '';
  }
  & > div {
    display: none;
  }
`;

export const CardStyle = css`
	display: grid;
  grid-template-columns: 1.2fr 8.8fr;
  min-height: 50px;
  border: 1px solid var(--ckr-blue-3);
  padding: 1rem;
  & .svg-box {
    display: flex;
    align-items: center;
	  justify-content: center;
		& span > svg {
	    width: 70px;
	    height: 70px;
	    left: 50px;
	    top: 30px;
	    color: var(--ckr-blue-9);
    }
	}
	& .contents-box {
		& > div {
			height: 200px;
	    border: 1px solid;
		}
	}
`;