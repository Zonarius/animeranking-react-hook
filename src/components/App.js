import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default function App() {
  return (
    <>
      <div className="mycontent">
        <Header />
        <Content />
      </div>
      <Footer />
    </>
  )
}
