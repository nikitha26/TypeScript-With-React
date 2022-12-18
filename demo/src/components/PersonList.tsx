type personObj = {
    names:{
        fname:string,
        lname:string
    }[]
}

function Person(props:personObj){
  return(
    <div>
    {
        props.names.map((name,i) => {
           return <h1>{name.fname}  {name.lname}</h1>
        })
    }
    </div>
  )
}
export default Person;