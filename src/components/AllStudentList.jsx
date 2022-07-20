import React from 'react';
import '../assets/global.css';

function AllStudentList(props) {

    const editHandler = (id) => {
        const tobeEdited = props.studentList.find(item => item.id === id);
        console.log(props);
        props.setIsEditable(true);
        props.setEditableItem(tobeEdited);
        props.setInput(tobeEdited.name);
    }

    const deleteHandler = (id) => {
        const tobeDeleted = props.studentList.filter(item => {
            if (item.id === id) return false;
            else return true;
        })
        props.setStudentList(tobeDeleted);
    }


    const AbsentHandler = (id) => {
        const selectedStudent = props.studentList.find(index => index.id === id);
        if (selectedStudent.isPresent === undefined) {
            selectedStudent.isPresent = false;
            props.setStudentList([...props.studentList]);
        }
        else {
            alert("Student already in added to the list ")
        }

    }

    const PresentHandler = (id) => {
        const selectedStudent = props.studentList.find(index => index.id === id);


        if (selectedStudent.isPresent === undefined) {
            selectedStudent.isPresent = true;
            props.setStudentList([...props.studentList]);
        }
        else {
            alert("Student already in added to the list ")
        }
    }

    return (
        <div className='All-Student'>
            <h1>All student</h1>
            <ul>
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
            </ul>
        </div>
    )
}

export default AllStudentList