import * as SS from "../Liplus/styleSheet";
import React, {useEffect, useState} from 'react';
import { Select, Upload, Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import Input from "antd/es/input";

const { Option } = Select;

export const SelectSource = () => {
    const [source, setSource] = useState ("Local");
    const [value,setValue] = useState(0);
    const [name, setName] = useState("");
    const onchange = (e) => {
        setName(e.target.value);
    }

    useEffect(()=> {
        console.log ("It is wrote before rendering with new state");
        console.log(name);
        return () => {
            console.log("It is wrote before update with prev state")
            console.log(name)
        };
    }, [name]);

    return (
        <div className="gridSource">
            <div>
                <span>Select Source</span>
                <div css={SS.secondBoxSource}>
                    <div>
                        <span css={SS.label}>From</span>
                        <Select
                            value={source}
                            style={{ width: 300 }}
                            onChange={(v) => setSource(v)}
                        >
                            <Option value="Local">Local</Option>
                            <Option value="Remote">Remote</Option>
                        </Select>
                    </div>
                    {source === 'Local' ? (
                        <div>
                            <span css={SS.label} >Log Files</span>
                            <Upload.Dragger style={{width:300}}>
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">
                                    Click or drag file to this area to upload
                                </p>
                            </Upload.Dragger>
                        </div>
                    ) : (
                        <div>
                            <span css={SS.label} >DB From</span>
                            <Select
                                defaultValue={{ value: '1' }}
                                style={{ width: 300 }}
                            >
                                <Option value="1">cras_db@10.1.xxx.xxx</Option>
                                <Option value="2">cras_db@10.2.xxx.xxx</Option>
                                <Option value="3">cras_db@10.3.xxx.xxx</Option>
                            </Select>
                        </div>
                    )}
                    {source === 'Local' ? (
                        <div style={{position:"relative",float:"right", top:"120px"}}>
                        <Button css = {SS.antButton}>Load Start</Button>
                            <div>
                        <p>버튼 누른 값은 {value} 입니다.</p>
                        <Button css = {SS.antButton}
                            onClick={()=> {
                                setValue(value + 1)
                            }}
                        > + 1 </Button>
                        <Button css = {SS.antButton}
                            onClick={()=> {
                                setValue(value - 1)
                            }}
                        > - 1 </Button>
                            </div>
                            <div>
                                <Input placeholder="이름을 입력 하세요."
                                    value={name} onChange={onchange}/>
                                    이름 : {name}
                            </div>
                        </div>
                    ) : (
                    ''
                    )}
                </div>
            </div>
        </div>
    );
};
