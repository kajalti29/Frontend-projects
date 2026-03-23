<!-- 🎯 CSS Selectors -->
<!-- ✅ What is CSS Selector? -->
CSS Selector is used to select HTML elements for styling.

1️⃣ Universal Selector (*):-
<!-- 
* {
  margin: 0;
  padding: 0;
} -->

✔ Use: Selects all elements
 EXa- All students → universal selector

2️⃣ Element (Tag) Selector:-
🧠 Real life: “Saare students blue uniform”
<!-- 
p {
  color: blue;
} -->

3️⃣ ID Selector (#):-
ID selector (#) is used to style one unique element.It is denoted by #.
🧠 Real life:Every person has a unique Aadhaar number.
<!-- 
#title {
  font-size: 30px;
} -->

4️⃣ Class Selector (.):-
Class: a class selector (.) is used to style multiple elements that share the same class name. It is denoted by (.).
🧠 Real life:-
Think of students in a classroom 🎓
Many students belong to "Class 10A".
One class name, multiple students
<!-- 
.box {
  background: yellow;
} -->

5️⃣ Group Selector (,):-
✔ Use: Apply same style to multiple elements

<!-- 
h1, h2, p {
  color: red;
} -->

6️⃣ Descendant Selector (Space):-
🧠 Real life: “Class ke andar ke students”
<!-- 
div p {
  color: green;
} -->

✔ Use: Selects <p> inside <div>

7️⃣ Child Selector (>):-
<!-- 
div > p {
  color: blue;
} -->

✔ Use: Selects direct child only

8️⃣ Attribute Selector:-
<!-- 
input[type="text"] {
  border: 2px solid red;
} -->
✔ Use: Select elements by attribute

--------------------------------------------------------------------------------------------
9️⃣ Pseudo-class Selector (:):-
A pseudo-class selector is used to define a special state of an element, such as hover, focus, active. 

It starts with a colon (:).

<!-- Real-World Example -->
Like a traffic light 🚦 changing color based on state:

Real-world:
Button color changes when mouse over.

Red → stop, Green → go, Yellow → slow
<!-- 
a:hover {
  color: red;
} -->

✔ Used for state
<!-- :hover -->
Applies style when mouse is over the element.
<!-- 
button:hover {
  background-color: blue;
  color: white;
} -->

<!-- :focus -->
Applies when input field is focused.
<!-- 
input:focus {
  border: 2px solid green;
} -->

<!-- :actives -->
Applies when element is being clicked.
<!-- 
a:active {
  color: red;
} -->

<!-- :first-child -->
Targets the first child element.
<!-- 
li:first-child {
  color: purple;
} -->

<!-- Common Pseudo-classes -->
:hover → mouse le jaane par
:focus → input active ho
:active → click karte waqt
:visited → visited link

:first-child → pehla child
✔ Interview Q:
Hover means? → When mouse comes over element

🔟 Pseudo-element Selector (::):-
<!-- 
p::first-letter {
  font-size: 30px;
} -->

✔ Styles part of element
::before
::after
::first-line
-----------------------------------------------------------------------------------------------------------------------------
<!-- 🟢 5️⃣ Colors in CSS -->
<!-- ✅ What are Colors in CSS? -->
CSS colors are used to define the color of text, background, borders, and other elements in a webpage.

CSS provides multiple colors like:
Color name (red, blue)
HEX (#ff0000)
RGB (rgb(255,0,0))
RGBA (rgba(255,0,0,0.5))
HSL (hsl(0,100%,50%))

<!-- ✅ 1️⃣ Color Name:- -->
Color names are predefined keyword values in CSS used to set colors directly by writing their names.

p {
  color: red;
}
Around 140+ predefined color names available

<!-- ✅ 2️⃣ HEX Color:- -->
HEX (Hexadecimal) color is a six-digit code used to represent colors using a combination of Red, Green, and Blue values.

Format: #RRGGBB
FF = Red
00 = Green
00 = Blue

p {
  color: #ff0000;
}

<!-- ✅ 1️⃣ RGB (Red, Green, Blue) -->
RGB is a color model in CSS where colors are defined using Red, Green, and Blue values ranging from 0 to 255.

color: rgb(255, 0, 0);   /* red */

<!-- ✅ 2️⃣ RGBA (RGB + Alpha) -->
RGBA is similar to RGB but includes an Alpha value to control transparency.

Alpha range: 0 to 1
0 = fully transparent
1 = fully visible

background-color: rgba(255, 0, 0, 0.5);

------------------------------------------------------------------------------------------------
<!-- ✅ What is CSS Gradient? -->
A CSS gradient is used to create a smooth transition between two or more specified colors using the background-image property

<!-- ✅ Types of CSS Gradients -->
1️⃣ Linear Gradient:-
Colors ek straight line me transition hote hain.

background: linear-gradient(to right, red, blue);
<!-- 🔹 Direction Options -->
to right
to left
to bottom
to top
45deg

<!-- Example:
background: linear-gradient(45deg, red,yellow); -->
Real Use Case
Buttons, hero sections, banners

2️⃣ Radial Gradient:-
Colors circular ya elliptical shape me spread hote hain.

<!-- background: radial-gradient(circle, red, yellow, green); -->

🔹 Real Use Case
Highlight effect, spotlight UI

3️⃣ Conic Gradient (Advanced):-
Colors circular rotation me center se rotate hote hain.

<!-- background: conic-gradient(red, yellow, green); -->

Real Use Case
Pie charts, loaders, circular designs
-------------------------------------------------------------------------------
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

3️⃣ What is the difference between transition and animation?
| Transition                  | Animation                 |
| --------------------------- | ------------------------- |
| Works between 2 states      | Works with multiple steps |
| Needs trigger (hover/click) | Can run automatically     |
| No keyframes needed         | Uses `@keyframes`         |

<!-- Which properties can be animated in CSS? -->
color
background-color
transform
opacity
width/height
etc.

<!-- 5️⃣ What is @keyframes? -->
It defines the stages of an animation.

<!-- 6️⃣ What does animation: slide 2s infinite ease; mean? -->
slide → animation name
2s → duration
infinite → repeat forever
ease → speed curve

<!-- 7️⃣ What is the use of transition-timing-function? -->
It controls animation speed pattern (ease, linear, ease-in, ease-out).

<!-- 8️⃣ Can we use transition and animation together? -->
Yes. Animation runs automatically, and transition works when property changes (like hover).

<!-- 🔟 What is the difference between ease and linear? -->
linear → constant speed
ease → slow start, fast middle, slow end

<!-- 1️⃣1️⃣ What is animation-fill-mode? -->
Controls how element looks before/after animation.
Options:
forwards
backwards
both

<!-- 1️⃣2️⃣ What is animation-delay? -->
It delays the start of animation.
<!-- animation-delay: 2s; -->

----------------------------------------------------------------------------------
<!-- 7️⃣ Background Properties -->
background-color
background-image
background-repeat
background-position
background-size
<!-- 
body {
  background-image: url(bg.jpg);
  background-size: cover;
} -->
------------------------------------------------
<!-- 🟢 6️⃣ Text Properties -->
text-align: center;
text-transform: uppercase;
text-decoration: underline;
line-height: 1.5;
letter-spacing: 2px;
------------------------------------------------
<!-- 🟢 7️⃣ Fonts Properties -->
font-size: 16px;
font-weight: bold;
font-style: italic;
font-family: Arial, sans-serif;
------------------------------------------------
<!-- 9️⃣ Box Model ⭐ (Very Important) -->
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

Margin 
  └── Border
        └── Padding
              └── Content

👉 Real Life Example:
Gift box 🎁
Gift = Content
Bubble wrap = Padding
Box = Border
Space between boxes = Margin

📌 Interview Tip:
Box model samajh aa gaya → CSS clear 😎
-----------------------------------------------------------------------------------
<!-- 🟢 9️⃣ CSS Units -->
CSS Units are used to define the size and measurement of elements in CSS, such as  width, height, margin, and padding.

✅ 1️⃣ Absolute Units:-
Absolute units are fixed units that do not change based on screen size or parent element.

🔹 Common Absolute Units
px (pixels) ✅ most used
cm
mm
in (inches)
pt (points)

<!-- ✅ px (Pixel) -->
px is a fixed (absolute) unit that does not change with screen size or parent size.
<!-- 
p {
  font-size: 16px;
}
 -->
🔹 Real Use Case
Borders, small UI elements, icons


✅ 2️⃣ Relative Units:-
Relative units depend on another value such as parent element, root element, or viewport size.

<!-- Common Relative Units -->
% → relative to parent
em → relative to parent font-size
rem → relative to root (html) font-size
vw → viewport width
vh → viewport height

<!-- 1️⃣ % (Percentage) -->
Parent element ke size ke according
<!-- 
div {
  width: 50%;
} -->

% is a relative unit that is calculated based on the parent element’s size.-------------------------------------------------------
<!-- 2️⃣ em -->
em is a relative unit based on the font-size of the parent element.
<!-- .parent {
  font-size: 20px;
}

.child {
  font-size: 2em;  /* 40px */
} -->
⚠️ Problem: nesting me size multiply ho jata hai
---------------------------------------------------------------------
<!-- 3️⃣ rem ⭐ (Interview Favorite) -->
rem is a relative unit based on the root (html) element’s font-size.
<!-- 
html {
  font-size: 16px;
}

p {
  font-size: 2rem; /* 32px */
} -->
-----------------------------------------------------------------
<!-- 4️⃣ vh / vw -->
Viewport (screen) ke according
<!-- 
div {
  height: 100vh;  /* full screen height */
  width: 50vw;   /* screen ka 50% width */
} -->

1vh = viewport height ka 1%
1vw = viewport width ka 1%
------------------------------------------------------------------------------------------------
<!-- 1️⃣1️⃣ Position Property -->
<!-- 
position: static;
position: relative;
position: absolute;
position: fixed;
position: sticky; -->

<!-- ✅ What is Position in CSS? -->
The position property is used to control how an element is placed on the webpage.
It works with:
top
right
bottom
left
z-index 

<!-- 1️⃣ position: static (Default) -->
Static is the default position does not work top, right, bottom and left.

div {
  position: static;
}
💡 Logic:
Normal document flow follow karta hai.

<!-- 2️⃣ position: relative ⭐ -->
Relative positioning moves the element relative to its original position.
Hindi:-
Element apni original jagah se move hota hai
Original space reserve rehta hai

🏠 Real-world:
Jaise aap chair ko thoda side khiska dete ho, but jagah reserved rehti hai.

div {
  position: relative;
  top: 20px;
  left: 10px;
}

<!-- position: absolute 🔥 -->
Element normal flow se bahar ho jata hai

Nearest positioned parent (relative/absolute/fixed) ke according move karta hai

.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 0;
  right: 0;
}


<!-- 4️⃣ position: fixed ⭐⭐ -->
Fixed positioning positions the element relative to the viewport.
Element viewport ke according fixed rehta hai.
Scroll karne par bhi move nahi hota.

.navbar {
  position: fixed;
  top: 0;
}

👉 Use case: navbar, chat button

<!-- 5️⃣ position: sticky 🔥🔥 -->
Scroll hone tak normal rehta hai.
👉 Scroll ke baad fixed ho jata hai.

.header {
  position: sticky;
  top: 0;
}
<!-- 
relative: original jagah se move hota hai

absolute: parent ke according position hota hai

fixed: screen ke sath chipka rehta hai

sticky: scroll pe chipakta hai -->
-----------------------------------------------------------------------------------------------
Most Imp
<!-- 🔟 Display Property -->
The display property in used to define how an element is rendered/displayed on the web page.
<!-- 
display: block;
display: inline;
display: inline-block;
display: none; -->

<!--1️⃣ block:- -->
The element takes full width.start on a new line.
Example:- <div>, <p>, <img>, <h1>
<!-- 
.block{
    display:block;
} -->

<!--2️⃣ inline-->
Inline elements take only required width and do not start on a new line.
Example:-<span>, <a>, <strong>
<!-- 
span {
  display: inline;
} -->

<!--3️⃣ inline-block; -->
similar inline but allows set height and width.
<!-- 
div {
  display: inline-block;
  width: 200px;
  height: 100px;
} -->

<!-- none -->
none display removes the element completely from layout.

div {
  display: none;
}
-----------------------------------------------------------------------------------------------
<!-- ⃣4️⃣ Overflow -->
<!-- : What is overflow in CSS? -->
Overflow controls extra content.
Overflow controls extra content that doesn’t fit inside an element.

<!-- Real-World Example -->
Like water overflowing from a glass 🥛

overflow: visible;
overflow: hidden;
overflow: scroll;
overflow: auto;

1️⃣overflow: visible;-
content overflow and is shown.
👉 Content box ke bahar bhi dikh jata hai

2️⃣ overflow: hidden ;-
 content overflows but is hidden.
👉 Extra content chhup jata hai

3️⃣overflow: scroll;-Always shown scrollbars(Horizontal or vertical).
👉 Hamesha scrollbar show hota hai

 4️⃣overflow: auto;-
 Show scroolbars only when necessary.
 👉 Zarurat ho tabhi scrollbar dikhega.
 ----------------------------------------------------------------------------------------------
 <!-- visibility -->
The visibility property controls whether an element is visible or hidden without affecting the layout structure.
👉 Values: visible, hidden

1️⃣ visible (Default):_✔ Element visible rahega
<!-- visibility: visible; -->

2️⃣ hidden:_ ✔ Element invisible ho jata hai
            ✔ BUT space reserved rehti hai

   <!-- visibility: hidden; -->


<!-- 1️⃣5️⃣ Opacity-->
Opacity controls transparency.
Opacity controls how transparent an element is.
👉 Value: 0 (invisible) to 1 (fully visible)

<!-- opacity: 0.5;
     opacity = transparency -->

<!-- 1️⃣7️⃣ Z-index:- -->
Defines which element appears on top.

👉 Works only with positioned elements (position: relative / absolute / fixed / sticky)
<!-- 
.box {
  z-index: 10;
} -->
------------------------------------------------------------------------------------------------
<!-- 1️⃣2️⃣ Flexbox ⭐⭐ -->
Flexbox is a one-dimensional layout system used to align items horizontally or vertically.
<!-- Real-world: -->
Items arranged in a single line like seats in a bus.

<!-- Main Properties: -->
justify-content → horizontal
align-items → vertical
flex-direction
gap
<!-- 
display: flex; (row me align) - main axis
justify-content: center;(column me align) - cross axis
align-items: center; 
gap -->

🔹 Flexbox kyu use karte hain?
Why we use flexbox?
👉 Layout ko easy & responsive banane ke liye.

<!-- 1️⃣ flex-direction -->
Defines main axis direction.
<!-- 
flex-direction: row;        /* Default */
flex-direction: column;
flex-direction: row-reverse;
flex-direction: column-reverse; -->
👉 row = horizontal
👉 column = vertical

<!-- 2️⃣ justify-content -->
Main axis pe alignment control karta hai.
justify-content: center;
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;

<!-- 3️⃣ align-items -->
Cross axis pe alignment control karta hai.
align-items: center;
align-items: flex-start;
align-items: flex-end;

-----------------------------------------------------------------------------

<!-- 1️⃣3️⃣ CSS Grid ⭐⭐ -->
Grid is a two-dimensional layout system
that arranges items in rows AND columns.

🧠 Real-world:
Newspaper layout
<!-- 
display: grid;
grid-template-columns
grid-template-rows
gap -->

.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
------------------------------------------------------------------------------------------------
1️⃣2️⃣ Responsive Design ⭐⭐⭐
<!-- Q: What is responsive design? -->
Responsive design means a website automatically adjusts to different screen sizes
(mobile 📱, tablet 📱, laptop 💻).

Mobile: ≤ 600px
Tablet: 601 – 1024px
Desktop: ≥ 1025px

@media (max-width: 600px) { }
@media (min-width: 601px) and (max-width: 1024px) { }
@media (min-width: 1025px) { }

<!-- 🧠 Real-world: -->
Website adjusts like flexible clothes

<!-- 🟢 1️⃣4️⃣ Responsive Design -->
<!-- 
@media (max-width: 768px) {
  body { background: red; }
} -->

Mobile-first approach ✔
-----------------------------------------------------------------------------------------------
<!-- Q1: What is CSS specificity? -->
<!--  -->
A: It decides which CSS rule is applied when multiple rules target the same element.
----------------------------------------------------------------------------------------------------
<!-- 🔹 CSS 2D Transform (Simple Definition) -->
<!-- 🟢 1️⃣ CSS 2D Transform -->
CSS 2D Transform is used to manipulate an element in two-dimensional space, including moving, rotating, scaling, and skewing it along the X and Y axes.

<!-- 2️⃣ Key Properties to Know -->
1️⃣ translate():- Moves an element in X and Y direction.

Syntax: transform: translate(x, y);
Units: px, %, em
Real use: Slide a button or card on hover.

<!-- Example:
div {
  transform: translate(50px, 20px);
} -->
Moves element 50px right, 20px down

2️⃣ translateX() & translateY():-
Moves element along a single axis.
<!-- 
transform: translateX(100px); /* move right */
transform: translateY(50px);  /* move down */ -->

3️⃣ rotate() :-
Rotates an element clockwise or anticlockwise.

Units: deg, turn
Positive → clockwise, Negative → anticlockwise

<!-- transform: rotate(45deg); -->
Rotates element 45° clockwise

4️⃣ scale():-
Resizes element proportionally.

Syntax: scale(sx, sy)
Units: unitless (numbers)

scaleX() / scaleY() → resize along single axis

transform: scale(1.5);    /* 150% size */
transform: scaleX(2);     /* double width */
transform: scaleY(0.5);   /* half height */

5️⃣ skew():-
Tilts an element along X and Y axes.

Units: deg
Gives a slanted / tilted effect

<!-- transform: skew(20deg, 10deg); -->
X-axis tilt = 20°
Y-axis tilt = 10°

6️⃣ matrix():-
Combines translate, rotate, scale, and skew in one.

Syntax: matrix(a, b, c, d, e, f)

Usually advanced / less common in interviews

transform: matrix(1, 0.2, 0, 1, 30, 50);

Moves, rotates, scales, and skews element in one line
=======================================================================================
<!-- What is CSS 3D Transform? -->
CSS 3D Transform is used to move, rotate, and scale elements in 3D space along the X, Y, and Z axes, creating depth and perspective effects.

2D = X & Y axes
3D = X, Y & Z axes (Z-axis adds depth)

<!-- 1️⃣ translate3d(x, y, z) -->
Moves an element in 3D space.

<!-- transform: translate3d(50px, 20px, 100px); -->
X = 50px (right)
Y = 20px (down)
Z = 100px (toward viewer)

----------------------------------------------------------------------------