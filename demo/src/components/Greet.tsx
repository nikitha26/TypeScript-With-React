type Greet = {
    name: string,
    age?:number,         //Optional Count  
    isLogedIn:boolean
}

function Greet(props:Greet){
  const{age = 0} = props
  return(
    <div>
        { props.isLogedIn ? `I am ${props.name} and my age is ${age}`:`Welecome Guest`}
    </div>
  )
}
export default Greet;