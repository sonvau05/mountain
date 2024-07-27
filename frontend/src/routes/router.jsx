import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/header_footer/Header/Header';
import Home from '../components/home/Home';
import Notfound from '../components/404/notfound';
import About from '../components/aboutus/About';
import Admin from '../components/admin/Admin';
import Contact from '../components/contact/Contact';
import Group from '../components/group/Group';
import Mountain from '../components/mountain/Mountain';
import Blog from '../components/Blog/Blog';
import User from '../components/User/User';


const RouterApp = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mountains" element={< Mountain />} />
          <Route path="/admin" element={<Admin />}>
            {/* <Route path="users" element={<TableUser />} />
            <Route path="mountains" element={<TableMountain />} />
            <Route path="group" element={<ListGroup />} /> */}
          </Route>
          <Route path="/blog" element={<Blog />} />
          <Route path="/group" element={<Group />} />
          <Route path="/login" element={<User />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Routes>

      </BrowserRouter>
    </>
  );

}
export default RouterApp;