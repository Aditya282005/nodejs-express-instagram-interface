# nodejs-express-instagram-interface
Dynamic Instagram-style profile page built with Node.js, Express, and EJS using route parameters
Instagram Profile Interface (Node.js + Express + EJS)

Project Overview

This project is a simple Instagram-style profile interface built using Node.js, Express.js, and EJS.
It demonstrates dynamic routing where different profile pages are rendered based on the username in the URL.

Example routes:

- "/ig/dogs"
- "/ig/cats"

Each route dynamically displays profile information such as followers, following, posts, likes, and comments.

---

Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- HTML & CSS
- JSON

---

Features

- Dynamic routing using Express ("/ig/:username")
- Server-side rendering with EJS
- Profile data stored in a JSON file
- Displays:
  - Followers
  - Following
  - Posts
  - Likes
  - Comments

---

How It Works

1. Profile data is stored inside a JSON file.
2. The server reads this data using "require()".
3. When a user visits "/ig/:username", Express captures the route parameter.
4. The corresponding profile data is fetched.
5. The data is passed to an EJS template.
6. The template renders the Instagram-style profile page dynamically.

---

Example Route

http://localhost:8080/ig/dogs

---

Installation

Clone the repository:

git clone https://github.com/yourusername/instagram-profile-express.git

Go to the project folder:

cd instagram-profile-express

Install dependencies:

npm install

Run the server:

node app.js

Open in browser:

http://localhost:8080/ig/dogs

---

Future Improvements

- Add database integration (MongoDB)
- Allow users to create posts
- Add authentication system
- Make the UI more responsive

---

Author

Aditya Rathore
