// function Child2({userinfo1}){
//     return(
//         <>
//         <h1>This is Child 2</h1>
//         <h1>{userinfo1.name}</h1>
        
        
//         </>
//     )
// }


// export default Child2

import { SlBasket } from "react-icons/sl";



function Child2({name}){
    return(
        <>
        <h1>This is Child 2 {name}</h1>
        <SlBasket style={{color:"red" }}/>
        
        
        
        </>
    )
}


export default Child2