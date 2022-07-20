import React from 'react';

function AbsentStudentList(props) {
    return (
        <div>
            <h1>Absent student</h1>
            <ul>
                {
                    props.studentList.filter((item) => {
                        if (item.isPresent === false) return true;
                        return false;
                    }).map(student => (
                        <li>{student.name}
                            <button onClick={() => { props.toggleHandler(student.id) }}>Accidentally Added</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default AbsentStudentList