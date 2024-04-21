import styles from './Newsitem.module.css'

function Newsitem({title,description,imageURL, LinkURL}) {
        return (

                <>
                 <div className={`card ${styles.rjCard}  bg-dark text-light`} style={{ width: "18rem", height:"30rem"}}>
                                <img src={`${imageURL}`} style={{height:"200px", width:"284px" }} className="card-img-top" alt="..." />
                                <div className="card-body">
                                        <h5 className="card-title">{String(title).slice(0,70)}</h5>
                                        <p className="card-text">
                                               {String(description).slice(0,125)}
                                        </p>
                                        <a href={LinkURL} className="btn btn-primary rj-btn" >
                                                Read More
                                        </a>
                                </div>
                        </div>

                </>
        )
}

export default Newsitem