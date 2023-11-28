function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., API request)
    setTimeout(() => {
      const success = true; // Simulate a successful response

      if (success) {
        resolve('API response data');
      } else {
        reject(new Error('API request failed'));
      }
    }, 1000); // Simulating a delay of 1000 milliseconds (1 second)
  });
}

export default getResponseFromAPI;
