# Fimple React Bootcamp

## Week 1

1. There will be a form on the left side of the page and a list on the right side.
2. Initially, the list will show as loading. As soon as the page opens, you will send a request to the "https://jsonplaceholder.typicode.com/todos?_limit=5" API and display the received 5 data items in the list with their properties (such as Title, checked status, etc.). Once the data arrives, the list elements will appear instead of the loading indication.
3. There will be a form on the left side containing a title input and a checkbox.
4. Upon clicking the submit button, the data filled in the form will be added to the list on the right.
5. Design and CSS are important. Additionally, you can clear the form upon form submission.

### Screenshot

![screenshot](/assets/screenshot.png)

### Links

- Live Site URL: [https://todo-list-016.netlify.app/](https://todo-list-016.netlify.app/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I Used

- **HTML:**
  - Structured the layout using semantic HTML elements such as **`<main>`**, **`<section>`**, **`<form>`**, **`<input>`**, and **`<ul>`**.
- **CSS:**
  - Utilized CSS variables (**`-Pale-blue`**, **`-Bright-blue`**, **`-Crimson-blaze`**, etc.) to define primary and neutral colors.
  - Employed Flexbox for layout management, defining styles for the left and right sections of the application.
  - Created media queries for responsive design, adapting the layout and styles for screens smaller than 768px.
- **External Libraries and Resources:**
  - Included Font Awesome icons library (version 4.7.0) through a CDN link.
  - Integrated Google Fonts, specifically using the 'DM Sans' font family via a URL import.
  - Used background images, both for desktop and mobile views, fetched from local assets (**`pattern-background-desktop.svg`** and **`pattern-background-mobile.svg`**).
- **JavaScript:**
  - Wrote JavaScript functions to handle the rendering of todo items (**`renderTodoItem`**), fetching data from a JSON placeholder API (**`fetchData`**), and form submission handling (**`handleSubmit`**).
  - Implemented event listeners (**`addEventListener`**) for form submission (**`submitBtn`**), checkbox changes (**`checkbox.addEventListener`**), and document load (**`DOMContentLoaded`**).
  - Dynamically updated DOM elements based on API data and user interactions.
