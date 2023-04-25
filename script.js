function sendRequest() {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();
  
    // Set the request URL and method
    xhr.open('GET', 'https://www.youtube.com/watch?v=bkhaBQ6bj2s');
  
    // Send the request
    xhr.send();
  
    // Handle the response
    xhr.onload = function() {
      if (xhr.status === 200) {
        alert('Table booking successful!');
      } else {
        alert('Table booking failed.');
      }
    };
  }
  