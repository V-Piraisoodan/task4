import React, { useState } from 'react'
import { tableData2 } from './data2'

const Sorting = ({sorting}) => {
    let {headers ,data2} = tableData2
    const value = data2
    const sort = sorting

  return (

    <div className="data">
       {sort ?
       value
       .sort((a,b)=> a.age > b.age ? 1 : -1)
       .map((val,index2)=>(
        <div className="header-data" key={index2}>
             <div className="header-slno slno">{val.slno}</div>
             <div className="header-name name">{val.name}</div>
             <div className="header-age age">{val.age}</div>
             <div className="header-email email">{val.email}</div>
        </div>    
        ))
          :
        value
        .map((val,index2)=>(
        <div className="header-data" key={index2}>
             <div className="header-slno slno">{val.slno}</div>
             <div className="header-name name">{val.name}</div>
             <div className="header-age age">{val.age}</div>
             <div className="header-email email">{val.email}</div>
        </div>    
        ))
        }
    </div>
  )
}

export default Sorting