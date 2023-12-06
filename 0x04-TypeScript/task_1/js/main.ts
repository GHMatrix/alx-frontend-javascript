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
