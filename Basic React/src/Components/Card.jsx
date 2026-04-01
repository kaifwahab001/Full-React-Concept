import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
    return (
        <div className="card">

        <div className="top">
          <img src={props.job.logo} alt="logo" />
          <button>Save <Bookmark size={12} color='#b1b1b1'/> </button>
        </div>

        <div className="center">
          <h3>{props.job.company} <span> {props.job.poseted} </span></h3>
          <h2>{props.job.title}</h2>
          <div className='tag'>
            <h4>{props.job.type}</h4>
            <h4>{props.job.level}</h4>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h3>{props.job.salary}</h3>
            <p>{props.job.location}</p>
          </div>    
          <button>Apply</button>
        </div>
      </div>
    )
}

export default Card