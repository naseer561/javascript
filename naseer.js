const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
  };
  
  const { firstName: fName, lastName: lName, age } = person;
  
  console.log(fName); // Output: John
  console.log(lName); // Output: Doe
  console.log(age); // Output: 30
  