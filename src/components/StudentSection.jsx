import React from 'react'
import '../assets/global.css'
import AbsentStudentList from './AbsentStudentList'
import AllStudentList from './AllStudentList'
import PresentStudentList from './PresentStudentList'

function StudentSection(props) {

    const toggleHandler = (id) => {
        const selectedStudent = props.studentList.find(index => index.id === id);
        selectedStudent.isPresent = !selectedStudent.isPresent;
        props.setStudentList([...props.studentList]);
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
            />
            <PresentStudentList
                studentList={props.studentList}
                setStudentList={props.setStudentList}
                toggleHandler={toggleHandler}
            />
            <AbsentStudentList
                studentList={props.studentList}
                setStudentList={props.setStudentList}
                toggleHandler={toggleHandler}
            />
        </div>
    )
}

export default StudentSection