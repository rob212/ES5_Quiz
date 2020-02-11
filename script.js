/**
 *   Different way to create Objects and Inheritance in JS
 */




// Function constructor pattern 

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// };

// // Very common in JS, I have attached the calculateAge method to the Person constructor so any object calling the constructor
// // has access to this method with it's own properties.
// Person.prototype.calculateAge = function () {
//     console.log(2020 - this.yearOfBirth);
// }

// // really not a common use case but you can add properties to a constructors prototype too
// Person.prototype.lastName = 'Smith';


// var john = new Person('John', 1990, 'teacher');
// john.calculateAge();


// var jane = new Person('Jane', 1969, 'designer');
// jane.calculateAge();
// var mark = new Person('Mark', 1948, 'retired');
// mark.calculateAge();





// Object.create pattern 

// var personProto = {
//     calculateAge: function() {
//         console.log(2020 - this.yearOfBirth);
//     }
// }

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// var jane = Object.create(personProto,
// {
//     name: {value: 'Jane'},
//     yearOfBirth: {value: 1968},
//     job: {value: 'designer'}
// });






/**
 * Primitives vs Objects
 */

 // Primitives hold their own version of the value
//  var a = 23;
//  var b = a;
//  a = 46;

// console.log(a);
// console.log(b);


// // Objects hold a reference to the object in memory. 
// var obj1 = {
//     name: 'John',
//     age: 26
// };

// var obj2 = obj1
// obj1.age = 30;

// console.log(obj1.age);
// console.log(obj2.age);


// Functions 

// var age = 27;
// var obj = {
//     name: 'Rob',
//     city: 'Edinburgh'
// }

// // As with other langauges the a primitive is passed a copy of the value, but b obj is passed by reference. 
// function change(a, b) {
//     a = 30;
//     b.city = 'Paris';
// }

// change(age, obj);


// console.log(age);
// console.log(obj.city);









/**
 * Passing function as arguments an example of the fact functions are 1st class in JS
 */

// var year = [1983, 1965, 1937, 2005, 2002];

// function arrayCalc(arr, fn) {
//     var arrResult = [];
//     for (var i=0; i < arr.length; i++) {
//         arrResult.push(fn(arr[i]));
//     }
//     return arrResult;
// }

// function calculateAge(el) {
//     return 2020 - el;
// }

// var john = {
//     name: 'John',
//     yearOfBirth: 1990
// }

// console.log(calculateAge(john.yearOfBirth));

// var ages = arrayCalc(year, calculateAge);
// console.log(ages);

// function isFullAge(el) {
//     return el >= 18;
// }

// var fullAges = arrayCalc(ages, isFullAge);
// console.log(fullAges);

// function maxHeartRate(el) {
//     if (el >= 18 && el <= 81) {
//         return Math.round(206.9 - 0.67 * el);
//     } else {
//         return -1;
//     }
// }

// var maxExerciseHeartRates = arrayCalc(ages,maxHeartRate);
// console.log(maxExerciseHeartRates); 



/**
 * Functions returning other functions in JS
 */

//  function interviewQuestion(job) {
//      if (job === 'designer') {
//          return function(name) {
//              console.log(name + ' can you please explain what UX design is?');
//          }
//      } else if (job === 'teacher') {
//          return function(name) {
//              console.log('What subject do you teach ' + name);
//          }
//      } else {
//          return function(name) {
//              console.log('Hello ' + name + ', what do you do?');
//          }
//      }
//  }

//  var teacherQuestion = interviewQuestion('teacher');
// teacherQuestion('Steve');
// teacherQuestion('Carole');

// var designerQuestion = interviewQuestion('designer');
// designerQuestion('John');
// designerQuestion('Sue');

// // this works as its evaluated left to right. the interviewQuestion function returns a reference to the anonymous function which we then call straight away passing the 
// // name parameter it requires. Looks strange but it is possible. 
// interviewQuestion('mechanic')('Mark');






/**
 * IIFE - Immediately Invoked Function Expressions: a very common pattern in JS
 */

 // A game is won if a random score between 0 and 9 is >= 5. The score is always hidden.

//  function game() {
//      var score = Math.random() * 10;
//      console.log(score >= 5);
//  }

//  //game();

// // If the only purpose of this function is to hide this score variable from outside of the function. 
// // Then then IIFE is a better way to do this:

// // In JS anything inside () cannot be a statement its an expression i.e. it returns a value;
// // So here we trick JS into making this function an expression which we immediately call by wrapping the anonymous function in ()
// // to prevent it being a declaration. 
// (function () {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();

// // we can add parameters to this IIFE also. It results in us hiding the score data. It's a call to a functino that executes immediately. 
// (function (goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);





/**
 * Closures - Key learning to make the most of JS
 */

 // a function that returns a function that tells us how many years we have until retirement
 
//  function retirement(retirementAge) {
//      var a = ' years left until retirement.';
//      return function(yearOfBirth) {
//         var age = 2020 - yearOfBirth;
//         console.log((retirementAge - age) + a)
//      }
//  }

// var retirementUS = retirement(66);
// var retirementIceland = retirement(67);
// var retirementGermany = retirement(65);

// retirementUS(1990);
// retirementGermany(1990);
// retirementIceland(1990);


// function interviewQuestion(job) {
//      if (job === 'designer') {
//          return function(name) {
//              console.log(name + ' can you please explain what UX design is?');
//          }
//      } else if (job === 'teacher') {
//          return function(name) {
//              console.log('What subject do you teach ' + name);
//          }
//      } else {
//          return function(name) {
//              console.log('Hello ' + name + ', what do you do?');
//          }
//      }
//  }


// function interviewQuestion(job) {
//     return function(name) {
//         if (job === 'designer') {
//             console.log(name + ' can you please explain what UX design is?');
//      } else if (job === 'teacher') {
//             console.log('What subject do you teach ' + name);
//      } else {
//             console.log('Hello ' + name + ', what do you do?');
//      }
//     }
// };
    

// var teacherQuestion = interviewQuestion('teacher');
// teacherQuestion('John');
// teacherQuestion('Mary');

// var designerQuestion = interviewQuestion('designer');
// designerQuestion('Sue');

// interviewQuestion('mechanic')('Caroline');




/**
 * Bind, call and apply 
 */

 var john = {
     name: 'John',
     age: 26,
     job: 'teacher',
     shoeSize: 10,
     presentation: function(style, timeOfDay) {
         if (style === 'formal') {
             console.log('Good ' + timeOfDay + ', Ladies and Gentlemen. I\'m ' + this.name + ', a ' + this.job + ' and I\'m ' + this.age + ' years old. I have size ' + this.shoeSize + ' feet.');
         } else if (style === 'friendly') {
             console.log('Hey! What\'s up? I\'m ' + this.name + ', a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay);
         }
     }
 }

john.presentation('formal', 'evening');
john.presentation('friendly', 'afternoon');

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

// Emily does not have a prentation function but we can use the CALL function in order to allow access to it. 
// it is called method borrowing and takes the context in which to use the function as the 'this' in the first parameter.
john.presentation.call(emily, 'formal', 'afternoon');

// the APPLY method is the same as the CALL but uses an array for all the other variables other than the this.
// at present this won't work as our presentation method has no concept of receiving it's arguements in an array we'd have to code it to allow such input format of its parameters
john.presentation(emily, ['friendly', 'afternoon'])

// BIND is very similar to the CALL aswell. THe difference is the BIND function doesn't call the borrowed function straight away. It generates a copy of the function and returns it to be stored and called later
// this is called CURRYING which is effectively creating a function based on another function but with some preset parameters. 
var emilyFriendly = john.presentation.bind(emily, 'friendly');
emilyFriendly('morning');
emilyFriendly('night');

var johnFormal = john.presentation.bind(john, 'formal');
johnFormal('afternoon');
johnFormal('evening');





var years = [1983, 1965, 1937, 2017, 2010];

function arrayCalc(arr, fn) {
    var arrResult = [];
    for (var i=0; i < arr.length; i++) {
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

function calculateAge(el) {
    return 2020 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}


var ages = arrayCalc(years, calculateAge);
console.log(ages);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(fullJapan);