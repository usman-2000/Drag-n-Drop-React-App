import React, { useState } from 'react'
import "./styles.css"

const TodoTasks = () => {
    const [tasks, setTasks] = useState(null)

    const handleOnDrag = (e, name, desc) => {
        e.dataTransfer.setData('name', name)
        e.dataTransfer.setData("desc", desc)
    }

    const handleOnDrop = (e) => {
        if (tasks) {
            setTasks([...tasks.filter((taskname) => taskname !== e.dataTransfer.getData("name")), e.dataTransfer.getData("name"), e.dataTransfer.getData("desc")])
        } else {
            setTasks([e.dataTransfer.getData("name")])
        }

    }

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
                <div className='tasks' draggable onDragStart={(e) => {
                    console.log("Dragging Task 4")
                    handleOnDrag(e, 'Task4', "Hello, This is task")
                }}>Task 4</div>
                <div className='tasks' draggable onDragStart={(e) => {
                    console.log("Dragging Task 5")
                    handleOnDrag(e, 'Task5', "Hello, This is task")
                }}>Task 5</div>
            </div>

            <div className='drop-tasks-cont' onDragOver={(e) => e.preventDefault()} onDrop={handleOnDrop}>
                <h3 style={{ color: "white", fontSize: "1.9rem" }}>Tasks Dropped</h3>
                {
                    tasks && tasks.map((taskname) => {
                        return <div className='tasks' draggable onDragStart={(e) => {
                            console.log("Dragging Task 1")
                            handleOnDrag(e, 'Task1')
                        }}>
                            {taskname}
                            <p>{taskname.desc}</p>
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default TodoTasks