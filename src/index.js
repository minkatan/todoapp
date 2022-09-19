import generateJoke from "./generateJoke";
import "./styles/index.css"

const root = document.getElementById('root')
const joke = generateJoke()

root.innerHTML = `
    <div class="text-3xl text-red-900">
        ${joke}
    </div>

`