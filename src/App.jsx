import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Covenas1 } from './components/Covenas1';
import { Covenas2 } from './components/Covenas2';
import { Covenas3 } from './components/Covenas3';
import { Covenas4 } from './components/Covenas4';
import { Covenas5 } from './components/Covenas5';
import { Covenas6 } from './components/Covenas6';
import { Navigation } from './components/Navigation';

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <h1 className='text-center my-3'>Gallery Project</h1>
        </div>
        <div className='container d-flex justify-content-center'>
          <Routes>
            <Route path='/covenas1' element={<Covenas1 className='main-img-container'/>} />
            <Route path='/covenas2' element={<Covenas2 className='main-img-container'/>} />
            <Route path='/covenas3' element={<Covenas3 className='main-img-container'/>} />
            <Route path='/covenas4' element={<Covenas4 className='main-img-container'/>} />
            <Route path='/covenas5' element={<Covenas5 className='main-img-container'/>} />
            <Route path='/covenas6' element={<Covenas6 className='main-img-container'/>} />
          </Routes>
        </div>
        <div className='container'>
          <Navigation />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
