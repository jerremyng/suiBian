document.addEventListener("DOMContentLoaded", event => {})

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
    .signInWithPopup(provider)
    .then(result => {
        const user = result.user;
        document.write(`${user.displayName} is super fantastic`);
        console.log(user)
    })
    .catch(console.log)

}