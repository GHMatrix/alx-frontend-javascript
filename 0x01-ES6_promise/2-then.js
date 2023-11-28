function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch((error) => {
      console.log('Got a response from the API');
      console.error('Error:', error);
      return new Error(); // Empty Error object
    });
}

export default handleResponseFromAPI;
