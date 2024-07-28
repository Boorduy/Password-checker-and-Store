const pass = document.getElementById('password');
const strength = document.getElementById('strength');
const msg = document.getElementById('msg');
const submit = document.getElementById('submit');
const local = document.getElementById('localST');
const passcont = document.getElementById('pass-container');
const icon = document.querySelector('.icon');
const blind = document.querySelector('.blind');
const eye = document.querySelector('.eye');
const regex = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;
msg.style.display = 'none'
eye.style.display = 'none'
        blind.style.display = 'block'

icon.addEventListener('click', () => {
        if (pass.type === 'text') {
        pass.type = 'password'
        blind.style.display = 'block'
        eye.style.display = 'none'
        
    }
    else { (pass.type === 'password')
        pass.type = 'text'
        eye.style.display = 'block'
        blind.style.display = 'none'
        
    }
})
//Add comments to codes from now on if u remembered to refresh else return github upload
pass.addEventListener('input', () => {
    
    if (pass.value.length > 0) {
        msg.style.display = 'block';
        
        
    }
    if (pass.value.length < 2) {
        strength.innerHTML = ';(   Very Weak '
        pass.style.borderColor = 'red'
        msg.style.color = 'red'
    }
    if (pass.value.length === 0) {
        msg.style.display = 'none'
        pass.style.borderColor = 'transparent'
    }
    if (pass.value.length >= 4 && pass.value.length <= 8 ) {
        strength.innerHTML = ':/   Definitely not ur best pass '
        pass.style.borderColor = '#8B8000'
        msg.style.color = '#8B8000'
    }
    if (pass.value.length >= 8 && pass.value.length <= 12 ) {
        strength.innerHTML = ':|   medium because no special character'
        pass.style.borderColor = 'yellow'
        msg.style.color = 'yellow' 
    }
    if (pass.value.length >= 12 && regex.test(pass.value)){
        strength.innerHTML = ':)   Strong and Healthy '
        pass.style.borderColor = 'green'
        msg.style.color = 'green'
        
    }
    if (pass.value.length > 12 && !regex.test(pass.value)){
        strength.innerHTML = ':|   medium because no special character'
        pass.style.borderColor = 'yellow'
        msg.style.color = 'yellow' 
    }
})

submit.addEventListener('click', () => {
    if (pass.value === '') {
        alert('Password is Empty!')
    } else {
        let spa = document.createElement('h2');
        spa.innerHTML = pass.value
        local.appendChild(spa)
    }
    msg.style.display = 'none'
    pass.style.borderColor = 'transparent'
    pass.value = ''
    savePass()
    

    
})

function savePass() {
    localStorage.setItem('password', local.innerHTML)
}

function getItem() {
    local.innerHTML = localStorage.getItem('password')
    
}
getItem()