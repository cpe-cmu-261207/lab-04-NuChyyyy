const keyEvent = (event) => {
    if (event.key === "Enter") addList()
}

const addList = () => {
    if (document.querySelector("input").value == "") {
        alert("Task connot be empty!!")
    } else {
        const list = document.createElement("div")
        const doneBtn = document.createElement("botton")
        const deleteBtn = document.createElement("botton")
        const detail = document.createElement("span")

        doneBtn.style.visibility = "hidden"
        deleteBtn.style.visibility = "hidden"

        list.setAttribute("class", "max-w-screen-sm flex mx-auto px-4 rounded-xl mt-2 fontList")
        doneBtn.setAttribute("class", "bg-green-500 text-white transform hover:text-black hover:scale-125 transition duration-300 rounded-lg ml-4 p-2 fontBtn cursor-pointer")
        deleteBtn.setAttribute("class", "bg-red-500 text-white transform hover:text-black hover:scale-125 transition duration-300 rounded-lg ml-4 p-2 fontBtn cursor-pointer")

        detail.innerHTML = "❤  " + document.querySelector("input").value + " "
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
            list.remove()
        })
        deleteBtn.addEventListener("click", () => list.remove())

        list.append(detail)
        list.append(doneBtn)
        list.append(deleteBtn)
        document.getElementById("List").prepend(list)

        document.querySelector("input").value = ""
    }
}