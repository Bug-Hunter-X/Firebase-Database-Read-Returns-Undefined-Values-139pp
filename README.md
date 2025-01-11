# Firebase Database Read Returns Undefined Values

This repository demonstrates a common error encountered when reading data from the Firebase Realtime Database.  The problem is that the data structure may not always contain all the expected properties.  Directly accessing a property that does not exist causes an error.

## Problem

The provided JavaScript code attempts to read messages from the Firebase database.  However, if a message doesn't have a `text` property, accessing `message.text` directly results in an error.

## Solution

The solution involves using the OR operator (`||`) to provide a default value if `message.text` is undefined.  This prevents unexpected errors and improves the robustness of the application.