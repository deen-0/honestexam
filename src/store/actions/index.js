//this is our action folder

export const setTestId=(data)=>{
    return{
        type : "SET_TEST_ID",
        testId : data
    }
}
export const saveUser=(data)=>{
return {
    type : "saveuser",
    user : data

}}

export const getUser=()=>{
return {
    type : "getuser",

}
}
export const getQuestions=(data)=>{
    
return{
    type : "GET",
    questions : data

}}
export const saveAns=(data)=>{
    
return{
    type : "SAVE",
    ans: data
    

}}
export const getTestInfo=(data)=>{
    
return{
    type : "GET_TEST",
    testInfo : data
    

}}
