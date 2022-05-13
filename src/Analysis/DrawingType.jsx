import * as SS from "../Liplus/styleSheet";
import React, {useMemo, useState} from "react";
import Input from "antd/es/input";
import Button from "antd/es/button";
import { Carousel , Tabs} from 'antd';
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import {Modal} from "./Modal";

const  getAverage = (numbers) => {
	console.log("평균값 계산중..");
	if(numbers.length === 0)
		return 0;

	const sum = numbers.reduce((a, b) => a + b)
	return sum / numbers.length;
};
function onChanged(a, b, c) {
	console.log(a, b, c);
}

export const DrawingType = () => {
	const [list, setList] = useState([]);
	const [number, setNumber] = useState("");
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);

	const { TabPane } = Tabs;

	const openModal = () => {
		setModalOpen(true);
	};
	const closeModal = () => {
		setModalOpen(false);
	};
	function callback(key) {
		console.log(key);
	}
	const showModal = () => {
		setIsModalVisible(true);
	};
	const handleOk = () => {
		setIsModalVisible(false);
	};
	const handleCancel = () => {
		setIsModalVisible(false);
	};

	const onChange = (e) => {
		setNumber(e.target.value);
	};
	const onInsert = () => {
		const nextList = list.concat(parseInt(number));
		console.log("리스트",list)
		console.log("list",nextList)
		setList(nextList);
		setNumber("");
	};

	const avg = useMemo(() => getAverage(list), [list])
	console.log(avg)
	return (
		<>
			<div css={SS.mapBox}>
				<div>
					<Input placeholder="number를 입력하세요"
									value={number}
									onChange={onChange}/>
					<Button type="primary" danger
					        onClick={onInsert}
					>
					등록
				</Button>
				<ul>
					{list.map ((value,index) => (
						<li key={index}>
							{value}
						</li>
					))}
				</ul>
				</div>
				<div>
					<b>평균값:</b> {avg}
				</div>

				<div>
					<React.Fragment>
						<button onClick={openModal}>모달팝업</button>
						<Modal open={modalOpen} close={closeModal} header={"Modal heading"}>
							팝업창
						</Modal>
					</React.Fragment>
				</div>

				<div>
					<Button type="primary" onClick={showModal}>
						<UserOutlined />
						LOGIN
					</Button>
					<Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
						<div>
							<Tabs defaultActiveKey="1" onChange={callback} css={SS.tabStyle}>
								<TabPane tab="Sign In" key="1">
									<div>
										<Input placeholder="Your ID" />
										<Input.Password placeholder="Your password" />
									</div>
								</TabPane>
								<TabPane tab="Register" key="2">
									<div>
										<Input placeholder="Your New ID" />
										<Input.Password placeholder="Your password" />
										<Input.Password placeholder="Yout password" />
									</div>
								</TabPane>
							</Tabs>
						</div>
					</Modal>
				</div>
				<Carousel
					afterChange={onChanged}
					slidesToShow={3}
					centerMode={true}
					draggable={true}
					swipeToSlide={true}
					touchThreshold={50}
					focusOnSelect={true}
					>
					<div>
						<div style={SS.contentStyle}>
							<div css = {SS.itemCardStyle}>
								<span>1</span>
								<Button>Start</Button>
							</div>
						</div>
					</div>
					<div>
						<h3 style={SS.contentStyle}>
							<div css = {SS.itemCardStyle}>
								<span>2</span>
								<Button>Start</Button>
							</div>
						</h3>
					</div>
					<div>
						<h3 style={SS.contentStyle}>
							<div css = {SS.itemCardStyle}>
								<span>3</span>
								<Button>Start</Button>
							</div>
						</h3>
					</div>
					<div>
						<h3 style={SS.contentStyle}>
							<div css = {SS.itemCardStyle}>
								<span>4</span>
								<Button>Start</Button>
							</div>
						</h3>
					</div>
				</Carousel>
			</div>
		</>
	);

};