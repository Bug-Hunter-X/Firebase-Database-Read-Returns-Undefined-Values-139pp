function handleNewMessage(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    var message = childSnapshot.val();
    // Accessing message.text directly might cause an error if the message doesn't have a text property.
    var messageText = message.text || 'No text available'; // Handle cases where message.text is undefined
    displayMessage(messageText);
  });
}