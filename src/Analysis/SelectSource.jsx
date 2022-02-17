import * as SS from "./styleSheet";
import React from "react";
import {
    Button,
    DatePicker,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    Upload,
    Divider,
    TreeSelect,
    Space,
} from 'antd';


export const SelectSource = () => {
    return (
        <div className="gridSource">
            <div>
                <span>Select Source</span>
                <div css={SS.secondBoxSource}>
                    <div>
                        <span css={SS.label}>From</span>
                        <Select
                            defaultValue={{ value: '1' }}
                            style={{ width: 300 }}
                            // onChange={handleChange}
                        >
                            <Option value="1">Local</Option>
                            <Option value="2">Remote</Option>
                        </Select>
                    </div>
                    <div>
                        <span css={SS.label} >DB From</span>
                        <Select
                            defaultValue={{ value: '1' }}
                            style={{ width: 300 }}
                            // onChange={handleChange}
                        >
                            <Option value="1">cras_db@10.1.xxx.xxx</Option>
                            <Option value="2">cras_db@10.2.xxx.xxx</Option>
                            <Option value="3">cras_db@10.3.xxx.xxx</Option>
                        </Select>
                    </div>
                </div>
            </div>
        </div>
    );
};
