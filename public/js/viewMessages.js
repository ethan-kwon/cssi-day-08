const getMessages = () => {
    const passcode = document.querySelector("#passcode");
    
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        for (let key in data) {
            if (data[key].passcode === passcode.value) {
                const modal = document.querySelector("#messageModal");
                const message = document.querySelector("#message");
                message.innerHTML = data[key].message;
                modal.classList.add("is-active");
            } else {
                const error = document.querySelector("#errorMessage");
                error.classList.remove("hidden");
            }
        }
    })
}

const closeModal = () => {
    const modal = document.querySelector("#messageModal");
    modal.classList.remove("is-active");
}

const closeError = () => {
    const modal = document.querySelector("#errorMessage");
    modal.classList.add("hidden");
}