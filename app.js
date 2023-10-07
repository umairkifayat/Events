// const button = document.getElementById("btn");
// const div = document.querySelector("div");


// button.addEventListener('mouseover',  (event) => {
// if (div < 0) {
//   div
// } else {
//     div.style.backgroundColor  = "black";

// }

// if (div < 0) {
//     div.style.backgroundColor  = "black";

// } else {
//     div.style.backgroundColor  = "red";

// }

// })


// var arrayOfObjects = [
//     {
//         name: "Alice",
//         age: 30
//     },
//     {
//         name: "Bob",
//         age: 25
//     },
//     {
//         name: "Charlie",
//         age: 35
//     },
//     {
//         name: "David",
//         age: 28
//     },
//     {
//         name: "Eve",
//         age: 22
//     },
//     {
//         name: "Frank",
//         age: 40
//     },
//     {
//         name: "Grace",
//         age: 32
//     },
//     {
//         name: "Helen",
//         age: 27
//     },
//     {
//         name: "Ivy",
//         age: 31
//     },
//     {
//         name: "Jack",
//         age: 29
//     }
// ];

// for of loop  array of object ma chlata ha 

// for (const iteration of arrayOfObjects) {
//     console.log(iteration);

// }
// const person = {
//     name: "John Doe",
//     age: 30,
//     city: "New York"
//   };

// for in loop   yaa srif obj ma chalata ha
// for (const key in person) {
//     console.log(person);
//     // console.log(`${key}: ${person[key]}`);


// }


















// const arrayOfObjects = [
//     {
//         names: "Alice",
//         age: 30
//     },
//     {
//         names: "Bob",
//         age: 25
//     },
//     {
//         names: "Charlie",
//         age: 35
//     },
//     {
//         names: "David",
//         age: 28
//     },
//     {
//         names: "Eve",
//         age: 22
//     },
//     {
//         names: "Frank",
//         age: 40
//     },
//     {
//         names: "Grace",
//         age: 32
//     },
//     {
//         names: "Helen",
//         age: 27
//     },
//     {
//         names: "Ivy",
//         age: 31
//     },
//     {
//         names: "Jack",
//         age: 29
//     }
// ];


// const btn = document.getElementById('btn');
// const div = document.querySelector('div');


// btn.addEventListener('click' , (event)  => {
//     div.innerHTML = " ";
//     for (const obj of arrayOfObjects) {
//         // console.log(iterator);
//             div.innerHTML+= `<p>Name:${obj.names} Age:${obj.age}`

//     }
// })



// const names = document.querySelector('#names');
// const fname = document.querySelector('#fname');
// const age = document.querySelector('#age');
// const class = document.querySelector('#Class');
// const btn = document.querySelector('#btn');
// const result = document.querySelector('#result');
// // console.log(names);
// // console.log(father);
// // console.log(age);
// // console.log(Class);
// // console.log(btn);
// // console.log(result);

// const arr = [];
// btn.addEventListener('click', (e) => {
//     console.log(btn.names);
//     // push( obj = {
//     //     names: names.value,
//     //     fathername: fname.value,
//     //     age: age.value,
//     //     class: Class.value,

//     // });
//     // console.log(obj);
//     // arr.push(obj)
//     // console.log(arr);
//     // result.innerHTML +=`<p>Name:${names.value} Father:${arr.names} Age:${arr.age} Class:${arr.Class}`

// })


// const email = document.querySelector('#email');
// const password = document.querySelector('#password');
// const submit = document.querySelector('#submit');


// submit.addEventListener('click', (e) => {
//   const obj = {
//     email: email.value,
//     password: password.value,
//   }
// for (const iteration of obj) {
//     console.log(iteration);
// }  
// })
// // console.log(obj);

const names = document.getElementById('names');
const father = document.getElementById('father');
const age = document.getElementById('age');
const classInput = document.getElementById('class');
const btn = document.getElementById('btn');
const result = document.getElementById('result');
const arr = [];

btn.addEventListener('click', (event) => {
    const obj = {
        Names: names.value,
        Father: father.value,
        age: parseInt(age.value), // Parse age as an integer
        class: classInput.value
    };

    arr.push(obj);

    // Display the current contents of the array in the "result" div
    result.innerHTML = JSON.stringify(arr, null, 2);
    
    // Clear the form input fields
    names.value = '';
    father.value = '';
    age.value = '';
    classInput.value = '';
});
