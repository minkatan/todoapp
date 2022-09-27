import edit from "../assets/edit.svg";
import editTask  from "./editTask";

export default function addTask() {
  class Task {
    constructor(name, details, dueDate, status = "New", taskId) {
      this.name = name;
      this.details = details;
      this.dueDate = dueDate;
      this.status = status;
      this.taskId = taskId;
    }
  }

  class Render {
    constructor() {}
    addTaskToList(task) {
      const list = document.getElementById("tasks-table");

      list.innerHTML += `
            <tr class="text-center">
            <td class="hidden">${task.taskId}</td>
            <td>${task.name}</td>
            <td>${task.details}</td>
            <td>${task.dueDate}</td>
            <td>${task.status}</td>
            <td class="">
              <button id="edit-btn"> 
                <!-- edit svg -->
                <img src=${edit} alt="edit" />
              </button>
            </td>
          </tr>
          `;
    }

    clear() {
      document.getElementById("name").value = "";
      document.getElementById("details").value = "";
      document.getElementById("due-date").value = "";
    }

    alert(msg) {
      const div = document.createElement("div");

      div.className = `text-red-700 font-semibold text-sm py-4`;
      div.id = `alert`;
      div.appendChild(document.createTextNode(msg));
      const container = document.getElementById("task-board");

      const taskForm = document.getElementById("task-form");

      container.insertBefore(div, taskForm);

      setTimeout(function () {
        document.getElementById("alert").remove();
      }, 2000);
    }
  }

  class Storage {
    static displayTasks() {
      const tasks = Storage.getTasks();

      tasks.forEach(function (task) {
        const render = new Render();

        render.addTaskToList(task);

           // add event button edit task
        document.getElementById("edit-btn").addEventListener("click", () => {
          document.getElementById("edit-modal").classList.remove("hidden");

          editTask()
        });
      });
    }

    static getTasks() {
      let tasks;
      if (localStorage.getItem("tasks") === null) {
        tasks = [];
      } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
      }
      return tasks;
    }

    static addTask(task) {
      const tasks = Storage.getTasks();

      tasks.push(task);

      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }

  // load event
  document.addEventListener("DOMContentLoaded", Storage.displayTasks);


  document.getElementById("task-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const details = document.getElementById("details").value;
    const dueDate = document.getElementById("due-date").value;
    const taskId = Date.now();

    const task = new Task(name, details, dueDate, "New",taskId);

    const render = new Render();

    if (name === "" || dueDate === "") {
      // error alert
      render.alert("Task name and due date are mandatory");
    } else {
      render.addTaskToList(task);

      Storage.addTask(task);

      render.clear();
    }
  });
}
