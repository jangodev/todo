const todoinput = document.getElementById("todoinput")
const addbtn = document.getElementById("addbtn")

var displayall = document.createElement("button")
document.body.appendChild(displayall)
displayall.textContent = "Minimize Todo's"
displayall.style.width = "150px"
displayall.style.position = "absolute"
displayall.style.top = "27%"
displayall.style.left = "50%"
displayall.style.transform = "translate(-50%, -50%)"

class newTodo {
constructor(todotxt) {
   const todobox =  document.createElement("div")
   document.body.appendChild(todobox)
   todobox.style.backgroundColor = "rgb(44,46,46)"
   todobox.style.textAlign = "center"
   todobox.style.width = "100px"
   todobox.style.margin = "auto" // to make it todo's appear all at once
   todobox.style.borderRadius = "10px"
   todobox.style.padding = "10px"
   /* todobox.style.position = "absolute"
   todobox.style.top = "50%"
   todobox.style.left = "50%"
   todobox.style.transform = "translate(-50%, -50%)" // to make it one at a time*/

   function displayonetodo() {
    todobox.style.position = "absolute"
   todobox.style.top = "50%"
   todobox.style.left = "50%"
   todobox.style.transform = "translate(-50%, -50%)" // to make it one at a time
   displayall.style.visibility = "hidden"
   }

   displayall.addEventListener("click", displayonetodo)



   const todo = document.createElement("p")
   todo.innerText = todotxt
   todo.style.color = "white"
  todobox.appendChild(todo)

   const donebtn = document.createElement("button")
   donebtn.innerText = "Done"
   todobox.appendChild(donebtn)
   donebtn.style.margin = "5px"

   const deletebtn = document.createElement("button")
   deletebtn.innerText = "Delete"
   todobox.appendChild(deletebtn)

   donebtn.onclick = () => {
    todo.style.textDecoration = "line-through"
}

   deletebtn.onclick = () => {
    todobox.remove()
}
}

}

function added() {
    new newTodo(todoinput.value)
}