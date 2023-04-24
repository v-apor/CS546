const loginErrorDiv = document.getElementById("loginError");
const loginForm = document.getElementById("login-form");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        loginErrorDiv.innerHTML = "";

        const emailInput = document.getElementById("emailAddressInput");
        const passwordInput = document.getElementById("passwordInput");

        if (!emailInput.value.trim()) {
            loginErrorDiv.innerHTML = "Please enter your email";
            return;
        }

        if (!passwordInput.value.trim()) {
            loginErrorDiv.innerHTML = "Please enter your password";
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            loginErrorDiv.innerHTML = "Please enter a valid email address";
            return;
        }

        const passwordRegex =
            /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$/;
        if (!passwordRegex.test(passwordInput.value.trim())) {
            loginErrorDiv.innerHTML =
                "Please enter a valid password. It should be at least 8 characters long, contain at least one uppercase character, one number, and one special character.";
            return;
        }

        loginForm.submit();
    });
}

const registerErrorDiv = document.getElementById("registerError");
const registerForm = document.getElementById("registration-form");

if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // alert("Hello");
        registerErrorDiv.innerHTML = "";

        const firstNameInput = document.getElementById("firstNameInput");
        const lastNameInput = document.getElementById("lastNameInput");
        const emailInput = document.getElementById("emailAddressInput");
        const passwordInput = document.getElementById("passwordInput");
        const confirmPasswordInput = document.getElementById(
            "confirmPasswordInput"
        );

        if (!firstNameInput.value) {
            registerErrorDiv.innerHTML = "Please enter your first name";
            return;
        }

        if (!lastNameInput.value) {
            registerErrorDiv.innerHTML = "Please enter your last name";
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value) {
            registerErrorDiv.innerHTML = "Please enter your email address";
            return;
        } else if (!emailRegex.test(emailInput.value)) {
            registerErrorDiv.innerHTML = "Please enter a valid email address";
            return;
        }

        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordInput.value) {
            registerErrorDiv.innerHTML = "Please enter a password";
            return;
        } else if (!passwordRegex.test(passwordInput.value)) {
            registerErrorDiv.innerHTML = "Please enter a valid password";
            return;
        }

        if (!confirmPasswordInput.value) {
            registerErrorDiv.innerHTML = "Please confirm your password";
            return;
        } else if (passwordInput.value !== confirmPasswordInput.value) {
            registerErrorDiv.innerHTML = "Passwords do not match";
            return;
        }

        registerForm.submit();
    });
}

