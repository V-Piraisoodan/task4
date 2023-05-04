import React, { useState } from "react";
import "./table.css";
import Pagination from "./pagination";
import Sorting from "./sorting";


function Table(props){
    const {headers,data,pagination,filter,sorting} = props
   
    return(
        <div className="table-container">
            <div className="header">
                {headers.map((val,index1)=>(
                    <div className={`header-${val.field} header-value`} key={index1}>{val.header}</div>
                ))}
            </div>

             {pagination ?  <Pagination filval={filter}/> :  <Sorting sorting={sorting}/>}

        </div>
    )
}

export default Table;