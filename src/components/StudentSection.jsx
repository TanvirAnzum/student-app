import React, { useContext } from 'react'
import '../assets/global.css'
import { StudentContext } from '../contexts/StudentProvider'
import AbsentStudentList from './AbsentStudentList'
import AllStudentList from './AllStudentList'
import PresentStudentList from './PresentStudentList'

function StudentSection(props) {

    const { studentList } = useContext(StudentContext);

    const toggleHandler = (id) => {
        const selectedStudent = studentList.find(index => index.id === id);
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
            <AllStudentList getData={props.getData} />
            <PresentStudentList toggleHandler={toggleHandler} />
            <AbsentStudentList toggleHandler={toggleHandler} />
        </div>
    )
}

export default StudentSection