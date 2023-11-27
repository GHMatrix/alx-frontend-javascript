export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  // Iterate through the reportWithIterator using the for...of loop
  for (const employee of reportWithIterator) {
    employeeNames.push(employee);
  }

  // Join the employee names with '|'
  return employeeNames.join(' | ');
}
