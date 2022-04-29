export const UI_ELEMENT = {
    addHighTask: document.getElementById('addHighTask'),
    addedHighTask: document.getElementById('addedHighTask'),
    inputHigh: document.getElementById('inputHigh'),
    addLowTask: document.getElementById('addLowTask'),
    addedLowTask: document.getElementById('addedLowTask'),
    inputLow: document.getElementById('inputLow'),
    templateElement: document.getElementById('template'),
}

export function changeStatusTask() {
    let task = document.querySelectorAll('.checkbox');
    for (let taskElement of task) {
        taskElement.addEventListener('click', changeLookTask);
    }
}

changeStatusTask()

function changeLookTask() {
    if (this.checked) {
        this.parentElement.style.background = '#F4F4F4';
        this.setAttribute('status', 'checked');
    } else if (!this.checked) {
        this.parentElement.style.background = '#fff';
        this.setAttribute('status', 'noChecked');
    }
}