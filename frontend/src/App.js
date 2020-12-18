import React from'react';
import Routes from './routes';
import { Footer } from './components/footer';
import { Menu } from './components/menu';

export default function App() {
  return(
    <div>
      <Menu />
      <Routes />
      <Footer />
    </div>
  )
};
