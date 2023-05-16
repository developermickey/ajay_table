// import AddressForm from './components/AddressForm';
// import AddressTable from './components/AddressTable';
import { BrowserRouter } from 'react-router-dom/dist';
import Table from './components/Table';

import Login from './pages/Login';
// import Table2 from './components/Table2';
// import AddForm from './components/AddForm';
// import AddDetails from './components/AddDetails';
import Register from './pages/Register';



import { BrowserRouter as Router, Switch, Route,Routes, Link, useNavigate } from 'react-router-dom';
import SignUp from './pages/SignUp';

import Remi from './pages/Remi';
import TableComponent from './pages/TableComponent';
import Table2 from './components/Table2';
// import suceess from './pages/suceess';

// import Remi from './pages/Remi';


function App() {
  return (
    <div>
      <BrowserRouter>
   <Routes>
    {/* <Route path="/" element={<Register/>}/> */}
    {/* <Route path="/login" element={<Login/>}/> */}
    {/* <Route path="/table" element={<Table/>}/> */}

   </Routes>
   </BrowserRouter>
   {/* <Table/> */}
   <Table2/>
   {/* <SignUp/> */}
   {/* <table/> */}
   {/* <Remi/> */}
   {/* <Suceess/> */}
   {/* <TableComponent/> */}
    </div>
  );
}

export default App;
