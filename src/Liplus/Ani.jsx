import React from "react";
import * as SS from "./styleSheet";
import { Button } from 'antd';

export const AniModal = (props) => {
	const { open, close } = props;
	return (
		<>
			<div css={SS.LoginModalStyle} className={open ? 'openModal modal' : 'modal'}>
				{open ? (
					<section>
						<main css={SS.mainBodyStyle}>
							<div css={SS.aniBox} className="zipper">
								<span id="zipper">
									<span className="slider"/>
									<span className="pull-tab"/>
									<span className="hook"/>
								</span>
								<div className="side left"/>
								<div className="side right"/>
								<div className="content">
									<h2>123</h2>
								</div>
								<Button type="primary" block onClick={close}>
									Close
								</Button>
							</div>
						</main>
					</section>
				): null}
			</div>
		</>
	);
};