import edit from "../assets/edit.svg";

export default function editTask() {
  class Task {
    constructor(name, details, dueDate, status) {
      this.name = name;
      this.details = details;
      this.dueDate = dueDate;
      this.status = status;
      this.id = Date.now().toString;
    }
  }

  class Render {
    constructor() {}
    editTaskToList(task) {
      const list = document.getElementById("tasks-table");

      list.innerHTML += `
            <tr class="text-center">
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
      document.getElementById("edit-name").value = "";
      document.getElementById("edit-details").value = "";
      document.getElementById("edit-due-date").value = "";
      document.getElementById("edit-status").value = "";
    }

    alert(msg) {
      const div = document.createElement("div");

      div.className = `text-red-700 font-semibold text-sm py-4`;
      div.id = `alert`;
      div.appendChild(document.createTextNode(msg));
      const container = document.getElementById("task-board");

      const taskForm = document.getElementById("edit-form");

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

        render.editTaskToList(task);
      });
    }

    static getTasks() {
      let tasks;
      if (localStorage.getItem("tasks") === null) {
        tasks = [];
      } else {
        tasks = JSON.parse(localStorage.getItem("tasks")).sort(function (a, b) {
          return b.dueDate - a.dueDate;
        });
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
  // document.addEventListener("DOMContentLoaded", Storage.displayTasks);

  document.getElementById("edit-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("edit-name").value;
    const details = document.getElementById("edit-details").value;
    const dueDate = document.getElementById("edit-due-date").value;
    const status = document.getElementById("edit-status").value;

    const editedTask = new Task(name, details, dueDate, status);

    const render = new Render();

    if (name === "" || dueDate === "") {
      // error alert
      render.alert("Task name and due date are mandatory");
    } else {
      render.editTaskToList(editedTask);

      Storage.addTask(editedTask);

      render.clear();
    }

    const modal = document.getElementById("edit-modal");

    modal.classList.add("hidden");
  });
}
