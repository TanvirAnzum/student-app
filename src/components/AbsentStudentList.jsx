import React from 'react';
import '../assets/global.css';

function AbsentStudentList(props) {
    return (
        <div className='Absent-Student'>
            <h1>Absent student</h1>
            <ul>
                {
                    props.studentList.filter((item) => {
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
            </ul>
        </div>
    )
}

export default AbsentStudentList