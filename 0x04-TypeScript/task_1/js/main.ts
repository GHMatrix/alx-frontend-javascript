// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow any additional attributes
}

// Define the Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Create a Teacher with specified and additional attributes
const teacher3: Teacher = {
  firstName: 'Kwame',
  lastName: 'Kwakye',
  fullTimeEmployee: false,
  location: 'Accra',
  contract: false, // Additional attribute
};

console.log(teacher3);

// Create a Director using the Directors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Aryee',
  fullTimeEmployee: true,
  location: 'Accra',
  numberOfReports: 17,
};

console.log(director1);

// Define the printTeacher function using the PrintTeacherFunction interface
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  const initials = `${firstName.charAt(0)}.`;
  return `${initials} ${lastName}`;
};

// Example usage of printTeacher function
const printedTeacher = printTeacher("John", "Doe");
console.log(printedTeacher); // Output: J. Doe
