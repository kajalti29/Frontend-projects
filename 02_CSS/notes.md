<!-- CSS FULL NOTES -->
<!-- 1️⃣ What is CSS? -->
CSS(Cascading Style Sheets) is used to control style and layout for example, to change colors fonts,spacing and responsiveness of a website.

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
CSS Selector is used to select HTML elements so that we can apply styles to them.

1️⃣ Universal Selector (*):-
<!-- 
* {
  margin: 0;
  padding: 0;
} -->

✔ Use: Selects all elements

2️⃣ Element (Tag) Selector:-
<!-- 
p {
  color: blue;
} -->

3️⃣ ID Selector (#):-
ID: Used to uniquely identify a single HTML element.
<!-- 
#title {
  font-size: 30px;
} -->

4️⃣ Class Selector (.):-
Class: Used to apply the same style to multiple HTML elements.
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
<!-- 
a:hover {
  color: red;
} -->

✔ Used for state
:hover
:focus
:active
:first-child

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

CSS Colors are used to change text color, background color, border color, etc.
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
* COntent 
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

Flexbox is used to create one-dimensional layouts and to align items easily in a responsive way.

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
Grid is two-dimensional layout system.

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

overflow: hidden;
overflow: scroll;
overflow: auto;

<!-- 1️⃣5️⃣ Opacity & Visibility -->
opacity: 0.5;
visibility: hidden;

------------------------------------------------------------
<!-- 1️⃣7️⃣ Z-index:- -->
z-index batata hai kaunsa element upar dikhega aur kaunsa neeche..
<!-- 
.box {
  z-index: 10;
} -->

----------------------------------------------------------------------

<!-- 🟢 1️⃣4️⃣ Responsive Design -->
<!-- 
@media (max-width: 768px) {
  body { background: red; }
} -->

Mobile-first approach ✔
-------------------------------------------------------------------------------------------1️⃣ justify-content

👉 Main axis ke along items ko align karta hai

Default flex-direction: row

➡️ Horizontal alignment

justify-content: flex-start;   /* left */
justify-content: center;       /* center */
justify-content: flex-end;     /* right */
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;

----------------------------------------------------------------
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