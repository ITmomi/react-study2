import React, {useReducer, useState} from "react";
import Button from "antd/es/button";
import Input from "antd/es/input";

function reducer(state, action) {
    switch (action.type) {
        case "Plus" :
            return { value : state.value + 1};
        case "minus" :
            return { value : state.value - 1};
        default:
            return state;
    }
}

function reducerName(nameState, nameAction) {
    return {
        ...nameState,
        [nameAction.name]: nameAction.value
    }
}

export const SelectTarget = () => {
    const [state, dispatch] = useReducer(reducer, {value: 0});
    const [value, SetValue] = useState(0);
    const [nameState, nameDispatch] = useReducer(reducerName,{
        name: "",
        nickname: "",
    })
    const {name, nickname} = nameState
    const onChange = (e) => {
        nameDispatch(e.target)
    }
    console.log("Gray", nameState);
    return (
		<>
        <div className={"gridTarget"}>
            <div>
                <span> Reducer 현재 값은 {state.value} 입니다.</span>
                <Button type="primary" danger
                        onClick={() => dispatch({
                        type: "Plus"
                        })}
                >
                    + 1
                </Button>
                <Button type="primary" danger
                        onClick={() => dispatch({
                        type: "minus"
                        })}
                >
                    - 1
                </Button>
            </div>
            <div>
                <span> UseState 현재 값은 {value} 입니다.</span>
                <Button type="primary" danger
                        onClick={() => {
                            SetValue(value + 1);
                        }}
                >
                    + 1
                </Button>
                <Button type="primary" danger
                        onClick={() => {
                            SetValue(value - 1);
                        }}
            >
                + 1
            </Button>
            </div>
            <div>
                <Input placeholder="Name을 입력 하세요."
                       name="name"
                       value={name}
                       onChange={onChange}/>
                <Input placeholder="nickName을 입력 하세요."
                       name="nickname"
                       value={nickname}
                       onChange={onChange}/>
               <div>
                 <b>이름:</b>{name}
               </div>
               <div>
                 <b>닉네임:</b>{nickname}
               </div>
            </div>
        </div>
		</>
	);
};

