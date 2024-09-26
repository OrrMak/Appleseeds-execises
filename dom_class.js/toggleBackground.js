const toggleButton=document.getElementById('toggleButton');
console.log('this is toggleButton: ',toggleButton);

function toggleBackgroundColor(){
    document.body.classList.toggle('dark');
}

toggleButton.addEventListener('click',toggleBackgroundColor);