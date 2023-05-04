import React from "react";
import * as SS from "./styleSheet";
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import { Button, Radio } from 'antd';
import {CkrFloatingButton} from "./Button/CkrFloatingButton";
import {Collapse} from "./collapse";
import {Hello} from "./Hello";
import {Wrapper} from "./Wrapper";
import {Counter} from "./Counter"
import {InputSample} from "./InputSample";

export const AnalysisItem = () => {
	const ItemPos = useSpring({ x: 0, y: 0});
	const BindItemPos = useDrag((params) => {
		ItemPos.x.set(params.offset[0]);
		ItemPos.y.set(params.offset[1]);
	});
	const ItemPos1 = useSpring({ x: 0, y: 0});
	const BindItemPos1 = useDrag((params) => {
		ItemPos1.x.set(params.offset[0]);
		ItemPos1.y.set(params.offset[1]);
	});
	const ItemPos2 = useSpring({ x: 0, y: 0});
	const BindItemPos2 = useDrag((params) => {
		ItemPos2.x.set(params.offset[0]);
		ItemPos2.y.set(params.offset[1]);
	});
	const ItemPos3 = useSpring({ x: 0, y: 0});
	const BindItemPos3 = useDrag((params) => {
		ItemPos3.x.set(params.offset[0]);
		ItemPos3.y.set(params.offset[1]);
	});

	return (
		<>
			<div css={SS.AnalysisItemStyle}>
				<div className="analysis-add">
					<span>Analysis</span>
					<CkrFloatingButton/>
				</div>
				<div className="items">
					<animated.div {...BindItemPos()} style={{
						x: ItemPos.x,
						y: ItemPos.y,
					}} className="item blue">
						<div>
							<Button type="primary" danger>
								Quick Mode
							</Button>
							<Wrapper>
								<Hello
									name="react"
									color="red"
									isSpecial
								/>
								<Hello
									color="pink"
								/>
							</Wrapper>
						</div>
					</animated.div>
					<animated.div {...BindItemPos1()} style={{
						x: ItemPos1.x,
						y: ItemPos1.y,
					}} className="item blue">
						<div>
							<Button type="primary" danger>
								OVERLAY
							</Button>
							<Counter/>
						</div>
					</animated.div>
					<animated.div {...BindItemPos2()} style={{
						x: ItemPos2.x,
						y: ItemPos2.y,
					}} className="item red">
						<div>
							<Button type="primary" danger>
								TACT
							</Button>
							<InputSample/>
						</div>
					</animated.div>
					<animated.div {...BindItemPos3()} style={{
						x: ItemPos3.x,
						y: ItemPos3.y,
					}} className="item black">
						<div>
							<Button type="primary" danger>
								FOCUS
							</Button>
							<div className="item-sub">
								<Radio>Analysis</Radio>
								<Radio>Correction of Exposure</Radio>
							</div>
						</div>
					</animated.div>
				</div>
				<div>
					<Collapse/>
				</div>
			</div>
		</>
	);
};