import * as SS from "./styleSheet";
import React from "react";
import {Select, DatePicker, TreeSelect} from 'antd';
import {lotidData, diffData} from "./data"
import {PlayCircleOutlined} from '@ant-design/icons';
export const SelectTarget = () => {
	return (
		<>
        <div className={"gridTarget"}>
            <div style={{position:"relative"}}>
                <span>Select Target</span>
                <div css={SS.secondBoxTarget}>
                    <div>
                        <span css={SS.label} >Fab</span>
                        <Select
                            value={'1'}
                            style={{ width: 300 }}
                            // onChange={handleChange}
                        >
                            <Select.Option value="1">Fab1600</Select.Option>
                            <Select.Option value="2">Fab1700</Select.Option>
                        </Select>
                    </div>
                    <div>
                        <span css={SS.label} >EquipMent</span>
                        <Select
                            value={'1'}
                            style={{ width: 300 }}
                            // onChange={handleChange}
                        >
                            <Select.Option value="1">Tool1600_1</Select.Option>
                            <Select.Option value="2">Tool1600_2</Select.Option>
                            <Select.Option value="3">Tool1600_3</Select.Option>
                        </Select>
                    </div>
                    <div>
                        <span css={SS.label} >period</span>
                        <DatePicker.RangePicker
                            style={{ width: '300px' }}
                            inputReadOnly
                            allowClear={false}
                        />
                    </div>
                    <div>
                        <span css={SS.label} >job</span>
                        <Select
                            value={'1'}
                            style={{ width: 300 }}
                            // onChange={handleChange}
                        >
                            <Select.Option value="1">Fab1599</Select.Option>
                            <Select.Option value="2">Fab1600</Select.Option>
                            <Select.Option value="3">Fab1601</Select.Option>
                        </Select>
                    </div>
                    <div>
                        <span css={SS.label} >Lot ID</span>
                        <TreeSelect
                            treeData={lotidData}
                            showCheckedStrategy={TreeSelect.SHOW_CHILD}
                            style={{ width: '300px' }}
                            maxTagCount="responsive"
                            treeCheckable
                            treeDefaultExpandAll
                        />
                    </div>
                    <div>
                        <span css={SS.label} >Mean Deviation Diff</span>
                        <TreeSelect
                            treeData={diffData}
                            showCheckedStrategy={TreeSelect.SHOW_CHILD}
                            style={{ width: '300px' }}
                            maxTagCount="responsive"
                            treeCheckable
                            treeDefaultExpandAll
                        />
                    </div>
                    <div>
                        <span css={SS.label} >AE Correction</span>
                        <Select
                            value={'1'}
                            style={{ width: 300 }}
                            // onChange={handleChange}
                        >
                            <Select.Option value="1">OFF</Select.Option>
                            <Select.Option value="2">Shift/RotCorrection</Select.Option>
                            <Select.Option value="3">Shift/RotCorrection/MagCorrection</Select.Option>
                        </Select>
                    </div>
                    <div>
                        <span css={SS.label} >Stage Correction</span>
                        <TreeSelect
                            treeData={diffData}
                            showCheckedStrategy={TreeSelect.SHOW_CHILD}
                            style={{ width: '300px' }}
                            maxTagCount="responsive"
                            treeCheckable
                            treeDefaultExpandAll
                        />
                    </div>
                    <div>
                        <span css={SS.label} >ADC Correction</span>
                        <TreeSelect
                            treeData={diffData}
                            showCheckedStrategy={TreeSelect.SHOW_CHILD}
                            style={{ width: '300px' }}
                            maxTagCount="responsive"
                            treeCheckable
                            treeDefaultExpandAll
                        />
                    </div>
                    <div css ={SS.playButton}style={{position:"absolute", right:"100px", bottom:"0"}}>
                        <PlayCircleOutlined />
                        <span>Start</span>
                    </div>
                </div>
            </div>
        </div>
		</>
	);
};

