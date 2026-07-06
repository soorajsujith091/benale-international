import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import HighlightsPage from './pages/HighlightsPage';
import FacilitiesPage from './pages/FacilitiesPage';
import TariffPage from './pages/TariffPage';
import FoodPage from './pages/FoodPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import FloatingActionButtons from './components/FloatingActionButtons';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/highlights" element={<HighlightsPage />} />
        <Route path="/facilities" element={<FacilitiesPage />} />
        <Route path="/tariff" element={<TariffPage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <FloatingActionButtons />
    </>
  );
}

export default App;
