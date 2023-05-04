import React, { useState, useContext } from 'react';
import * as SS from './styleSheet';
import { Tabs, Input, Checkbox, Button } from 'antd';
import ArrowRightOutlined from "@ant-design/icons/lib/icons/ArrowRightOutlined";
import { fetchLogin } from "./server";
import { useHistory } from "react-router-dom";
import { AppContext } from "../App";

export const LoginForm = () => {
	const { TabPane } = Tabs;
	const history = useHistory();
	const { changeUserInfo } = useContext(AppContext);

	const [account, setAccount] = useState({
		id: "",
		password: "",
	});
	const onChangeAccount = (e) => {
		setAccount({
			...account,
			[e.target.name]: e.target.value,
		});
	};
	const onSubmitAccount = async () => {
		try {
			const user = await fetchLogin(account);
			changeUserInfo(user);
			history.replace("/main");
		} catch (error) {
			window.alert(error);
		}
	};

	function callback(key) {
		console.log(key);
	}
	function onChange(e) {
		console.log(`checked = ${e.target.checked}`);
	}
	return (
		<>
			<div css={SS.LoginFormStyle}>
					<section>
						<div className="title-box">
							<div>Welcome to Lithography plus</div>
							<div>Please sign in to continue</div>
						</div>
						<div>
							<div>
								<Tabs defaultActiveKey="1" onChange={callback}>
									<TabPane tab="Sign IN" key="1">
										<main css={SS.mainBodyStyle}>
											<div>
												<div className="inputs">
													<Input
														placeholder= "Your ID"
														id="id"
														name="id"
														onChange={onChangeAccount}/>
													<Input.Password
														placeholder= "Your Password"
														id="password"
														name="password"
														onChange={onChangeAccount}/>
												</div>
												<div className="buttons">
													<Checkbox onChange={onChange}>Remember</Checkbox>
													<Button type="text">forgot Password</Button>
												</div>
											</div>
											<div>
												<Button type="primary" block onClick={onSubmitAccount} size="large">
													<ArrowRightOutlined />
													CONTINUE
												</Button>
											</div>
										</main>
									</TabPane>
									<TabPane tab="Register" key="2">
										<main css={SS.mainBodyStyle}>
											<div>
												<div className="inputs">
													<Input placeholder="Your New ID" />
													<Input.Password placeholder="Your Password" />
													<Input.Password placeholder="Re-Type Password" />
												</div>
											</div>
											<div>
												<Button type="primary" block>
													<ArrowRightOutlined />
													CONTINUE
												</Button>
											</div>
										</main>
									</TabPane>
								</Tabs>
							</div>
						</div>
					</section>
			</div>
		</>
	);
};
