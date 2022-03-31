const div = document.querySelectorAll(".question")

div.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active")
    })
})


