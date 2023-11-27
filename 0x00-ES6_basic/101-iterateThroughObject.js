export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  // Invoke the reportWithIterator function to get the iterator
  const iterator = reportWithIterator();

  // Iterate through the iterator using the for...of loop
  for (const department of iterator) {
    for (const employee of department) {
      employeeNames.push(employee);
    }
  }

  // Join the employee names with '|'
  return employeeNames.join(' | ');
}
