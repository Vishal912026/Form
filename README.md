# Simple Registration App (Frontend + Backend)

A basic web application featuring a frontend registration form styled with custom CSS and a backend server powered by Node.js and Express.js to handle GET and POST requests.

---

Features

* Frontend: Clean UI with standard forms (GET & POST) and an application registration form.
* Styling: Custom CSS with dark-theme background, spacious layout, and larger typography.
* Backend: Express.js server listening on port `8080` handling user registration inputs.
* Dynamic Response: Displays a successful completion message with the user's name upon submission.

---

## Tech Stack

* Frontend: HTML5, CSS3
* Backend:Node.js, Express.js
* Development Tool: Nodemon (for auto-restarting the server)

---

## Project Structure

```text
├── Backend/
│   ├── node_modules/
│   ├── index.js          # Express server configuration & routes
│   ├── package.json
│   └── package-lock.json
└── Frontend/
    ├── index.html        # Main registration forms
    └── style.css         # Custom styling and layout