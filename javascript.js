let form = document.getElementsByTagName('form')
let check = document.getElementById('confirmPass');
let pass = document.getElementById('pass'); 
let message = document.getElementById('error')

check.addEventListener('keyup', () => { 
    if(check.value !== pass.value) { 
        pass.style.borderColor='red'
        check.style.borderColor='red' 
        message.innerText='* Passwords do not match';
        message.style.color='red'
    } else { 
        pass.style.borderColor='green'
        check.style.borderColor='green'
        message.innerText="";
    }
});



function create() { 
    let button = document.getElementById('create')
    button.addEventListener('click', () => { 
        
    })
}


