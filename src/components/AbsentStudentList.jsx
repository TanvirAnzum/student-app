import React, { useContext } from 'react';
import '../assets/global.css';
import { StudentContext } from '../contexts/StudentProvider';

function AbsentStudentList(props) {

    const { studentList, isLoading, errorMsg } = useContext(StudentContext);
    

    return (
        <div className='Absent-Student'>
            <h1>Absent student</h1>
            <ul>
                {isLoading && <h2 style={{ textAlign: "center" }}>Loading ...... </h2>}
                {
                    studentList.filter((item) => {
                        if (item.isPresent === false) return true;
                        return false;
                    }).map(student => (
                        <li>
                            <p>
                                {student.name}
                            </p>
                            <span>
                                <button onClick={() => { props.toggleHandler(student.id) }}>Accidentally Added</button>
                            </span>

                        </li>
                    ))
                }
                {errorMsg && <h2 style={{ textAlign: "center" }}>{errorMsg}</h2>}
            </ul>
        </div>
    )
}

export default AbsentStudentList