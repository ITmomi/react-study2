import { css } from '@emotion/react';

export const mainTitle = css` 
    display: flex;
    height: 138px;
    justify-content: center;
    font-family: Saira;
    font-style: normal;
    font-weight: 500;
    font-size: 38px;
    line-height: 100px;
`;
export const naviBar = css`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 0px;
    position: absolute;
    left: 2.78%;
    right: 2.78%;
    top: 11%;
    bottom: 83%;
    color: white;
    background: #061178;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 26px 26px 10px 10px;
    
    `;

export const gridContainer = css`
    display: grid;
    margin-top: 50px;
    height: 545px;
    background-color: #f5f5f5;
    grid-template-columns: 0.6fr 1fr;
    grid-gap: 25px;
    & > div {
        background: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        
        &.gridSource{ 
        max-width: 665px;
        & > div > span {
            font-weight: 500;
            font-size: 24px;
            color: #1890FF;
            padding: 1rem;
            }
        }
        
        &.gridTarget {
        max-width: 1107px;
        & > div > span {
            font-weight: 500;
            font-size: 24px;
            color: #1890FF;
            padding: 1rem;
            }
        }

    &.gridSource {
        max-width: 665px;
    }
    `;

export const label = css`
    white-space: pre;
    &::before {
      display: inline-block;
      color: red;
      font-size: 16px;
      content: '*';
      margin-right: 0.3rem;
    }
    &::after {
      display: inline-block;
      content: ':';

`;
export const secondBoxSource = css`
    padding: 2rem;
    & > div {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem
    }
 `;
export const secondBoxTarget = css`
    
    padding: 2rem;
    margin-left: 200px;
    margin-right: 200px;
    & > div {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem
    }
 `;

export const resultBox = css`
    width: 1797px;
    height: 500px;
    background: white;
    margin-top: 25px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    
    `;
export const antButton = css`
    
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    border-radius: 8px;
    border: 1px dashed #D9D9D9;
    & > .blue {
        background: #1890FF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
    }
    `;
export const offsetSwitchStyle = css`
    height: 30px;
    width: 80px;
    & > div {
        top: 6px;
    }
    & > span {
    font-size: 14px;
    }
`;

export const playButton = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & > span {
    &:first-of-type {
      font-size: 40px;
      color: #52C41A;
    }
    &:last-of-type {
      font-size: 15px;
      font-weight: 600;
    }
  }
   `;
export const downloadButton = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & > span {
    &:first-of-type {
      font-size: 30px;
      color: #1890FF;
    }
    &:last-of-type {
      font-size: 10px;
      font-weight: 600;
    }
  }
   `;

export const mapBox = css`
    position: relative;
    width: 1797px;
    height: 500px;
    background: white;
    margin-top: 25px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 1rem;
    `;
export const mapSelectBox = css`
    align-items: center;
    display: flex;
    max-width: 650px;
    justify-content: space-between;
    height: 50px;
    font-size: 18px;
    cursor: pointer;
    padding: 1rem;
    `;

export const accordionBox = css`
    font-size: 18px;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    `;

export const mapSettingBox = css`
    padding : 1rem;
    width: 70%;
    margin: 0 auto;
    `;
export const gridBox = css`
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    & > .offsetSpan {
      display: flex;
      align-items: center;
      justify-content: center;
    }
`;

export const offSetline = css`
    display: flex;
    justify-content: space-evenly;
    padding: 0.5rem;
    gap: 10px;
    `;

export const cpVsGridBox = css`
    display: grid;
    grid-template-columns: 0.5fr 3fr;
    padding: 1rem;
    `;

export const tableStyle = css`
    table-layout: fixed;
    text-align: center;
    margin: 0 auto;
    & input {
        width: 100px;
    }
    & > thead {
        background: #F0F0F0;
        }
    }
    & input {
        background: #F5F5F5;
        border: 1px solid #D9D9D9;
        box-sizing: border-box;
        border-radius: 2px;
    }
    `;

export const etcGridBox = css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: white;
    grid-gap: 30px;
    `;

export const etcEditBox = css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 1rem;
    align-items: center;
    height: 200px;
    background: #F0F2F5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    & span {
        display: flex;
        align-items: center;
        white-space: pre;
    }
    `;

