let TodoStorage = []
let DoneStorage = []

if (localStorage.todoStrg)
    TodoStorage = JSON.parse(localStorage.getItem("todoStrg"))
if (localStorage.doneStrg)
    DoneStorage = JSON.parse(localStorage.getItem("doneStrg"))

const loadStorage = () => {
    const todoData = TodoStorage
    const doneData = DoneStorage

    for (let x of todoData) {
        const oldlist = document.createElement("div")
        const olddetail = document.createElement("span")
        const doneBtn = document.createElement("button")
        const deleteBtn = document.createElement("button")

        oldlist.setAttribute("class", "max-w-screen-sm flex mx-auto px-4 rounded-xl mt-2 fontList")
        doneBtn.setAttribute("class", "bg-green-500 text-white transform hover:text-black hover:scale-125 transition duration-300 rounded-lg ml-4 p-2 fontBtn")
        deleteBtn.setAttribute("class", "bg-red-500 text-white transform hover:text-black hover:scale-125 transition duration-300 rounded-lg ml-4 p-2 fontBtn")

        doneBtn.style.visibility = "hidden"
        deleteBtn.style.visibility = "hidden"

        olddetail.innerHTML = "❤  " + x + " "
        doneBtn.innerHTML = "Done"
        deleteBtn.innerHTML = "Delete"

        oldlist.addEventListener("mouseenter", () => {
            doneBtn.style.visibility = "visible"
            deleteBtn.style.visibility = "visible"
        }
        )

        oldlist.addEventListener("mouseleave", () => {
            doneBtn.style.visibility = "hidden"
            deleteBtn.style.visibility = "hidden"
        }
        )
        doneBtn.addEventListener("click", () => {
            const doneList = document.createElement("div")
            doneList.innerHTML = olddetail.innerHTML
            doneList.style.textDecoration = "line-through"
            doneList.setAttribute("class", "max-w-screen-sm flex mx-auto px-4 rounded-xl mt-2 fontList")

            document.getElementById("doneList").prepend(doneList)
            oldlist.remove()
            console.log(DoneStorage)
            DoneStorage.push(x)
            console.log(DoneStorage)
            TodoStorage.splice(TodoStorage.indexOf(x), 1)
            localStorage.setItem("todoStrg", JSON.stringify(TodoStorage))
            localStorage.setItem("doneStrg", JSON.stringify(DoneStorage))
        })
        deleteBtn.addEventListener("click", () => {
            oldlist.remove()
            TodoStorage.splice(TodoStorage.indexOf(x), 1)
            localStorage.setItem("todoStrg", JSON.stringify(TodoStorage))
        })

        oldlist.append(olddetail)
        oldlist.append(doneBtn)
        oldlist.append(deleteBtn)
        document.getElementById("List").prepend(oldlist)
    }
    for (let y of doneData) {
        const doneList = document.createElement("div")
        doneList.innerHTML = "❤  " + y + " "
        doneList.style.textDecoration = "line-through"
        doneList.setAttribute("class", "max-w-screen-sm flex mx-auto px-4 rounded-xl mt-2 fontList")

        document.getElementById("doneList").prepend(doneList)
    }
}

const keyEvent = (event) => {
    if (event.key === "Enter") addList()
}

const addList = () => {
    if (document.querySelector("input").value == "") {
        alert("Task connot be empty!!")
    } else {
        const list = document.createElement("div")
        const detail = document.createElement("span")
        const doneBtn = document.createElement("button")
        const deleteBtn = document.createElement("button")
        const input = document.querySelector("input").value

        TodoStorage.push(input)
        localStorage.setItem("todoStrg", JSON.stringify(TodoStorage))

        doneBtn.style.visibility = "hidden"
        deleteBtn.style.visibility = "hidden"

        list.setAttribute("class", "max-w-screen-sm flex mx-auto px-4 rounded-xl mt-2 fontList")
        doneBtn.setAttribute("class", "bg-green-500 text-white transform hover:text-black hover:scale-125 transition duration-300 rounded-lg ml-4 p-2 fontBtn")
        deleteBtn.setAttribute("class", "bg-red-500 text-white transform hover:text-black hover:scale-125 transition duration-300 rounded-lg ml-4 p-2 fontBtn")

        detail.innerHTML = "❤  " + input + " "
        doneBtn.innerHTML = "Done"
        deleteBtn.innerHTML = "Delete"

        list.addEventListener("mouseenter", () => {
            doneBtn.style.visibility = "visible"
            deleteBtn.style.visibility = "visible"
        }
        )

        list.addEventListener("mouseleave", () => {
            doneBtn.style.visibility = "hidden"
            deleteBtn.style.visibility = "hidden"
        }
        )

        doneBtn.addEventListener("click", () => {
            const doneList = document.createElement("div")
            doneList.innerHTML = detail.innerHTML
            doneList.style.textDecoration = "line-through"
            doneList.setAttribute("class", "max-w-screen-sm flex mx-auto px-4 rounded-xl mt-2 fontList")

            document.getElementById("doneList").prepend(doneList)

            TodoStorage.splice(TodoStorage.indexOf(input), 1)
            DoneStorage.push(input)
            localStorage.setItem("todoStrg", JSON.stringify(TodoStorage))
            localStorage.setItem("doneStrg", JSON.stringify(DoneStorage))
            list.remove()
        })
        deleteBtn.addEventListener("click", () => {
            list.remove()
            TodoStorage.splice(TodoStorage.indexOf(input), 1)
            localStorage.setItem("todoStrg", JSON.stringify(TodoStorage))
        })

        list.append(detail)
        list.append(doneBtn)
        list.append(deleteBtn)
        document.getElementById("List").prepend(list)

        document.querySelector("input").value = ""
    }
}

const resetBtn = () => {
    const reTodoBtn = document.getElementById("reTodo")
    const reDoneBtn = document.getElementById("reDone")

    reTodoBtn.addEventListener("click", () => {
        localStorage.removeItem("todoStrg")
        document.getElementById("List").innerHTML = ""
    })
    reDoneBtn.addEventListener("click", () => {
        localStorage.removeItem("doneStrg")
        document.getElementById("doneList").innerHTML = ""
    })
}

resetBtn()
loadStorage()