
import styles from '../Newsitem.module.css'
import { useEffect, useState } from 'react'
import Entertainmentnewsitem from './Entertainmentnewsitem';


function Entertainmentnewspage() {

        const [newsitem, setNewsitem] = useState([]);

        useEffect(() => {

                // api key :- bfb0b045c48e4d8898097147b3e3adf2

                let p = fetch('https://newsapi.org/v2/top-headlines?country=in&entertainment&apiKey=bfb0b045c48e4d8898097147b3e3adf2')
                p.then(res => res.json())
                        .then((value) => {
                                setNewsitem(value.articles)
                        })

        }, [])

  return (
        <>
        <div className={`${styles.rjNewpage}`}>

                {newsitem.map((item, index) => <Entertainmentnewsitem key={index} title={item.title} description={item.description} imageURL={item.urlToImage} LinkURL={item.url} ></Entertainmentnewsitem>)}

        </div>
</>
  )
}

export default Entertainmentnewspage