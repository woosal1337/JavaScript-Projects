function onSubmit() {

    const form = document.getElementById("message-form")

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const message = document.getElementById("message").value;
        const messageBox = document.getElementById("message-box")

        messageBox.textContent = message;

    })

}