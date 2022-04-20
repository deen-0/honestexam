const ans={
    Q_id:"",
    ans:""


};
const saveAns=(state=ans,actions)=>{
    if(actions.type==="SAVE"){ state=actions.ans;

//code to post ans

        return state;}
        else{
return state;
        }
}
export default saveAns;