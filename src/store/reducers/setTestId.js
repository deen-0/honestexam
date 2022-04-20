const testId="";
const setTestId=(state=testId,actions)=>{
if(actions.type=="SET_TEST_ID"){
    state=actions.testId;
    return state;
} else return state;
}
export default setTestId;