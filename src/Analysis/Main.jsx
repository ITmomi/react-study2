import React from "react";
import * as SS from './styleSheet';

export default function Main () {
    return (
    <>
       <div css = {SS.mainTitle}>Analysis Tool</div>
       <div style={{width: "100%",
                    height: "2000px",
                    display: "flex",
                    background: "#f5f5f5"}}>
           <div css = {SS.naviBar}>
                <div>Home</div>
                <div>Overlay ADC Meas.</div>
           </div>
           <div style={{width : "1797px", marginLeft: "53px", height:"1000px"}}>
            <div css={SS.gridContainer}>
                <div>
                    <span>Select Source</span>
                    <div css={SS.secondBox}>
                        <div>
                            <span>From</span>
                            <select>
                                <option>Local</option>
                                <option>remote</option>
                            </select>
                        </div>
                        <div>
                            <span>DB From</span>
                            <select>
                                <option>cras_db@10.1.xxx.xxx</option>
                                <option>cras_db@10.2.xxx.xxx</option>
                                <option>cras_db@10.3.xxx.xxx</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <span>Select Target</span>
                    <div css={SS.secondBox}>
                        <div>
                            <span>Fab</span>
                            <select></select>
                        </div>
                        <div>
                            <span>EquipMent</span>
                            <select></select>
                        </div>
                        <div>
                            <span>period</span>
                            <select></select>
                        </div>
                        <div>
                            <span>job</span>
                            <select></select>
                        </div>
                        <div>
                            <span>Lot ID</span>
                            <select></select>
                        </div>
                        <div>
                            <span>Mean Deviation Diff.</span>
                            <select></select>
                        </div>
                        <div>
                            <span>AE Correction</span>
                            <select></select>
                        </div>
                        <button>Start</button>
                    </div>
                </div>
            </div>
               <div css={SS.AccordionBox}>
                    <div>
                        <div>Mab</div>
                        <div>Variation</div>
                        <div>Reproducibility</div>
                        <div>Anova</div>
                        <button>Download</button>
                    </div>
                   <div>
                       <div>
                           <div></div>
                           <button>Close</button>
                       </div>
                       <div>offset X/Y</div>
                       <div>CP/VS</div>
                       <div>ETC.</div>
                   </div>
               </div>
               <div css={SS.resultBox}>
                   <div>
                        Map
                   </div>
               </div>
           </div>
        </div>
         </>

    );
}