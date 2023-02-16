
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Layout from './components/layout/Layout';


function App() {
  // localhost:3000/ => AllMeetupsPage
  // localhost:3000/new-meetup => NewMeetupPage
  // localhost:3000/favorites => FavoritesPage

  return (

    <Router>
      <Layout>


        <Routes>
          <Route path="/React-Portfolio" element={<AboutMe />} />
          <Route path="/React-Portfolio/portfolio" element={<Portfolio />} />
          <Route path="/React-Portfolio/contact" element={<Contact />} />
          <Route path="/React-Portfolio/resume" element={<Resume />} />
        </Routes>

      </Layout>
    </Router>

  );
}

export default App;


