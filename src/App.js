import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Shared/NotFound/NotFound';
import AddItem from './Pages/AddItem/AddItem';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import { ToastContainer } from 'react-toastify';
import Inventory from './Pages/Home/Inventory/Inventory';
import VgItems from './Pages/Home/VgItems/VgItems';
import VgItemDetails from './Pages/VgItemDetails/VgItemDetails';
import ManageItem from './Pages/ManageItem/ManageItem';
import MyItem from './Pages/MyItem/MyItem';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Shared/Footer/Footer';




function App() {
 
  return (
    <div>
      
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/addItem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>

        }></Route>
        <Route path='/manageItem' element={
          <RequireAuth>
            <ManageItem></ManageItem>
          </RequireAuth>

        }></Route>
        <Route path='/myItem' element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>}>

          </Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/vgItem' element={<VgItems></VgItems>}></Route>
        <Route path='/vgItem/:vgItemId' element={
          <RequireAuth>
            <VgItemDetails></VgItemDetails>
          </RequireAuth>

        }></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
