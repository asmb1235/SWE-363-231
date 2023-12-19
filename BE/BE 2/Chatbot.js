const readline = require('readline');

// Predefined set of questions and corresponding answers
const chatbotResponses = {
  'hi': 'Hello there!',
  'how are you?': 'I am doing well, thank you.',
  'what is your name?': 'I am a chatbot programmed in Node.js.',
  'bye': 'Goodbye! Have a great day.'
};

// Function to get a response from the chatbot
function getChatbotResponse(input) {
  const response = chatbotResponses[input.toLowerCase()];
  return response ? response : "I'm sorry, I don't understand that.";
}

// Create interface to read user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to start the conversation
function startConversation() {
  rl.question('Chatbot: Hello! How can I assist you today? (Type "exit" or "quit" to end)\n', (input) => {
    const response = getChatbotResponse(input);
    console.log('Chatbot:', response);
    console.log(''); // Add an empty line for readability

    // Check if the user wants to exit
    if (input.toLowerCase() === 'exit' || input.toLowerCase() === 'quit') {
      rl.close(); // Close the interface and end the conversation
    } else {
      startConversation(); // Continue the conversation
    }
  });
}

// Start the conversation initially
startConversation();
