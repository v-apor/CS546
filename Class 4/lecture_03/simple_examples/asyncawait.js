/*  An async function is a modification to the syntax used in writing promises. 
You can call it syntactic sugar over promises. It only makes writing promises easier.

An async function returns a promise -- 
if the function returns a value, the promise will be resolved with the value, 
but if the async function throws an error, the promise is rejected with that value. Let’s see an async function:

*/

async function myRide() {
  return '2017 Mercedes GLE';
}

//and a different function that does the same thing but in promise format:

function yourRide() {
  return Promise.resolve('2017 Mercedes GLE');
}

//From the above statements, myRide() and yourRide() are equal and will both resolve to 2017 Mercedes-Benz GLE
//Also when a promise is rejected, an async function is represented like this:

function foo() {
  return Promise.reject(25);
}

// is equal to
async function foo2() {
  throw 25;
}

//await

/* Await is only used with an async function. The await keyword is used in an async function to ensure that all promises returned in the async function are synchronized, 
  ie. they wait for each other. 
  Await eliminates the use of callbacks in .then() and .catch(). 
  In using async and await, async is prepended when returning a promise, await is prepended when calling a promise. 
  try and catch are also used to get the rejection value of an async function. Let's see this with our date example: */

const weather = true;

//Let's bring the two promises we were using in the previous promises example

function date() {
  if (weather) {
    const dateDetails = {
      name: 'Cubana Restaurant',
      location: '55th Street',
      table: 5
    };
    for (let i = 0; i <= 100000000; i++) {
      let x = i;
    }

    return Promise.resolve(dateDetails);
  } else {
    return Promise.reject('Bad weather, so no Date');
  }
}

const orderUber = function (dateDetails) {
  if (!dateDetails) Promise.reject('No date details provided to Order Uber');
  const message = `Get me an Uber ASAP to ${dateDetails.location}, we are going on a date!`;
  return Promise.resolve(message);
};

async function myDate() {
  try {
    let dateDetails = await date();
    let message = await orderUber(dateDetails);
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}

myDate();
