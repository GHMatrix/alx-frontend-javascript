import { Subjects as CppSubjects } from './subjects/Cpp';
import { Subjects as JavaSubjects } from './subjects/Java';
import { Subjects as ReactSubjects } from './subjects/React';
// Create and export a constant cpp for Cpp Subjects
var cpp = new CppSubjects.Cpp();
// Create and export a constant java for Java Subjects
var java = new JavaSubjects.Java();
// Create and export a constant react for React Subjects
var react = new ReactSubjects.React();
// Create and export one Teacher object cTeacher with experienceTeachingC = 10
var cTeacher = {
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
//# sourceMappingURL=main.js.map