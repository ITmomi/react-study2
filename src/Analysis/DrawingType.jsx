import * as SS from "./styleSheet";
import React from "react";
import {CloudDownloadOutlined,
		TableOutlined,
		DotChartOutlined,
		BarChartOutlined,
		AlignLeftOutlined,  } from "@ant-design/icons";
import {Button, Collapse, Table} from 'antd';
import {dataSource, columns} from "./data"

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
							<Table dataSource={dataSource} columns={columns} />
						</Collapse.Panel>
						<Collapse.Panel header="CP/VS" key="2">

						</Collapse.Panel>
						<Collapse.Panel header="ETC." key="3">

						</Collapse.Panel>
					</Collapse>
				</div>
			</div>
		</>
	);

};