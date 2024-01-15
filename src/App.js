import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { setBaseUrl } from './Services/api';
import { PageLayout } from './Components/PageLayout';
import { CreateTemplate } from './Components/CreateTemplate';

function App() {
  setBaseUrl('http://localhost:3000')
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageLayout />} />
        <Route path="/createtemplate" element={<CreateTemplate />} />
      </Routes>
    </Router>
  );
}

export default App;
