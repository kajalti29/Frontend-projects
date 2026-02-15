<!-- CSS FULL NOTES -->
<!-- 1️⃣ What is CSS? -->
CSS(Cascading Style Sheets) is used to control style and layout for example, to change colors fonts,spacing and responsiveness of a website.

CSS is the paint and decoration of  house

<!-- ❓ Why CSS is used? -->
CSS is used because:
* makes websites beautiful
* Makes websites responsive.
* Separates content(HTML) from design(CSS).
* Saves time
* Easy maintenance
* Improves user experience.

<!-- 🧱 CSS Syntax -->
selector {
  property: value;
}

Example:-

p {
  color: red;
  font-size: 18px;
}

----------------------------------------------------------------------------------
<!-- Types of CSS -->
1️⃣ Inline CSS:-
2️⃣ Internal CSS
3️⃣ External CSS ⭐ (Best)

<!-- Q: What are the types of CSS? -->
There are three types of CSS: Inline, Internal, and External.


<!-- 1️⃣ Inline CSS:- -->
An inline css used to applied directly inside an html tag using the style attribute.

<h1 style="color:blue;">Hello</h1>

<!-- 2️⃣ Internal CSS -->
Internal CSS is written <style> tag in <head> section of HTML.

<style>
h1 { color: green; }
</style>

<!-- 3️⃣ External CSS ⭐ (Best) -->
written in a separate .CSS file and linked to HTML using <link> tag.

<!-- 📌 Interview Q: Which is best? -->
✅ External CSS
--------------------------------------------------------------------------------------------------------------
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
ID: Used to select uniquely identify a single HTML element.
🧠 Real life: “School ka principal”
<!-- 
#title {
  font-size: 30px;
} -->

4️⃣ Class Selector (.):-
Class: Used to apply the same style to multiple HTML elements.
🧠 Real life: “Class 10 ke students”
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

----------------------------------------------------
9️⃣ Pseudo-class Selector (:):-
A pseudo-class selector to define a special state of an HTML element-like when a user hover a link, selects a chechbox, or target the first child of an elements.

It starts with a colon : followed by the state name.

<!-- Real-World Example -->
Like a traffic light 🚦 changing color based on state:

Red → stop, Green → go, Yellow → slow
<!-- 
a:hover {
  color: red;
} -->

✔ Used for state
:hover
:focus
:active
:first-child

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

------------------------------------------------------------------------------------------------------

<!-- 🟢 5️⃣ Colors in CSS -->
<!-- ✅ What are Colors in CSS? -->
CSS colors are used to add visual styling to HTML elements.

Color property is used to set the text color or background color of an element.

Like painting a wall or coloring text in a book 🎨
<!-- 
color: red;
color: #ff0000;
color: rgb(255,0,0);
color: rgba(255,0,0,0.5); -->
* Color Name:-
Browser ke andar kuch predefined colors hote hain.
<!-- 
color: black;
color: white;
color: green; -->

* HEX Color:-
HEX ek code hota hai jo color batata hai.
Har value: 00 se FF tak hoti hai

<!-- #RRGGBB -->

#000000 → Black
#ffffff → White
#ff0000 → Red
#00ff00 → Green
#0000ff → Blue

3️⃣ RGB Color:-
RGB = Red, Green, Blue
<!-- color: rgb(255, 0, 0); -->

4️⃣ RGBA (Transparency ke saath)

RGBA = RGB + Alpha

<!-- background-color: rgba(0, 0, 0, 0.5); -->

Alpha = opacity / transparency

NOTES:-
0   → fully transparent
1   → fully visible

------------------------------------------------------------------
<!-- Q1: Which color format is most used? -->
👉 HEX

<!-- Q2: Which supports transparency? -->
👉 RGBA

<!-- Q3: Range of RGB values? -->
👉 0 to 255

<!-- Q4: Default text color in HTML? -->
👉 Black

Agar aap CSS ya inline style me color specify nahi karte,

Browser automatically text ko black color me show
-------------------------------------------------------------------------------------------
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
---------------------------------------------------------------------
<!-- 🟢 6️⃣ Text Properties -->
text-align: center;
text-transform: uppercase;
text-decoration: underline;
line-height: 1.5;
letter-spacing: 2px;

---------------------------------------------------
<!-- 🟢 7️⃣ Fonts Properties -->

font-size: 16px;
font-weight: bold;
font-style: italic;
font-family: Arial, sans-serif;

--------------------------------------------------------------------------------
<!-- 9️⃣ Box Model ⭐ (Very Important) -->
The CSS Box Model defines how padding, border, and margin are added around an element’s content.

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

Margin

👉 Real Life Example:
Gift box 🎁
Gift = Content
Bubble wrap = Padding
Box = Border
Space between boxes = Margin

📌 Interview Tip:
Box model samajh aa gaya → CSS clear 😎
-----------------------------------------------------------------------------------
🟢 9️⃣ CSS Units
CSS Units ka use size define karne ke liye hota hai(font, width, height, margin, padding etc.)

CSS Units are used to define the size and measurement of elements in CSS, such as font size, width, height, margin, and padding.

🔹 Absolute Units:-
<!-- ✅ px (Pixel) -->
* Fixed unit hoti hai
* Screen size change hone par bhi value same rehti hai

px is a fixed (absolute) unit that does not change with screen or parent size.
<!-- 
p {
  font-size: 16px;
}
 -->

🔹 Relative (🔥 Important)
Relative units parent ya screen size ke according change hoti hain

<!-- 1️⃣ % (Percentage) -->
Parent element ke size ke according
<!-- 
div {
  width: 50%;
} -->

% is a relative unit that is calculated based on the parent element’s size.-------------------------------------------------------
<!-- 2️⃣ em -->
em is a relative unit based on the font-size of the parent element.

Parent element ke font-size pe depend karta hai

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
Root element (html) ke font-size pe depend karta hai
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
------------------------------------------------------------------
Most Imp
<!-- 🔟 Display Property -->
The display property in used to define how an element is displayed on the web page.
<!-- 
display: block;
display: inline;
display: inline-block;
display: none; -->

* visibility:- visible, hidden

<!-- Block:- -->
The element take full width.start on a new line.

.block{
    display:block;
}

<!-- inline -->
The element take contanin according with and does not start new line.

<!-- inline-block; -->
similar inline but allows setting height and width.

<!-- none -->
mtlb pura hide ho jata hai , iski space bhi nhi hoti hai.

---------------------------------------------------------------------------
<!-- 1️⃣1️⃣ Position Property -->
<!-- 
position: static;
position: relative;
position: absolute;
position: fixed;
position: sticky; -->

----------------------------------------------------------------------------------
<!-- 1️⃣ position: static (Default) -->
Position controls element placement.


Har element by default static hota hai
top, right, bottom, left ka koi effect nahi

div {
  position: static;
}

<!-- 2️⃣ position: relative ⭐ -->
Element apni original jagah se move hota hai
Original space reserve rehta hai

div {
  position: relative;
  top: 20px;
  left: 10px;
}

<!-- position: absolute 🔥 -->
Element normal flow se bahar ho jata hai

Nearest positioned parent (relative/absolute/fixed) ke according move karta hai

Agar koi parent positioned nahi → body ke according

.child {
  position: absolute;
  top: 0;
  right: 0;
}

<!-- 4️⃣ position: fixed ⭐⭐ -->
Element viewport ke according fixed rehta hai.
Scroll karne par bhi move nahi hota.

.navbar {
  position: fixed;
  top: 0;
}

👉 Use case: navbar, chat button

<!-- 5️⃣ position: sticky 🔥🔥 -->
Relative + Fixed ka mix
Scroll tak relative rehta hai

Threshold cross karte hi fixed ban jata hai

.header {
  position: sticky;
  top: 0;
}
<!-- 
relative: original jagah se move hota hai

absolute: parent ke according position hota hai

fixed: screen ke sath chipka rehta hai

sticky: scroll pe chipakta hai -->
------------------------------------------------------------------------------------------------
<!-- 1️⃣2️⃣ Flexbox ⭐⭐ -->
Flexbox is one-dimensional layout system .

Flexbox is used to create one-dimensional layouts systme and to align items easily in a responsive way.
It aligns items horizontally or vertically within a container.

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

----------------------------------------------------------------------------------

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


1️⃣overflow: visible;-content overflow and is shown.
👉 Content box ke bahar bhi dikh jata hai

2️⃣ overflow: hidden ;- content overflows but is hidden.
👉 Extra content chhup jata hai

3️⃣overflow: scroll;-Always shown scrollbars(Horizontal or vertical).
👉 Hamesha scrollbar show hota hai

 4️⃣overflow: auto;-Shon scroolbars only when necessary.
 👉 Zarurat ho tabhi scrollbar dikhega.

----------------------------------------------------------------------------------------------------
<!-- visibility -->
Visibility controls whether an element is shown or hidden.
👉 Values: visible, hidden


------------------------------------------------------------
<!-- 1️⃣5️⃣ Opacity-->
Opacity controls transparency.
Opacity controls how transparent an element is.
👉 Value: 0 (invisible) to 1 (fully visible)

<!-- opacity: 0.5;
     opacity = transparency -->
--------------------------------------------------------------------------------------------------
<!-- 1️⃣7️⃣ Z-index:- -->
Defines which element appears on top.
Hindi:-
z-index batata hai kaunsa element upar dikhega aur kaunsa neeche..

👉 Works only with positioned elements (position: relative / absolute / fixed / sticky)
<!-- 
.box {
  z-index: 10;
} -->

----------------------------------------------------------------------
1️⃣2️⃣ Responsive Design ⭐⭐⭐
Q: What is responsive design?
Responsive design means a website automatically adjusts to different screen sizes
(mobile 📱, tablet 📱, laptop 💻).

Mobile: ≤ 600px
Tablet: 601 – 1024px
Desktop: ≥ 1025px

@media (max-width: 600px) { }
@media (min-width: 601px) and (max-width: 1024px) { }
@media (min-width: 1025px) { }



🧠 Real-world:
Website adjusts like flexible clothes


<!-- 🟢 1️⃣4️⃣ Responsive Design -->
<!-- 
@media (max-width: 768px) {
  body { background: red; }
} -->

Mobile-first approach ✔
-----------------------------------------------------------------------------------------------------------------
1️⃣3️⃣ Transition 
A CSS transition is used to smoothly change a property from one state to another when a trigger occurs (like hover, focus, or class change).
<!-- 
button {
  background-color: blue;
  transition: background-color 0.5s ease;
}

button:hover {
  background-color: red;
} -->


✅ 2. CSS Animation
:-CSS animation allows continuous or complex changes of one or more CSS properties without any trigger. You can control duration, delay, iteration, and keyframes.
<!-- 
@keyframes slide {
  0% { transform: translateX(0); }
  50% { transform: translateX(50px); }
  100% { transform: translateX(0); }
}

div {
  width: 50px;
  height: 50px;
  background-color: green;
  animation: slide 2s infinite;
} -->

🧠 Example:
Hover effect = transition, loader = animation.

------------------------------------------------------------------------------
<!-- Q1: What is CSS specificity? -->
<!--  -->
A: It decides which CSS rule is applied when multiple rules target the same element.
-------------------------------------------------------------------------------------------
Advanced Topics:-
<!-- CSS Gradients -->
CSS gradients are used to create smooth color transitions without using images 🎨.

<!-- 🔹 Types of CSS Gradients -->
1️⃣ Linear Gradient:-
A linear gradient move colors along a straight line.
can go from top to bottom, left to right ect.

👉 Colors straight line me change hote hain.
<!-- 
.box{
  height: 100px;
  background: linear-gradient(to right, red, yellow);
} -->

2️⃣ Radial Gradient:-
colors start from the center and spread outword in a circle or ellipse.
👉 Colors center se bahar ki taraf spread hote hain
<!-- 
.box{
  height: 100px;
  background: radial-gradient(circle, red, blue);
} -->

3️⃣ Conic Gradient:-
colors rotate around a center point, link a pie chart.
---------------------------------------------------------------------------------------------------------------------------------------------
<!-- 🔹 CSS 2D Transform (Simple Definition) -->
2D transform is used to move, rotate, scale, or skew an element
on X and Y axis.

IMP:-
2D transform changes position or shape of an element on X–Y axis.

<!-- 🔹 Common 2D Transform Properties -->
1️⃣ translate() – move element
<!-- 
.box{
  transform: translate(50px, 20px);
} -->
📝 Right 50px, down 20px



2️⃣rotate() – rotate element
<!-- 
.box{
  transform: rotate(45deg);
} -->
📝 45 degree ghoom jayega


3️⃣ scale() – size change
<!-- 
.box{
  transform: scale(1.2);
} -->
📝 20% bada ho jayega


4️⃣ skew() – tilt element
<!-- 
.box{
  transform: skew(20deg, 10deg);
} -->
📝 Tedha ho jayega 😄
--------------------------------------------------------------------------------------------------------------------------------------------------------------
3D transform adds depth using X, Y, Z axis.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1️⃣ justify-content

👉 Main axis ke along items ko align karta hai

Default flex-direction: row

➡️ Horizontal alignment

justify-content: flex-start;   /* left */
justify-content: center;       /* center */
justify-content: flex-end;     /* right */
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;
--------------------------------------------------------------------------------------------------------------
2️⃣ align-items

👉 Cross axis ke along items ko align karta hai

Default flex-direction: row

⬇️ Vertical alignment

Common values:
align-items: stretch;   /* default */
align-items: center;
align-items: flex-start;
align-items: flex-end;

<!-- Q3️⃣ justify-content aur align-items me difference kya hai? -->
“Justify is main-axis, align is cross-axis.”

<!-- Q5️⃣ Login form ko center kaise karte ho screen ke beech me? -->
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

<!-- Real-world: -->
Login / Signup / Popup modals

<!-- Q6️⃣ Cards layout me equal height kaise maintain karte ho? -->
.cards {
  display: flex;
  align-items: stretch;
}

<!-- Q7️⃣ align-items aur align-content me difference? -->
Answer:

Property	Use
align-items	Single row ke items align
align-content	Multiple rows (wrap) ke beech space

---------------------------------------------------------------------------------------------------

==============================================================================================================================

<!-- 1️⃣6️⃣ What is !important? -->
Overrides all CSS rules.

<!-- color: red !important; -->

<!-- 2️⃣0️⃣ What is float? -->
Float positions elements left or right.
img {
  float: left;
}
<!-- 1️⃣ How do you center a div? (MOST COMMON) -->
Main usually Flexbox use karta hoon.
<!-- 
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
} -->
Flexbox is responsive and works for both horizontal & vertical centering.

<!-- 2️⃣ Page responsive kaise banate ho? -->
Mobile-first CSS
Flexbox / Grid
Media queries
<!-- 
@media (max-width: 768px) {
  .card {
    width: 100%;
  }
} -->
Different screen sizes ke liye layout adjust ho jata hai.

<!-- 3️⃣ Why avoid !important in projects? -->
Because it breaks CSS hierarchy and makes debugging difficult.

<!-- 4️⃣ Flexbox kab use karte ho aur Grid kab? -->
Flexbox → navbar, buttons, cards
Grid → full page layout
<!-- 
display: flex;  /* one direction */
display: grid;  /* rows + columns */
 -->
Why:
Flex is 1D, Grid is 2D layout system.