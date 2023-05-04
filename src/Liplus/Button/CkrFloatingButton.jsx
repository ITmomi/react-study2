import React from 'react';
import * as BS from './ButtonStyle';
import Tooltip from "antd/es/tooltip";
import Button from "antd/es/button";
import {
	PlusOutlined,
	CloseOutlined,
	SolutionOutlined,
	TrademarkOutlined,
	BarChartOutlined,
} from '@ant-design/icons';
import {useState} from 'react';


export const CkrFloatingButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<>
			<div css={BS.PlusButton}>
				<Tooltip title="ADD">
					<Button type="primary" shape="circle" size="large"
						onClick={() => {
							setIsVisible(!isVisible);
						}}
					icon= {isVisible ? <CloseOutlined /> : <PlusOutlined /> }
					>
					</Button>
				</Tooltip>
					<div css={BS.SubButton} className={isVisible && "move"}>
						<Tooltip title="New Log Add" >
						<Button className="sub-button1" type="primary" shape="circle" icon={<SolutionOutlined />} />
						</Tooltip>
						<Tooltip title="New Rule Add" >
						<Button className="sub-button2" type="primary" shape="circle" icon={<TrademarkOutlined />} />
						</Tooltip>
						<Tooltip title="New Multi Analysis Add" >
						<Button className="sub-button3" type="primary" shape="circle" icon={<BarChartOutlined />} />
						</Tooltip>
					</div>
			</div>
		</>
	);
};