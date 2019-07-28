//Get Elements
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');
const errorMessage = document.getElementById('errorMessage')


function clearTxtBoxes() {
    txtEmail.value = ""
    txtPassword = ""
}

//Add login event
btnLogin.addEventListener('click', x => {
    //Get email and password
    const email = txtEmail.value;
    const password = txtPassword.value;
    clearTxtBoxes();
    const auth = firebase.auth();
    //Sign in
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(error => console.log(error.message));
    window.location.href = "welcomepage.html";
})

//Add signup event
btnSignUp.addEventListener('click', x => {
    //Get email and password
    const email = txtEmail.value;
    const password = txtPassword.value;
    clearTxtBoxes();
    const auth = firebase.auth();
    //Sign in
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(error => console.log(error.message));
})

btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
    window.location.href = "index.html";
})

//Add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
        console.log(firebaseUser);
        
    } else {
        console.log('not logged in')
    }
});