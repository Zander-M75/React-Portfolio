
import { Route, Routes } from 'react-router-dom';

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

    <Layout>


      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>

    </Layout>
  );
}

export default App;


