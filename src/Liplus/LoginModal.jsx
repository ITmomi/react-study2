import React, {useState} from 'react';
import * as SS from './styleSheet';
import { Tabs, Input, Checkbox, Button } from 'antd';
import ArrowRightOutlined from "@ant-design/icons/lib/icons/ArrowRightOutlined";
import { fetchLogin } from "./server";
import { useHistory } from "react-router-dom";


export const LoginModal = (props) => {
	const { open, close } = props;
	const { TabPane } = Tabs;


	const history = useHistory();

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
			setUser(user);
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
		<div css={SS.LoginModalStyle} className={open ? 'openModal modal' : 'modal'}>
			{open ?(
				<section>
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
													onChange={onChangeAccount}  />
												<Input.Password
													placeholder= "Your Password"
													id="password"
													name="password"
													onChange={onChangeAccount} />
											</div>
											<div className="buttons">
												<Checkbox onChange={onChange}>Remember</Checkbox>
												<Button type="text">forgot Password</Button>
											</div>
										</div>
										<div>
											<Button type="primary" block onClick={onSubmitAccount}>
												<ArrowRightOutlined />
												CONTINUE
											</Button>
										</div>
										<div>
											<Button type="primary" block onClick={close}>
												Close
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
										<div>
											<Button type="primary" block onClick={close}>
												Close
											</Button>
										</div>
									</main>
								</TabPane>
							</Tabs>
						</div>
				</section>
			) : null}
		</div>
	);
};