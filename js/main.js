// //
// const aE1 = document.createElement("a");
// document.body.appendChild(aEl);

// //텍스트 노드 추가하기기
// const txtEl = document.createTextNode("길벗"); 
// document.querySelector("a").appendChild(txtEl);

// // href 속성 노드 추가하기
// const hrefAttr = document.createAttribute("href");
// hrefAttr.value = "https://www.gilbut.co.kr";
// document.querySelector("a").setAttributeNode(hrefAttr);

function removeP() {
    const pEl = document.querySelector("p");
    pEl.parentNode.removeChild(pEl);

}

function toggleP() {
    const pEl = document.querySelector("p");
    if (pEl.style.display === "none") {
        pEl.style.display = "block";
    }
    else {
        pEl.style.display = "none";
    }
}

function removeAllA() {
    const childNodes = document.body.childNodes;
    childNodes.forEach((node) => {
        if (node.nodeName === "A")
            node.parentNode.removeChild(node);
    })
}

function focusEvent() {
    console.log("focus on");
}
function blurEvent() {
    console.log("focus out");
}

const inputAge = document.querySelector("#age");
inputAge.addEventListener("focus", ()=>{
    alert("AGE focus on")
})
inputAge.addEventListener("blur", ()=>{
    console.log("AGE focus out")
})

inputAge.addEventListener("keypress",(e)=>{
    console.log(e.keyCode)
})
// inputAge.onfocus = () => {
//     console.log("AGE focus on");
// }
// inputAge.onblur = () => {
//     console.log("AGE focus out");
// }

const btnEl = document.querySelector("button");
  btnEl.addEventListener("click", function(){ // 이벤트 객체
    // console.log(`clientX:${e.clientX}`);
    // console.log(`clientY:${e.clientY}`);
    // console.log(`pageX:${e.pageX}`);
    // console.log(`pageY:${e.pageY}`);
    // console.log(`screenX:${e.screenX}`);
    // console.log(`screenY:${e.screenY}`);
    if(this.style.backgroundColor === "red")
        this.style.backgroundColor = "white";
    else
        this.style.backgroundColor = "red";
})

const pEl = document.querySelectorAll("p");
personalbar.forEach((el)=>{
    pEl.addEventListener("click", (e)=>{
    if(e.target.style.backgroundColor === "red")
        e.target.style.backgroundColor = "white";
    else
        e.target.style.backgroundColor = "red";
  });
})