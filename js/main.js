import {UI_ELEMENT} from "./view.js";

UI_ELEMENT.addHighTask.addEventListener('click', addTaskOnButton)
UI_ELEMENT.addLowTask.addEventListener('click', addTaskOnButton)
UI_ELEMENT.inputHigh.addEventListener('keydown', addTaskOnEnter)
UI_ELEMENT.inputLow.addEventListener('keydown', addTaskOnEnter)

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
    const clone = UI_ELEMENT.templateElement.content.cloneNode(true)
    if (priority === 'high') {
        let task = UI_ELEMENT.inputHigh.value

        try {
            if (!task.trim()) {
                throw new Error('no task name')
            }
        } catch (e) {
            console.error(e.message)
            return
        }

        clone.querySelector('.task-name').textContent = task

        UI_ELEMENT.addedHighTask.prepend(clone)
        UI_ELEMENT.inputHigh.value = null
    } else if (priority === 'low') {
        let task = UI_ELEMENT.inputLow.value

        try {
            if (!task.trim()) {
                throw new Error('no task name')
            }
        } catch (e) {
            console.error(e.message)
            return
        }

        clone.querySelector('.task-name').textContent = task

        UI_ELEMENT.addedLowTask.prepend(clone)
        UI_ELEMENT.inputLow.value = null
    }
    addCloseElem()
    changeStatusTask()
}

function addCloseElem() {
    let tasksToDelete = document.querySelectorAll('.close-icon')
    for (let task of tasksToDelete) {
        task.addEventListener('click', function () {
            this.parentNode.remove()
        })
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