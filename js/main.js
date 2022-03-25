import {addHighTask, addedHighTask, inputHigh, addLowTask, addedLowTask, inputLow, templateElement} from "./view.js";
import {deleteTask, checkTask} from "./view.js";

addHighTask.addEventListener('click', addTaskOnButton)
addLowTask.addEventListener('click', addTaskOnButton)
inputHigh.addEventListener('keydown', addTaskOnEnter)
inputLow.addEventListener('keydown', addTaskOnEnter)

let priority

function addTaskOnButton() {
    priority = this.parentElement.parentElement.id
    addTask()
}

function addTaskOnEnter(e) {
    if (e.code !== 'Enter') return
    priority = this.parentElement.parentElement.id

    addTask()
}


function addTask() {
    const clone = templateElement.content.cloneNode(true)
    if (priority === 'high') {
        let task = inputHigh.value

        try {
            if (!task.trim()) {
                throw new Error('no task name')
            }
        } catch (e) {
            console.error(e.message)
            return
        }

        clone.querySelector('.task-name').textContent = task

        addedHighTask.prepend(clone)
        inputHigh.value = null
    } else if (priority === 'low') {
        let task = inputLow.value

        try {
            if (!task.trim()) {
                throw new Error('no task name')
            }
        } catch (e) {
            console.error(e.message)
            return
        }

        clone.querySelector('.task-name').textContent = task

        addedLowTask.prepend(clone)
        inputLow.value = null
    }
    addCloseElem()
    changeStatusTask()
}

function addCloseElem() {
    let tasksToDelete = document.querySelectorAll('.close-icon')
    for (let task of tasksToDelete) {
        task.addEventListener('click', deleteTask)
    }
}

addCloseElem()


function changeStatusTask() {
    let task = document.querySelectorAll('.checkbox')
    for (let taskElement of task) {
        taskElement.addEventListener('click', changeLookTask)
    }
}

changeStatusTask()

function changeLookTask() {
    if (this.checked) {
        this.parentElement.style.background = '#F4F4F4'
        this.setAttribute('status', 'checked')
    } else if (!this.checked) {
        this.parentElement.style.background = '#fff'
        this.setAttribute('status', 'noChecked')
    }
}