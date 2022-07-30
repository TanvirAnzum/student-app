import { useContext } from 'react';
import './assets/global.css';
import Form from './components/Form';
import StudentSection from './components/StudentSection';
import { StudentContext } from './contexts/StudentProvider';


function App() {

  const {setIsLoading,setStudentList,setErrorMsg} = useContext(StudentContext);

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
      <Form getData={getData} />
      <StudentSection getData = {getData} />
    </div>
  );
}

export default App;
