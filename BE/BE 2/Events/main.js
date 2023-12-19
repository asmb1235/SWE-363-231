const userEmitter = require('./eventEmitterModule');

function simulateUserLogin() {
  const randomDelay = Math.random() * (2 - 0.1) + 0.1; // Random delay between 0.1 and 2 seconds
  const user = `USER_${Math.floor(Math.random() * 10)}`; // Simulated user
  setTimeout(() => {
    userEmitter.emit('userLoggedIn', user);
    simulateUserLogin();
  }, randomDelay * 1000);
}

// Event listeners
userEmitter.on('userLoggedIn', (user) => {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${user} logged in`);
});

userEmitter.on('userLoggedOut', (user) => {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${user} logged out`);
});

// Start simulation
simulateUserLogin();
