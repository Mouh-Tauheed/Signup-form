let form = document.getElementById("form");
let username = document.getElementById("username");
let Email = document.getElementById("Email");
let password = document.getElementById("password");
let ConfirmPassword = document.getElementById("ConfirmPassword");
let userError = document.getElementById("userError")
let EmailError = document.getElementById("EmailError")
let PassError = document.getElementById("PassError")
let Pass2Error = document.getElementById("Pass2Error")
let check1 = document.getElementById("check1");
let Submit = document.getElementById("Submit");
let checkError = document.getElementById("checkError")

username.addEventListener("input", () => {
    if (username.value.length < 3) {
        userError.innerText = "Username is invalid";
        // userError.style.color = "red";
    } else {
        userError.innerText = "";
    }
    return;
});

Email.addEventListener("input", () => {
    const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailpattern.test(Email.value)) {
        EmailError.innerText = "Email is invalid";
        // EmailError.style.color="red";
    } else {
        EmailError.innerText = "";
    }
});

password.addEventListener("input", () => {
    if (password.value.length < 6) {
        PassError.innerText = "Pleas Enter the password atleast 6 charecter";
        // PassError.style.color="red";
    } else {
        PassError.innerText = "";
    }
});

ConfirmPassword.addEventListener("input", () => {
    if (password.value !== ConfirmPassword.value) {
        Pass2Error.innerText = "Password do not match please enter a same password";
        // Pass2Error.style.color="red";
    } else {
        Pass2Error.innerText = "";
    }
});

check1.addEventListener("change", () => {
    if (!check1.checked) {
        checkError.innerText = "Please accept the term & condition"
    } else {
        checkError.innerText = "";
    }
})


form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (
        username.value.trim() === "" ||
        Email.value.trim() === "" ||
        password.value.trim() === "" ||
        ConfirmPassword.value.trim() === ""
    ) {
        alert("Please fill all the fields");
        return;
    }

    if (password.value !== ConfirmPassword.value) {
        alert("The password does not match");
        return;
    }

    if (!check1.checked) {
        alert("Please accept the term & condition")
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push({
        username: username.value,
        email: Email.value,
        password: password.value
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Sign up succesful");

    form.reset();

    userError.innerText = "";
    EmailError.innerText = "";
    PassError.innerText = "";
    Pass2Error.innerText = "";
    checkError.innerText = "";

})

