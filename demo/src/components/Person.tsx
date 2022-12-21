import { personObj } from "../Person.type";

function Person(props:personObj){
  return(
    <div>{props.name.fname} {props.name.lname}</div>
  )
}
export default Person;