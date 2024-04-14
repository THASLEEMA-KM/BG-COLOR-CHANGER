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
  <div className='container-fluid'>
      <h1 id='head1' className='text-center pt-3'>color changing</h1>
      <h1 id='head2' className='text-center pt-5'>Click the Buttons to see Magic</h1>
      <div className='container d-flex pt-5'>
        
        <button onClick={
          ()=>{click("black")}} className='btn btn-dark ms-5'> Click Me! </button>
        <button onClick={
          ()=>
          {
            click("aqua")
          }
        } className='btn btn-info ms-5'> Click Me! </button>
        <button onClick={
          ()=>
          {
            click("green")
          }
        } className='btn btn-success ms-5'> Click Me! </button>
        <button onClick={
          ()=>
          {
            click("yellow")
          }
        } className='btn btn-warning ms-5'> Click Me! </button>
        <button onClick={
          ()=>
          {
            click("red")
          }
        } className='btn btn-danger ms-5'> Click Me! </button>
        <button onClick={
          ()=>
          {
            click("blue")
          }
        } className='btn btn-primary ms-5'> Click Me! </button>
        <button onClick={
          ()=>{click("gray")}} className='btn btn-secondary ms-5'> Click Me! </button>
        <button onClick={
          ()=>{click("white")}} className='btn btn-light ms-5'> Click Me! </button>
        
      </div>
      <div className='container d-flex pt-5'>
      <button onClick={
          ()=>{click("pink")}} style={{backgroundColor:'pink'}} className='btn ms-5'> Click Me! </button>
        <button onClick={
          ()=>{click("chocolate")}} style={{backgroundColor:'chocolate'}} className='btn ms-5'> Click Me! </button>
        <button onClick={
          ()=>{click("blueviolet")}} style={{backgroundColor:'blueviolet'}} className='btn ms-5'> Click Me! </button>
        <button onClick={
          ()=>{click("bisque")}} style={{backgroundColor:'bisque'}} className='btn ms-5'> Click Me! </button>
        <button onClick={
          ()=>{click("olivedrab")}} style={{backgroundColor:'olivedrab'}} className='btn ms-5'> Click Me! </button>
        <button onClick={
          ()=>{click("brown")}} style={{backgroundColor:'brown'}} className='btn ms-5'> Click Me! </button>
        <button onClick={
          ()=>{click("salmon")}} style={{backgroundColor:'salmon'}} className='btn ms-5'> Click Me! </button>
        <button onClick={
          ()=>{click("purple")}} style={{backgroundColor:'purple'}} className='btn ms-5'> Click Me! </button>
      </div>
      <div className='text-center m-5'>
        <button onClick={
            ()=>{click("")}} style={{backgroundColor:'darkblue',color:'white'}} className='btn ms-5 '> RESET! </button>
      </div>
  </div>
  )
}

export default Color
