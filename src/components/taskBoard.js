export default function taskBoard() {
  // const main = document.getElementById("main");

  const taskBoard = `
  <div id="board" class="col-span-3 h-full px-2 py-4">
  <div class="border-2 shadow-lg w-full h-full py-4 px-8 rounded-xl">
                
  <!-- choose project -->

  <section class="">
      <h2 class="text-center mb-4 text-2xl font-semibold">Choose a Project</h2>
      <div class="field mb-5">
        <div class="control has-icons-left">
          <div class="w-full">
            <select id="list-select" class="w-full border border-gray-800 bg-gray-300 rounded-xl px-4 py-2 text-center">
              <option value="">Select Project</option>
            </select>
          </div>
          
        </div>
      </div>
    </section>

    <!-- add task to project -->

    <section class="section" id="task-board">
      <h2 class="border-b-2 border-gray-800 text-center mb-4 text-2xl font-semibold py-4">Add New task</h2>
      <form id="task-form">
        <div class="flex flex-col gap-y-4">
          <div>
            <label class="p-2">Task Name</label>
              <input id="name" type="text" class="border w-full px-4 py-2 rounded focus:bg-blue-100" placeholder="Add Task">
          </div>
          <div>
            <label class="p-2">Task Details</label>
              <textarea id="details" form="task-form" class="border w-full px-4 py-2 rounded focus:bg-blue-100" rows="5" cols="=10"></textarea>
          </div>
          <div>
            <label class="p-2">Due date</label>
              <input id="due-date" type="date" class="border w-full px-4 py-2 rounded focus:bg-blue-100" placeholder="Add Task">
          </div>

          <div class="pt-8 text-center w-full">
            <input type="submit" value="Add New Task" class="bg-blue-800 text-blue-100 px-4 py-2 rounded-2xl cursor-pointer">
          </div>
        </div>
      </form>
    </section>
</div>
</div>
  `;
  // main.appendChild(taskBoard);

  return taskBoard;
}
