type headingOpt = {
    children:string,
}

function Heading(props:headingOpt){
    console.log('i ma from heading');
  return(
    <h1>{props.children}</h1>
  )
}
export default Heading;