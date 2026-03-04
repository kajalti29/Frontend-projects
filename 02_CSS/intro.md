<!-- What is box-sizing? -->
Controls how total width and height are calculated.
<!-- * { box-sizing: border-box; } -->

<!-- 17. What is justify-content? -->
Aligns items along main axis.

<!-- 18. What is align-items? -->
Aligns items along cross axis.

<!-- What is gap? -->
Adds spacing between items.

<!-- 27. What is min-width vs max-width? -->
Defines minimum and maximum width limits.

<!-- 36. What are vh and vw? -->
Viewport height & width units.


=========================================================
<!-- 1️⃣ What is CSS? -->
CSS(Cascading Style Sheets) is used to control layout and design of web pages.
It allows developers to style HTML elements by changing colors, fonts, spacing, alignment, and making websites responsive for different screen sizes.

<!-- Real-world Example: -->
HTML is the structure of a house, CSS is the paint, furniture, lightingss and decoration.

<!-- 
h1 { 
  color: blue;
  text-align: center;
} -->

<!-- Why CSS is used? -->
CSS is used because:
* makes websites beautiful
* Makes websites responsive.
* Separates content(HTML) from design(CSS).
* Saves time
* Easy maintenance
* Improves user experience.

<!-- Why is it called “Cascading” Style Sheets? -->
👉 Because styles can come from multiple sources (inline, internal, external), and they follow a priority order (cascade).

<!-- 🧱 CSS Syntax -->
selector {
  property: value;
}

Example:-
p {
  color: red;
  font-size: 18px;
}

<!-- Types of CSS -->
1️⃣ Inline CSS:-
2️⃣ Internal CSS
3️⃣ External CSS ⭐ (Best)

<!-- 📌 Interview Q: Which is best? -->
✅ External CSS

<!-- 🔥 2️⃣ What is the difference between Inline, Internal, and External CSS? -->
"Inline CSS is written inside the HTML element using the style attribute and has highest priority.
<p style="color:red;">Inline</p>

Internal CSS is written inside the style tag in the head section and applies to a single page.
<style>
p { color: blue; }
</style>

External CSS is written in a separate file and linked to HTML, which is best practice for large projects."
<link rel="stylesheet" href="style.css">

Priority Order:-
Inline > Internal > External
------------------------------------------
<!--🔥3️⃣ What is the Box Model? -->
The CSS Box Model defines how padding, border, and margin are added around an element’s content.

Like a gift box 🎁
Content = gift
Padding = bubble wrap
Border = box
Margin = space outside box

It has 4 main parts:-
* Content 
* Padding
* Border
* Margin
<!-- 
div {
  width: 200px;
  padding: 10px;
  border: 5px solid black;
  margin: 20px;
} -->

1️⃣ Content:-
This is the actual content of the element
(text, image, video, etc.)
<!-- 
width: 200px;
height: 100px; -->

2️⃣ Padding:-
👉 Space between content and border.
padding is inside space
<!-- padding: 20px; -->

3️⃣ Border:-
👉 A line around padding and content.
<!-- border: 2px solid black; -->

4️⃣ Margin:-
👉 Space outside the border.
<!-- margin: 15px; -->


<!-- 🔥 4️⃣ What is the difference between margin and padding? -->
2️⃣ Padding:-
👉 Space between content and border.
padding is inside space
<!-- padding: 20px; -->
4️⃣ Margin:-
👉 Space outside the border.
<!-- margin: 15px; -->

<!-- 🔥 5️⃣ What is Flexbox? -->
Flexbox is a one-dimensional layout system used to align items horizontally or vertically.
<!-- 🌍 Real-World Example -->
Like arranging books on a shelf(almari ya rak) 📚.

Important properties:
display: flex
justify-content
align-items
<!-- 
.container {
  display: flex;
  justify-content: center;
  align-items: center;
} -->

<!-- 🔥 6️⃣ What is Grid? -->
"CSS Grid is a two-dimensional layout system used to create complex web layouts using rows and columns.
<!-- 
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
} -->

<!-- 🔥 7️⃣ Difference Between Flexbox and Grid -->
| Flexbox       | Grid           |
| ------------- | -------------- |
| 1D layout     | 2D layout      |
| Row OR column | Row AND column |


<!--🔥3️⃣ What is the Difference Between display: none and visibility: hidden? -->
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
<!-- 
.box {
  position: absolute;
  top: 50px;
  left: 20px;
} -->

<!-- ✅ 5. What is the difference between relative, absolute, and fixed? -->
* relative → moves relative to its normal position

* absolute → Moves relative to nearest positioned parent

* fixed → fixed to the viewport (does not scroll)

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
Specificity decides which CSS rule is apply when multiple rules target same element.
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

<!-- 🔥 1️⃣2️⃣ What is Pseudo-class? -->
Used to define special state.
Examples:
:hover
:focus
:nth-child()
<!-- 
button:hover {
  background: blue;
} -->

<!-- 🔥 1️⃣3️⃣ What is Pseudo-element? -->
Used to style specific part of element.

<!-- 🔥 1️⃣7️⃣ What is Display Property? -->
The display property in used to define how an element is rendered/displayed on the web page.
Common values:
block
inline
inline-block
none
flex
grid

<!-- 🔥 1️⃣9️⃣ What is Overflow? -->
Overflow controls extra content.

overflow: visible;
overflow: hidden;
overflow: scroll;
overflow: auto;
=========================================================================
🔥 Advanced CSS Interview Questions (With Answers)
<!-- 2️⃣ Difference between Flexbox and Grid? -->
| Flexbox                   | Grid                       |
| ------------------------- | -------------------------- |
| 1D layout (row OR column) | 2D layout (row AND column) |
| Best for alignment        | Best for full page layout  |

<!-- 3️⃣ What is BEM in CSS? -->
BEM = Block Element Modifier
Helps write clean & scalable CSS.

<!-- 5️⃣ What is CSS Position Sticky? -->
nav {
  position: sticky;
  top: 0;
}
-----------------------------------------------------------------
