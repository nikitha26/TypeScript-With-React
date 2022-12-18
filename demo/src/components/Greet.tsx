type Greet = {
    name: string,
    age:number
}

function Greet(props:Greet){
  return(
    <div>I am {props.name} and my age is {props.age}</div>
  )
}
export default Greet;