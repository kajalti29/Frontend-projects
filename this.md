<!-- 1️⃣ What is HTML? -->
HTML stands for HyperText Markup Language.
It is used to create the structure of a web page.
HTML defines elements like headings, paragraphs, images, links, forms, etc.

For example Just like the structure of a house includs walls, rooms, and roof ,HTML defines headings, paragraphs, images, links, and sections of a website.
It does not provide styling or functionality — it only provides structure

<!-- 2️⃣ What is the difference between Block and Inline elements? -->
Block elements:-block elements takes full width and starts on new line.
Examples:
Block → div, p, h1

Inline element:- inline element takes required width and does not start new line.
Examples:
Inline → span, a, img

<div>This is block</div>
<span>This is inline</span>

<!-- 3️⃣ What is Semantic HTML? -->
Semantic tags are HTML tags that clearly describe the meaning of the content inside them.
Examples:
Common Semantic Tags:
<header>
<footer>
<section>
<article>
<nav>

<div>This is header</div> ❌ Wrong way:
<header>This is header</header> ✅ Correct way

👉 Real-world example:
Like naming rooms in a house: Kitchen, Bedroom
Not Room1, Room2

<!-- 4️⃣ Difference Between id and class? -->
The id is used to uniquely identify one element on a webpage, while class is used to apply the same style or behavior to multiple elements.
In real life, id is like a roll number and class is like a section name.

<div id="main">Main Section</div>

<div class="box">Box 1</div>
<div class="box">Box 2</div>

Id attribute:- The id attribute is used to uniquely identify a single element on a webpage.
A page should not have multiple elements with the same id.
Imagine a classroom 👩‍🏫
Every student has a roll number → That is like an id (unique).
<h1 id="title">Hello</h1>

Class attribute :- The class attribute is used to group multiple elements together so that they can share the same styling or behavior.
Imagine a classroom 👩‍🏫
Many students can belong to the same section (A, B, C) → That is like a class.
<p class="text">Para1</p>
<p class="text">Para2</p>

<!-- ❓ 2️⃣ Why should we not use the same id for multiple elements? -->
We should not use the same id for multiple elements because id must be unique on a webpage.
If we use the same id multiple times, JavaScript and CSS may not work properly and it can cause unexpected behavior
<p id="text">Hello</p>
<p id="text">World</p>
If we use:

<!-- document.getElementById("text") -->
👉 It will select only the first element.

So second element ignore ho sakta hai ❌

<!-- 5️⃣ What is the difference between div and span? -->
div Tag :- 
The div tag is a block-level element used to group large sections of content.
<div>
  <h1>Hello</h1>
  <p>This is a paragraph</p>
</div>

span Tag :- 
The span tag is an inline element used to style or target small parts of text.

<p>This is <span style="color:red;">important</span> text.</p>

<!-- 🔥 2️⃣ What is the basic structure of an HTML page? -->
<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
</head>
<body>
    <h1>Hello World</h1>
    <p>This is my first website.</p>
</body>
</html>
🧠 Explanation:

<!DOCTYPE html> → tells browser this is HTML5
<html> → root element
<head> → meta info
<body> → visible content

<!-- 🔥 6️⃣ What is the difference between GET and POST in forms? -->
✅ 1️⃣ GET Method:-
GET method is used to request data from the server. It sends form data in the URL.

<form method="GET" action="/search">
  <input type="text" name="keyword">
  <button type="submit">Search</button>
</form>
Real-world Example:
Google search bar uses GET.

✅ 2️⃣ POST Method:-
POST method is used to send data to the server. It sends form data inside the request body.

<form method="POST" action="/login">
  <input type="text" name="username">
  <input type="password" name="password">
  <button type="submit">Login</button>
</form>
👉 Data URL me show nahi hota.
Real-world Example:
Login forms use POST.

<!-- 🔥 7️⃣ What are HTML5 new features? -->
✅ Important Features:
Semantic tags
Audio & Video support
Local Storage
Canvas
Geolocation
Video Example:
<video width="300" controls>
    <source src="video.mp4" type="video/mp4">
</video>

<!-- 🔥 CSS Interview Questions -->
