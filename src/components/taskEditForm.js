export default function taskEditForm() {
  const edit = `
    <div id="edit-modal" class="hidden absolute flex justify-center items-center h-screen w-full bg-gray-800/30">
    <div class="container mx-auto h-[500px] w-full bg-blue-900 px-8 py-4 text-sky-100 flex flex-col items-center">
      <h2 class="text-3xl font-bold text-center py-2">Edit Task</h2>
      <form id="edit-form">
        <div class="flex flex-col gap-y-4">
          <div class="flex flex-row w-full justify-start gap-x-32 items-start">
            <div>
              <label class="p-2">Task Name</label>
                <input id="edit-name" type="text" class="border w-full px-4 py-2 rounded focus:bg-blue-100 text-blue-800" placeholder="Add Task">
            </div>

            <div>
              <label class="p-2">Task Details</label>
                <textarea id="edit-details" form="task-form" class="border w-full px-4 py-2 rounded focus:bg-blue-100 text-blue-800" rows="5" cols="=10"></textarea>
            </div>
          </div>
          <div class="flex flex-row w-full justify-start gap-x-44 items-start">
            <div class="">
              <label class="p-2">Due date</label>
                <input id="edit-due-date" type="date" class="border w-full px-4 py-2 rounded focus:bg-blue-100 text-blue-800" placeholder="Add Task">
            </div>
            <div>
              <label class="p-2">Status</label>
               <select name="edit-status" id="edit-status" class="border w-full px-4 py-2 rounded focus:bg-blue-100 text-blue-800">
                 <option value="New-Tasks">New</option>
                 <option value="Work-In-Progress">WIP</option>
                 <option value="Completed">Completed</option>
                 <option value="Rejected">Rejected</option>
               </select>
            </div>
          </div>

          <div class="flex flex-row w-full gap-x-44 pt-20 justify-center">
            <div class="">
              <input type="submit" value="Saved" class="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-2xl cursor-pointer">
            </div>
            <div id="delete-task" class="bg-red-100 text-red-800 px-4 py-2 rounded-2xl cursor-pointer">
              Delete
            </div>
          </div>
        </div>
      </form>
    </div>

  </div>
    `;

  return edit;
}
