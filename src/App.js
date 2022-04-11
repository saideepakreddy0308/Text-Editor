import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import About from './components/About';
import Alert from './components/Alert';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  const [mode,setMode] = useState('light');

  const toggleMode = () => {
  if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(70, 36, 76)'; 
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'rgb(247, 246, 242)';
      showAlert("Light mode has been enabled", "success");
      
    }
  }
    const [alert,setAlert] = useState(null);
    const showAlert = (message,type) => {
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
    }, 1500);
    }
  
  return (
    <Router>
    <Navbar title= "TextEditor" mode={mode} toggleMode={toggleMode} key={new Date()} aboutText='About'/>
    <Alert alert={alert} />
    <div className="container my-3">
    <Switch>
    <Route exact path="/about"> <About mode={mode}/> </Route>
    <Route exact path="/"> <TextForm heading="TRY IT NOW! " mode={mode} /> </Route>
    </Switch>
    </div>
    <Footer />
    </Router>

  );
}

export default App;
