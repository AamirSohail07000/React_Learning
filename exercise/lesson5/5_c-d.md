5c
npx supersimpledev  # Install and run the supersimpledev command.

This will give us instructions on how to use the command.


One feature is npm supersimpledev chatbot "your message".
This lets us send a message to the Chatbot library and get a response.

npx supersimpledev chatbot "hello chatbot"

The Chatbot will respond with:
Hello! How can I help you?

5d
Inside package.json, add 2 npm scripts:

{
  "scripts": {
    ...,
    "mktest": "mkdir test",
    "rmtest": "rmdir test"
  },
}

Run these scripts using:

npm run mktest
npm run rmtest