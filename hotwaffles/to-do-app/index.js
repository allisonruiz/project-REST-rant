const toDoListElement = document.querySelector("#bigLeagues"); 
/**
 * 
 * @param {string[]} toDoText 
 */
const createToDoElements = (...toDoText) => {
    toDoText.forEach((toDo) => {
        const toDoElement = document.createElement("li");
        toDoElement.textContent = toDo;
        toDoElement.classList.add("toDo__item");
        toDoListElement.appendChild(toDoElement);
    })


}

const main = () => {
    createToDoElements("eat lunch", "maybe one nut", "draw things", "sew things", "watch scott pilgrim");
    const newToDoForm = document.createElement("form");
    const inputElement = document.createElement("input");
    const labelElement = document.createElement("label");
    const submitElement = document.createElement("input");
}

main()

