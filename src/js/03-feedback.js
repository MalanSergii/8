import throttle from "lodash.throttle";
const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector("[name='email']"),
    message: document.querySelector("[name='message']"),
};

let data = {};

refs.form.addEventListener("input", throttle(onFormInput, 500));
refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    refs.form.reset();
    localStorage.removeItem("feedback-form-state");
    console.log(data);
    data = {};
}

function onFormInput(event) {
    data[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(data));
}

if (localStorage.getItem("feedback-form-state")) {
    const parsedData = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (parsedData.email) {
        refs.email.value = parsedData.email;
        data.email = parsedData.email;
    }
    if (parsedData.message) {
        refs.message.value = parsedData.message;
        data.message = parsedData.message;
    }
}
