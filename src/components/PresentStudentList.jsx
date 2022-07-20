import React from 'react';

function PresentStudentList(props) {
    return (
        <div>
            <h1>Present student</h1>
            <ul>
                {
                    props.studentList.filter((item) => {
                        if (item.isPresent === true) return true;
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

export default PresentStudentList