const clickButton=document.getElementById('clickButton');
// console.log('this is clickButton: ',clickButton);

const resetButton=document.createElement('button');
resetButton.innerText = 'Reset';
const container=document.querySelector('.container');
// console.log('this is container: ',container);
container.appendChild(resetButton);

const p=document.getElementById('counter');

clickButton.addEventListener('click',()=>{
    // const p=document.getElementById('counter');
    let currentCount=parseInt(p.innerText);
    currentCount+=1;
    p.innerText=currentCount;
})

resetButton.addEventListener('click',()=>{
    p.innerText=0;
})

