import React, {useState} from 'react';

export const Counter = () => {
	const [isNumber, setIsNumber] = useState(0);
	const onIncrease = () => {
		console.log('+1')
		setIsNumber (prevNumber => prevNumber + 1);
	}
	const onDecrease = () => {
		console.log('-1')
		setIsNumber (prevNumber => prevNumber - 1);
	}
	return (
		<div>
			<h1>{isNumber}</h1>
			<button onClick={onIncrease}>+1</button>
			<button onClick={onDecrease}>-1</button>
		</div>
	)
}