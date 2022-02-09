import React, {useState} from 'react';


export default function CodingApple () {

   let posts = "수원 갈비 맛집"
   let style = { color : "blue", fontsize : "30px" }
    function sum () {
        return 100
    };

    let [글제목, 글제목변경] = useState ("남자 코트 추천","여자 코트 추천");

    return (
    <>
        <div className = "black-nav">
        <div style = {style}>개발 Blog</div>
        </div>
        <h4> {posts} </h4>
        <h4> {sum()} </h4>
        <div className = "list">
            <h3> {글제목[0]} </h3>
            <p>2월 17일 발행</p>
            <hr/>
        </div>
                <div className = "list">
                    <h3> {글제목[0]} </h3>
                    <p>2월 17일 발행</p>
                    <hr/>
                </div>

    </>
    );

}