function Card(props) {
      
    return (
      <>
       <div className='card-container'>
        <div card-details-box>
          <span className={props.online ? "pro online" : "pro offline"}>ONLINE</span>
          <img src={props.profile}></img>
          <div className='card-detail'>
            <div>{props.name}</div>
            <div>{props.city}</div>
            <div>{props.work}</div>
          </div>
          <div className='card-button'>
            <button>Message</button>
            <button>Following</button>
          </div>
          <div className='skills'>
            <h6>skills</h6>
            <ul>
              {props.skills.map((skills,i)=>(
                <li key={i}>{skills}</li>
              ))}
            </ul>
          </div>
        </div>
       </div>
      </>
    )
  }
  
  export default Card;