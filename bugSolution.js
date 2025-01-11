function handleNewMessage(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    var message = childSnapshot.val();
    // Handle null or undefined values using optional chaining and nullish coalescing
    var messageText = message?.text ?? 'No text available';
    displayMessage(messageText);
  });
}

//Alternative using logical OR operator
function handleNewMessage(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    var message = childSnapshot.val();
    // Accessing message.text directly might cause an error if the message doesn't have a text property.
    var messageText = message.text || 'No text available'; // Handle cases where message.text is undefined
    displayMessage(messageText);
  });
} 