import {useState, useEffect} from 'react'
import axios from 'axios'
function useFetchQuote(){
    const [quote, setQuote] = useState('Loading');
    const QuoteUrl = 'http://api.quotable.io/random'
    useEffect(() => {
        getNewQuote();
    }, [])

    const getNewQuote = async () => { 
       setQuote('Loading...');
       axios.get(QuoteUrl)
       .then((res) => {console.log(res.data)
        setQuote(res.data)})
        .catch(err => console.log(err))

    }
    return [quote, getNewQuote]
}

export default useFetchQuote;