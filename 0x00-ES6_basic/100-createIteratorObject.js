export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);

  let currentIndex = 0;
  let currentDepartmentIndex = 0;

  return {
    next() {
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
    },
  };
}
