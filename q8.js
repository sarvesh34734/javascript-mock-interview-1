/* question 8 -->  Why do we need Async/Await. Explain a little about how and why we reached here, with relevant examples */

// in earlier versions of javascript we used to use callback function for every asynchronous task getting executed.

// so if there were multiple tasks that we wanted to execute then it would result in a large nested functions (functions within functions )

// this practise of writing code reduces code readability as it becomes really complex when we want to execute a large number of tasks

// it results in callback hell

// sample code to execute some tasks using callback functions


/* const verifyUser = function(username, password, callback){
   dataBase.verifyUser(username, password, (error, userInfo) => {
       if (error) {
           callback(error)
       }else{
           dataBase.getRoles(username, (error, roles) => {
               if (error){
                   callback(error)
               }else {
                   dataBase.logAccess(username, (error) => {
                       if (error){
                           callback(error);
                       }else{
                           callback(null, userInfo, roles);
                       }
                   })
               }
           })
       }
   })
};*/

// In the above function there were only 3 tasks to be executed but the nesting got really complex.

// So what if we had hundreds os tasks to perform

// so as a solution to this there were promises which executes tasks by making promises

// eg promise.then().then().then()......then().catch()

// so by using promises we can nest each task in then() and finally catch if there was any error

// promises do not get rid by avoiding callbacks but rather makes our code a bit organized and readable

// newer versions of ECMA script brought in syntactic sugar on top of Promises in JavaScript in the form of async and await statements.

// They allow us to write Promise-based code as if it were synchronous, but without blocking the main thread

// so now the above code looks like

/* const verifyUser = async function(username, password){
   try {
       const userInfo = await dataBase.verifyUser(username, password);
       const rolesInfo = await dataBase.getRoles(userInfo);
       const logStatus = await dataBase.logAccess(userInfo);
       return userInfo;
   }catch (e){
       //handle errors as needed
   }
};*/

// the code is written between try and catch statements as a normal javascript code is

// the code becomes:
    // more readable
    // error handling becomes easier
    // debugging gets simpler