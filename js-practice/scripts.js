let form = document.querySelector('.form');

let firstName = document.querySelector('.name');
let phone = document.querySelector('.phone');
let email = document.querySelector('.email');

let nameDisplayError = document.querySelector('.errorName');
let phoneDisplayError = document.querySelector('.errorPhone');
let emailDisplayError = document.querySelector('.errorEmail');

const submitBtnActivator = () => {
    if (firstName.classList.contains('correct') &&
        phone.classList.contains('correct') &&
        email.classList.contains('correct')) {
            document.querySelector('.submit-btn').disabled = false;
    }
}

const showError = (field, msg, display) => {
    field.style.borderColor = "red";
    display.innerHTML = msg;
    if (field.classList.contains('correct')) {
        field.classList.remove('correct');
    }
    document.querySelector('.submit-btn').disabled = true;
}

const hideError = (field, display) => {
    if (display.length !== 0) {
        field.style.borderColor = "";
        display.innerHTML = "";
        field.classList.add('correct');
    }
}

firstName.onblur = () => {
    if (firstName.value.length < 3) {
        showError(firstName, 'Enter at least 3 characters', nameDisplayError);
    } else if (firstName.value.match(/\d/)) {
        showError(firstName, 'Only letters allowed', nameDisplayError);
    }
    submitBtnActivator();
};

phone.onblur = () => {
    if (!phone.value.match(/^\+380\d{9}$/) && !phone.value.match(/^0\d{9}$/)) {
        showError(phone, 'Enter correct phone starting +380 or 0', phoneDisplayError);
    }
    submitBtnActivator();
};

email.onblur = () => {
    if (!email.value.match(/[-.\w]+@([\w-]+\.)+[\w-]+/g)) {
        showError(email, 'Enter valid email', emailDisplayError);
    }
    submitBtnActivator();
};

firstName.onfocus = () => {
    hideError(firstName, nameDisplayError);
};

phone.onfocus = () => {
    hideError(phone, phoneDisplayError);
};

email.onfocus = () => {
    hideError(email, emailDisplayError);
};

form.onsubmit = () => {
    let userInfo = {id: Math.round(Math.random() * 100),
                    name: firstName.value,
                    phone: phone.value,
                    email: email.value
                };

    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    });

    alert('Success!');

    return false;
};