<!-- 1️⃣ What is HTML? -->
HTML (HyperText Markup Language) is the standard markup language used to create the structure of web pages.
It defines elements like headings, paragraphs, images, links, forms, and sections.
HTML provides only structure — not styling or functionality.

Just like a house has walls, rooms, doors, and a roof to create its structure,
HTML creates the basic structure of a website using elements like headings, sections, and images.

<!--What is the difference between HTML and HTML5? -->
HTML (HyperText Markup Language) is the standard markup language used to create the structure web pages using elements and tags.

HTML5 is the latest version of HTML that supports modern HTML rules and new features like semantic tags, audio, video and improved performance etc.

<!-- 1. What is Semantic HTML? Why is it important? -->
Semantic tags are HTML tags that clearly describe the meaning of the content inside them. They improve SEO and accessibility.
Example:
<header>
<nav>
<section>
<article>
<footer>

<!-- Real-Life Example -->
Think about a newspaper 📰:
Top part = Header
Menu section = Navigation
News blocks = Articles
Bottom copyright section = Footer
A website follows the same basic structure.

Example
Like labeling boxes in a store:
“Fruits” box
“Vegetables” box
Instead of naming everything “box”.

<!-- Why is it Important?” -->
It clearly describes the meaning of content
Improve SEO
Improves accessibility
Makes code more readable
Better structure for browsers and screen readers.
Easy maintenance

<header>
  <h1>My Website</h1>
</header>

<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
</nav>

<section>
  <article>
    <h2>Blog Title</h2>
    <p>This is blog content.</p>
  </article>
</section>

<footer>
  <p>© 2026 My Website</p>
</footer>

<header> → Top info
<nav> → Menu
<main> → Main content area
<section> → Content group
<article> → Individual content
<footer> → Bottom part


<!-- 2️⃣ Difference between <div> and <span>? -->
1️⃣ <div>
Block-level element
Takes full width of the page
Starts on a new line
Used for layout and grouping large sections
<!-- 🌍 Real-life Example -->
div = Full row in a notebook

2️⃣ <span>
Inline element
Takes only the required width
Does NOT start on a new line
Used for styling small parts of text
<!-- 🌍 Real-life Example -->
span = A word in a sentence

div Tag :- 
The div tag is a block-level container used to group elements.
<div>
  <h1>Hello</h1>
  <p>This is a paragraph</p>
</div>

span Tag :- 
The span tag is an inline element used to style small parts of text.
<p>This is <span style="color:red;">important</span> text.</p>

<!-- 🔥 3. What is the difference between id and class? -->
Id attribute:- The id attribute is used to uniquely identify a single element on a webpage.

Imagine a classroom 👩‍🏫
Every student has a roll number → That is like an id (unique).
<h1 id="title">Hello</h1>


Class attribute :- 
class attribute is used to apply the same style or behavior to multiple elements.

Imagine a classroom 👩‍🏫
Many students can belong to the same section (A, B, C) → That is like a class.
<p class="text">Para1</p>
<p class="text">Para2</p>

<!-- 🔥 4. What is the purpose of alt attribute? -->
The alt attribute provides alternative text for an image if it cannot load.It improves accessibility and SEO.

<!-- 🌍 Real-life Example -->
Like newspaper photo caption if image is missing.

<!-- 🧠 Why Important? -->
SEO
Accessibility
Screen readers read it

<img src="product.jpg" alt="Red sports shoes">

<!-- 1️⃣6️⃣ What is the difference between <link> and <a>? -->

<link> → Connects external resources (CSS)
<a> → Creates hyperlinks

<!-- 🔥 5. What is the difference between block, inline and inline-block? -->
Block elements:-block elements takes full width and starts on new line.
Examples:
Block → <div>, <p>, <h1>

Inline element:- inline element takes ony required width and does not start new line.
Examples:
Inline → <span>, <a>, <strong>, 

<div>This is block</div>
<span>This is inline</span>

inline-block:-
similar inline but can set width & height.

<!-- 🔥 6. What is the difference between <section> and <article>? -->
<section> is used to group related content.
<article> is used for independent content like blog posts and news.

<!-- 🔥 7. What is the difference between HTML4 and HTML5? -->
“HTML5 is an advanced version of HTML4. It introduced semantic tags like header and section, built-in audio and video support, new input types, and APIs like local storage. HTML4 didn’t support these features.”

<!-- 🔥 8. What is DOCTYPE? -->
It tells the browser that the document is an HTML5 document.
<!-- For example :- -->
 Blueprint of a house 🏗️
The blueprint says whether it follows old rules or new rules.
Builders follow those rules while constructing.

<!-- 🔥 9. What are meta tags? -->
Meta tags provide information about the webpage (SEO, charset, viewport).

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Frontend developer portfolio">

<!-- 7️⃣ What is viewport? -->
viewport Controls layouts and responsive design on mobile.
<!-- 🌍 Real-life -->
Adjust zoom for mobile screens.

<!-- 🔥 10. What is the difference between absolute and relative path? -->
<!-- absolute Path -->
An absolute path provides the full, complete location of a file or directory. It is Best.
<img src="images/photo.jpg">

<!-- relative path -->
relative path defines the location of a file relative to the current working directory. 
<img src="https://example.com/photo.jpg">

<!-- 🔥 11. What is form and how does it work? -->
An HTML Form is used to collect user input and send that data to a server for processing.
<!-- Real Example -->
Login page, Registration page. Contact form.

<form action="/submit" method="POST">
  <input type="text" name="username">
  <input type="password" name="password">
  <button type="submit">Login</button>
</form>

<!-- 1️⃣7️⃣ What is the use of label tag? -->
Connects text with input field (improves accessibility).

<label for="email">Email</label>
<input type="email" id="email">

<!-- What is difference between placeholder and value? -->
placeholder → Hint text
value → Default value

<!-- 🔥 6️⃣ What is the difference between GET and POST in forms? -->
✅ 1️⃣ GET Method:-
GET method is used to sends data through the URL and is less secure.
<!-- Real-world Example: -->
Google search bar uses GET.

<form method="GET" action="/search">
  <input type="text" name="keyword">
  <button type="submit">Search</button>
</form>

✅ 2️⃣ POST Method:-
POST method is used to send data in the request body and is more secure.'
<!-- Real-world Example: -->
Login forms use POST.

<form method="POST" action="/login">
  <input type="text" name="username">
  <input type="password" name="password">
  <button type="submit">Login</button>
</form>
👉 Data URL me show nahi hota.

<!-- 1️⃣4️⃣ What is label tag? -->
Defines label for input.
<label for="email">Email</label>
<input id="email">

<!-- 🔥 12. What are new input types in HTML5? -->
email
number
date
tel
url
range
color

<!-- 🔥 13. What is the difference between required and placeholder? -->
required is a Boolean attribute that makes an input field mandatory before submitting the form.
<input required>

The placeholder attribute shows temporary hint text inside an input field.

<form>
  <label>Email:</label>
  <input type="email" placeholder="Enter your email" required>
  
  <button type="submit">Submit</button>
</form>

<!-- 🔥 14. What is iframe? -->
iframe is used to embed another webpage inside current webpage.
<iframe src="https://example.com" width="400" height="300"></iframe>

<!-- 🔥 15. What is accessibility in HTML? -->
Accessibility in HTML means designing websites so that people with disabilities can use them easily.
It ensures websites are usable by:
Visually impaired users 👁️
Hearing impaired users 👂
Motor disabilities ♿
Screen reader users

<!-- 🌍 Real-life -->
Ramp for wheelchair users.

<!-- 🧠 Why Accessibility is Important? -->
Improves user experience
Required by many companies & laws
Improves SEO
Makes website professional

<!-- Difference between readonly and disabled -->
readonly:-
Cannot edit but submits value.
disabled:-
Cannot edit & does NOT submit value.

<!-- What is local storage? -->
local storage Stores data in browser permanently.

<script>
  // Store data
  localStorage.setItem("username", "Kajalti");

  // Get data
  console.log(localStorage.getItem("username"));

  // Remove data 
  localStorage.removeItem("username");
</script>

<!-- What is session storage? -->
Session Storage is a web storage feature that stores data temporarily for one browser tab. The data is deleted when the tab is closed.

<script>
  // Store data
  sessionStorage.setItem("step", "1");

  // Get data
  console.log(sessionStorage.getItem("step"));

  // Remove data
  sessionStorage.removeItem("step");
</script>

<!-- What is data attribute? -->
Data attributes are custom attributes in HTML used to store extra information inside elements.
They always start with data-.
<!-- Real-life Example -->
Like writing extra information on a product tag that customers don’t see, but the shop system reads.

<div data-id="101" data-role="admin">
  User Info
</div>
👉 JavaScript can access data-id.

<!-- What is ARIA? -->
ARIA (Accessible Rich Internet Applications) is used to improve accessibility for screen readers.
<!-- 🌍 Real-life Example -->
Like adding voice instructions for visually impaired users.
<button aria-label="Close Menu">X</button>
-----------------------------------------------------
<!-- What is the difference between strong and b? -->
<strong> is a semantic tag that indicates important content and adds meaning, while <b> is a non-semantic tag used only to make text bold without adding importance.
<!-- Real-life Example -->
Strong = Important warning
b = Just bold decoration

<p>This is <strong>important</strong> information.</p>
<p>This is <b>bold text</b>.</p>

<!-- ✅ Difference Between <em> and <i> -->
<em> is a semantic tag used to emphasize text and add meaning, while <i> is a non-semantic tag used only to display text in italic style.
<!-- 🌍 Real-life Example -->
em = Stress on word while speaking
i = Just italic handwriting

<p>I <em>really</em> like coding.</p>
<p>This is <i>italic</i> text.</p>

<!-- 1️⃣8️⃣ What is form validation? -->
Checking user input before submitting form.
<input type="email" required>

<!-- What is canvas? -->
Canvas is an HTML5 element used to draw graphics using JavaScript.
Like a drawing board where you can draw shapes.
<canvas id="myCanvas" width="200" height="100"></canvas>

<!-- What is audio & video tag? -->
HTML5 introduced <audio> and <video> tags to embed media files directly in webpages.
<video controls width="300">
  <source src="movie.mp4" type="video/mp4">
</video>

<audio controls>
  <source src="music.mp3" type="audio/mpeg">
</audio>
=========================================
<!-- What is SEO in HTML? -->
0-----------------------------------------
SEO (Search Engine Optimization) means optimizing a webpage so it ranks higher in search engines.
Like organizing books properly in a library so they are easy to find.
<!-- Important for SEO: -->
Semantic tags
Meta tags
Proper heading structure
Alt attributes

<!-- How browser renders HTML? -->
Read HTML
Create DOM
Apply CSS
Paint on screen 
==================================================================================================================
EVEL 2 – 💼 20 Advanced HTML Interview Questions
These are asked when interviewer wants to check deeper knowledge:

<!-- What happens if we don’t write DOCTYPE? -->
Without DOCTYPE, browsers render the page using legacy behavior, causing layout issues.

<!-- Explain rendering process of browser. -->
Browser converts HTML into DOM, applies CSS, creates render tree, calculates layout, and paints the UI.

<!-- What is DOM? -->
DOM is a tree-like structure created by the browser from HTML.
 <h1>Hello</h1>

Difference between DOM and HTML.
| HTML                 | DOM                |
| -------------------- | ------------------ |
| Static code          | Live structure     |
| Written by developer | Created by browser |
| Text format          | Object model       |


What are void elements?
Void elements are HTML elements that do not have closing tags.
Examples:
<img>
<br>
<hr>
<input>


How does browser handle invalid HTML?
Browser auto-corrects it.
<p>Paragraph
<div>Box</div>

What are global attributes?
Attributes usable on all HTML elements.
Examples:
id
class
style
title
data-*
tabindex

What is preload in video?
Tells browser how video should load.
<video preload="auto"></video>

What is picture tag?
Used for advanced responsive images.

<picture>
  <source media="(max-width: 600px)" srcset="small.jpg">
  <img src="large.jpg" alt="Example">
</picture>

🥉 LEVEL 3 – 🧠 Tricky Scenario-Based HTML Questions
Why is your form submitting even without clicking submit?

Why label click is not focusing input?
for attribute doesn’t match id.

<label for="email">Email</label>
<input id="email">

Why page layout breaks in mobile?
Missing viewport meta tag
Fixed width in px
No responsive design

Why screen reader not reading image?
Missing alt attribute.

Why two elements have same id?
Invalid HTML.
IDs must be unique.

Why required attribute not working?
Input type incorrect

=====================================================================================================
<!-- 💼 Scenario-Based Questions -->
<!-- 2️⃣6️⃣ Image not loading. Why? -->
Possible reasons:
Wrong path
Spelling mistake
Server issue

<!-- 2️⃣7️⃣ Why is form not submitting? -->
Missing name attribute
Required field empty
Button type incorrect

<!-- 2️⃣8️⃣ Why is CSS not applying? -->
Wrong selector
CSS not linked
Specificity issue

<!-- 2️⃣9️⃣ Why is website not responsive? -->
Missing viewport meta tag
Fixed width in px

<!-- 3️⃣0️⃣ Why id should not be repeated? -->
Because id must be unique in DOM.

