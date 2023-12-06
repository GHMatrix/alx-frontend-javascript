// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow any additional attributes
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
