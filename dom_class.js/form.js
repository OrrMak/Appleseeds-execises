//2 
//Adding New Input Fields:

const form=document.querySelector('#dynamicForm');

function addField(){
    // Create a new input element
    const addInput=document.createElement('input');
    addInput.type='text';
    addInput.placeholder='Enter text';
    
    //append this newly created input to the form
    form.appendChild(addInput);
}
// addField();
//Submitting the Form:
function submitForm(){
    let allFilled=true;
    let alertMessage=''
    const inputs=document.querySelectorAll('#dynamicForm input');

    inputs.forEach((input)=>{
        if(!input.value){
            allFilled=false;
        }
        else{
            alertMessage += input.value +", ";
        }
    });

    alertMessage= alertMessage.trim().replace(/,$/, '');

    if (!allFilled){
        alert('all fields must be filled')
    }
    else{
        alert('Entered values: '+alertMessage);
    }
}

