import logo from './logo.svg';
import './App.css';
import ProfilePage from './pages/ProfilePage';
import ContactMe from './pages/ContactMe';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Result from './pages/Result';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
      <Route path="/" element={<ProfilePage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
