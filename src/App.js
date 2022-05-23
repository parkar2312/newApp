import 'bootstrap/dist/css/bootstrap.min.css';
import './styling/main.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chart from './components/bargraph2';
import Index from './components/index';


function App() {

  return (
    <BrowserRouter>
      <Routes >
        <Route exact path="/newApp" element={<Index />} />
        <Route path="/newApp/bar" element={<Chart />} />
      </Routes >
    </BrowserRouter>
  )
}

export default App;
