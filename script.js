const button_add = document.getElementById("add-task-btn");

button_add.onclick = function (){
    const task_input = document.getElementById("task-input");
    const task_list = document.getElementById("task-list");

    if(task_input.value == ""){
        window.alert("Please enter a task.");
    }
    else {
        const task_div = document.createElement("div");
        task_div.className = "task-div";
        task_div.style = "border-top: 1px solid black; padding: 10px; padding-left: 0; margin: 5px;";

        const task_span = document.createElement("span");
        task_span.className = "task-span";
        task_span.style = "font-size: 20px; color: black; padding: 0; margin-right: 10px;";

        const task_btn = document.createElement("button");
        task_btn.className = "task-btn";
        task_btn.style = "background-color: rgb(240, 38, 38); color: black; border: 1px solid black; padding: 5px;";

        task_span.innerText = task_input.value;
        task_btn.innerText = "Delete";
        task_btn.onclick = function (){
            task_div.remove();
        }
        task_div.appendChild(task_span);
        task_div.appendChild(task_btn);

        task_list.appendChild(task_div);
    }

    task_input.value = "";
}