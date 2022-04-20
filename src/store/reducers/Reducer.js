// this is our reduer
import { combineReducers } from "redux";
import saveUser from "./saveUser";
import setTestId from "./setTestId";
import getQuestions from "./getQuestions";
import saveAns from "./saveAns";
import getTestInfo from "./getTestInfo";

const globalReducer=combineReducers({

   user:saveUser,
   testId:setTestId,
   questions : getQuestions,
   ans:saveAns,
   testInfo:getTestInfo


})
export default globalReducer;