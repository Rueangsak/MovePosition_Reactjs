import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import './styles/styles.scss';

function App() {
  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </I18nextProvider>
    </BrowserRouter>
  );
}

export default App;
