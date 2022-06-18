import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar.jsx';
import Friends from './components/Friends/Friends';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className='app'>
    <ScrollToTop />
    <Header />
    <div className='content_wrapper'>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/friends' element={<Friends />}/>
    <Route path='/profile' element={<Profile />}/>
    <Route path='/profile/:userId' element={<Profile />}/>
    <Route path='/news' element={<News />}/>
    <Route path='/login' element={<Login />}/>
    </Routes>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
