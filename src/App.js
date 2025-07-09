// import logo from './logo.svg';
import Firstcomp from './Component/Firstcomp';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Eventbinding from './Component/Eventbinding';
import Classcomp from './Component/Classcomp';
import Message from './Component/Message';
// import Task from './Component/task';
import Myform from './Component/Myform';
import Navbar from './Component/Navbar';
import { Routes, Route } from 'react-router-dom';
import Parent from './Component/Childcomponent/Parent';
import Child1 from './Component/Childcomponent/Child1';
import Child2 from './Component/Childcomponent/Child2';
import Dashboard from './Component/CRUD/Dashboard'
import Nomatch from './Nomatch';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path='/' element={<Classcomp />} />
          <Route path='Message' element={<Message />} />
          <Route path='Myform' element={<Myform />} />
          <Route path='Eventbinding' element={<Eventbinding />} />
          <Route path='Firstcomp' element={<Firstcomp />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='Parent' element={<Parent />}>
            <Route index element={<Child1 />} />
            <Route path='Child1' element={<Child1 />} />
            <Route path='Child2' element={<Child2 />} />
          </Route>
          <Route path='*' element={<Nomatch />} />
      </Routes>


    </div>
  );
}

export default App;
