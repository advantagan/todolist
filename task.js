let taskarray=[]

function addtask(e){
    e.preventDefault()
        const taskinput=document.getElementById("taskinput")
    const text=taskinput.value
    console.log(text)
taskinput.value=""
taskarray.push({task:text,is_completed:false})
saveTaskList()
renderTaskList()
}

function renderTaskList(){
    const tasklist=document.getElementById("tasklist")
tasklist.innerHTML=""
    for (let item of taskarray) {
tasklist.innerHTML+=`<li><input type=checkbox ${item.is_completed?"checked":""}>${item.task}</li>`
}}

function saveTaskList(){
    localStorage.setItem("taskarray",JSON.stringify(taskarray))
}

function loadTaskList(){
    taskarray=JSON.parse(localStorage.getItem("taskarray")||"[]")

}
loadTaskList()
renderTaskList()
