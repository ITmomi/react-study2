import React, { useState } from 'react';
import * as SS from "./Style/collapsestyle";
import {
	SettingOutlined,
} from '@ant-design/icons';

function Car (props) {
	return	<h1>{props.brand.model}</h1>
}

export const Collapse = () => {
	const [visible, setVisible] = useState(true);
	const carInfo = { name: "Ford", modal: "Mustang"}
	return (
	<>
		<div css={SS.CollapseStyle}>
			<div
				css={SS.RibbonStyle}
				role="button"
				tabIndex="-1"
				onClick={() => setVisible(!visible)}
			>
				Test
			</div>
			{visible === true ? (
				<div css={SS.CardStyle}>
					<div className="svg-box">
						<SettingOutlined />
					</div>
					<div className="contents-box">
						<div className="contents">
							<Car brand={ carInfo } />
						</div>
					</div>
				</div>
			):(
				<div className="off-card">
				</div>
			)}
		</div>
	</>
	);
};