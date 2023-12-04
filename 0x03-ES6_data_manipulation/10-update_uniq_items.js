function updateUniqueItems(groceriesMap) {
  // Check if the argument is a Map
  if (!(groceriesMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over entries in the map and update quantity to 100 for items with initial quantity 1
  for (const [item, quantity] of groceriesMap) {
    if (quantity === 1) {
      groceriesMap.set(item, 100);
    }
  }
}

export default updateUniqueItems;
