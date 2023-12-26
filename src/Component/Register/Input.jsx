import React from 'react'

export default function Input({type , id , name , title , value , onChange , errors , onBlur , touchad}) {
  
  // console.log(touchad);

  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={id}> {title} 
        <span className="text-danger">
          * {touchad&&errors[name]&&<p className='text-danger d-inline'>  {errors[name]} </p>} 
        </span>
      </label>
      <input 
        type={type} 
        name={name} 
        className="form-control"
        value={value}
        id={id} 
        onChange={onChange} 
        onBlur={onBlur} 
      />
      
    </div>
  )
}
