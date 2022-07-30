import { useState } from 'react';
import './assets/global.css';
import Form from './components/Form';
import StudentSection from './components/StudentSection';

function App() {

  const [studentList, setStudentList] = useState([]);
  const [editableItem, setEditableItem] = useState(null);
  const [isEditable, setIsEditable] = useState(false);
  const [input, setInput] = useState('');
  const [errorMsg,setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getData = () => {
    fetch(`http://localhost:3000/student`).then(res => res.json()).then( data => {
      setStudentList(data);
      setIsLoading(false);
    }).catch(err => {
      setErrorMsg(err.message);
      setIsLoading(false);
    })
  }

  return (
    <div className="App">
      <Form
        studentList={studentList}
        setStudentList={setStudentList}
        editableItem={editableItem}
        setEditableItem={setEditableItem}
        isEditable={isEditable}
        setIsEditable={setIsEditable}
        input={input}
        setInput={setInput}
        getData = {getData}
      />

      <StudentSection
        studentList={studentList}
        setStudentList={setStudentList}
        editableItem={editableItem}
        setEditableItem={setEditableItem}
        isEditable={isEditable}
        setIsEditable={setIsEditable}
        input={input}
        setInput={setInput}
        getData = {getData}
        isLoading = {isLoading}
        setIsLoading = {setIsLoading}
        errorMsg = {errorMsg}
        setErrorMsg = {setErrorMsg}
      />
    </div>
  );
}

export default App;
