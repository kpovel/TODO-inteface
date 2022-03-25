export const addHighTask = document.getElementById('addHighTask')
export const addedHighTask = document.getElementById('addedHighTask')
export const inputHigh = document.getElementById('inputHigh')
export const addLowTask = document.getElementById('addLowTask')
export const addedLowTask = document.getElementById('addedLowTask')
export const inputLow = document.getElementById('inputLow')
export const templateElement = document.getElementById('template')

export function deleteTask() {
    this.parentNode.remove()
}
export function checkTask (){
    try{
        if(!task.trim()){
            throw new Error('no task name')
        }
    }catch (e) {
        console.log(e.message)
        throw e
    }
}