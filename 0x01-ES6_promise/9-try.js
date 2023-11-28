export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(error.toString()); // Use error.toString() instead of error.message
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
