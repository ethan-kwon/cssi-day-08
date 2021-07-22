const onSubmit = () => {
    const passcodeInput = document.querySelector("#passcode");
    const messageInput = document.querySelector("#message");
    const payload = {
        passcode: passcodeInput.value,
        message: messageInput.value
    }

    firebase.database().ref().push(payload);
    
    passcodeInput.value = "";
    messageInput.value = "";
}