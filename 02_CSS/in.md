<!-- 🔥 3️⃣ What is the Difference Between display: none and visibility: hidden? -->
display: none → Display none removes layout space completely.
visibility: hidden → Visibility hidden hides element but does not remove space
<!-- 
.box1 { display: none; }
.box2 { visibility: hidden; } -->

<!-- 🔥 4️⃣ What is Position in CSS? -->
The position property is used to control how an element are placed on the webpage.
It works with:
top
right
bottom
left
z-index 
<!-- ✅ Types -->
static (default)
relative
absolute
fixed
sticky

<!-- 🔥 5️⃣ What is Flexbox? -->
Flexbox is a one-dimensional layout system used to align items horizontally or vertically.

🌍 Real-World Example
Like arranging books on a shelf(almari ya rak) 📚.
<!-- 
.container {
  display: flex;
  justify-content: center;
  align-items: center;
} -->

<!-- 🔥 7️⃣ What is z-index? -->
Controls stacking order of elements.
<!-- 
.box {
  position: relative;
  z-index: 10;
} -->


<!-- 🔥 8️⃣ What is Responsive Design? -->
Responsive design means a website automatically adjusts to different screen sizes
(mobile 📱, tablet 📱, laptop 💻).
<!-- 
@media (max-width: 600px) {
  body {
    background: lightblue;
  }
} -->

<!-- 🔥 9️⃣ What is the Difference Between Absolute and Relative Units? -->
✅ 1️⃣ Absolute Units:-
Absolute units are fixed units that do not change based on screen size or parent element.
Examples: px, cm, mm, in, pt

✅ 2️⃣ Relative Units:-
Relative units depend on another value such as parent element, root element, or viewport size.
Examples: %, em, rem, vw, vh

<!-- 🔥 🔟 What is Transition vs Animation? -->
<!-- 🔥 1️⃣ What is CSS Transition? -->
CSS Transition is used to create a smooth change between two states of an element.
<!-- Real-world Example: -->
Hover effect on:
Buttons
Cards
Navbar links
<!-- 
button {
  transition: 0.3s;
}
button:hover {
  background: red;
} -->

<!-- 🔥 2️⃣ What is CSS Animation? -->
CSS Animation is used to create complex motion effects using keyframes.
Example:-
Loader spinner
Typing effect
Moving slider
Bounce effect
