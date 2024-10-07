const keyDisplay=document.getElementById('keyDisplay');
document.addEventListener('keydown',function(a){
    keyDisplay.textContent=`${a.key}`;
});