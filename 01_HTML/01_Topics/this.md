<!-- 1️⃣ What is HTML? -->
HTML(HyperText Markup Language) is the standard markup language.
It is used to create the structure of a web page.
HTML defines elements like headings, paragraphs, images, links, forms, etc.

For example Just like the structure of a house includs walls, rooms, and roof ,HTML defines headings, paragraphs, images, links, and sections of a website.
It does not provide styling or functionality — it only provides structure

<!-- ❓ Q2. What is the difference between HTML and CSS? -->
HTML is used to create the structure of a webpage,
while CSS is used to style and design the webpage.

Example:
HTML = body
CSS = clothes

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
----------------------------------------------------------------------------------------------------------
<!-- 🔥 2️⃣ What is HTML5? -->
HTML5 is the latest version of HTML that supports modern HTML rules and new features like semantic tags, audio, video, canvas and improved performance etc.
🌍 Real Example
Earlier websites needed Flash for video.
Now we use HTML5 <video> tag directly.

<video controls>
  <source src="video.mp4" type="video/mp4">
</video>
controls attribute automatically play/pause button add karta hai.
यहाँ controls लगाने से:
▶ Play button
⏸ Pause button
🔊 Volume control
⏩ Progress bar
ये सब automatically दिखाई देंगे।

<!-- What is the difference between HTML and HTML5? -->
HTML (HyperText Markup Language) is the standard markup language used to create and structure web pages using elements and tags.

HTML5 is the latest version of HTML that supports modern HTML rules and new features like semantic tags, audio, video, canvas and improved performance etc.

<!-- Real-World Example -->
Old phone vs smartphone 📱 — HTML5 has more features

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

<!-- 👉 “Why is HTML5 better?” -->
HTML5 is better because it supports multimedia, semantic tags, improved forms, local storage, and better performance without external plugins.

<!--Difference Between HTML4 and HTML5 -->
“HTML5 is an advanced version of HTML4. It introduced semantic tags like header and section, built-in audio and video support, new input types, and APIs like local storage. HTML4 didn’t support these features.”
--------------------------------------------------------------------------------------------------------
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

<!-- 🔥 🔟 What is Anchor Tag? -->
The Anchor tag is Used to create hyperlinks.

<a href="https://google.com">Go to Google</a>

<!-- What is the use of the alt attribute? -->
The alt attribute provides alternative text if image fails to load .
<img src="image.jpg" alt="Girl coding on laptop">


<!-- 🔥 11️⃣ What is Meta Tag? -->
A meta tag provides information about the webpage.
<!-- 🌍 Real-world: -->
Used for:
Character encoding
SEO
Responsive design

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
Login:-
charset → supports special characters
viewport → responsive design


<!-- What is the viewport meta tag? -->
The viewport meta tag controls the layout on mobile devices.
<meta name="viewport" content="width=device-width, initial-scale=1.0">
------------------------------------------------------------------
<!-- Form Attributes -->

<!-- What is required attribute? -->
User must fill before submitting form.

The required attribute is used in HTML forms to make a field mandatory. The form cannot be submitted unless the user fills that field.
<input type="text" required>

<!-- What is placeholder? -->
The placeholder attribute shows temporary hint text inside an input field.

<input type="text" placeholder="Enter your name">

<!-- What is autocomplete? -->
The autocomplete attribute allows the browser to automatically fill previously entered values.

<input type="email" autocomplete="on">

<!-- What is novalidate? -->
The novalidate attribute disables HTML5 form validation.

<form novalidate>

<!-- What is pattern attribute? -->
The pattern attribute defines a regular expression to validate input.

<input type="text" pattern="[0-9]{10}">
<!-- How to make a file upload input? -->
<input type="file">
-------------------------------------------------------------------------
<!-- 🔥 7️⃣ What is List in HTML? (Interview Style Answer) -->
An HTML List is used to display items in an ordered or unordered format.

✅ Types of Lists in HTML:
1️⃣ Unordered List (ul):-
Items are displayed with bullet points.
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
🔹 Output:
• HTML
• CSS
• JavaScript

2️⃣ Ordered List (ol):-
Items are displayed with numbers.
<ol>
  <li>Wake up</li>
  <li>Go to College</li>
  <li>Study</li>
</ol>
🔹 Output:
1. Wake up
2. Go to College
3. Study

3️⃣ Description List (dl):-
A description list is used to show terms and their descriptions.
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
</dl>
--------------------------------------------------------------------------------------
<!-- 🔥 5️⃣ What is Form? -->
An HTML Form is used to collect user input and send that data to a server for processing.
Real Example
Login page, Registration page. Contact form..

<form action="submit.php" method="post">
  <input type="text" placeholder="Enter your name">
  <input type="email" placeholder="Enter your email">
  <button type="submit">Submit</button>
</form>
Logic:-
<input> collects data
type="password" hides text
submit sends data

✅ Important Attributes:
action → Data किस page पर भेजना है
method → Data कैसे भेजना है (GET / POST)
action defines where to send the data.
method defines how to send the data (GET / POST).

<!-- 🔥 6️⃣ What is the difference between GET and POST in forms? -->
GET and POST are two HTTP methods used to send form data from the client (browser) to the server.

✅ 1️⃣ GET Method:-
GET method is used to sends data through the URL and is less secure.

<form method="GET" action="/search">
  <input type="text" name="keyword">
  <button type="submit">Search</button>
</form>
Real-world Example:
Google search bar uses GET.

✅ 2️⃣ POST Method:-
POST method is used to send data in the request body and is more secure.

<form method="POST" action="/login">
  <input type="text" name="username">
  <input type="password" name="password">
  <button type="submit">Login</button>
</form>
👉 Data URL me show nahi hota.
Real-world Example:
Login forms use POST.

<!-- What are different input types in HTML5? -->
HTML5 provides many input types:
text, email, password, number, date, datetime-local, file, radio, checkbox, range, url, tel, color, search
Example:
<input type="email">
<input type="date">

<!-- 17️⃣ Difference between radio and checkbox? -->
Radio buttons allow the user to select only one option from a group, while checkboxes allow the user to select multiple options.

🔹 Example (Radio)
<p>Select Gender:</p>
<input type="radio" name="gender" value="male"> Male
<input type="radio" name="gender" value="female"> Female
👉 Yaha sirf ek option select hoga.

🔹 Example (Checkbox)
<p>Select Hobbies:</p>
<input type="checkbox" name="hobby" value="reading"> Reading
<input type="checkbox" name="hobby" value="music"> Music
👉 Yaha multiple options select kar sakte hain.

<!-- Difference between button and input type="submit"? -->
Input type submit is used only to submit forms.
Button is more flexible and can contain text, icons, or other HTML elements.

<!-- How to connect form with backend? -->
We connect a form to the backend using the action and method attributes.
--------------------------------------------------------------------------------------------------
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

<!-- 🌍 Real Example -->
In news website:
Header → logo
Nav → menu
Article → news
Footer → copyright

💻 Code
<header>Logo</header>
<nav>Menu</nav>
<article>News Content</article>
<footer>Copyright</footer>

<!-- Why should we use semantic HTML? -->
✅ Answer:
It clearly describes the meaning of content
Better Accessibility
Better SEO
Clean structure
Easy maintenance

<!-- What is the difference between section and article? -->
<section> is used to group related content.
<article> is used for independent, content like blog posts.

<!--What is the Difference Between <section> and <div>? -->
“The main difference is that <section> is a semantic element used to define a meaningful section of content, while <div> is a non-semantic container used only for grouping or styling purposes.”
-----------------------------------------------------------------------------
<!-- 2️⃣ What is the difference between Block and Inline elements? -->
Block elements:-block elements takes full width and starts on new line.
Examples:
Block → <div>, <p>, <h1>

Inline element:- inline element takes ony required width and does not start new line.
Examples:
Inline → <span>, <a>, <strong>, 

<div>This is block</div>
<span>This is inline</span>

<!-- 5️⃣ What is the difference between div and span? -->
div Tag :- 
The div tag is a block-level container used to group elements.
<div>
  <h1>Hello</h1>
  <p>This is a paragraph</p>
</div>

span Tag :- 
The span tag is an inline element used to style or target small parts of text.
<p>This is <span style="color:red;">important</span> text.</p>

<!-- 🔥 8️⃣ What is Local Storage? -->
It stores data in browser permanently (until manually cleared).

<script>
localStorage.setItem("name", "Kajalti");
console.log(localStorage.getItem("name"));
</script>

👉 Real-world example:
Shopping cart data store karna without backend.

<!-- 🔥 9️⃣ What is iframe? -->
The <iframe> tag is used to display another webpage inside the current your webpage.

<iframe src="https://www.google.com" width="400" height="300"></iframe>
👉 Real-world example:
Used to embed:
Maps
YouTube videos
Payment gateway

<!-- What is the use of label tag? -->
The <label> tag is used to define a label for form elements.
It improves accessibility and user experience.
<label for="email">Email</label>
<input type="email" id="email">

<!-- What is the difference between strong and b? -->
| strong           | b              |
| ---------------- | -------------- |
| Semantic tag     | Non-semantic   |
| Shows importance | Just bold text |

<!-- 🔥 1️⃣3️⃣ What is SEO in HTML? -->
Search Engine Optimization means making website search engine friendly.
Using:
semantic tags
proper headings
meta tags

<!-- 🔥 1️⃣4️⃣ What is Accessibility? -->
Accessibility means designing websites so that all users, including people with disabilities, can use and understand them easily.

<!-- ✅ Why Accessibility is Important? -->
Equal access for everyone
Better user experience
Improves SEO
Required in many countries by law

<!-- ❓ How would you create a simple product card? -->
<div class="card">
    <img src="product.jpg" width="200">
    <h3>Product Name</h3>
    <p>Price: ₹999</p>
    <button>Add to Cart</button>
</div>

👉 Real-world:
Amazon product box structure.
------------------------------------------------------------------------------------
<!-- What is a void element? -->
A void element is an element that does not have a closing tag.
Examples:
<br>, <hr>, <img>, <input>

<!-- What is figure and figcaption? -->
<figure> is used to group media content.
<figcaption> provides a caption.

<figure>
  <img src="image.jpg">
  <figcaption>Sample Image</figcaption>
</figure>

<!-- Difference between nav and header? -->
| nav                       | header                        |
| ------------------------- | ----------------------------- |
| Contains navigation links | Contains introductory content |
| Used for menus            | Used for logo/title           |

<!-- What is aside used for? -->
<aside> is used for sidebar content like ads, related links, or extra information.

<!-- What are data-* attributes? -->
data-* attributes store custom data in HTML elements.

<div data-user-id="123"></div>

=========================================================================================================
