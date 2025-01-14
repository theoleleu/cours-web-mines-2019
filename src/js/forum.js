import ky from "ky";

async function refreshMessages() {
  // GET https://ensmn.herokuapp.com/messages
  const messages = await ky.get("https://ensmn.herokuapp.com/messages").json();
  displayMessages(messages);
}

function displayMessages(messages) {
  // Clear list content on view
  // Iterate on messages and display getMessageView(message);
}

function getMessageView(message) {
  return `<div>
    <p>${message.username}<p/>
    <p>${message.message}</p>
  </div>`;
}

setInterval(() => {
  refreshMessages();
}, 1000);

function sendMessage(message) {
  // POST https://ensmn.herokuapp.com/messages (username, message)
  // After success, getMessages()
}
