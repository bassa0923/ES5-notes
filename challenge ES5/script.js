// advanced javascript objects and fucntions

/*let john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};



// FUNCTION CONSTRACTOR !!!

let Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;

}

Person.prototype.calculateAge = function() {
  console.log(2022 - this.yearOfBirth);
};

let john = new Person('John', 1990, 'teacher');
let jane = new Person('Jane', 1995, 'designer');
let mark = new Person('Mark', 1960, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();
*/




  // OBJECT.CREATE !!!

/*
  let personProto = {
    calculateAge: function() {
      console.log(2022 - this.yearOfBirth);
    }

  }

  let john = Object.create(personProto);
  john.name = 'John';
  john.yearOfBirth = 1990;
  john.job = 'teacher';

  let jane = Object.create(personProto, {

      name: { value: 'Jane' },
      yearOfBirth: { value: 1989},
      job: { value: 'designer'}
  });

  */


  // PRIMITIVES VS OBJECTS 

  // Primitives
  /*
  let a = 23;
  let b = a;
  a = 46;
  console.log(a);
  console.log(b);
  // Objects
  let obj1 = {
    name: 'John',
    age: 26
  };
  let obj2 = obj1;
  obj1.age = 30;
  console.log(obj1.age);
  console.log(obj2.age);

  //Functions 
  let age = 20;
  let obj = {
    name: 'Saba',
    city: 'Batumi'
  };

  function change(a, b) {
    a = 30;
    b.city = 'San Francisco'
  }

  change(age, obj);
  
  console.log(age);
  console.log(obj.city);

*/


  // PASSING FUNCTIONS AS ARUGMENTS!!!
    
    /*


  let years = [1990, 1965, 1970, 2004, 2009];

  function arrayCalc(arr, fn) {
    let arrRes = [];
    for (i = 0; i < arr.length; i++) {
      arrRes.push(fn(arr[i]));
    }
    return arrRes;
  }
  

  function calculateAge(el) {
    return 2022 - el;
  }

  function fullAge(el) {
    return el >= 18;
  }
  function maxHeartRate(el) {
    if (el >= 18 && el <= 81){
    return Math.round(206.9 - (0.67 * el));
  } else {
    return -1;
  }
}

  let ages = arrayCalc(years, calculateAge);
  console.log(ages);
  let fullAges = arrayCalc(ages, fullAge);
  console.log(fullAges);
  let rates =arrayCalc(ages, maxHeartRate);
  console.log(rates);


  

*/

// FUNCTiONS RETURNING FUNCTIONS!!!

  /*
  function interviewQuestion(job) {
    if (job === 'designer') {
      return function(name) {
        console.log(name + 'can you please expain what UX design is?')
      } 
    } else if (job === 'teacher') {
      return function(name) {
        console.log('What subjet do you teach, ' + name + '?')
      }
    } else {
      return function(name) {
        console.log('Hello ' + name + ', what do you do?')
      }
    }
  }

  let teacherQuestion = interviewQuestion('teacher');
  let designerQuestion = interviewQuestion('designer');
  
  teacherQuestion('John');
  designerQuestion('Elizabeth');

  interviewQuestion('teacher')('Mark');

  */


  // IIFE !!! -- immediately invoked function also we obtain data privacy
  /*
  normal way
  function game() {
    let score = Math.random() * 10;
    console.log(score >= 5);
  }
  game();
  */

  // IIFE 
  // it is not reusable code

  /*
  (function () {
    let score = Math.random() * 10;
    console.log(score >= 5);

  })();

  (function (goodLuck) {
    let score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);

  })(5);
  
  */

  // CLOSURES !!!
  
  /*
  function retirement(retirementAge) {
    let a = 'years until retirement';
    return function(yearOfBirth) {
      let age = 2022 - yearOfBirth
    console.log(retirementAge - age + 'years untill retirement');
      
    }


  }

  let retirementUS = retirement(66)
  retirementUS(1990);
  let retirementGermany = retirement(65)
  retirementGermany(1990);

  */

  
  // challenge to do this with closures !!

  /*
  function interviewQuestion(job) {
      return function(name) {
        if (job === 'designer') {
        console.log(name + 'can you please expain what UX design is?') 
      } else if (job === 'teacher') {
        console.log('What subjet do you teach, ' + name + '?')
      } else {
        console.log('Hello ' + name + ', what do you do?')
      }
    }
  }


  let teacherQuestion = interviewQuestion('teacher');
  let designerQuestion = interviewQuestion('designer');
  
  teacherQuestion('John');
  designerQuestion('Elizabeth');

  */




  // BIND, CALL, APPLY METHODS  !!!

  /*
  let saba = {
    name: 'Saba',
    age: 20,
    job: 'unemployed',
    presentation: function(style, timeOfDay) {
      if (style === 'formal') {
        console.log('Good ' + timeOfDay + ', Ladies and gentelmen! I\'m ' +
        this.name + ', I\'m a ' +
        this.job + ' and I\'m ' +
        this.age + ' years old.');
        
      } else if (style === 'friendly') {
        console.log('Hey! What\'s up? I\'m ' +
        this.name + ', I\'m a ' +
        this.job + ' and I\'m ' +
        this.age + ' years old.');

      }
    }

  }

  let emily = {
    name: 'Emily',
    age: 25,
    job: 'designer'
  };
  

    saba.presentation('formal', 'morning');

    */

    /*
    
    // call method allows us to set THIS in a first argument
    saba.presentation.call(emily, 'friendly', 'afternoon');

    // apply method accepts arguments as an array, first this variable and then array
    // saba.presentation.apply(emily, ['friendly, 'afternoon])

    // bind method allows to set this variable as well but bind doesent imediately call a fucntion but instead its generates the copy of a function with a preset argument

    let sabaFriendly = saba.presentation.bind(saba, 'friendly');
    sabaFriendly('morning');
    sabaFriendly('night');

*/

  //challenge
  /*
    let years = [1990, 1965, 1970, 2004, 2009];

    function arrayCalc(arr, fn) {
      let arrRes = [];
      for (i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
      }
      return arrRes;
    }
    
  
    function calculateAge(el) {
      return 2022 - el;
    }
  
    function isFullAge(limit, el) {
      return el >= limit;
    }
    
    let ages = arrayCalc(years, calculateAge);
    let fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
    console.log(ages);
    console.log(fullJapan);

    */

















    







    

