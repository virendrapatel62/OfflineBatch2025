// // console.log("Indx JS");

// // console.log(concatArray);
// // console.log(sum);
// // console.log(concatArray([23], [190]));

// console.log("Loading....");

// const responsePromise = axios.get(
//   "https://jsonplaceholder.typicode.com/photos"
// );

// responsePromise
//   .then((response) => {
//     console.log(response);
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log("Error", error.message);
//   })
//   .finally(() => {
//     console.log("Work done");
//     console.log("No matter all good or went wrong");
//   });

// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/comments
// https://jsonplaceholder.typicode.com/albums
// https://jsonplaceholder.typicode.com/photos
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/users/1
// https://jsonplaceholder.typicode.com/users/23
// https://jsonplaceholder.typicode.com/users/45
// https://jsonplaceholder.typicode.com/users/10
// https://jsonplaceholder.typicode.com/users/1000
// https://jsonplaceholder.typicode.com/todos
// https://jsonplaceholder.typicode.com/todos/1
// https://jsonplaceholder.typicode.com/todos/10
// https://jsonplaceholder.typicode.com/todos/20
// https://jsonplaceholder.typicode.com/todos/100

const url = "https://jsonplaceholder.typicode.com/todos/100";

// console.log(axios.get);

const responsePromise1 = axios.get(url);

// responsePromise1.then(onResult);
// responsePromise1.catch(onError);

// responsePromise1
//   .then((response) => {
//     console.log("Got the result ", response.data);
//     console.log(responsePromise1);
//   })
//   .catch((error) => {
//     console.log(error.message);
//     console.log(responsePromise1);
//   });

// console.log(responsePromise1);

async function getTodo() {
  const url = "https://jsonplaceholder.typicode.com/todos/100_";

  console.log("INSIDE FUNCTION Getting dtaa with async await");

  try {
    const response = await axios.get(url);
    console.log("GOT THE DATA");
    console.log(response);
  } catch (error) {
    console.log("Error Handled");
  }
}

console.log("Getting dtaa with async await");
getTodo();
console.log("After Getting dtaa with async await");
