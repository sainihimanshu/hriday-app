import { useSelector } from 'react-redux';
import Landing from './pages/Landing';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Instructions from './pages/Instructions';
import Story from './pages/Story';

function App() {
  // const readings = useSelector(state => state.readings.readings);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/story" element={<Story />} />
      </Routes>
    </>
  );
}

export default App;
