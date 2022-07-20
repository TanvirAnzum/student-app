import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import StudentSection from './components/StudentSection';


function App() {

  const [studentList, setStudentList] = useState([]);
  return (
    <div className="App">
      <Form
        studentList={studentList}
        setStudentList={setStudentList}
      />

      <StudentSection
        studentList={studentList}
        setStudentList={setStudentList}
      />
    </div>
  );
}

export default App;
