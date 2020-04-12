/* question 7 --> Give a relevant example of Promises */

// promises are a better way of handling asynchronous tasks and help us to avoid the callback hell
// instead of immediately replying with a value an asynchronous task reply with a pomise to return a value in the future

// a promise has four states fulfilled, rejected, pending settled

// example of promise

// declaring a promise
var promise = new Promise(function (resolve, reject) {
    // let the list of existing users be
    const users = ["sarvesh", "ayan", "saurabh"];
    // check if user exists in database ( i.e. in list of users here)
    if (users.includes("sarvesh")) {
        // call resolve function
        resolve();
    } else {
        // call reject
        reject();
    }
})
// mow execute something if depending on whether promise is fulfilled or not
promise.then((success) => { console.log("User found") }, (error) => { console.log("User not found") }).catch((err) => { console.log(err) });