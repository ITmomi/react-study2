import { css } from '@emotion/react';

export const mainTitle = css`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  background: #595959;
  height: 78px;
  font-size: 32px;
  font-weight: 700;
  color: white;
  `;
export const naviBar = css`
  display: flex;
  padding: 1rem;
  width: 100%;
  justify-content: space-between;
  `;
export const DropDown = css`
  .dropBtn {
    cursor: pointer;
  }

  .dropdown-content {
    display: block;
    position: absolute;
    z-index: 1;
    box-shadow: 0px 0px 5px 2px rgb(0 0 0 / 15%);
  }
`;
export const homeButtonStyle = css`
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  background: #ffffff;
  border: 1px dashed #d9d9d9;
  box-sizing: border-box;
  border-radius: 10px;
  margin: 0px 30px;
  &:hover {
    display: block;
    background: #ffffff;
    border: 1px dashed #69c0ff;
    box-sizing: border-box;
    border-radius: 10px;
  }
`;

