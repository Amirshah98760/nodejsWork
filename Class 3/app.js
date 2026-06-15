const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3000;

// Path to users.json file
const dataFilePath = path.join(__dirname, 'users.json');
console.log(dataFilePath);

// Load existing users from file or create an empty array
let users = [];
if (fs.existsSync(dataFilePath)) {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    users = JSON.parse(data || '[]');
  } catch (err) {
    console.error('Error reading users.json:', err);
    users = [];
  }
} else {
  // Create empty file if not exists
  fs.writeFileSync(dataFilePath, '[]', 'utf8');
}

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  // GET /users — return all registered users
  if (req.method === "GET" && req.url === "/users") {
    res.statusCode = 200;
    return res.end(JSON.stringify(users, null, 2));
  }

  // POST /register-user — add a new user
  else if (req.method === "POST" && req.url === "/register-user") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const newUser = JSON.parse(body);

        // Basic validation
        if (!newUser.name || !newUser.email) {
          res.statusCode = 400;
          return res.end(JSON.stringify({ message: "User must include name and email" }));
        }

        users.push(newUser);

        // Save updated users list to file
        fs.writeFile(dataFilePath, JSON.stringify(users, null, 2), (err) => {
          if (err) {
            console.error('Error writing file:', err);
            res.statusCode = 500;
            return res.end(JSON.stringify({ message: "Failed to save user data" }));
          }

          res.statusCode = 201;
          return res.end(
            JSON.stringify({
              message: "User registered successfully",
              user: newUser,
            })
          );
        });
      } catch (err) {
        res.statusCode = 400;
        return res.end(JSON.stringify({ message: "Invalid JSON format" }));
      }
    });
  }

  // Handle unknown routes
  else {
    res.statusCode = 404;
    return res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
