import mail from "../assets/mail.svg";
import monitor from "../assets/monitor.svg";
import coffee from "../assets/coffee.svg";
import award from "../assets/award.svg";
import trash from "../assets/trash.svg";

export default function navbar() {
  const navbar = `
  <div class="col-span-2 flex h-screen items-center justify-center min-h-0 flex-1 flex-col bg-gray-800 text-gray-300">
          <div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <ul class="mt-5 mb-12 space-y-1 px-2" data-lists>
              <li class="hover:bg-gray-700 hover:text-white flex items-center px-2 py-2 font-medium rounded-md gap-x-4 cursor-pointer">
              <img src=${mail} alt="mail" />
              All Tasks
              </li>
     
              <li class="hover:bg-gray-700 hover:text-white flex items-center px-2 py-2 font-medium rounded-md gap-x-4 cursor-pointer">
              <img src=${monitor} alt="monitor" />
                New Tasks
              </li>
     
              <li class="hover:bg-gray-700 hover:text-white flex items-center px-2 py-2 font-medium rounded-md gap-x-4 cursor-pointer">
              <img src=${coffee} alt="coffee" />
                Working In Progress
              </li>
     
              <li class="hover:bg-gray-700 hover:text-white flex items-center px-2 py-2 font-medium rounded-md gap-x-4 cursor-pointer">
              <img src=${award} alt="award" />
                Completed
              </li>
     
              <li class="hover:bg-gray-700 hover:text-white flex items-center px-2 py-2 font-medium rounded-md gap-x-4 cursor-pointer">
              <img src=${trash} alt="trash" />
                Rejected
              </li>
            </ul>

            <div id="project" class="relative flex flex-col h-full items-center px-2 py-2 font-medium rounded-md gap-x-4 cursor-pointer">
            <p class="text-2xl font-semibold">List of Projects</p>
            
              <ul id="project-lists">
             <!-- javascript for task list -->
             
              </ul>
            

            <!-- add button -->
            <div class="bg-blue-800 text-blue-100 px-4 py-2 rounded-xl">Add Project</div>

            <!-- modal -->
            <form id="modal-form" type="submit" class="absolute bg-sky-900 top-36 h-32 p-4 text-sky-50 rounded-2xl hidden">
              <label class="text-xl font-semibold">Project Name</label>
              <input id="project-title" type="text" class="my-4 px-4 py-2 focus:bg-sky-600" />
            </form>
          </div>             
        </div>
      </div>
      `;
  return navbar;
}
