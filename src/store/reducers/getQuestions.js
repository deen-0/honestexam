const questions=[{
    q_id:"",
    question:"",
    option1:"",
    option2:"",
    answer:""


}];
const getQuestions=(state=questions, actions)=>{
    if(actions.type==="GET"){ state=actions.questions;return state;}
    else
       {return state;}
}
export default getQuestions;