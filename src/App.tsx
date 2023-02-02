import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/mainPage';
import ContentPage from './pages/contentPage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/content" element={<ContentPage />} />
    </Routes>
  );
}

export default App;
