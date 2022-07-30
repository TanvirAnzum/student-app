import { createContext, useState } from 'react';

export const StudentContext = createContext();

function StudentProvider(props) {

    const [studentList, setStudentList] = useState([]);
    const [editableItem, setEditableItem] = useState(null);
    const [isEditable, setIsEditable] = useState(false);
    const [input, setInput] = useState('');
    const [errorMsg, setErrorMsg] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    

    const valueObject = {
        studentList,
        setStudentList,
        editableItem,
        setEditableItem,
        isEditable,
        setIsEditable,
        input,
        setInput,
        errorMsg,
        setErrorMsg,
        isLoading,
        setIsLoading
    }

    return (
    <StudentContext.Provider value = {valueObject}>
        {props.children}
    </StudentContext.Provider>
  )
}

export default StudentProvider