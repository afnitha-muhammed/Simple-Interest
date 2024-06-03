import { useState } from 'react'
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
  //state to hold data from input field
  const [principle, setprinciple] = useState(0)
  const [rate, setrate] = useState(0)
  const [year, setyear] = useState(0)
  const [interest, setinterest] = useState(0)

  /* for conditional rendering*/
  const [ispriciple, setIsPrinciple] = useState(true)
  const [israte, setIsrate] = useState(true)
  const [isyear, setIsyear] = useState(true)

  const validate = (e)=>{
    // console.log(e.target.value);
    // console.log(e.target.name);

  let name = e.target.name
  let value = e.target.value
  console.log(!!value.match(/^[0-9]*$/)); 

  if(!!value.match(/^[0-9]*$/)){
    if(name == 'principle'){
      setprinciple(value)
      setIsPrinciple(true)
    }else if(name == 'rate'){
      setrate(value)
      setIsrate(true)
    }else{
      setyear(value)
      setIsyear(true)
    }
  }
  else{
    if(name == 'principle'){
      setprinciple(value)   /**if the removed invalid case value do not come on input box while try to type */
      setIsPrinciple(false)
    }else if(name == 'rate'){
      setrate(value)
      setIsrate(false)
    }else{
      setyear(value)
      setIsyear(false)
    }
  }

    // console.log(principle)
    // console.log(rate);
    // console.log(year);
  }

 /* reset button function */
 const handleReset = ()=>{
  setprinciple(0)
  setrate(0)
  setyear(0)
  setinterest(0)
  setIsPrinciple(true)
  setIsrate(true)
  setIsyear(true)
}

const calculate =()=>{
  setinterest((principle*rate*year)/100)
}
  return (
    <>
     <div className="d-flex justify-content-center align-items-center mt-5">
     <div className="form-floating shadow p-5 w-50 bg-light">
     <h3 className='text-success text-center'>Simple Interest App</h3>
     <p className='text-center'>Calculate Your Simple Interest easily</p>
     <div className='mt-2 p-5 flex-column border border-primary total rounded bg-success d-flex justify-content-center align-items-center'>
     <h2 className='text-light'><i class="fa-solid fa-indian-rupee-sign fs-3"> { interest}</i></h2>
     <h5 className='text-light ms-2'>Total</h5>
     </div>
     <form className='mt-3'>
     <div class="form-floating">
     <TextField id="outlined-basic" value={principle || ""} label="₨. Priciple Amount" name='principle' variant="outlined" onChange={(e)=>validate(e)} fullWidth/>
      { !ispriciple &&
      <p className='text-danger'>*Invalid Input</p>  /* conditional rendering */ }
     </div>
     <div class="form-floating mt-3">
     <TextField id="outlined-basic" value={rate || ""} label="Interest rate (p/a)%" name='rate' variant="outlined" onChange={(e)=>validate(e)} fullWidth/>
     { !israte &&
     <p className='text-danger'>*Invalid Input</p>  /* conditional rendering */ }
     </div>
     <div class="form-floating mt-3">
     <TextField id="outlined-basic" value={year || ""} label="Years (Yr)" variant="outlined" name='year' onChange={(e)=>validate(e)} fullWidth/>
     { !isyear &&
     <p className='text-danger'>*Invalid Input</p>  /* conditional rendering */ }
     </div>
     <div className="d-felx content-between">
     <Button className='mt-3' variant="contained" color="success" style={{width:'190px',height:'40px'}} disabled={ispriciple && israte && isyear ? false:true} onClick={calculate}>Calculate</Button>
     <Button className='ms-3 mt-3 w-25' variant="outlined" onClick={handleReset} color="success" style={{width:'190px',height:'40px'}} >Reset</Button>
     </div>
     </form>
     
     </div>
     </div>
    </>
  )
}

export default App
