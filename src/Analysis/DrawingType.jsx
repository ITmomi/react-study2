import * as SS from "./styleSheet";
import React from "react";
import {
	CloudDownloadOutlined,
	TableOutlined,
	DotChartOutlined,
	BarChartOutlined,
	AlignLeftOutlined, UploadOutlined,
} from "@ant-design/icons";
import {Button, Collapse, Switch, Input, Select, Radio, Upload, InputNumber} from 'antd';
import {etcGridBox, gridBox, mapSettingBox, offsetbox} from "./styleSheet";


export const DrawingType = () => {
	return (
		<>
			<div css={SS.mapBox}>
				<div css={SS.mapSelectBox}>
					<div>
						<TableOutlined />
						<span> Mab </span>
					</div>
					<div>
						<DotChartOutlined />
						<span> Variation </span>
					</div>
					<div>
						<BarChartOutlined />
						<span> Reproducibility </span>
					</div>
					<div>
						<AlignLeftOutlined />
						<span> Anova </span>
					</div>
					<div css ={SS.downloadButton}style={{position:"absolute", right:"100px"}}>
						<CloudDownloadOutlined />
						<span>Download</span>
					</div>
				</div>
				<div css={SS.accordionBox}>
					<div style={{display:"flex", justifyContent:"space-between",padding:"1rem"}}>
						<span>Map Setting</span>
						<Button css = {SS.antButton}>Close</Button>
					</div>
					<Collapse accordion>
						<Collapse.Panel header="offset X/Y" key="1">
							<div css={SS.mapSettingBox}>
								<div css={SS.gridBox}>
									<div style={{display:"flex", justifyContent:"space-evenly"}}>
										<Switch checkedChildren="Auto" unCheckedChildren="Manual" defaultChecked />
										<Button css = {SS.antButton}>Reset</Button>
										</div>
									<div style={{display:"flex", justifyContent:"space-evenly", fontSize:"20px"}}>
										<span>Offset X</span>
										<span>Offset Y</span>
									</div>
								</div>

								<div css={SS.gridBox}>
									<span css={SS.label} className="offsetSpan">Shot1</span>
									<div style={{display:"flex", justifyContent:"space-evenly"}}>
										<Input placeholder="offsetX" />
										<Input placeholder="offsetY" />
									</div>
									<span css={SS.label} className="offsetSpan">Shot2</span>
									<div style={{display:"flex", justifyContent:"space-evenly"}}>
										<Input placeholder="offsetX" />
										<Input placeholder="offsetY" />
									</div>
									<span css={SS.label} className="offsetSpan">Shot3</span>
									<div style={{display:"flex", justifyContent:"space-evenly"}}>
										<Input placeholder="offsetX" />
										<Input placeholder="offsetY" />
									</div>
									<span css={SS.label} className="offsetSpan">Shot4</span>
									<div style={{display:"flex", justifyContent:"space-evenly"}}>
										<Input placeholder="offsetX" />
										<Input placeholder="offsetY" />
									</div>
									<span css={SS.label} className="offsetSpan">Shot5</span>
									<div style={{display:"flex", justifyContent:"space-evenly"}}>
										<Input placeholder="offsetX" />
										<Input placeholder="offsetY" />
									</div>
									<span css={SS.label} className="offsetSpan">Shot6</span>
									<div style={{display:"flex", justifyContent:"space-evenly"}}>
										<Input placeholder="offsetX" />
										<Input placeholder="offsetY" />
									</div>
								</div>

							</div>
						</Collapse.Panel>
						<Collapse.Panel header="CP/VS" key="2">
							<div css={SS.mapSettingBox}>
								<div style={{display:"flex", justifyContent:"space-evenly"}}>
									<span css={SS.label}>Preset</span>
									<Select
										value={'1'}
										style={{ width: 300 }}
										// onChange={handleChange}
									>
										<Select.Option value="1">Default</Select.Option>
										<Select.Option value="2">Test</Select.Option>
									</Select>
									<Input placeholder="Enter Preset name" />
									<Button css={SS.antButton} className="blue">Save Preset</Button>
								</div>
								<div>
									<span css={SS.label}>CP/VS</span>
									<Radio value={1}>From Log Data</Radio>
									<Radio value={2}>Set CP/VS for  each Shot</Radio>
									<Radio value={3}>Reflect the CP/VS of Shot1  on all Shots</Radio>
								</div>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div>
									<span css={SS.label}>Job Data File</span>
									<Upload>
										<Button icon={<UploadOutlined />}>Upload</Button>
									</Upload>

								</div>
							</div>

						</Collapse.Panel>
						<Collapse.Panel header="ETC." key="3">
							<div css={SS.mapSettingBox}>
								<div css={SS.etcGridBox}>
									<div>
										<div>
											<span css={SS.label}>Display Map</span>
											<InputNumber min={1} max={10} defaultValue={3}  />
											<span>~</span>
											<InputNumber min={1} max={10} defaultValue={3}  />
										</div>
										<div>
											<span css={SS.label}>Number of Columns to Display</span>
											<InputNumber min={1} max={10} defaultValue={3}  />
										</div>
										<div>
											<span css={SS.label}>Show Extra Info</span>
											<Switch defaultChecked />
										</div>
									</div>
									<div>
										<div>
											<span css={SS.label}>Div</span>
											<div>
												<span>Upper Row</span>
												<Input placeholder="1.0" />
											</div>
											<div>
												<span>Lower Row</span>
												<Input placeholder="1.0" />
											</div>
										</div>
										<div>
											<span css={SS.label}>Plate Size</span>
											<div>
												<span>Size_X</span>
												<Input placeholder="2500" />
											</div>
											<div>
												<span>Size_Y</span>
												<Input placeholder="2500" />
											</div>
										</div>
										<Button css={SS.antButton} className="blue">Save</Button>
									</div>
								</div>
							</div>
						</Collapse.Panel>
					</Collapse>
				</div>
			</div>
		</>
	);

};