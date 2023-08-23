const inbox = document.querySelector("#inbox")
const inboxModal = document.querySelector("#inbox-modal")

inbox.addEventListener("click", () => {
  inboxModal.classList.toggle("header-content-inbox-modal-active")
})
