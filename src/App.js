import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from './components/index';


function App() {

  return (
    <BrowserRouter>
      <Routes >
        <Route exact path="/" element={<Index/>} />
      </Routes >
    </BrowserRouter>
  )
}

export default App;
