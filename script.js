Here’s a simple *JavaScript (JS)* code snippet to 
```javascript

// Display welcome message

window.onload = function () {

  const welcome = document.getElementById("welcomeMsg");

  const date = new Date();

  welcome.innerText = `Welcome, Manikandan! Today is ${date.toDateString()}`;

};

// Toggle dark mode

function toggleDarkMode() {

  document.body.classList.toggle("dark-mode");

}

```

*Sample HTML part (to connect JS)*

```html

<h2 id="welcomeMsg"></h2>

<button onclick="toggleDarkMode()">Toggle Dark Mode</button>

```

*CSS for Dark Mode*

```css

.dark-mode {

  background-color: #121212;

  color: #f0f0f0;

}

```

Let me know if you want more features like:

- Contact form handler

- Project card popups

- Typewriter effect for intro