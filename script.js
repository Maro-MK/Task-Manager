const button_add = document.getElementById("add-task-btn");
const task_input = document.getElementById("task-input");

function add_task(){
    const task_list = document.getElementById("task-list");
    
    if(task_input.value == ""){
        window.alert("Please enter Your Task.");
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
        task_btn.addEventListener("click", function (){
            task_div.remove();
        });
        task_div.appendChild(task_span);
        task_div.appendChild(task_btn);

        window.addEventListener("keyup", function (event){
            if(event.key == "Delete"){
                task_div.remove();
                this.localStorage.clear();
            }
        });

        task_list.appendChild(task_div);

        localStorage.setItem("task", task_div);

        task_input.value = "";
        task_input.focus();
    }
}

button_add.addEventListener("click", add_task);
window.addEventListener("keyup", function (event){
    if(event.key == "Enter"){
        add_task();
    }
    else if(event.key == "Shift"){
        task_input.value = "";
    }
});