import React from 'react'
import '../assets/global.css'
import AbsentStudentList from './AbsentStudentList'
import AllStudentList from './AllStudentList'
import PresentStudentList from './PresentStudentList'

function StudentSection(props) {

    const toggleHandler = (id) => {
        const selectedStudent = props.studentList.find(index => index.id === id);
        selectedStudent.isPresent = !selectedStudent.isPresent;
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

    return (
        <div className="Student-section">
            <AllStudentList
                studentList={props.studentList}
                setStudentList={props.setStudentList}
                editableItem={props.editableItem}
                setEditableItem={props.setEditableItem}
                isEditable={props.isEditable}
                setIsEditable={props.setIsEditable}
                input={props.input}
                setInput={props.setInput}
                getData={props.getData}
                isLoading={props.isLoading}
                errorMsg={props.errorMsg}
            />
            <PresentStudentList
                studentList={props.studentList}
                setStudentList={props.setStudentList}
                toggleHandler={toggleHandler}
                isLoading={props.isLoading}
                errorMsg={props.errorMsg}
            />
            <AbsentStudentList
                studentList={props.studentList}
                setStudentList={props.setStudentList}
                toggleHandler={toggleHandler}
                isLoading={props.isLoading}
                errorMsg={props.errorMsg}
            />
        </div>
    )
}

export default StudentSection