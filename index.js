/**
 * Verify that all the input fields are filled in.
 */

const get = id => document.getElementById(id)
function changeBorder(el, color) {
    el.style.borderColor = color;
}

const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const lastname = document.getElementById('lastname');

const checkVal = i => get(i).value.length === 0;

document.querySelector('.login').addEventListener('click', () => {
    var bool = false;
    if (name.value.trim() === '') {
        changeBorder(get('name-h'), 'red')
        get('nameico').style.transform = 'none'
        return;
    }

    if (email.value.trim() === '') {
        changeBorder(get('email-h'), 'red')
        get('emailico').style.transform = 'none'
        return;
    }


    if (password.value.trim() === '') {
        changeBorder(get('password-h'), 'red')
        get('passwordico').style.transform = 'none'

    }


    if (lastname.value.trim() === '') {
        changeBorder(get('lastname-h'), 'red')
        get('lastnameico').style.transform = 'none'
    }
})

document.querySelectorAll('.input-box').forEach(input => {
    input.addEventListener('click', () => input.querySelector('input').focus())
})

document.querySelectorAll('.input-box').forEach(input => {
    input.querySelector('input').addEventListener('focus', () => changeBorder(input, 'hsl(248, 32%, 49%)'))

    if (input.querySelector('input').value !== '') {
        changeBorder(input, 'hsl(248, 32%, 49%)')
        input.querySelector('.icon-err').style.transform = 'scale(0)'
    }
});
document.querySelectorAll('.input-box').forEach(input => {
    input.querySelector('input').addEventListener('blur', () => {
        changeBorder(input, 'hsl(246, 25%, 77%)')
        if (input.querySelector('input').value !== '') {
            changeBorder(input, 'hsl(248, 32%, 49%)')
            input.querySelector('.icon-err').style.transform = 'scale(0)'
        }
    });
})
