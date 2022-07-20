import '../assets/global.css';

function Form(props) {
    const createHandler = (event) => {
        event.preventDefault();
        if (props.input) {
            const student = {
                id: Date.now(),
                name: props.input,
                isPresent: undefined,
            }
            props.setStudentList([...props.studentList, student]);
            props.setInput('');
        }
        else {
            alert("you are dumb!");
        }
    }

    const updateHandler = (event) => {
        event.preventDefault();
        if (props.input) {
            props.editableItem.name = props.input;
            props.setIsEditable(false);
            props.setEditableItem(null);
            props.setInput("");
        }
        else {
            alert("you are dump!");
        }
    }

    return (
        <div className='Form'>
            <form action="">
                <input type="text" placeholder='Create New Student' value={props.input} onChange={(event) => props.setInput(event.target.value)} />
                <button onClick={(event) => props.isEditable ? updateHandler(event) : createHandler(event)}>
                    {props.isEditable ? "Update Student" : "Add Student"}
                </button>
            </form>
        </div>
    )
}

export default Form