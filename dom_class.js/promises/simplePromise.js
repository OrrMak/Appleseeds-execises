const triggerPromiseButton=document.getElementById('triggerPromise');
const checkbox=document.getElementById('triggerRejection');
const message=document.getElementById('message');

// checked is a boolean property available on checkbox and radio input elements.
// It returns true if the checkbox or radio button is checked, and false if it is not.

let isChecked=false;
checkbox.addEventListener('change',()=>{
    isChecked=checkbox.checked; // true case checked
});

const triggerPromise= ()=>{
    const pro=new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(isChecked===true){
                    reject();
                }
                else{
                    resolve();
                }
            },
                1000);
            })
pro.catch(()=>{
    message.classList.add('rejected');
    message.textContent='The Promise has been rejected';
});
pro.then(()=>{
    message.classList.add('resolved');
    message.textContent='The Promise has been resolved';
});
};


triggerPromiseButton.addEventListener('click',triggerPromise);
