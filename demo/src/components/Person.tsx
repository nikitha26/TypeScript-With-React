type personObj = {
    name:{
        fname:string,
        lname:string
    }
}

function Person(props:personObj){
  return(
    <div>{props.name.fname} {props.name.lname}</div>
  )
}
export default Person;