// Import required modules
const http = require('http');


const PORT = 3000;

// Create the server
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  // Handle GET request
  if (req.method === 'GET' && req.url === '/api/notes') {
    const notes = [
      { id: 1, text: 'Learn Node.js' },
      { id: 2, text: 'Practice every day' },
    ];
    res.statusCode = 200;
    res.end(JSON.stringify(notes));
  }

  // Handle POST request
  else if (req.method === 'POST' && req.url === '/api/notes') {
    let body = '';

    
    req.on('data', chunk => {
      body += chunk.toString();
    });

    
    req.on('end', () => {
      const newNote = JSON.parse(body);
      console.log('Received Note:', newNote);

      res.statusCode = 201;
      res.end(JSON.stringify({ message: 'Note added successfully', note: newNote }));
    });
  }

  // Handle invalid routes
  else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});


server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
