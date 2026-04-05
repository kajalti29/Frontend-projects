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

======================================================
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

Real-life Example:
Inline = Direct makeup
Internal = Makeup inside home
External = Professional stylist

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

<!--Interview Q: Which is best? -->
✅ External CSS
-------------------------------------------------------
<!-- 3️⃣ What is Selector? -->
CSS Selector is used to select HTML elements for styling.
Types:
Element, Class, ID, Universal, Grouping
<!-- 
p { color: green; }      /* Element */
.box { color: red; }     /* Class */
#main { color: blue; }   /* ID */ -->


<!-- 3️⃣ What is the difference between class and id? -->
ID :-
The id is used to uniquely identify a single element on a webpage.

👉 Imagine a classroom 👩‍🏫
Every student has a roll number → That is like an id (unique).

Class :-
The class is used to apply the same style or behavior to multiple elements.

👉 Imagine a classroom 👩‍🏫
Many students can belong to the same section (A, B, C) → That is like a class.

<!-- 5️⃣ What is Specificity? -->
Specificity decides which CSS rule applies when multiple rules target same element.

Priority Order:
Inline > ID > Class > Element
---------------------------------------------------------
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
“Margin is the space outside the element, while padding is the space inside the element.”

“Margin is the space outside the element and it controls the distance between elements.
 Padding is the space inside the element, between the content and the border, and it controls the space within the element.”

2️⃣ Padding:-
👉 Space between content and border.
padding is inside space
<!-- padding: 20px; -->
4️⃣ Margin:-
👉 Space outside the border.
<!-- margin: 15px; -->

7️⃣ What is box-sizing?
Controls how width & height are calculated.

<!-- box-sizing: border-box; -->
Logic:
Includes padding & border inside width.
----------------------------------------------------------------------
<!-- 7️⃣ What is display property? -->
<!-- 🔥 1️⃣7️⃣ What is Display Property? -->
The display property in used to define how an element is rendered/displayed on the web page.
Common values:
block
inline
inline-block
none
flex
grid

<!-- 9️⃣ Difference between inline, block, inline-block? -->
Block elements:-block elements takes full width and starts on new line.
Examples:
Block → <div>, <p>, <h1>

Inline element:- inline element takes ony required width and does not start new line.
Examples:
Inline → <span>, <a>, <strong>, 

<div>This is block</div>
<span>This is inline</span>

inline-block:-
similar inline but can set width & height


<!-- 8️⃣ What is position property? -->
<!-- 🔥 4️⃣ What is Position in CSS? -->
The position property is used to define how an element are placed on the webpage.
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

* Sticky Navbar
Definition: Navbar that sticks to top when scrolling.
Example:

.navbar {
  position: sticky;
  top: 0;
  background: #fff;
}

<!--1. static (default) -->
“Static is the default position where elements appear normally.” 

Element normal flow me rehta hai
👉 koi change nahi hota

<!--5. What is the difference between relative, absolute, and fixed? -->

* Relative position → Relative position moves the element from its original position.

* Absolute Position → Absolute Position Moves relative to nearest positioned parent.

* Fixed position → fixed to the viewport (does not scroll)

“Sticky position acts like relative at first and then becomes fixed while scrolling.”
<!-- 🔥 7️⃣ What is z-index? -->
Controls stacking order of positioned elements.
<!-- 
.box {
  position: relative;
  z-index: 10;
} -->

<!-- Why z-index not working? -->
Answer:
Because position not be static.

<!--🔥3️⃣ What is the Difference Between display: none and visibility: hidden? -->
* display: none → element completely removed from layout
* visibility: hidden → element hidden but space still reserved

<!-- 
.box1 { display: none; }
.box2 { visibility: hidden; } -->

1️⃣8️⃣ Why margin auto not working?
Needs width defined.
---------------------------------------------------------
<!-- 🔥 1️⃣9️⃣ What is Overflow? -->
Overflow controls extra content.
<!-- overflow: hidden; -->
Commen Properties:-

overflow: visible;
overflow: hidden; 
overflow: scroll;
overflow: auto;

<!-- What is float? -->
Used for layout before flexbox
---------------------------------------------------------------------
<!--5️⃣ What is Flexbox? -->
Flexbox is a one-dimensional layout system in CSS used to design flexible and responsive layouts.
It helps align items easily in horizontally or vertically.
<!-- 🌍 Real-World Example -->  
Like arranging books on a shelf(almari ya rak) 📚.

<!-- Important properties:- -->
display: flex → activates flexbox
flex-direction → row / column
justify-content → horizontal alignment
align-items → vertical alignment
gap → space between items

<!-- 
.container {
  display: flex;
  justify-content: center;
  align-items: center;
} -->

<!-- 1️⃣2️⃣ What is difference between justify-content and align-items? -->
Answer:
justify-content → Horizontal alignment
align-items → Vertical alignment


<!-- 2️⃣2️⃣ What is flex container? -->
Parent with display: flex.

<!-- flex-direction? -->
Row or column.

<!-- flex-wrap? -->
Wrap items.
flex-wrap ka matlab hai items ko next line me bhejna jab space kam ho.

<!-- gap in flex? -->
Space between items 

<!-- 2️⃣8️⃣ Difference align-items vs align-content? -->
align-items → single line
align-content → multi-line

<!-- 2️⃣9️⃣ How to make responsive card layout? -->
display: flex;
flex-wrap: wrap;

<!-- 3️⃣0️⃣ What is flex-grow? -->
Expands item.

--------------------------------------------------------------
<!-- 🔥 6️⃣ What is Grid? -->
"CSS Grid is a two-dimensional layout system used to create complex web layouts using rows and columns.
<!-- 
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
} -->

<!-- grid-template-columns? -->
Define columns.
grid-template-columns: repeat(3, 1fr);

<!-- 3️⃣9️⃣ What is fr unit? -->
Fraction of available space.

<!-- What is auto-fit? -->
Fits columns automatically.

<!-- 🔥 7️⃣ Difference Between Flexbox and Grid -->
| Flexbox       | Grid           |
| ------------- | -------------- |
| 1D layout     | 2D layout      |
| Row OR column | Row AND column |

-----------------------------------------------------------------
<!-- 1️⃣4️⃣ What is media query? -->
A Media Query is used to apply different styles based on the screen size, device type, or resolution.
👉 It helps make a website responsive (mobile, tablet, desktop friendly).

<!--
/* Desktop */
.container {
  display: flex;
}

/* Mobile */
@media (max-width: 600px) { 
  .container {
    display: block;
  }
} -->
👉 Desktop me flex mtlb .container flex hoga to items side-by-side aayege.
👉 Mobile me block mtlb .container block ho jayega to items ek ke neeche ek aayege.

<!-- Why media query not working? -->
Answer:
Missing viewport meta tag
Wrong breakpoint
CSS file not linked

<!-- Mobile-first approach? -->
Design for small screens first.

<!-- 5️⃣3️⃣ Viewport units? -->
vw, vh

<!-- 5️⃣4️⃣ rem vs em? -->
rem → root
em → parent

<!--8️⃣ What is Responsive Design? -->
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

-----------------------------------------------------------------------
<!-- 🔥 🔟 What is Transition vs Animation? -->
<!-- 🔥 1️⃣ What is CSS Transition? -->
CSS Transition is used to create a smooth change between two states of an element.

Real-world Example:
Hover effect on:
Buttons
Cards
Navbar links
<!-- 
button {
  transition: 0.3s;
} -->

<!-- 🔥 2️⃣ What is CSS Animation? -->
CSS Animation is used to create complex motion effects using keyframes.
Example:-
Loader spinner
Typing effect
Moving slider
Bounce effect
<!-- 
@keyframes move {
  from { left:0; }
  to { left:100px; }
} -->

<!-- What is :hover? -->
Applies style on mouse hover.

<!-- 7️⃣2️⃣ What is :nth-child? -->
Selects element by index

<!-- ✅ 7. How to center a div? -->
Answer (Flexbox method – best way):
<!-- 
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
} -->
----------------------------------------------------------------------------
<!-- What is Units  -->
“CSS units are used to define the size, length, and spacing of elements on a webpage. They help control properties like width, height, margin, padding, and font-size.”
<!-- 🔥 9️⃣ What is the Difference Between Absolute and Relative Units? -->
✅ 1️⃣ Absolute Units:-
Absolute units are fixed units that do not change based on screen size or parent element.
Examples: px, cm, mm, in, pt

✅ 2️⃣ Relative Units:-
Relative units depend on another value such as parent element, root element, or viewport size.
Examples: %, em, rem, vw, vh

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

% → is relative to the parent elements size.
em → is relative to the parent elements font size.
rem → is relative to the root font size.
vw and vh are relative to the viewport size, meaning the screen width and height.”

<!-- What is vh and vw? -->

Answer:
vh → Viewport height
vw → Viewport width

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

=========================================================
<!-- 8️⃣1️⃣ What is CSS variable? -->
Definition: Store reusable values.
Hindi:-
👉 Ek value ko naam de dete hain
👉 Fir usko baar-baar use kar sakte hain
:root {
  --main-color: blue;
}
<!-- 
h1 {
  color: var(--main-color);
  font-size: var(--font-size);
} -->

What is calc()?
Performs calculation

9️⃣1️⃣ Why flex not centering?
Parent not flex.

9️⃣2️⃣ Why z-index not working?
Position not defined.

<!-- Create sticky navbar -->
position: sticky;
top: 0;

<!-- 3️⃣ What is BEM in CSS? -->
BEM = Block Element Modifier
Helps write clean & scalable CSS.

<!-- 5️⃣ What is CSS Position Sticky? -->
nav {
  position: sticky;
  top: 0;
}
-----------------------------------------------------------------
