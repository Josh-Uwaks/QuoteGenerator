import React from 'react'
import styles from './quote.module.scss'
import useFetchQuote from './useFetchQuote'
import {BsFillDice5Fill} from 'react-icons/bs'
const Quote = () => {
  const [quote, getNewQuote] = useFetchQuote();
  return (
    <div className={styles.container}>
      <div className={styles.quote}>
        <p>{quote.content}</p>
      </div>
      <button onClick={getNewQuote} className={styles.button}><BsFillDice5Fill size={25}/></button>
    </div>
  )
}

export default Quote