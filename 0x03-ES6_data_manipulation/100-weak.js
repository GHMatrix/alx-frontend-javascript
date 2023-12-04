const weakMap = new WeakMap();

function queryAPI(endpoint) {
  // Check if the weakMap has an entry for the endpoint
  if (!weakMap.has(endpoint)) {
    // If not, initialize it with a count of 1
    weakMap.set(endpoint, 1);
  } else {
    // If yes, increment the count
    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);

    // Check if the count is >= 5, and throw an error if true
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  }

  // Return the current count
  return weakMap.get(endpoint);
}

export { queryAPI, weakMap };
