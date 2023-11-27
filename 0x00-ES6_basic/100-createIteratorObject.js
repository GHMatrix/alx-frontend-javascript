export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let currentDepartmentIndex = 0;
  let currentIndex = 0;

  const iteratorFunction = function next() {
    if (currentDepartmentIndex < departments.length) {
      const currentDepartment = departments[currentDepartmentIndex];
      const employee = currentDepartment[currentIndex];

      currentIndex += 1;

      if (currentIndex >= currentDepartment.length) {
        currentIndex = 0;
        currentDepartmentIndex += 1;
      }

      return { value: employee, done: false };
    }

    return { done: true };
  };

  // Add Symbol.iterator method to make the object iterable
  iteratorFunction[Symbol.iterator] = function () {
    return this;
  };

  return iteratorFunction;
}
