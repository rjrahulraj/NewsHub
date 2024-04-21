
import { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import styles from './Newsitem.module.css'

function Newspage() {

        const [newitem,setNewitem]=useState([]);

   useEffect(()=>{

        // api key :- bfb0b045c48e4d8898097147b3e3adf2

        let p=fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=bfb0b045c48e4d8898097147b3e3adf2')
        p.then(res=>res.json())
        .then((value)=>{
                setNewitem(value.articles)
                console.log(value.articles)})

   },[]) 
        
  return (
    <div className={`${styles.rjNewpage}`}>
        {newitem.map((item,index)=><Newsitem key={index} title={item.title} description={item.   description} imageURL={item.urlToImage} LinkURL={item.url} ></Newsitem>)}
        
    </div>
  )
}

export default Newspage