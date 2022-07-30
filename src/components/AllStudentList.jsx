import React, { useEffect } from 'react';
import '../assets/global.css';

function AllStudentList(props) {

    useEffect(() => {
        props.getData();
    }, [])


    const editHandler = (id) => {
        const tobeEdited = props.studentList.find(item => item.id === id);
        console.log(props);
        props.setIsEditable(true);
        props.setEditableItem(tobeEdited);
        props.setInput(tobeEdited.name);
    }

    const deleteHandler = (id) => {
        // const tobeDeleted = props.studentList.filter(item => {
        //     if (item.id === id) return false;
        //     else return true;
        // })
        // props.setStudentList(tobeDeleted);

        fetch(`http://localhost:3000/student/${id}`, {
            method: 'DELETE'
        }).then(() => {
            props.getData();
        })
    }


    const AbsentHandler = (id) => {
        const selectedStudent = props.studentList.find(index => index.id === id);
        if (selectedStudent.isPresent === undefined) {
            selectedStudent.isPresent = false;
            fetch(`http://localhost:3000/student/${id}`, {
                method: 'PATCH',
                body: JSON.stringify(selectedStudent),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(() => {
                props.getData();
            })
        }
        else {
            alert("Student already in added to the list ")
        }

    }

    const PresentHandler = (id) => {
        const selectedStudent = props.studentList.find(index => index.id === id);


        if (selectedStudent.isPresent === undefined) {
            selectedStudent.isPresent = true;
            fetch(`http://localhost:3000/student/${id}`, {
                method: 'PATCH',
                body: JSON.stringify(selectedStudent),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(() => {
                props.getData();
            })
        }
        else {
            alert("Student already in added to the list ")
        }
    }

    return (
        <div className='All-Student'>
            <h1>All student</h1>
            <ul>
                {props.isLoading && <h2 style={{ textAlign: "center" }}>Loading ...... </h2>}

                {
                    props.studentList.map(item => (
                        <li>
                            <p>
                                {item.name}
                            </p>
                            <span>
                                <button onClick={() => { editHandler(item.id) }}>Edit</button>
                                <button onClick={() => { deleteHandler(item.id) }}>Delete</button>
                                <button onClick={() => { AbsentHandler(item.id) }}>Absent</button>
                                <button onClick={() => { PresentHandler(item.id) }}>Present</button>
                            </span>
                        </li>
                    ))
                }

                {props.errorMsg && <h2 style={{ textAlign: "center" }}>{props.errorMsg}</h2>}
            </ul>
        </div>
    )
}

export default AllStudentList