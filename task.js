let taskarray=[]

function addtask(e){
    e.preventDefault()
        const taskinput=document.getElementById("taskinput")
    const text=taskinput.value
    console.log(text)
taskinput.value=""
taskarray.push({ id:new Date().valueOf(), task:text,is_completed:false})
saveTaskList()
renderTaskList()
}

function renderTaskList(){
    const tasklist=document.getElementById("tasklist")
tasklist.innerHTML=""
    for (let item of taskarray) {
        tasklist.innerHTML+=`<li><input type=checkbox onchange="deleteTask(${item.id})" ${item.is_completed?"checked":""}>${item.task}
        </li>`
}}

function deleteTask(taskId){
    const taskindex=taskarray.findIndex((task)=>task.id===taskId)
    if (taskindex>-1){
        taskarray.splice(taskindex,1)
        renderTaskList()
    }
}



function saveTaskList(){
    localStorage.setItem("taskarray",JSON.stringify(taskarray))
}

function loadTaskList(){
    taskarray=JSON.parse(localStorage.getItem("taskarray")||"[]")

}
loadTaskList()
renderTaskList()

async function getWordDefinition(word){
const response= await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
const data=await response.json()    
console.log(data)
}
getWordDefinition("Animal")

