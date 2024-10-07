const texts=document.querySelectorAll('.text');
document.addEventListener('scroll',()=>{
    texts.forEach((text,index)=>{
         const currentText = text. getBoundingClientRect();
            
            const preText= index > 0? texts[index-1]:null;

            if(currentText.top<= window.innerHeight &&(!preText|| preText.getBoundingClientRect().top<0)){
                text.classList.add('active');
            }
            else{
                text.classList.remove('active');
            }
        });
});
        
        