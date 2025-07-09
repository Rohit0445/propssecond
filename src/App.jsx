import Child1 from './components/Child1'
import Child2 from './components/Child2'




// function App(){

//   let info = {
//     name:"Rohit",
//     age : 24,
//     city : "Bhopal"
//   }
//   return(
//     <>
//     <h1>Hell !</h1>
//     <Child1 userinfo={info} />
    
//     </>
//   )
// }


// export default App



function App(){

  let info = {
    name:"Rohit",
    age : 24,
    city : "Bhopal"
  }
  return(
    <>
    <h1>Hell !</h1>
    <Child1 userinfo={info} />
    <Child2 userinfo1={{...info}} />
    
    </>
  )
}


export default App