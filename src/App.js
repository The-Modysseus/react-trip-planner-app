import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { setBaseUrl } from './Services/api';
import { PageLayout } from './Components/PageLayout';
import { CreateTemplate } from './Components/CreateTemplate';
import { ListTemplates } from './Components/ListTemplates';
import { EditTemplate } from './Components/EditTemplate';
import UnknownPage from './Components/UnknownPage';

function App() {
  setBaseUrl('http://localhost:3000')
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageLayout />} />
        <Route path="/createtemplate" element={<CreateTemplate />} />
        <Route path="/listtemplates" element={<ListTemplates />} />
        <Route path="/edittemplate" element={<EditTemplate />} />
        <Route path="*" element={<UnknownPage />} />
      </Routes>
    </Router>
  );
}

export default App;
