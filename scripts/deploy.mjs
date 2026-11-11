const required = ['DATABASE_URL'];
for (const name of required) {
  if (!process.env[name]) {
    console.error(`Error: Missing required environment variable ${name}`);
    process.exit(1);
  }
}
console.log('Deploy simulated: success');
