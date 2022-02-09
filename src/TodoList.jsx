import React, { useState } from 'react';

const ToDoList = () => {
    const [text, setText] = useState(''); // text에 텍스트 저장, setText는 변경할 내용 저장
    const [list, setList] = useState([]);
    const [select, setSelect] = useState('');

    const addList = () => {
        if(list.some((item) => item === text)) {
            alert('error');
        } else {
            setList([...list, text]);
            setText('');
        }
    };

    const del = (v) => {
        setList(list.filter((item) => item !== v));
    }

    return (
      <div className="main">
          <div className="input-area">
                <input type="text" value={text} onChange={(e) =>  setText(e.target.value)} />
                <button onClick={addList}>Add</button>
                <select value={select} onChange={(e) => setSelect(e.target.value)}>
                    {list.map((v, i) => {
                        return (
                            <option value={v} key={i}>
                                {v}
                            </option>
                        );
                    })}
                </select>
          </div>
          <div className="list">
              {list.map((v, i) => {
                  return (
                      <div key={i} className="item">
                          {v}
                          <button onClick={() => del(v)}>delete</button>
                      </div>
                  );
              })}
          </div>
      </div>
    );
};

export default ToDoList;