export default function taskTable() {
  // const main = document.getElementById("main");

  const taskTable = `
    <div id="task-section" class="col-span-5 w-full">
    <section class="section">
      <h2 class="px-4 py-8 text-2xl font-semibold">List of tasks in project</h2>
      <table id="tasks-table" class="w-full table-fixed border-space-2 whitespace-normal">
        <thead class="">
          <tr class="">
            <th>Task</th>
            <th>Details</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Edit / Delete</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
        </table>
      </section>
    </div>
    `;

  // main.appendChild(taskTable);

  return taskTable;
}
