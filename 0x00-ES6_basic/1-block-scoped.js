export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const taskMov = true;
    const task2Mov = false;
    return [taskMov, task2Mov];
  }

  return [task, task2];
}
