function cleanSet(set, startString) {
  return Array.from(set)
    .filter(value => value.startsWith(startString))
    .map(value => value.slice(startString.length))
    .filter((value, index, self) => self.indexOf(value) === index)  // Ensure unique values
    .join('-');
}

export default cleanSet;
