const testInfo={
    testId:"",
    title:"",
    description:"",
    noOfQ:"",
   duration:""
};
const getTestInfo=(state=testInfo,actions)=>{
    if(actions.type==="GET_TEST"){ 
       state=actions.testInfo;
return state;
        }
else
    if(actions.type==="getuser"){ return state;}
else return state;

}
export default getTestInfo;