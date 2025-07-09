// function Child1(props){
//     return(
//         <>
//         <h1>This is Child 1</h1>
//         <h1>{props.userinfo.name}</h1>
//         <h1>{props.userinfo.age}</h1>
//         <h1>{props.userinfo.city}</h1>
//         </>
//     )
// }

// export default Child1


function Child2({userinfo}){
    return(
        <>
        <h1>This is Child 1</h1>
        <h1>{userinfo.name}</h1>
        <h1>{userinfo.age}</h1>
        <h1>{userinfo.city}</h1>
        </>
    )
}

export default Child2

