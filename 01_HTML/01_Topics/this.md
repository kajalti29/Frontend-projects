<!-- 1️⃣ What is HTML? -->
HTML(HyperText Markup Language) is the standard markup language.
It is used to create the structure of a web page.
HTML defines elements like headings, paragraphs, images, links, forms, etc.

For example like the structure of a house includs walls, rooms, and roof ,HTML defines headings, paragraphs, images, links, and sections of a website.
It does not provide styling or functionality — it only provides structure.

<!--Why HTML is called a Markup Language? -->
HTML is called a Markup Language because it uses tags to define and structure content on a web page.
<h1> marks text as a heading.

<!--What is the difference between HTML and CSS? -->
HTML is used to create the structure of a webpage,
while CSS is used to style and design the webpage.

Example:
HTML is the structure of a house, CSS is the paint, furniture, lightingss and decoration.


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

<!--<!DOCTYPE Html> <html> <title> <head> <body> -->
✅<!DOCTYPE Html>
It tells the browser that the document is an HTML5 document.

For example :- Blueprint of a house 🏗️
The blueprint says whether it follows old rules or new rules.
Builders follow those rules while constructing.

DOCTYPE informs the browser about the HTML version used, so the webpage is rendered properly.
DOCTYPE is not an HTML tag.

✅ <html> Tag:-
The <html> tag is the root element of an HTML document.
All HTML content is written inside this tag.

✅ <head> Tag:-
The <head> tag contains metadata and other non-visible information about the webpage(title, CSS, meta)

<head>
 <title>Simple Page</title>
</head>

✅ <title> Tag:-
Title tag shows the name on the broweser tab

<title>Website</title>

✅ <body> Tag:-
The <body> tag contains all visible content shown in the browser.

<body>
    <h1>Hello</h1>
    <p>This is my webpage.</p>
</body>

Examples:
Text
Images
Buttons
Forms
----------------------------------------------------------------------------------------------------------
<!-- 🔥 2️⃣ What is HTML5? -->
HTML5 is the latest version of HTML that supports modern HTML rules and new features like semantic tags, audio, video and improved performance etc.
🌍 Real Example
Old phone vs smartphone 📱 — HTML5 has more features

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

<!--What is the difference between HTML and HTML5? -->
HTML (HyperText Markup Language) is the standard markup language used to create and structure web pages using elements and tags.

HTML5 is the latest version of HTML that supports modern HTML rules and new features like semantic tags, audio, video and improved performance etc.

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
-----------------------------------------------------------------------------------------------------
<!-- Q3. What is the difference between Tag and Element? -->
<!-- HTML -->
HTML tags are keywords enclosed in angle brackets that tell the browser how to display content.
Example: <p>, <h1>, <img>

<!-- ELement -->
Element is a complete structure consisting of opening tag, content, and closing tag.

👉 Real-world example:
Cup + tea inside ☕ = useful item

👉 Example:
<p>Hello</p>
--------------------------------------------------------------------------------------------------------
<!-- 🟢 2️⃣ Text Formatting Tags -->
✅ Headings:
Heading tags are used to define titles and headings on a webpage.
<h1>Main Heading</h1>
<h2>Sub Heading</h2>

✅Paragraph:-
The <p> tag is used to define a paragraph of text.
<p>This is a paragraph.</p>

✅Line break:- 
The <br> tag is used to break a line without starting a new paragraph.
This is line one<br>
This is line two

✅ Horizontal Line: <hr>
The <hr> tag is used to create a horizontal line to separate content.

<!-- What is the difference between strong and b? -->
<strong> is a semantic tag that indicates important content and adds meaning, while <b> is a non-semantic tag used only to make text bold without adding importance.

<p>This is <strong>very important</strong> information.</p>

<p>This is <b>bold text</b>.</p>

<!-- ✅ Difference Between <em> and <i> -->
<em> is a semantic tag used to emphasize text and add meaning, while <i> is a non-semantic tag used only to display text in italic style.

<p>I <em>really</em> like coding.</p>
<p>This is <i>italic</i> text.</p>

<!-- ✅ Difference Between <strong> and <em> -->
<strong> is a semantic tag that indicates important content and adds meaning, <em> is a semantic tag used to emphasize text and add meaning.
<strong> → Bold
<em> → Italic
<p><strong>This is strong text</strong></p>
<p><em>This is emphasized text</em></p>


<small> 
Makes text smaller than normal text.
<!-- <small>Small text</small> -->

✅ Mark: <mark>
The <mark> tag is used to highlight text.
<!--<mark>Highlighted text</mark>-->

<del>
Shows deleted/removed text.
<!-- <del>Deleted text</del> -->

<sup>
Shows superscript text (above line).
It is used to write small text above the normal line.
<!-- X<sup>2</sup> -->

<sub>
Shows subscript text (below line).
It is used to write small text below the normal line.
<!-- H<sub>2</sub>O -->

<u>
Text Underlined(below text)
<!-- <u>Text<u> -->

✅ Preformatted Text: <pre>
Including spaces and line breaks.

<pre>
Name    Age    City
Amit    22     Delhi
Riya    21     Mumbai
</pre>
------------------------------------------------------------------------------------------------------------
<!-- 🟢 3️⃣ Links-->
 An HTML link is used to connects one web page to another and allows navigation on the web.
 <!-- for example,  -->
You are in one room.
You open a door → you enter another room.
👉 The door is like a link.
👉 The other room is the destination page.

<a href="https://www.google.com">Go to Google</a>

4️⃣ Code Explanation
<a> is the anchor tag 
href contains the page address
Clicking the text opens another page

<!-- what is <img> tag -->
The <img> tag is used to display images on a webpage.
For example, Like putting a photo in a photo frame.
<img src="photo.jpg" alt="My Photo">

Explanation
<img> → image tag
src → image path (source)
alt → text shown if image does not load
----------------------------------------------------------------------------------------------------
<!-- ✅ Attributes -->
Attributes provide additional information about an HTML elements.
<a href="https://google.com">Google</a>
Example: House
🧱 House → HTML Tag
📍 House Address → attribute
🎨 House Color → attribute
🚪 House Number → attribute

Real Life
👤 Person
Name
Age
Color
HTML:-
<p title="User name">Kajalti</p>
<p> → Person

<!-- 🟢 Commonly Used HTML Attributes -->

<!-- 4️⃣ Difference Between id and class? -->
The id attribute is used to uniquely identify a single element on a webpage, while class attribute is used to apply the same style or behavior to multiple elements.

Imagine a classroom 👩‍🏫
Every student has a roll number → That is like an id (unique).
Many students can belong to the same section (A, B, C) → That is like a class.

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

<!--Why should we not use the same id for multiple elements? -->
We should not use the same id for multiple elements because id must be unique on a webpage.
If we use the same id multiple times, JavaScript and CSS may not work properly and it can cause unexpected behavior
<p id="text">Hello</p>
<p id="text">World</p>

<!-- document.getElementById("text") -->
👉 It will select only the first element.
So second element ignore ho sakta hai ❌


<!-- 3️⃣ src -->
<!-- src (source) -->
src is an attribute that defines the image path.
👉Image ka path / location 
batata hai.
<img src="image.jpg">

<!-- 4️⃣ href -->
✅ href(Hypertext Reference):-
href is an attribute that defines the destination of a hyperlink.
Hindi:-
href ek attribute hai jo batata hai ki link par click karne ke baad user kahan jayega.
<a href="about.html">About</a>
Example:-
Board par likha hota hai: Delhi → 10 km
Road khud board nahi hota, bas destination batata hai

<!-- 5️⃣ alt -->
<!-- What is the use of the alt attribute? -->
The alt attribute provides alternative text if image fails to load .

<img src="image.jpg" alt="Girl coding on laptop">
Example:-
Think about a newspaper 📰

If the photo is missing,
👉 the caption written below tells you what the photo was about.


Socho newspaper ki photo missing ho jaye
👉 neeche likha caption batata hai photo kis baare me hai
📌 HTML me alt wahi caption hai

<!-- ✅ Why alt is important? -->
The alt attribute is used to describe an image. It helps when the image does not load, improves accessibility for screen readers, and supports SEO.

<!-- 8️⃣ target -->
✅ target="_blank":-
The target="_blank" attribute opens the link in a new tab.
Like opening a new notebook instead of closing the old one.
<a href="https://google.com" target="_blank">Google</a>

<!-- 🔥 🔟 What is Anchor Tag? -->
The Anchor tag is Used to create hyperlinks.
<a href="https://google.com">Go to Google</a>

<!--1️⃣ What is Meta Tag? -->
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
---------------------------------------------------------------------
<!-- ✅ Comments in HTML -->
Comments are used to explain code and are not displayed in the browser.
<!-- This is a comment -->

<!-- ✅ Case Sensitivity -->
HTML tags are not case-sensitive, but lowercase is best practice.
---------------------------------------------------------------------------
---------------------------------------------------------------------------
<!-- Form Attributes -->

<!-- What is required attribute? -->
user must fill out the field before submitting the form.


The required attribute is a boolean attribute used in HTML form controls (such as <input>, <textarea>, and <select>) to specify that the user must fill out the field before submitting the form.
<input type="text" required>
<!-- 
<form action="/login" method="post">
  <input type="email" placeholder="Enter Email" required>
  <input type="password" placeholder="Enter Password" required>
  <button type="submit">Login</button>
</form> -->

<!-- Why is required called a boolean attribute? -->
Because its value depends on its presence. If the attribute is present, it is considered true; if it is absent, it is false.

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
<!-- Module 4: Lists -->
<!-- ✅ What are Lists in HTML? -->
An HTML List is used to display items in an ordered or unordered format.

✅ Ordered List <ol> :-
Items are displayed with numbers.<!-- 
<ol>
    <li>Boil water</li>
    <li>Add tea leaves</li>
    <li>Add mil</li>
</ol> -->
📌 Output:
1. Boil water
2. Add tea leaves
3. Add milk

Real-World Example
📋 Recipe ke steps – pehle kya, phir kya

✅ Unordered List <ul>:-
Items are displayed with bullet points.
<!-- 
<ul>
  <li>Milk</li>
  <li>Banana</li>
  <li>Mango</li>
</ul> -->

🔹 Output:
• Milk
• Banana
• Mango
Real-World Example
🛒 Shopping List – kya pehle, kya baad me liya, farq nahi padta

✅ Description List <dl>:-
A description list is used to show terms and their descriptions.

Tags used:

<dl> → Description list
<dt> → Description term
<dd> → Description definition

<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl> 

🧠 Real-World Example
📖 Dictionary – word aur uska meaning
--------------------------------------------------------------------------------------
-------------------------------
<!-- what is Table -->
An Html table is used to Display data in rows and columns.
Example: marksheet, employee list, timetable etc.

<!-- Basic Table Tags -->
<table>
Used to create a table.

<tr> (table row)
Used to create a row in the table.

<td> (table data)
Used to create a cell (data) in a row.

<th> (table heading)
Used for heading cells (bold & center by default).

<!-- Table ke main tags -->
<table> → table banata hai
<tr> → table row
<th> → table heading (bold hoti hai)
<td> → table data (normal cell)

<!-- rowspan -->
Used to merge rows vertically.
<td rowspan="2">HTML</td>

<!-- colspan -->
Used to merge columns horizontally.
<td colspan="2">Web</td>


Example:-
<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
  </tr>
  <tr>
    <td>Kajalti</td>
    <td>22</td>
    <td>Indore</td>
  </tr>
  <tr>
    <td>Riya</td>
    <td>21</td>
    <td>Bhopal</td>
  </tr>
</table>

<!-- /* Even rows (2nd, 4th, 6th...) */ -->
tr:nth-child(even) {
    background-color: #f2f2f2;
}

<!-- /* Odd rows (1st, 3rd, 5th...) */ -->
tr:nth-child(odd) {
    background-color: #ffffff;
}

<!-- Sirf table body ko color dena ho (header ko nahi) -->
tbody tr:nth-child(even) {
    background-color: #e6f2ff;
}

🎯 Real Interview Question
<!-- Q: Why do we use border-collapse: collapse? -->
A:
To avoid double borders and make the table look clean.
-------------------------------------------------------------------------------------------------------------------
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

<!-- Difference between input type="submit" and button ? -->
<input type="submit"> is a self-closing element used only to submit forms, while <button> is more flexible, can contain HTML content, and can be used for multiple purposes like submit, reset, or custom actions..

<!-- How to connect form with backend? -->
We connect a form to the backend using the action and method attributes.
--------------------------------------------------------------------------------------------------
<!-- 3️⃣ What is Semantic HTML? -->
Semantic tags are HTML tags that clearly describe the meaning of the content inside them.
Examples:
Common Semantic Tags:
<header>
<nav>
<section>
<article>
<footer>

| Tag         | Purpose             |
| ----------- | ------------------- |
| `<header>`  | Top section of page |
| `<nav>`     | Navigation links    |
| `<main>`    | Main content        |
| `<section>` | Section of content  |
| `<article>` | Independent content |
| `<aside>`   | Sidebar content     |
| `<footer>`  | Bottom section      |

<div>This is header</div> ❌ Wrong way:
<header>This is header</header> ✅ Correct way

👉 Real-world example:
Like naming rooms in a house: Kitchen, Bedroom
Not Room1, Room2

<!-- 🌍 Real Example -->
Think about a newspaper 📰:
Top part = Header
Menu section = Navigation
News blocks = Articles
Bottom copyright section = Footer
A website follows the same basic structure.

💻 Code
<header>Logo</header>
<nav>Menu</nav>
<article>News Content</article>
<footer>Copyright</footer>

<!-- Why should we use semantic HTML? -->
✅ Answer:
It clearly describes the meaning of content
Improve SEO
Improves accessibility
Makes code more readable
Better structure for browsers and screen readers.
Easy maintenance

<!-- What is the difference between section and article? -->
<section> is used to group related content.
<article> is used for independent, content like blog posts.

<!--What is the Difference Between <section> and <div>? -->
<section> is a semantic element that represents a meaningful section of content, while <div> is a non-semantic container used only for grouping or styling.

<section>
  <h2>About Us</h2>
  <p>We are a web development company.</p>
</section>

<div class="container">
  <p>This is just a container.</p>
</div>
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
1️⃣ <div>
Block-level element
Takes full width of the page
Starts on a new line
Used for layout and grouping large sections

2️⃣ <span>
Inline element
Takes only the required width
Does NOT start on a new line
Used for styling small parts of text

div Tag :- 
The div tag is a block-level container used to group elements.
<div>
  <h1>Hello</h1>
  <p>This is a paragraph</p>
</div>

span Tag :- 
The span tag is an inline element used to style small parts of text.
<p>This is <span style="color:red;">important</span> text.</p>

<!-- 🔥 8️⃣ What is Local Storage? -->
Local Storage is a client-side web storage mechanism that stores data in key-value pairs in the browser with no expiration time.
<!-- Q: Does localStorage store objects? -->
No ❌
It only stores strings.

<script>
localStorage.setItem("name", "Kajalti");
console.log(localStorage.getItem("name"));
</script>

<!-- 🔹 Basic Syntax -->
1️⃣ Store Data
<!-- localStorage.setItem("username", "Kajal"); -->
2️⃣ Get Data
<!-- localStorage.getItem("username"); -->
3️⃣ Remove One Item
<!-- localStorage.removeItem("username"); -->
4️⃣ Clear All Data
<!-- localStorage.clear(); -->
-----------------------------------------------------
<!-- Cookies -->
Small pieces of data stored in the browse.

<!-- 🔥 9️⃣ What is iframe? -->
The <iframe> (Inline Frame) tag is used to display another webpage inside the current your webpage.

<iframe src="https://example.com"></iframe>

👉 Real-world example:
Used to embed:
Maps
YouTube videos
Payment gateway

<!-- What is the use of label tag? -->
A label provides a name or description for an input field so users know what to type.
-
The <label> tag is used to describe an input field in a form.
It improves accessibility and user experience.
<label for="email">Email :</label>
<input type="email" id="email">


6️⃣ type:-
Input ka type batata hai
<input type="password">
🧠 Password, email, number decide karta hai

7️⃣ name:- 
Server ko data bhejne ke liye mandatory
<input type="text" name="username">

9️⃣ value:-
Input ki actual value
<input type="text" value="Admin">

---------------------------------------------------------------------------------
<!-- ✅ What is a Global Attribute in HTML? -->
Global attributes are attributes that can be applied to any HTML element.

Think of an ID card 🪪
Student
Teacher
Employee
Everyone can have an ID card.

--------------------------------------------------------------------------------------------
<!-- What is the difference between strong and b? -->
<strong> is a semantic tag that indicates important content and adds meaning, while <b> is a non-semantic tag used only to make text bold without adding importance.

<p>This is <strong>very important</strong> information.</p>

<p>This is <b>bold text</b>.</p>

<!-- ✅ Difference Between <em> and <i> -->
<em> is a semantic tag used to emphasize text and add meaning, while <i> is a non-semantic tag used only to display text in italic style.

<p>I <em>really</em> like coding.</p>
<p>This is <i>italic</i> text.</p>

<!-- ✅ Difference Between <strong> and <em> -->
<strong> is a semantic tag that indicates important content and adds meaning, <em> is a semantic tag used to emphasize text and add meaning.
<strong> → Bold
<em> → Italic
<p><strong>This is strong text</strong></p>
<p><em>This is emphasized text</em></p>

<!-- different between Semantic vs Non-Semantic Elements -->
Semantic elements clearly describe the meaning and structure of content, while non-semantic elements are generic containers used mainly for styling and layout.
<!-- Semantic -->
<header>
<nav>
<section>
<article>
<footer>
<strong>
<em>
Example Code:
<section>
  <h2>About Us</h2>
  <p>We are a web development company.</p>
</section>

<!-- Non-Semantic -->
<div>
<span>
<b>
<i>
Example Code:
<div class="container">
  <p>Content here</p>
</div>

-------------------------------------------------------------------------------------------------------------------------------
✅ HTML Form Elements / Form Controls:-
1️⃣ <input>
👉 Single-line data ke liye

<input type="text">
<input type="password">
<input type="email">
<input type="submit">
🧠 Example: Name, Email, Password

2️⃣ <textarea>
👉 Multi-line text ke liye

<textarea rows="4" cols="30"></textarea>
🧠 Example: Address, Feedback

3️⃣ <select>
👉 Dropdown list ke liye

<select>
  <option>India</option>
  <option>USA</option>
</select>

4️⃣<option>
👉 Dropdown ke andar items
<option>India</option>

5️⃣ <label>
👉 Input ka naam batane ke liye (accessibility)

<label>Name:</label>
<input type="text">

6️⃣ <button>
👉 Button banane ke liye

<button>Submit</button>

7️⃣ <fieldset>
👉 Form ke elements ko group karta hai

<fieldset>
  <legend>Personal Info</legend>
</fieldset>

8️⃣ <legend>
👉 Fieldset ka title
<legend>Login Details</legend>
---------------------------------------------------------------------------------------------------------------------------------------
<!-- 📦 Module 8: Media -->
Media in HTML refers to multimedia elements such as images, audio, and video that are embedded into a webpage using tags like <img>, <audio>, and <video>.

<!-- Real-World Example -->
Like a TV or radio 🎬🎵 on your website
You can play videos or music directly on the page

<!-- <audio> -->
The <audio> tag is used to embed sound or music in a webpage.
<audio controls>
  <source src="song.mp3" type="audio/mpeg">
</audio>
<!-- Attributes: -->
controls → play/pause
autoplay, loop, muted.

 <!-- <video> -->
The <video> tag is used to embed video content in a webpage.
<video controls width="300">
  <source src="movie.mp4" type="video/mp4">
</video>

<!-- <iframe>(YouTube video, maps) -->
The <iframe> tag is used to display another webpage inside the current your webpage.
<iframe 
  src="https://www.youtube.com/embed/VIDEO_ID"
  width="300" height="200">
</iframe>

<!-- <details>  -->
The <details> tag is used to show or hide extra information.
<details>
  <summary>Show More</summary>
  <p>This is hidden content.</p>
</details>

<!-- <summary> -->
The <summary> tag defines the visible heading for the details element.

------------------------------------------------------------------------------------------------------
<!-- 🔥 1️⃣3️⃣ What is SEO in HTML? -->
SEO (Search Engine Optimization) is the process of optimizing a website to improve its visibility and ranking on search engines like Google.

<!-- 🔹 Why SEO is Important? -->a
✔ Increases website traffic
✔ Improves visibility
✔ Builds brand credibility
✔ Generates organic leads

<!-- 🔥 1️⃣4️⃣ What is Accessibility? -->
Accessibility is the practice of building websites and applications that can be used by everyone, including people with disabilities

<!-- ✅ Why Accessibility is Important? -->
Equal access for everyone
Better user experience
Improves SEO
Improves usability


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
Top section of page |
| `<nav>`     | Navigation links 

<!-- What is aside used for? -->
<aside> is used for sidebar content like ads, related links, or extra information.

<!-- What are data-* attributes? -->
data-* attributes store custom data in HTML elements.

<div data-user-id="123"></div>

=========================================================================================================
