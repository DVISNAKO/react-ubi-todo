import './App.css';
import {BrowserRouter} from "react-router-dom";
import Navbar from './components/UAI/navbar/Navbar';
import AppRouter from './components/UAI/router/AppRouter';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter/>
    </BrowserRouter>
  );
}


export default App;
