//The following code initializes the socket.
//This will make a connection with the server.
let socket = io()

//The following code pulls in elements from chat.mustache.
let chatMessageTextBox = document.getElementById('chatMessageTextBox')
let sendButton = document.getElementById('sendButton')
let chatMessagesUL = document.getElementById('chatMessagesUL')
let usernameHF = document.getElementById('usernameHF')
let userName = usernameHF.value

//The following function clears the chatMessageTextBox.
function clearMessageTextBox() {
    chatMessageTextBox.value = ""
}

//This allows users to submit information by pressing the enter button.
document.querySelector('#chatMessageTextBox').addEventListener('keypress', function (e) {
    //13 is the keycode for the 'enter' button.
    if (e.key === 'Enter') {
        let chatMessage = chatMessageTextBox.value
        clearMessageTextBox()
        socket.emit('Trip', chatMessage) 
    }
});

//This code gives functionality to the 'send' button.
sendButton.addEventListener('click', () => {
    let chatMessage = {name: userName, message: chatMessageTextBox.value}
    clearMessageTextBox()
    socket.emit('Trip', chatMessage)
})

//The following code tells the socket to listen for a particular event/channel.
socket.on('Trip',(chatMessage) => {
    console.log(chatMessage)
    let messageLI = `<li>${chatMessage.name ? chatMessage.name : 'Friend'}: ${chatMessage.message}</li>`
    chatMessagesUL.insertAdjacentHTML('beforeend', messageLI)
})