import { useState } from 'react';
import './assets/global.css';
import Form from './components/Form';
import StudentSection from './components/StudentSection';

function App() {

  const [studentList, setStudentList] = useState([]);
  const [editableItem, setEditableItem] = useState(null);
  const [isEditable, setIsEditable] = useState(false);
  const [input, setInput] = useState('');

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
      />
    </div>
  );
}

export default App;
