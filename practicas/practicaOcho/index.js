const button = document.getElementById('button');
const title = document.getElementById('title');
const url = document.getElementById('url');
const text = document.getElementById('text');
const inputTitle = document.getElementById('input-title');
const inputText = document.getElementById('input-text');
const inputUrl = document.getElementById('input-url');



const getText =()=>{//event === enter para reflejar si es igual qu el enter 
    let inputValue = inputTitle.value;
    title.innerText = inputValue;

    let inputValueUrl = inputUrl.value;
    url.src = inputValueUrl;

    let inputValueText = inputText.value;
    text.innerText = inputValueText;


} 

button.addEventListener('click',getText);