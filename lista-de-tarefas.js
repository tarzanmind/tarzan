function addTask() {
    let look = document.getElementById("task").value

    let list = document.createElement("li")
    list.innerHTML = look + '<span onclick="removeTask(this)">❌</span>';
    document.querySelector("ul").appendChild(list)

    document.getElementById("task").value = ""
}

function removeTask(list) {
    list.parentElement.remove()
}