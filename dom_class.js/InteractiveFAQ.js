
const faqItem=document.querySelectorAll('.faq-item');
// console.log('this is faqItem: ',faqItem);
faqItem.forEach(faqItem => {

    faqItem.addEventListener('click',() =>{
        faqItem.classList.toggle('active');
        });
});

