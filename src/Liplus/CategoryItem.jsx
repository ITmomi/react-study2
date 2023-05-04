import React from 'react';
import * as SS from "./Style/CategoryItemStyle";
import { Tabs, Button, Tooltip } from 'antd';
import {
	AppstoreOutlined,
	EditOutlined,
} from '@ant-design/icons';

export const CategoryItem = () => {
	return (
		<>
			<div css={SS.ItemsHeader}>
				<div className="item-tabs">
					<Tabs defaultActiveKey="1">
						<Tabs.TabPane tab="Catagory" key="1">
							{items}
						</Tabs.TabPane>
						<Tabs.TabPane tab="Test" key="2">
							None
						</Tabs.TabPane>
						<Tabs.TabPane tab="Test3" key="3">
							None
						</Tabs.TabPane>
					</Tabs>
					<div className="item-icon">
						<Button icon={<AppstoreOutlined />}/>
					</div>
				</div>
			</div>
		</>
	);
};

const items = (
		<div css={SS.ButtonStyle}>
			<Button>ITEM Name</Button>
			<Button>
				<EditOutlined />
			</Button>
			<Button>
				<EditOutlined />
			</Button>
			<Button>
				<EditOutlined />
			</Button>
			<Button>
				<EditOutlined />
			</Button>
			<Button>
				<EditOutlined />
			</Button>
		</div>
);