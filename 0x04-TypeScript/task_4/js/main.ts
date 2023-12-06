import * as CppSubjects from './subjects/Cpp';
import * as JavaSubjects from './subjects/Java';
import * as ReactSubjects from './subjects/React';

// Create and export a constant cpp for Cpp Subjects
const cpp = new CppSubjects.Subjects.Cpp();

// Create and export a constant java for Java Subjects
const java = new JavaSubjects.Subjects.Java();

// Create and export a constant react for React Subjects
const react = new ReactSubjects.Subjects.React();

// Create and export one Teacher object cTeacher with experienceTeachingC = 10
const cTeacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

// For Cpp subject, log to the console C++, set cTeacher as the teacher,
// call the two methods getRequirements and getAvailableTeacher,
// and print the strings they return
console.log('Cpp:');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject, log to the console Java, set cTeacher as the teacher,
// call the two methods getRequirements and getAvailableTeacher,
// and print the strings they return
console.log('\nJava:');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject, log to the console React, set cTeacher as the teacher,
// call the two methods getRequirements and getAvailableTeacher,
// and print the strings they return
console.log('\nReact:');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
