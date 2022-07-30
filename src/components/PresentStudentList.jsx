import React from 'react';
import '../assets/global.css';


function PresentStudentList(props) {
    return (
        <div className='Present-Student'>
            <h1>Present student</h1>
            <ul>
                {props.isLoading && <h2 style={{ textAlign: "center" }}>Loading ...... </h2>}
                {
                    props.studentList.filter((item) => {
                        if (item.isPresent === true) return true;
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
                {props.errorMsg && <h2 style={{ textAlign: "center" }}>{props.errorMsg}</h2>}
            </ul>
        </div>
    )
}

export default PresentStudentList