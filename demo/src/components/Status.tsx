type stateOptions= {
   status:string
}

function Status(props:stateOptions){
    let msg;
    if(props.status == 'loading'){
      msg = 'Loading..';
    }else if(props.status == 'success'){
     msg = 'Success';
    }else if(props.status == 'error'){
     msg = 'Error';
    }
  return(
    <div>
       {msg}
    </div>
  )
}
export default Status;