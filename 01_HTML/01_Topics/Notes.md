<!-- ✅ What is HTML? -->
HTML(HyperText Markup Language) is the standard markup language.
It is used to create the structure of a web page.
HTML defines elements like headings, paragraphs, images, links, forms, etc.

For example Just like the structure of a house includs walls, rooms, and roof ,HTML defines headings, paragraphs, images, links, and sections of a website.
It does not provide styling or functionality — it only provides structure

Hindi:-Jaise ghar ka structure (deewar, kamra, chhat) — waise hi HTML webpage ka structure deta hai.

<!-- 🔹 2. Why HTML is called a Markup Language? -->
HTML is called a Markup Language because it uses tags to define and structure content on a web page.
<h1> marks text as a heading.

<!-- ❓ Q2. What is the difference between HTML and CSS? -->
HTML is used to create the structure of a webpage,
while CSS is used to style and design the webpage.

Example:
HTML = body
CSS = clothes

 <!--What is the basic structure of an HTML page? -->
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
यह ब्राउज़र को बताता है कि यह डॉक्यूमेंट एक HTML5 डॉक्यूमेंट है।

Think of a blueprint of a house 🏗️
The blueprint says whether it follows old rules or new rules.
Builders follow those rules while constructing.

Example:- Real-Life Example (Easy to remember)
Imagine you are sending a letter 📄✉️
On top you write: “This letter is written in English.”
Now the reader knows how to read and understand it.

Real-Life Example (घर वाला उदाहरण)
मान लो आप किसी को चिट्ठी लिखते हो ✉️
सबसे ऊपर लिखते हो:
“यह पत्र हिंदी में लिखा गया है।”
अब पढ़ने वाले को पता चल जाता है कि कैसे पढ़ना है।

मान लो घर का नक्शा (Blueprint) बना है 🏠
उसमें लिखा होता है कि यह पुराने नियमों से बनेगा या नए नियमों से।
मिस्त्री उसी हिसाब से घर बनाता है।

DOCTYPE informs the browser about the HTML version used, so the webpage is rendered properly.

DOCTYPE is not an HTML tag
-----------------------------------------------------------------------------------------------------------------------------------------------
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
----------------------------------------------------------------------------------------------------------------------
<!-- 🔥 2️⃣ What is HTML5? -->
HTML5 is the latest version of HTML that supports modern HTML rules and new features like semantic tags, audio, video, and improved performance etc.
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

HTML5 is the latest version of HTML that supports modern HTML rules and new features like semantic tags, audio, video, and improved performance etc.

<!-- 🔥 7️⃣ What are HTML5 new features? -->
✅ Important Features:
Semantic tags
Audio & Video support
Local Storage
Geolocation

Video Example:
<video width="300" controls>
    <source src="video.mp4" type="video/mp4">
</video>

<!-- 👉 “Why is HTML5 better?” -->
HTML5 is better because it supports multimedia, semantic tags, improved forms, local storage, and better performance.
-----------------------------------------------------------------------------------------------------------
<!-- Q3. What is the difference between Tag and Element? -->
<!-- HTML -->
HTML tags are keywords enclosed in angle brackets that tell the browser how to display content.
Example: <p>, <h1>, <img>

<!-- ELement -->
Element is a complete structure consisting of opening tag, content, and closing tag.

👉 Real-world example:
Cup + tea inside ☕ = useful item

👉 Example:
<p>Hello</p>.

--------------------------------------------------------------------------
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

<!-- ❓ 2️⃣ Why should we not use the same id for multiple elements? -->
We should not use the same id for multiple elements because id must be unique on a webpage.
If we use the same id multiple times, JavaScript and CSS may not work properly and it can cause unexpected behavior
<p id="text">Hello</p>
<p id="text">World</p>
If we use:
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
The alt attribute provides alternative text for an image if it cannot be displayed.

<img src="image.jpg" alt="Girl coding on laptop">
Example:-
Socho newspaper ki photo missing ho jaye
👉 neeche likha caption batata hai photo kis baare me hai
📌 HTML me alt wahi caption hai

<!-- ✅ Why alt is important? -->
The alt attribute is used to describe an image. It helps when the image does not load, improves accessibility for screen readers, and supports SEO.

<!-- 3️⃣ alt attribute kyun important hai? -->
Blind users (screen reader)
Image load na ho
SEO ke liye

| `href`              | `src`                    |
| ------------------- | ------------------------ |
| Used for navigation | Used for loading content |
| Link open karta hai | File embed karta hai     |
| `<a>` tag           | `<img>`, `<script>`      |

<!-- 8️⃣ target -->
✅ target="_blank":-
The target="_blank" attribute opens the link in a new tab.
Like opening a new notebook instead of closing the old one.
<a href="https://google.com" target="_blank">Google</a>


<!-- 🔥 🔟 What is Anchor Tag? -->
The Anchor tag is Used to create hyperlinks.
<a href="https://google.com">Go to Google</a>


<!-- 🔥 11️⃣ What is Meta Tag? -->
A meta tag provides information about the webpage.

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
Login:-
charset → supports special characters
viewport → responsive design

<!-- What is the viewport meta tag? -->
The viewport meta tag controls the layout on mobile devices.
<meta name="viewport" content="width=device-width, initial-scale=1.0">
---------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------
<!-- Form Attributes -->
required
placeholder
autocomplete
pattern
<!-- What is required attribute? -->
The required attribute is used in HTML forms to make a field mandatory. The form cannot be submitted unless the user fills that field.
Field ko mandatory banata hai.
Form tab tak submit nahi hoga jab tak field fill na ho.
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
--------------------------------------------------------------
<!-- ✅ Comments in HTML -->
Comments are used to explain code and are not displayed in the browser.
<!-- This is a comment -->

<!-- ✅ Case Sensitivity -->
HTML tags are not case-sensitive, but lowercase is best practice.
--------------------------------------------------------------------------------------------------
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

✅ Bold: <b> / <strong>
<b> -> Bold text
Makes text bold (no extra importance).
<!-- <b>Bold text</b> -->

<strong> 
Makes text bold with importance.
<!-- <strong>Strong important text</strong><br>-->

✅ Italic: <i> <i> 
Makes text italic (style only).
<!-- <i>Italic text</i><br> -->

<em>
Makes text italic with emphasis.
<!-- <em>Emphasized text</em><br><br> -->

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
------------------------------------------------------------------------------------------------------------------
<!-- 1️⃣ Inline :- -->
An inline css used to applied directly inside an html tag using the style attribute.

<h1 style="color:blue;">Hello</h1>
--------------------------------------------------------------------------------------------------------------------
<!-- 🟢 3️⃣ Links-->
 An HTML link is used to connects one web page to another and allows navigation on the web.
 for example, Like a road sign that takes you to another place.
<a href="https://www.google.com">Go to Google</a>

4️⃣ Code Explanation
<a> is the anchor tag 
href contains the page address
Clicking the text opens another page

----------------------------------------------------------------------------------
<!-- what is <img> tag -->
The <img> tag is used to display images on a webpage.
For example, Like putting a photo in a photo frame.
<img src="photo.jpg" alt="My Photo">

Explanation
<img> → image tag
src → image path (source)
alt → text shown if image does not load
----------------------------------------------------------------------------------------------------------------------------
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
----------------------------------------------------------------------------------------------------------
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

---------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------
<!-- 📝 Module 6: Forms (MOST IMPORTANT 🔥)-->
<!-- 🔥 5️⃣ What is Form? -->
An HTML <form> tag is used to collect user input and send that data to a server for processing.
Real Example
Login page, Registration page.

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

<!--6️⃣ What is the difference between GET and POST in forms? -->
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

<!-- Real Interview Question -->
<!-- Q: Which method is best for login form? -->
POST method, because it is more secure.

<!-- <input> Tags-->
Input tag is used to collect different types of user input using the type attribute.
Common input types
<input type="text">       <!-- Name -->
<input type="password">  <!-- Password -->
<input type="email">     <!-- Email -->
<input type="number">    <!-- Age -->
<input type="submit">    <!-- Submit button -->
<input type="radio"> 
<input type="checkbox">
<input type="reset">

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
-----------------------------------------------------------------------------------------------------------------------
<!-- <label>  -->
The <label> tag is used to define a name for an input field and improve accessibility.

<label for="name">Name:</label>
<input type="text" id="name" placeholder="Enter your name">

label → alag HTML tag hota hai
<label>Name:</label>

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
------------------------------------------------------------------------------------------------------------
<!-- ✅ What is a Global Attribute in HTML? -->
Global attributes are attributes that can be applied to any HTML element.

Think of an ID card 🪪
Student
Teacher
Employee
Everyone can have an ID card.
---------------------------------------------------------------
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
-----------------------------------------------------------------------------------------------------------
<!-- 🧠 Module 7: Semantic HTML (Interview Favourite) -->
<!-- ✅ What are Semantic Tags? -->
Semantic tags are HTML tags that clearly describe the meaning of the content inside them.
Examples: <header>, <footer>, <article>, <section>

Jaise ghar me:
Kitchen → khana pakta hai
Bedroom → sone ke liye
Bathroom → nahane ke liye

| Tag            | Meaning                          |
| -------------- | -------------------------------- |
| `<header>`     | Page / section ka top part       |
| `<nav>`        | Navigation links                 |
| `<main>`       | Main content                     |
| `<section>`    | Section of content               |
| `<article>`    | Independent content (blog, post) |
| `<aside>`      | Side content / ads               |
| `<footer>`     | Bottom part                      |
| `<figure>`     | Image + caption                  |
| `<figcaption>` | Image description                |

<!-- Header is for top content, nav for navigation, section groups related content, article is independent content, aside is side content, and footer is for bottom information. -->

<!-- QUE.Why semantic HTML is important? -->
<!-- Why should we use semantic HTML? -->
✅ Answer:
It clearly describes the meaning of content
Better Accessibility
Better SEO
Clean structure
Easy maintenance

1️⃣ <header>
👉 Page ka top part (logo, title)
<header>Website Header</header>

2️⃣ <nav>
👉 Navigation links
<nav>Home | About | Contact</nav>

3️⃣ <main>
Page ka main content
<main>Main Content</main>

4️⃣ <section>
👉 Related content ka group
<section>About Us</section>

5️⃣ <article>
ndependent content (blog, news)
<article>Blog Post</article>

6️⃣ <aside>
👉 Side content (ads, sidebar)
<aside>Related Links</aside>

7️⃣ <footer>
Page ka bottom part
<footer>© 2026</footer>

<!-- 🔍 Semantic vs Non-Semantic (Quick Comparison) -->
Semantic HTML uses meaningful tags that describe content, while non-semantic HTML uses generic tags like div and span that don’t explain the content’s purpose.
-----------------------------------------------------------------------------------------------------------------------
<!-- 📦 Module 8: Media -->
Media means adding audio, video, or other multimedia content that can be embedded in a webpage.
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

<!-- <progress> -->
The <progress> tag is used to show the progress of a task.
<progress value="60" max="100"></progress>

-------------------------------------------------------------------------------------------------------
<!-- Q1. What is SEO? -->
Ans:SEO stands for Search Engine Optimization. It is used to improve a website’s ranking on search engines.

<!-- 1️⃣5️⃣ What is SEO friendly HTML? -->
Answer:
Using:
* Semantic tags
* Proper headings
* Meta description
* alt attributes

<!-- 🔥 1️⃣4️⃣ What is Accessibility? -->
Accessibility means designing websites so that all users, including people with disabilities, can use and understand them easily.

<!-- ✅ Why Accessibility is Important? -->
Equal access for everyone
Better user experience
Improves SEO
Required in many countries by law

<!-- 1️⃣5️⃣ Accessibility ka matlab kya hai? -->
Website sab log use kar saken —
including blind & disabled users
------------------------------------------------------------------------------------------------------------------------------
<!-- What is a Empty(void) element? -->
A void element is an element that does not have a closing tag.
Examples:
<br>, <hr>, <img>, <input>

<!-- 2️⃣ What is the difference between Block and Inline elements? -->
Block elements:-block elements takes full width and starts on new line.
Examples:
Block → <div>, <p>, <h1>

Inline element:- inline element takes required width and does not start new line.
Examples:
Inline → <span>, <a>, <strong>, <img>

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
----------------------------------------------------------------------------------------------------------------------
🔥 HTML Tricky Interview Questions & Answers
<!-- 1️⃣ <b> aur <strong> me difference? -->
<b> sirf text ko bold karta hai
<strong> text ko important batata hai (SEO + screen reader)
<!-- 👉 Interview line: -->
<strong> semantic hai, <b> non-semantic.

<!-- 2️⃣ <i> aur <em> me difference? -->
<i> style ke liye
<em> emphasis ke liye (meaning change)

<!-- 7️⃣ Kya hum bina <form> ke input use kar sakte hain? -->
✅ Haan, lekin
❌ data submit nahi hoga

<!-- 9️⃣ <div> aur <section> me difference? -->
<div> non-semantic
<section> semantic (meaningful block)

<!-- 1️⃣3️⃣ name attribute form me kyun important hai? -->
Server ko pata chalta hai data kis field ka hai.

<!-- 1️⃣4️⃣ Table aur list me difference? -->
Table → rows & columns (data)
List → items ka group


--------------------------------------------------------------------------------------------------------