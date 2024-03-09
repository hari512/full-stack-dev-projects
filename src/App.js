import './App.css';
import ListEmployee from './components/ListEmployees';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';


import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AddEmployee } from './components/AddEmployee';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path='/' Component={ListEmployee}></Route>
            <Route path='/employees' Component={ListEmployee}></Route>
            <Route path='/add-emp' Component={AddEmployee}></Route>
            <Route path='/edit-emp/:id' Component={AddEmployee}></Route>
          </Routes>
        </div>
        <Footer />
        </Router>
    </div>
  );
}

export default App;
