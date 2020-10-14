const init = () => {
  var socket = io()

  const CHAT_MESSAGE = "chat message"

  const textbar = document.getElementById("textbar")
  const form = document.querySelector("form")
  const messages_section = document.getElementById("messages")

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    socket.emit(CHAT_MESSAGE, textbar.value)
    textbar.value = ""
  });

  socket.on(CHAT_MESSAGE, (msg) => {
    messages_section.innerHTML += `<li>${msg}</li>`
  });
}

init()
