
import { useEffect, useState } from 'react'
import styles from '../Newsitem.module.css'
import Technewsitem from './Technewsitem';


function Technewspage() {

        const [Technewitem,setTechnewsitem]=useState([]);

        useEffect(()=>{

        // api key :- bfb0b045c48e4d8898097147b3e3adf2

        let p=fetch('https://newsapi.org/v2/top-headlines?country=in&technology&apiKey=bfb0b045c48e4d8898097147b3e3adf2')
        p.then(res=>res.json())
        .then((value)=>{
                setTechnewsitem(value.articles)
                console.log(value.articles)})

   },[]) 

  return (
    <>
        <div className={`${styles.rjNewpage}`}>
        
        {Technewitem.map((item,index)=><Technewsitem key={index} title={item.title} description={item.   description} imageURL={item.urlToImage} LinkURL={item.url} ></Technewsitem>)}
        
    </div>
    </>
  )
}

export default Technewspage