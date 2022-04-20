const user={
    id:"",
    firstName:"",
    lastName:"",
    email:"",
    password:""


};
const saveUser=(state=user,actions)=>{
    if(actions.type==="saveuser"){ state=actions.user;return state;}
else
    if(actions.type==="getuser"){ return state;}
else return state;

}
export default saveUser;