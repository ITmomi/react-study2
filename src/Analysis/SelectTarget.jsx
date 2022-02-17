import * as SS from "./styleSheet";
import React from "react";
import {Select, DataPicker, Space} from "antd";

// const { RangePicker } = DataPicker;

export const SelectTarget = () => {
	return (
		<>
			<div className={"gridTarget"}>
				<div>
					<span>Select Target</span>
					<div css={SS.secondBoxTarget}>
						<div>
							<span css={SS.label} >Fab</span>
							<Select
								defaultValue={{ value: '1' }}
								style={{ width: 300 }}
								// onChange={handleChange}
							>
								<Option value="1">Fab1600</Option>
								<Option value="2">Fab1700</Option>
							</Select>
						</div>
						<div>
							<span css={SS.label} >EquipMent</span>
							<Select
								defaultValue={{ value: '1' }}
								style={{ width: 300 }}
								// onChange={handleChange}
							>
								<Option value="1">Tool1600_1</Option>
								<Option value="2">Tool1600_2</Option>
								<Option value="3">Tool1600_3</Option>
							</Select>
						</div>
						<div>
							<span css={SS.label} >period</span>
							{/*<Space direction="vertical" size={12}>*/}
							{/*	<RangePicker />*/}
							{/*	<RangePicker showTime />*/}
							{/*	<RangePicker picker="week" />*/}
							{/*	<RangePicker picker="month" />*/}
							{/*	<RangePicker picker="year" />*/}
							{/*</Space>*/}
						</div>
						<div>
							<span css={SS.label} >job</span>
							<Select
								defaultValue={{ value: '1' }}
								style={{ width: 300 }}
								// onChange={handleChange}
							>
								<Option value="1">Fab1599</Option>
								<Option value="2">Fab1600</Option>
								<Option value="3">Fab1601</Option>
							</Select>
						</div>
						<div>
							<span css={SS.label} >Lot ID</span>
							<select></select>
						</div>
						<div>
							<span css={SS.label} >Mean Deviation Diff.</span>
							<select></select>
						</div>
						<div>
							<span css={SS.label} >AE Correction</span>
							<select></select>
						</div>
						<button>Start</button>
					</div>
				</div>
			</div>
		</>
	);
};