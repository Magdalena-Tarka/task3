import React from 'react';
import Container from './components/Container/Container';
import QuoteGenerator from './components/QuoteGenerator/QuoteGenerator';
import './styles/global.scss';

function App() {
  return (
    <div>
      <Container>
        <QuoteGenerator />
      </Container>
    </div>
  );
}

export default App;
