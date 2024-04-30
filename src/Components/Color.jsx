import { useEffect, useState } from 'react'
function Color()
 {
  const [color, setColor] = useState("")
  const click = color =>
  {
    setColor(color)
    // console.log(e.target.value);
  }
  useEffect(()=>{
    document.body.style.backgroundColor = color
  },[color])
  return (
  <>
      <div className='d-flex flex-column heading'>
        <h1 id='head1' className='text-center pt-3'>color changing</h1>
        <h1 id='head2' className='text-center pt-5'>Click the Buttons to see Magic</h1>
      </div>

      <div className='container-fluid justify-content-center first pt-5'>
        
        <div className='pt-3'>
          <button onClick={
              ()=>{click("black")}} className='btn btn-dark ms-3 mt-2'> Click Me! </button>
            <button onClick={
              ()=>
              {
                click("aqua")
              }
            } className='btn btn-info ms-3 mt-2'> Click Me! </button>
            <button onClick={
              ()=>
              {
                click("green")
              }
            } className='btn btn-success ms-3 mt-2'> Click Me! </button>
            <button onClick={
              ()=>
              {
                click("yellow")
              }
            } className='btn btn-warning ms-3 mt-2'> Click Me! </button>
        </div>

        <div className='pt-3'>
          
          <button onClick={
              ()=>
              {
                click("red")
              }
            } className='btn btn-danger ms-3 mt-2'> Click Me! </button>
            <button onClick={
              ()=>
              {
                click("blue")
              }
            } className='btn btn-primary ms-3 mt-2'> Click Me! </button>
            <button onClick={
              ()=>{click("gray")}} className='btn btn-secondary ms-3 mt-2'> Click Me! </button>
            <button onClick={
              ()=>{click("white")}} className='btn btn-light ms-3 mt-2'> Click Me! </button>
          
        </div>
      </div>

            {/* second div */}

      <div className='container-fluid justify-content-center first  pt-5'>
<div className='pt-3'>
        <button onClick={
            ()=>{click("pink")}} style={{backgroundColor:'pink'}} className='btn ms-3 mt-2'> Click Me! </button>
          <button onClick={
            ()=>{click("chocolate")}} style={{backgroundColor:'chocolate'}} className='btn ms-3 mt-2'> Click Me! </button>
          <button onClick={
            ()=>{click("blueviolet")}} style={{backgroundColor:'blueviolet'}} className='btn ms-3 mt-2'> Click Me! </button>
          <button onClick={
            ()=>{click("bisque")}} style={{backgroundColor:'bisque'}} className='btn ms-3 mt-2'> Click Me! </button>
</div>


<div className='pt-3'>
  
          <button onClick={
            ()=>{click("olivedrab")}} style={{backgroundColor:'olivedrab'}} className='btn ms-3 mt-2'> Click Me! </button>
          <button onClick={
            ()=>{click("brown")}} style={{backgroundColor:'brown'}} className='btn ms-3 mt-2'> Click Me! </button>
          <button onClick={
            ()=>{click("salmon")}} style={{backgroundColor:'salmon'}} className='btn ms-3 mt-2'> Click Me! </button>
          <button onClick={
            ()=>{click("purple")}} style={{backgroundColor:'purple'}} className='btn ms-3 mt-2'> Click Me! </button>
</div>
      </div>
      <div className='text-center mt-5 mb-5'>
        <button onClick={
            ()=>{click("")}} style={{backgroundColor:'darkblue',color:'white'}} className='btn mt-3 '> RESET! </button>
      </div>
  </>
  )
}

export default Color
