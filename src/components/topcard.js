import React from 'react'


function Topcard(props) {
  console.log(props)
  return (
    <div className='App__main'>
      {props.gender.length===0 ? null : 
      <div class="card_top">
        <div className='card_top-photo'>
          <img src={props.photo} alt="" />
        </div>
        <div className='card_top-details'>
          <p className='card_top-details-name'>{props.tname} {props.fname} {props.lname}</p>
          <p className='card_top-details-address'>{props.stno}, {props.stname}, {props.state}, {props.city}, {props.country}, {props.postcode} </p>
          <p className='card_top-details-location'>{props.offset} - {props.descrip}</p>
          <p className='card_top-details-gender'>{props.gender}</p>
       </div>
      </div>
     }
    </div>
  )
}

export default Topcard