import { useContext } from 'react';
import '../assets/global.css';
import { StudentContext } from '../contexts/StudentProvider';

function Form(props) {
    const objectValue = useContext(StudentContext);
    
    const createHandler = (event) => {
        event.preventDefault();
        if (objectValue.input) {
            const student = {
                id: Date.now() + '',
                name: objectValue.input,
                isPresent: undefined,
            }

            fetch(`http://localhost:3000/student`, {
                method: 'POST',
                body: JSON.stringify(student),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(() => {
                props.getData();
            })

            // objectValue.setStudentList([...objectValue.studentList, student]);
            objectValue.setInput('');
        }
        else {
            alert("you are dumb!");
        }
    }

    const updateHandler = (event) => {
        event.preventDefault();
        if (objectValue.input) {
            objectValue.editableItem.name = objectValue.input;
            fetch(`http://localhost:3000/student/${objectValue.editableItem.id}`, {
                method: 'PATCH',
                body: JSON.stringify(objectValue.editableItem),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(() => {
                objectValue.setEditableItem(null);
                props.getData();
            })

            objectValue.setIsEditable(false);
            objectValue.setInput("");
        }
        else {
            alert("you are dumb!");
        }
    }

    return (
        <div className='Form'>
            <form action="">
                <input type="text" placeholder='Create New Student' value={objectValue.input} onChange={(event) => objectValue.setInput(event.target.value)} />
                <button onClick={(event) => objectValue.isEditable ? updateHandler(event) : createHandler(event)}>
                    {objectValue.isEditable ? "Update Student" : "Add Student"}
                </button>
            </form>
        </div>
    )
}

export default Form