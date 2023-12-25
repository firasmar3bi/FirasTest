import React from 'react'

export default function Input( {id , name , type  , title , onChange } ) {
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor='id'> {title} <span className="text-danger">*</span></label>
      <input 
        type={type} 
        id={id} 
        name={name} 
        className="form-control"
        onChange={onChange} 
      />
    </div>
  )
}
