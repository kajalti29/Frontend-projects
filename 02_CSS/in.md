<!-- 🔥 3️⃣ What is the Difference Between display: none and visibility: hidden? -->
* display: none → element completely removed from layout
* visibility: hidden → element hidden but space still reserved

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

<!-- ✅ 5. What is the difference between relative, absolute, and fixed? -->
* relative → moves relative to its normal position

* absolute → positioned relative to nearest positioned parent

* fixed → fixed to the viewport (does not scroll)

<!-- 🔥 5️⃣ What is Flexbox? -->
Flexbox is a one-dimensional layout system used to align items horizontally or vertically.

Important properties:
display: flex
justify-content
align-items


flex-direction
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

Used:
Media queries
Flexible units
Flexbox / Grid

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

Real-world Example:
Hover effect on:
Buttons
Cards
Navbar links

<!-- 🔥 2️⃣ What is CSS Animation? -->
CSS Animation is used to create complex motion effects using keyframes.

Example:-
Loader spinner
Typing effect
Moving slider
Bounce effect

<!-- ✅ 6. What is Specificity in CSS? -->
Specificity decides which CSS rule will apply.
Priority order:
Inline style > ID > Class > Element.

<!-- ✅ 7. How to center a div? -->
Answer (Flexbox method – best way):
<!-- 
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
} -->

<!-- ✅ 8. What is the difference between em, rem, px, %? -->
px → 
px is a fixed (absolute) unit that does not change with screen size or parent size.
<!-- 
p {
  font-size: 16px;
}
 -->
🔹 Real Use Case
Borders, small UI elements, icons


% → relative to parent
em → relative to parent font size
rem → relative to root font size

<!-- ✅ 9. What is z-index? -->
z-index controls stacking order (which element appears on top).

====================================================================================================
🔥 Advanced CSS Interview Questions (With Answers)
<!-- 1️⃣ What is CSS Specificity and how is it calculated? -->
#box { color: red; }      /* Higher priority */
.box { color: blue; }
div { color: green; }

<!-- 2️⃣ Difference between Flexbox and Grid? -->
| Flexbox                   | Grid                       |
| ------------------------- | -------------------------- |
| 1D layout (row OR column) | 2D layout (row AND column) |
| Best for alignment        | Best for full page layout  |

<!-- 3️⃣ What is BEM in CSS? -->
BEM = Block Element Modifier
Helps write clean & scalable CSS.

<!-- 4️⃣ What is the difference between absolute and fixed? -->
absolute → relative to nearest positioned parent
fixed → relative to viewport

<!-- 5️⃣ What is CSS Position Sticky? -->
nav {
  position: sticky;
  top: 0;
}
-----------------------------------------------------------------
