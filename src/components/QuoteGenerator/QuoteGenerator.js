import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './QuoteGenerator.module.scss';
import axios from 'axios';
import clsx from 'clsx';

const QuoteGenerator = ({ className }) => {
  const url = 'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json ';

  const [ displayedQuote, setDisplayedQuote ] = useState({});
  const [ drawnQuotes, setdrawnQuotes ] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const quotes = response.data;
        const randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
        setDisplayedQuote(randomQuote);
        setdrawnQuotes([...drawnQuotes, randomQuote]);
      })
      .catch(err=>console.log('error to:', err.message));
  }, []);

  const index = drawnQuotes.indexOf(displayedQuote);
  const quote = displayedQuote && displayedQuote.quote;
  const author = displayedQuote && displayedQuote.author;

  const getRandomQuote = () => {
    axios
      .get(url)
      .then((response) => {
        const quotes = response.data;
        const randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
        setDisplayedQuote(randomQuote);
        setdrawnQuotes([...drawnQuotes, randomQuote]);
      })
      .catch(err=>console.log('error to:', err.message));
  };

  const getPreviousQuote = () => {
    if(index < 1) {
      alert('There is no previous quote..');
    } else {
      const previousQuote = drawnQuotes[index - 1];
      setDisplayedQuote(previousQuote);
    }
  };

  const getNextQuote = () => {
    if(index >= (drawnQuotes.length - 1)) {
      alert('There is no next quote..');
    } else {
      const nextQuote = drawnQuotes[index + 1];
      setDisplayedQuote(nextQuote);
    }
  };

  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.topButtonsContainer}>
        <button
          className={styles.btn_previous}
          onClick={() => getPreviousQuote()}
        >previous quote</button>
        <button
          className={styles.btn_next}
          onClick={() => getNextQuote()}
        >next quote</button>
      </div>

      <div className={styles.quoteContainer}>
        <p className={styles.quote}>{quote}</p>
        <p className={styles.author}>{author}</p>
      </div>

      <div className={styles.downButtonsContainer}>
        <button
          className={styles.btn_draw}
          onClick={() => getRandomQuote()}
        >draw quote</button>
      </div>
    </div>
  );
};

QuoteGenerator.propTypes = {
  className: PropTypes.string,
};

export default QuoteGenerator;
