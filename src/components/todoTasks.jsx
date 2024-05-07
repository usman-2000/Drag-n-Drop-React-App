import React, { useState } from 'react'
import "./styles.css"

const TodoTasks = () => {
    const [tasks, setTasks] = useState(null)

    const handleOnDrag = (e, name, desc) => {
        e.dataTransfer.setData("data", JSON.stringify({ 'name': name, "desc": desc }))
        // e.dataTransfer.setData("desc", desc)
    }

    const handleOnDrop = (e) => {
        if (tasks) {
            setTasks([...tasks?.filter((taskname) => taskname !== JSON.parse(e.dataTransfer.getData("data"))), JSON.parse(e.dataTransfer.getData("data"))])

        } else {
            // setTasks([e.dataTransfer.getData("name")])
            setTasks([JSON.parse(e.dataTransfer.getData("data"))])
        }

        // setTasks([JSON.parse(e.dataTransfer.getData("data"))])

    }

    console.log(tasks)

    return (
        <div className='main-cont'>

            <div className='tasks-cont'>
                <h3 style={{ color: "white", fontSize: "1.9rem" }}>Tasks</h3>
                <div className='tasks' draggable onDragStart={(e) => {
                    console.log("Dragging Task 1")
                    handleOnDrag(e, 'Task1', "Hello, This is task")
                }}>Task 1</div>
                <div className='tasks' draggable onDragStart={(e) => {
                    console.log("Dragging Task 2")
                    handleOnDrag(e, 'Task2', "Hello, This is task")

                }}>Task 2</div>
                <div className='tasks' draggable onDragStart={(e) => {
                    console.log("Dragging Task 3")
                    handleOnDrag(e, 'Task3', "Hello, This is task")
                }}>Task 3</div>

            </div>

            <div className='drop-tasks-cont' onDragOver={(e) => e.preventDefault()} onDrop={handleOnDrop}>
                <h3 style={{ color: "white", fontSize: "1.9rem" }}>Tasks Dropped</h3>
                {
                    tasks && Object.keys(tasks)?.map((taskname) => {
                        console.log("tasks", taskname)
                        return <div className='tasks' draggable onDragStart={(e) => {
                            console.log({ taskname })
                            handleOnDrag(e, 'Task1')
                        }}>
                            {tasks[taskname].name}
                            <p>{tasks[taskname].desc}</p>
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default TodoTasks