import logo from './logo.svg';
import './App.css';
import Table from './components/table';
import { tableData } from './components/data1';
import { tableData2 } from './components/data2';
import { useState } from 'react';

function App() {
  let {headers ,data} = tableData
  let {headers2 , data2} = tableData2

  const [fil,setfil] = useState()
  
  function filter(e){
    setfil(e.target.value)
  }

  const [sort,setsort] = useState(false)
  console.log(sort)

  function sorting(){
      setsort(!sort)
  }

  function refresh(){
    window.location.reload(false);
  }

  return (
    <div className="App">
      <div className='table1'>
        <input type='text' className='input-box' placeholder='Search here' onChange={filter}></input>
        <Table headers={headers} data={data} pagination={true} filter={fil}/>
      </div>
      <div className='table2'>
        <button onClick={sorting}>Sort by age</button>
        <button onClick={refresh}>Refresh</button>
      <Table headers={headers2} data={data2} sorting={sort}/>
      </div>
    </div>
  );
}

export default App;
