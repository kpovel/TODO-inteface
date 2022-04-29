import {changeStatusTask, UI_ELEMENT} from "./view.js";

UI_ELEMENT.addHighTask.addEventListener('click', addTaskOnButton);
UI_ELEMENT.addLowTask.addEventListener('click', addTaskOnButton);
UI_ELEMENT.inputHigh.addEventListener('keydown', addTaskOnEnter);
UI_ELEMENT.inputLow.addEventListener('keydown', addTaskOnEnter);

function ConstructorTask(priority) {
    this.priority = priority;
}


function addTaskOnButton() {
    const priority = this.parentElement.parentElement.id;
    const task = new ConstructorTask(priority);
    
    addTask(task.priority);
}

function addTaskOnEnter(e) {
    if (e.code !== 'Enter') return;

    const priority = this.parentElement.parentElement.id;
    const task = new ConstructorTask(priority);

    addTask(task.priority);
}


function addTask(priority) {
    const clone = UI_ELEMENT.templateElement.content.cloneNode(true);
    if (priority === 'high') {
        const task = UI_ELEMENT.inputHigh.value;

        try {
            if (!task.trim()) {
                throw new Error('no task name');
            }
        }
        catch (e) {
            console.error(e.message);
            return;
        }

        clone.querySelector('.task-name').textContent = task;

        UI_ELEMENT.addedHighTask.prepend(clone);
        UI_ELEMENT.inputHigh.value = null;
    } else if (priority === 'low') {
        const task = UI_ELEMENT.inputLow.value;

        try {
            if (!task.trim()) {
                throw new Error('no task name');
            }
        }
        catch (e) {
            console.error(e.message);
            return
        }

        clone.querySelector('.task-name').textContent = task;

        UI_ELEMENT.addedLowTask.prepend(clone);
        UI_ELEMENT.inputLow.value = null;
    }
    addCloseElem();
    changeStatusTask();
}

function addCloseElem() {
    const tasksToDelete = document.querySelectorAll('.close-icon');
    for (const task of tasksToDelete) {
        task.addEventListener('click', function () {
            this.parentNode.remove();
        })
    }
}

addCloseElem();