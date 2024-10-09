const container=document.getElementsByClassName('container')[0];
const button=document.getElementById('button');
const text=document.getElementById('text');
const words=["היה","היה","פעם","בארץ","רחוקה"];
const colors= ['bg-color-1', 'bg-color-2', 'bg-color-3', 'bg-color-4', 'bg-color-5'];
let count=0;

function changeColorandText(){   
    if(count<5){
        setTimeout(() => {
            container.classList.remove(...colors);
            container.classList.add(colors[count]);
            text.textContent=words[count];
            count+=1; 
            changeColorandText();
        }, 1000);
    }};
button.addEventListener('click',changeColorandText);
