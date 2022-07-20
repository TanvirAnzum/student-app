import { useState } from 'react';

function Form(props) {
    const [input, setInput] = useState('');

    const createHandler = (event) => {
        event.preventDefault();
        if (input) {
            const student = {
                id: Date.now(),
                name: input,
                isPresent: undefined,
            }
            props.setStudentList([...props.studentList, student]);
            setInput('');
        }
        else {
            alert("you are dumb!");
        }

    }

    return (
        <div>
            <form action="">
                <input type="text" value={input} onChange={(event) => setInput(event.target.value)} />
                <button onClick={(event) => createHandler(event)}>Add Student</button>
            </form>
        </div>
    )
}

export default Form