// Simple form handling
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // stop page reload

        const name = document.querySelector("input[type='text']").value;
        const email = document.querySelector("input[type='email']").value;
        const message = document.querySelector("textarea").value;

        if (name && email) {
            alert(`Thank you ${name}! Your message has been received 🚀`);
            form.reset();
        } else {
            alert("Please fill all required fields!");
        }
    });
});