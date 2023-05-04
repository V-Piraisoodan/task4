import React, { useState } from 'react'
import { tableData } from './data1';

const Pagination = ({filval}) => {

  let {headers ,data} = tableData
  const [page,setpage] = useState(1);
  const recordsPerpage = 5;
  const lastIndex = page * recordsPerpage;
  const firstIndex = lastIndex - recordsPerpage;
  const records = data.slice(firstIndex,lastIndex);
  const npage = Math.ceil(data.length / recordsPerpage);
  const numbers = [...Array(npage+1).keys()].slice(1)

  function prePage(){
    if(page !== 1){
        setpage(page-1)
    }
}
function nextPage(){
    if(page !== npage){
        setpage(page+1)
    }
}
function changeCpage(id){
    setpage(id)
}

return (
  <div className="data">
  {records.filter((v)=>{
                    if(filval === ""){
                        return v
                    }
                    else if(filval === undefined){
                        return v
                    }
                    else if(v.name.toLowerCase().includes(filval.toLowerCase())){
                        return v;
                    }
                    else if(v.age.includes(filval)){
                        return v;
                    }
                    else if(v.email.toLowerCase().includes(filval.toLowerCase())){
                        return v;
                    }
                    else if(v.slno == filval){
                        return v
                    }
     
                })
    .map((val,index2)=>(
      <div className="header-data" key={index2}>
           <div className="header-slno slno" >{val.slno}</div>
           <div className="header-name name" >{val.name}</div>
           <div className="header-age age" >{val.age}</div>
           <div className="header-email email" >{val.email}</div>
           <div className="header-sex sex" >{val.sex}</div>
           <div className="header-religion religion" >{val.religion}</div>
      </div>        
  ))}
    <nav>
  <ul>
      <li>
          <a href="#" onClick={prePage}>Previous</a>
      </li>
      {
          numbers.map((e,i) => (
              <li key={i}>
                  <a href="#" onClick={()=>changeCpage(e)}>{e}</a>
              </li>
          ))
      }
      <li>
          <a href="#" onClick={nextPage}>Next</a>
      </li>
  </ul>
</nav>
</div>

)
}

export default Pagination