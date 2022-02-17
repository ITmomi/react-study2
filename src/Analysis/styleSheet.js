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

export const AccordionBox = css`
    width: 1797px;
    height: 500px;
    background: white;
    margin-top: 25px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    `;
export const resultBox = css`
    width: 1797px;
    height: 500px;
    background: white;
    margin-top: 25px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    
    `;