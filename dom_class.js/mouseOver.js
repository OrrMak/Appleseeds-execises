const p = document.getElementsByClassName('highlightable');
console.log('this is p: ',p);

Array.from(p).forEach(element => {
    element.addEventListener('mouseover',()=>{
        element.classList.add('highlighted');
    })

    element.addEventListener('mouseout',()=>{
        element.classList.remove('highlighted');
    })
});