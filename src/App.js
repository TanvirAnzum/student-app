import { useState } from 'react';
import './App.css';

function App() {

  const [input,setInput] = useState('');
  const [studentList,setStudentList] = useState([]);

  const createHandler = (event) => {
    event.preventDefault();
    const student = {
      id: Date.now(),
      name: input,
      isPresent: undefined,
    }
    setStudentList([...studentList, student]);
    setInput('');
  }

  const AbsentHandler = (id) => {
    const selectedStudent = studentList.find(index => index.id === id);
    if(selectedStudent.isPresent === undefined) {
      selectedStudent.isPresent = false;
      setStudentList([...studentList]);
    }
    else {
      alert("Student already in added to the list ")
    }
    
  }

  const PresentHandler = (id) => {
    const selectedStudent = studentList.find(index => index.id === id);
    

    if(selectedStudent.isPresent === undefined) {
      selectedStudent.isPresent = true;
      setStudentList([...studentList]);
    }
    else {
      alert("Student already in added to the list ")
    }
  }

  const toggleHandler = (id) => {
    const selectedStudent = studentList.find(index => index.id === id);
    selectedStudent.isPresent = !selectedStudent.isPresent;
    setStudentList([...studentList]);
  }

  return (
    <div className="App">
      <form action="">
        <input type="text"  value={input} onChange={(event)=>setInput(event.target.value)} />
        <button onClick={(event) => createHandler(event)}>Add Student</button>
      </form>

      <div className="current-student">
        <h1>current student</h1>
      <ul>
          {
            studentList.map(item => (
              <li>
                {item.name}
                <button onClick={()=> {AbsentHandler(item.id)}}>Absent</button>
                <button onClick={()=>{PresentHandler(item.id)}}>Present</button>
              </li>
            ))
          }
      </ul>
      </div>
      <div className="present-student">
      <h1>Present student</h1>
        <ul>
        {
            studentList.filter((item) => {
              if (item.isPresent === true) return true;
              return false;
            }).map(student => (
              <li>{student.name}
              <button onClick={() => {toggleHandler(student.id)}}>Accidentally Added</button>
              </li>
            ))
          }
        </ul>
          
      </div>
      <div className="absent-student">
      <h1>Absent student</h1>
        <ul>
        {
            studentList.filter((item) => {
              if (item.isPresent === false) return true;
              return false;
            }).map(student => (
              <li>{student.name}
              <button onClick={() => {toggleHandler(student.id)}}>Accidentally Added</button>
              </li>
            ))
          }
        </ul>
          
      </div>
      
    </div>
  );
}

export default App;
