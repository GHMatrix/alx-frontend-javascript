// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Michael",
  lastName: "Mensah",
  age: 19,
  location: "Accra",
};

const student2: Student = {
  firstName: "Ama",
  lastName: "Asante",
  age: 18,
  location: "Kumasi",
};

// Create an array named studentsList containing the two variables
const studentsList: Student[] = [student1, student2];

// Get the table element from the HTML
const table = document.querySelector('table');

// Render a table and append a new row for each student
if (table) {
  studentsList.forEach((student) => {
    // Create a new row
    const row = table.insertRow();

    // Append cells to the row
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    // Assign values to the cells
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });
}
