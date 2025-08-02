import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
  path="/"
  element={
    <>
    <Layout>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      </Layout>
    </>
  }
/>
<Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/skills" element={<Layout><Skills /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
      </Routes>
    </Router>
  );
}
  
   

export default App;
