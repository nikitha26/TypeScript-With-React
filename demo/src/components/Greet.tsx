type Greet = {
    name: string,
    age:number,
    isLogedIn:boolean
}

function Greet(props:Greet){
  return(
    <div>
        { props.isLogedIn ? `I am ${props.name} and my age is ${props.age}`:`Welecome Guest`}
    </div>
  )
}
export default Greet;