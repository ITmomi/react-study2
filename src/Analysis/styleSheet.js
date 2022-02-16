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
    grid-template-columns: 0.7fr 1fr;
    margin-top: 50px;
    height: 545px;
    background-color: #f5f5f5;
    grid-gap: 25px;
    & > div {
        background: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
    }
    & > div > span {
        font-weight: 500;
        font-size: 24px;
        color: #1890FF;
        padding: 1rem;
    }
    `;

export const secondBox = css`
    padding: 3rem;
    & > div {
    display: flex;
    justify-content: space-between;
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