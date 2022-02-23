const addHighTask = document.getElementById('addHighTask')
const addLowTask = document.getElementById('addLowTask')
const template = document.getElementById('template')

addHighTask.addEventListener('click', addTaskHigh)
addLowTask.addEventListener('click', addTaskLow)

function closeElem() {
    let tasksToDelete = document.querySelectorAll('.close-icon')
    for (let task of tasksToDelete) {
        task.addEventListener('click', deleteTask)
    }
}

closeElem()


function addTaskHigh() {

    let task = inputHigh.value
    if (!task.trim()) return

    let clone = template.content.cloneNode(true)
    clone.querySelector('.task-name').textContent = task

    addedHighTask.prepend(clone)
    inputHigh.value = null

    closeElem()
}

function addTaskLow() {
    let task = inputLow.value
    if (!task.trim()) return

    let clone = template.content.cloneNode(true)
    clone.querySelector('.task-name').textContent = task

    addedLowTask.prepend(clone)
    inputLow.value = null

    closeElem()
}


function deleteTask() {
    this.parentNode.remove()
}
