import React from 'react';

function AllStudentList(props) {

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
        <div>
            <h1>All student</h1>
            <ul>
                {
                    props.studentList.map(item => (
                        <li>
                            {item.name}
                            <button onClick={() => { AbsentHandler(item.id) }}>Absent</button>
                            <button onClick={() => { PresentHandler(item.id) }}>Present</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default AllStudentList