import React from "react";
import {SelectSource} from './SelectSource';
import {SelectTarget} from './SelectTarget'
import {DrawingType} from './DrawingType'
import * as SS from './styleSheet';

export default function Main () {
    return (
    <>
       <div css = {SS.mainTitle}>Analysis Tool</div>
       <div style={{width: "100%",
                    display: "flex",
                    background: "#f5f5f5"}}>
           <div css = {SS.naviBar}>
                <div>Home</div>
                <div>Overlay ADC Meas.</div>
           </div>
           <div style={{width: "100%",
               marginLeft: "53px",
               marginRight: "53px",
               height: "1000px"}}>
           <div css={SS.gridContainer}>
               <SelectSource />
               <SelectTarget />
               {/*<DrawingType />*/}
           </div>
           </div>
       </div>

    </>
    );
};

export const ResultMap = () => {
    return (
        <>
           <div css={SS.resultBox}>
               <div>
                    Map
               </div>
           </div>

        </>
    );
};
/*
ResultMap.propTypes = {
    a: PropTypes.func,
};
ResultMap.defaultProps = {
    a: 'measurement'
};
 */


