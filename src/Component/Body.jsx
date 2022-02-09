import Footer from "./Footer";

export default function Body() {

    function showName() {
        console.log("Mike");
    }
     function showAge(age) {
            console.log(age);
        }
     function showText(e) {
        console.log(e.target.value);
     }
     function showText1(text) {
        console.log(text);
     }

   return (
    <>
    <h1> Hello </h1>
    <button onClick={showName}>Show name</button>
    <button onClick={()=>{
        showAge(30);
    }}>Show age</button>
    <input type = "text" onChange = {showText} />
    <input type = "text" onChange = { e => {
        console.log(e.target.value);
    }}
    />
    <input type = "text" onChange = {v => {
        const text = v.target.value;
        showText1(text);
    }}
    />
    <Footer />
    </>
    );
}