import {addHighTask, addedHighTask, inputHigh, addLowTask, addedLowTask, inputLow, template} from "./view.js";

addHighTask.addEventListener('click', addTask)
addLowTask.addEventListener('click', addTask)
inputHigh.addEventListener('keydown', addEnter)
inputLow.addEventListener('keydown', addEnter)

function addCloseElem() {
    let tasksToDelete = document.querySelectorAll('.close-icon')
    for (let task of tasksToDelete) {
        task.addEventListener('click', deleteTask)
    }
}

addCloseElem()


function checkStatusTask() {
    let task = document.querySelectorAll('.checkbox')
    for (let taskElement of task) {
        taskElement.addEventListener('click', function () {
            if (this.checked){
                this.parentElement.style.background = '#F4F4F4'
            }else if (!this.checked){
                this.parentElement.style.background = '#fff'
            }
        })
    }
}
checkStatusTask()
let value

function addTask() {
    let priority
    if (!value) {
        priority = this.parentNode.parentNode.id
    }

    if (priority === 'high' || value === 'high') {
        let task = inputHigh.value
        if (!task.trim()) return

        let clone = template.content.cloneNode(true)
        clone.querySelector('.task-name').textContent = task

        addedHighTask.prepend(clone)
        inputHigh.value = null
    } else if (priority === 'low' || value === 'low') {
        let task = inputLow.value
        if (!task.trim()) return

        let clone = template.content.cloneNode(true)
        clone.querySelector('.task-name').textContent = task

        addedLowTask.prepend(clone)
        inputLow.value = null
    }
    addCloseElem()
    checkStatusTask()
}

function addEnter(e) {
    const priority = this.parentNode.parentNode.id
    if (e.code !== 'Enter') return

    if (priority === 'high') {
        value = 'high'
        addTask()
    } else if (priority === 'low') {
        value = 'low'
        addTask()
    }
}


function deleteTask() {
    this.parentNode.remove()
}
