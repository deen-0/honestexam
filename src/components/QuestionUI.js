import React from 'react';


export default function QuestionUI(props) {
    // const changequestion=()=>{
    //     props.question.map((que)=>  {return (<><h1>que.question</h1></>)})
       
    //   }
    
    if(props.validation===0) {return(
    <>No test Found</>
  ) }
  else if(props.validation===6) return(<>please enter Key</>);
  else if(props.validation===2) return(<></>);
}
