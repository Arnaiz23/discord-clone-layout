const inbox = document.querySelector("#inbox")
const inboxModal = document.querySelector("#inbox-modal")

inbox.addEventListener("click", () => {
  inboxModal.classList.toggle("header-content-inbox-modal-active")
})

document.addEventListener("click", (e) => {
  if (!inbox.contains(e.target) && !inboxModal.contains(e.target)) {
    inboxModal.classList.remove("header-content-inbox-modal-active")
  }
})
