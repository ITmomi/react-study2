import React, {useRef} from 'react';
import {Button} from 'antd';
import { UserOutlined } from '@ant-design/icons';

export const InputSample = () => {
	const scrollRef = useRef();
	const scrollTop = () => {
		const { scrollHeight, clientHeight } = scrollRef.current;
		scrollRef.current.scrollTop = clientHeight - scrollHeight;
	}
	return (
		<div ref={scrollRef}>
			<Button onClick={scrollTop}>test</Button>
		</div>
	)
}