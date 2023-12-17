import Header from './components/Header/Header'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import History from './components/History/History';
import Footer from './components/Footer/Footer';
import ProjectAnimation from './components/Main/ProjectAnimation/ProjectAnimation';
import Psiho from './components/Main/Psiho/Psiho';

function App() {
  return (
    <div className='app-wraper'>
    <BrowserRouter>
    <Header/>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='*' element={<div>NOT FOUND 404.</div> } />
    <Route path='/history' element={<History/>}/>
    <Route path='/projectAnimation' element={<ProjectAnimation/>}/>
    <Route path='/psychology' element={<Psiho/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;


