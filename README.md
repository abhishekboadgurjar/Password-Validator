
# Password Validator Website

## Introduction

In this tutorial, we will guide you through building a simple and effective Password Validator using React. This project is perfect for beginners who want to practice form validation and handling user input in React.

## Project Overview

The Password Validator checks the strength of the user's password in real-time and provides feedback on whether the password meets the criteria for a strong password. The feedback is displayed below the input field, encouraging users to create more secure passwords.

## Features

- **Real-Time Validation**: Provides instant feedback on password strength.
- **User-Friendly Interface**: Simple and clean design to make the password validation process easy.
- **Dynamic Feedback**: Color-coded messages indicating password strength.

## Technologies Used

- **React**: For building the user interface.
- **CSS**: For styling the application.
- **Validator Library**: For validating the strength of the password.

## Project Structure

The project is structured as follows:

```
├── public
├── src
│   ├── components
│   │   └── Password.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

### Key Components

- **Password.jsx**: Handles the validation logic and input field for the password.
- **App.jsx**: Wraps the Password component and manages the layout of the application.
- **App.css**: Contains styling for the app and components.

## Code Explanation

### Password Component

The `Password` component is responsible for handling user input and validating the password's strength. It uses the `useState` hook to manage the validation message and color, and the `validator` library to check the password strength.

```javascript
import { useState } from 'react';
import validator from 'validator';

const Password = () => {
  const [validationMessage, setValidationMessage] = useState("");
  const [messageColor, setMessageColor] = useState("black");

  const validate = (value) => {
    if (validator.isStrongPassword(value)) {
      setValidationMessage("Password is Strong!");
      setMessageColor("green");
    } else {
      setValidationMessage("Password is not Strong. Please consider using a mix of uppercase, lowercase letters, numbers, and symbols.");
      setMessageColor("red");
    }
  };

  return (
    <div className="password">
      <form action="post">
        <input type="password" required placeholder="Enter Password" onChange={(e) => validate(e.target.value)} />
        <p style={{ color: messageColor }}>{validationMessage}</p>
      </form>
    </div>
  );
};

export default Password;
```

In this component, the `useState` hook is used to manage both the validation message and its color. The `validate` function checks the password strength using the `validator` library and updates the state accordingly.

### App Component

The `App` component handles the overall layout of the application and renders the `Password` component.

```javascript
import Password from "./components/Password";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="header">
        <h1>Password Validator</h1>
      </div>
      <Password />
      <div className="footer">
        <p>Made with ❤️ by Abhishek Gurjar</p>
      </div>
    </div>
  );
};

export default App;
```

This component structures the layout, providing a header and footer, while rendering the `Password` component in the center.

### CSS Styling

The CSS file ensures the layout is simple and responsive. The input field is styled to be user-friendly, and the feedback message is color-coded based on the strength of the password.

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-color: #f0f0f0;
  color: black;
}

.app {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.header {
  margin-bottom: 10px;
}

.password {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.password input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 10px;
}

.password p {
  font-size: 0.8em;
}

.footer {
  margin-top: 100px;
}
```

The `.password` class centers the password input and validation message, and the button is styled for a modern look. Color changes for the validation message make the feedback more intuitive for users.

## Installation and Usage

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/abhishekgurjar-in/password-validator.git
cd password-validator
npm install
npm start
```

This will start the development server, and the application will be running at `http://localhost:3000`.


## Live Demo

Check out the live demo of the Password Validator [here](https://password-validator-in.netlify.app/).

## Screenshots
![Screenshot 2024-09-08 220824](https://github.com/user-attachments/assets/4cf45462-062f-447c-89e7-bc12d458bd4a)

## Conclusion

This Password Validator is a great project to get hands-on experience with form validation and managing state in React. It teaches the basic principles of user input handling and real-time feedback.

## Credits

- **Inspiration**: The project is inspired by the need for secure password practices and form validation techniques.

### Author

**Abhishek Gurjar** is a web developer passionate about building interactive and responsive web applications. You can follow his work on [GitHub](https://github.com/abhishekgurjar-in).
