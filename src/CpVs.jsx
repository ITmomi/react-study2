import React, { useState } from 'react';

const CpVs = () => { // React는 맨 앞글자는 대문자로 시작해야 된다.
    const [text, setText] = useState(''); //input text를 설정
    const [list, setList] = useState([]); // text를 배열에 저장
    const [select, setSelect] = useState('');

    const addList  = () => {
        if (list.some((item) => item === text)) { // 입력한 text가 배열에 있는 값과 같은지 확인
            alert("같은 이름이 존재 합니다!");
//             setText(addList === 'black' ? 'sliver' : 'black');
        } else if (text == "") { // input을 입력하지 않는 경우
            alert("값을 입력하여 주십시오!");
        }
        else {
           setList([...list, text]); // text를 배열에 추가
           setText(''); // 입력이 완료되면 초기화
        }
    };

console.log(text);
console.log(list);

    return (
        <div className = " main">
            <div className = "cpvs_first_line">
                <div>Preset</div>
                <select value = {select} onChange = {(e) => setSelect(e.target.value)}>
                    {list.map((v, i) => {
                        return (
                            <option value = {v} key = {i}>
                                {v}
                            </option>
                        )
                    })};
                </select>
                <input type="text"
                style = {{color: "silver"}}
                placeholder = "Enter Preset name" //입력받는 위치 기본 text 표시
                value = {text}
                onChange = {(e) => setText(e.target.value)}
                />
                <button style = {{background: "#1890FF", color: "white"}}
                onClick = {addList}>Save Preset</button>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
           <div>
                <div></div>
                <div></div>
           </div>
        </div>
    )
};

export default CpVs;