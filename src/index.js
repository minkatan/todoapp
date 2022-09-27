import navbar from "./components/navbar";
import header from "./components/header";
import "./styles/index.css";
import taskBoard from "./components/taskBoard";
import addTask from "./components/addTask";
import editTask from "./components/editTask";
import taskEditFrom from "./components/taskEditForm";
import taskTable from "./components/taskTable";

const body = document.querySelector("body");

body.insertAdjacentHTML("beforeend", header());

const main = document.getElementById("main");
main.classList.add("grid", "grid-cols-10");
main.insertAdjacentHTML("beforeend", navbar());
main.insertAdjacentHTML("beforeend", taskBoard());
main.insertAdjacentHTML("beforeend", taskEditFrom());
main.insertAdjacentHTML("beforeend", taskTable());
addTask();
