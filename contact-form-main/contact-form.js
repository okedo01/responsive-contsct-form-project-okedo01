const contactForm = document.querySelector('form');

const validateFirstName = () => {
    const firstName = document.getElementById('first-name');
    const errorField = document.getElementById('errorFirstName');

    firstName.addEventListener('input', () => {
        errorField.textContent = "";
        firstName.style.border = ""; 
    });

    if (firstName.value.trim() === "") {
        errorField.textContent = "This field is required";
        firstName.style.border = "1px solid hsl(0, 66%, 56%)"; 
        return false;
    }
    return true;
};

const validateLastName = () => {
    const lastName = document.getElementById('last-name');
    const errorField = document.getElementById('errorLastName');

    lastName.addEventListener('input', () => {
        errorField.textContent = "";
        lastName.style.border = ""; 
    });

    if (lastName.value.trim() === "") {
        errorField.textContent = "This field is required";
        lastName.style.border = "1px solid hsl(0, 66%, 56%)"; 
        return false;
    }
    return true;
};

const validateEmail = () => {
    const email = document.getElementById('email');
    const errorField = document.getElementById('errorEmail');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    email.addEventListener('input', () => {
        errorField.textContent = "";
        email.style.border = ""; 
    });

    if (email.value.trim() === "") {
        errorField.textContent = "Please enter a valid email address";
        email.style.border = "1px solid hsl(0, 66%, 56%)"; 
        return false;
    } else if (!emailPattern.test(email.value.trim())) {
        errorField.textContent = "Invalid email address. Please check the format.";
        email.style.border = "1px solid hsl(0, 66%, 56%)"; 
        return false;
    }
    return true;
};

const validateQueryType = () => {
    const queryTypes = document.querySelectorAll('input[name="query-type"]');
    const errorField = document.getElementById('errorQueryType');
    let isChecked = false;

    queryTypes.forEach(queryType => {
        queryType.addEventListener('change', () => {
            errorField.textContent = "";
        });

        if (queryType.checked) isChecked = true;
    });

    if (!isChecked) {
        errorField.textContent = "Please select a query type";
        return false;
    }
    return true;
};

const validateMessage = () => {
    const message = document.getElementById('message');
    const errorField = document.getElementById('errorMessageField');

    message.addEventListener('input', () => {
        errorField.textContent = "";
        message.style.border = ""; 
    });

    if (message.value.trim() === "") {
        errorField.textContent = "This field is required";
        message.style.border = "1px solid hsl(0, 66%, 56%)"; 
        return false;
    }
    return true;
};

const validateCheckBox = () => {
    const checkBox = document.querySelector('input[type="checkbox"]');
    const errorField = document.getElementById('errorCheckBox');

    checkBox.addEventListener('change', () => {
        errorField.textContent = "";
    });

    if (!checkBox.checked) {
        errorField.textContent = "To submit this form, please consent to being contacted";
        return false;
    }
    return true;
};

const clearErrors = () => {
    document.querySelectorAll('.error').forEach(error => {
        error.textContent = "";
    });
    document.querySelectorAll('input, textarea').forEach(input => {
        input.style.border = ""; 
    });
};

contactForm.addEventListener('submit', event => {
    event.preventDefault();
    clearErrors();

    let isValid = true;
    const validators = [
        validateFirstName,
        validateLastName,
        validateEmail,
        validateQueryType,
        validateMessage,
        validateCheckBox
    ];

    validators.forEach(validator => {
        if (!validator()) isValid = false;
    });

    if (isValid) {
        alert(`Message Sent!
        Thanks for completing the form. We'll be in touch soon!`);
        contactForm.reset(); 
        clearErrors(); 
    }
});
