<!-- ✅ What is HTML? -->
HTML (HyperText Markup Language) is the standard markup language is used to create the structure of web pages using elements and tags.

Example:- “Just like the structure of a house (walls, rooms, roof), HTML provides the structure of a webpage.”

Hindi:-Jaise ghar ka structure (deewar, kamra, chhat) — waise hi HTML webpage ka structure deta hai.

<!-- 🔹 2. Why HTML is called a Markup Language? -->
HTML is called a Markup Language because it uses tags to define and structure content on a web page.
<h1> marks text as a heading.

<!-- ✅ HTML vs CSS vs JavaScript -->

HTML defines structure of the web page, CSS styles the page, and JavaScript adds behavior.

| 
Technology     | Role                     |
| -------------- | ----------------------------------|
| **HTML**       | defines the structure of webpage  |
| **CSS**        | Styling & layout                  |
| **JavaScript** | Functionality & behavior          |

 <!-- HTML file structure -->
<!DOCTYPE html>
   </html>
     <head>
       <title>My page</title>
     </head>
     <body>
        Content goes here 
    </body>
    </html> 

<!--<!DOCTYPE Html> <html> <title> <head> <body> -->
✅<!DOCTYPE Html>
It tells the browser that the document is an HTML5 document.
यह ब्राउज़र को बताता है कि यह डॉक्यूमेंट एक HTML5 डॉक्यूमेंट है।

Example:- Real-Life Example (Easy to remember)
Imagine you are sending a letter 📄✉️
On top you write: “This letter is written in English.”
Now the reader knows how to read and understand it.

Think of a blueprint of a house 🏗️
The blueprint says whether it follows old rules or new rules.
Builders follow those rules while constructing.

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
✅HTML5:-
An HTML5 document is a web page that follows the HTML5 standard.
It uses modern HTML rules and features to create web pages.
HTML5 gives a clear page layout using semantic tags.


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

✅<meta> data→
 provides page information.

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

<!-- ✅ Tags & Elements -->
An HTML tag is a predefined keyword written inside angle brackets < > that is used to instruct the web browser how to display or structure content.

<!-- Real-world example: -->
Think of a cup design ☕
It shows the shape only, not the tea.

<p>
</p>
<p> is a tag.

Element → Start tag + content + end tag

<p>Hello</p>
-------------------------------------------------------
<!-- Q3. What is the difference between Tag and Element? -->

Tag is an instruction written inside < >

Element is a complete structure consisting of opening tag, content, and closing tag.

👉 Real-world example:
Cup + tea inside ☕ = useful item

👉 Example:
<p>Hello</p> is an element.

--------------------------------------------------------------------------
<!-- ✅ Attributes -->

Attributes provide additional information about an HTML elements.

<input type="text" placeholder="Enter name">

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

HTML
<p title="User name">Kajalti</p>

<p> → Person
---------------------------------------------------------------------------------------------------------------------

<!-- ✅ Comments in HTML -->
Comments are used to explain code and are not displayed in the browser.
<!-- This is a comment -->

<!-- ✅ Case Sensitivity -->
HTML tags are not case-sensitive, but lowercase is best practice.
--------------------------------------------------------------------------------------------------
<!-- 🟢 2️⃣ Text Formatting Tags -->
<!-- Headings, Paragraph, Line break -->

✅ Headings:
Heading are define with <h1> to <h6> tags, <h1> define the largest heanding and <h6> define the smallest heading on a webpage.
oR
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

✅ Italic: <i> / <em>
<i> 
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

------------------------------------------------------------------------------------🔗------------------------------
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
<!-- ✅ <a> Tag (Anchor Tag) -->
<!-- What is <a> tag -->
The <a> tag is used to create hyperlinks in HTML.

Hindi:-
<a> tag ka use HTML me link banane ke liye hota hai.

✅ href(Hypertext Reference):-
href is an attribute that defines the destination of a hyperlink.

href ek attribute hai jo batata hai ki link par click karne ke baad user kahan jayega.

<a href="about.html">About</a>

Like a home address written on a letter.

Example:-
Board par likha hota hai: Delhi → 10 km
Road khud board nahi hota, bas destination batata hai

-------------------------------------------------------------------------
✅ target="_blank":-
The target="_blank" attribute opens the link in a new tab.

Like opening a new notebook instead of closing the old one.

<a href="https://google.com" target="_blank">Google</a>

------------------------------------------------------------------------------------------------------

<!-- what is <img> tag -->
The <img> tag is used to display images on a webpage.

Forexample, Like putting a photo in a photo frame.

<img src="photo.jpg" alt="My Photo">

Explanation

<img> → image tag
src → image path (source)
alt → text shown if image does not load
------------------------------------------------------------------------
<!-- src, alt, -->

<!-- src (source) -->
src is an attribute that defines the image path.
👉Image ka path / location 
batata hai.

<img src="image.jpg">

<!-- alt (alternate text) -->
alt is an attribute provides alternate text.
👉 Agar image load na ho to text show hota hai

Example:-
Socho newspaper ki photo missing ho jaye
👉 neeche likha caption batata hai photo kis baare me hai
📌 HTML me alt wahi caption hai

<!-- ✅ Why alt is important? -->
The alt attribute is used to describe an image. It helps when the image does not load, improves accessibility for screen readers, and supports SEO.

<!-- ✅ Q7. Difference between href and src? -->

href → link ke liye

src → image, video ke liye

📌 Interview Line:

“href navigation ke liye hota hai, src content load karne ke liye.”
<!-- Example -->
href → Like a road sign 🪧 telling you where to go (click → goes to another page)

src → Like a photo frame 🖼 that shows the actual image (loads content directly on page)
| `href`              | `src`                    |
| ------------------- | ------------------------ |
| Used for navigation | Used for loading content |
| Link open karta hai | File embed karta hai     |
| `<a>` tag           | `<img>`, `<script>`      |

-------------------------------------------------------------------------------------------------

<!-- Module 4: Lists -->
<!-- ✅ What are Lists in HTML? -->
HTML lists are used to display a group of related items in an ordered or unordered way.

✅ Ordered List <ol> :-
An ordered list is used when the sequence or order matters.
<!-- 
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

-------------------------------------------------------------------------------------------

✅ Unordered List <ul>:-
 An unordered list is used when order does not matter.
<!-- 
<ul>
  <li>Milk</li>
  <li>Banana</li>
  <li>Mango</li>
</ul> -->

Real-World Example
🛒 Shopping List – kya pehle, kya baad me liya, farq nahi padta

------------------------------------------------------------------------------------------------------------------------
✅ Description List <dl>:-
A description list is used to show terms and their descriptions.

Tags used:

<dl> → Description list
<dt> → Description term
<dd> → Description definition
<!-- 
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
<!-- 
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl> --> -->

🧠 Real-World Example
📖 Dictionary – word aur uska meaning

----------------------------------------------------------------------------------------------------------
<!-- 📊 Module 5: Tables (Day 5) -->

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

-------------------------------------------------------------------------------------------------
<!-- rowspan -->
Used to merge rows vertically.

<td rowspan="2">HTML</td>

<!-- colspan -->

Used to merge columns horizontally.

<td colspan="2">Web</td>

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
<!-- 📝 Module 6: Forms (MOST IMPORTANT 🔥) (Day 6–7) -->

✅ <form> Tag:-
The <form> tag is used to collect user input and send data to the server.

<!-- Real-World Example -->
📄 Admission form – naam, email, password bharna.

It sends data using GET or POST method.

<form action="" method="post">

.....

</form>

------------------------------------------------------------------------------------------------------------------------
<!-- 🔹 2️⃣ action:--->
👉 Batata hai form ka data kaha bhejna hai

🌍 Example
Jaise form bhar ke office me submit karna

<form action="submit.php">


<!-- 3️⃣ method :--->
👉 Batata hai data kaise bhejna hai

<form method="get">
<form method="post">

----------------------------------------------------------------------------------------------
action → data kaha send hoga
method → GET / POST

<!-- ✅ What is GET and POST -->
GET and POST are HTTP methods used to send form data from client to server.

* sGET method sends data through the URL and is less secure.
 Example:-🔍 Google search

<form action="search.html" method="get">
  <input type="text" name="q">
  <input type="submit">
</form>


* POST method sends data securely in the request body.
<!-- 🌍 Real-World Example -->
🔐 Login form

<form action="login.php" method="post">
  <input type="text" name="username">
  <input type="password" name="password">
  <input type="submit">
</form>

------------------------------------------------------------------------------------------------------
<!-- Real Interview Question -->
<!-- Q: Which method is best for login form? -->
A:
POST method, because it is more secure.

| GET                    | POST                        |
| ---------------------- | --------------------------- |
| Data URL me dikhta hai | Data URL me nahi dikhta     |
| Less secure            | More secure                 |
| Search ke liye best    | Login / signup ke liye best |

---------------------------------------------------------------------------------------------------------------------------
<!-- <input>-->
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

-------------------------------------------------------------------------------------------------------------
<!-- Q: Difference between radio and checkbox? -->
A
Radio allows only one selection, checkbox allows multiple selections.

-----------------------------------------------------------------------------------------------------------------------
<!-- <label>  -->
The <label> tag is used to define a name for an input field and improve accessibility.

<label for="name">Name:</label>
<input type="text" id="name" placeholder="Enter your name">

label → alag HTML tag hota hai
<label>Name:</label>

------------------------------------------------------------------------------------------------------------------------------------------
<!-- 🔹 Important Attributes -->
<!-- 1️⃣ href:- -->

<a href="https://google.com">Google</a>

🧠 Real life: Kisi ka phone number jisse call hoti hai.

<!-- 2️⃣ src:-  -->

<img src="photo.jpg" alt="My photo">

🧠 Real life: TV me channel ka signal source.

<!-- 3️⃣ alt -->
👉 Image ka description

<img src="dog.jpg" alt="Brown dog">

🧠 Blind users & image error ke liye

4️⃣ id:-
The id attribute is used to uniquely identify an element.
🧠 Real life: Aadhaar number (unique)

<div id="header"></div>

5️⃣ class:-
The class attribute is used to apply the same style to multiple elements.
School uniform = class

<p class="text">Hello</p>

6️⃣ type:-
Input ka type batata hai

<input type="password">

🧠 Password, email, number decide karta hai

7️⃣ name:- 
Server ko data bhejne ke liye mandatory

<input type="text" name="username">

🎯 Interview:
Name attribute is used to identify form data on the server.

8️⃣ placeholder:-
Placeholder provides a hint text(temporary).

<input type="email" placeholder="Enter email">

9️⃣ value:-
Input ki actual value

<input type="text" value="Admin">

🔟 required:-
👉 Field mandatory banata hai

<input type="email" required>

🧠 Form bina bhare submit nahi hoga
------------------------------------------------------------------------------------------------------------
<!-- ✅ What is a Global Attribute in HTML? -->
Global attributes are attributes that can be applied to any HTML element.

Think of an ID card 🪪
Student
Teacher
Employee
Everyone can have an ID card.
-----------------------------------------------------------------------------------------------------------
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
LOGIN FORM:-
<form>
  <h2>Login</h2>

  <label>Email</label><br>
  <input type="email" name="email" placeholder="Enter email"><br><br>

  <label>Password</label><br>
  <input type="password" name="password" placeholder="Enter password"><br><br>

  <input type="submit" value="Login">
</form>

<!-- CSS -->
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f2f2f2;
}

.login-form{
    width: 350px;
    padding: 25px;
    background-color: #fff;
    border: 2px solid #000;
    border-radius: 8px;
}

.login-form h2{
    text-align: center;
    margin-bottom: 20px;
}

.login-form label{
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

.login-form input{
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
}

.login-form button{
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
}

.login-form button:hover{
    background-color: #333;
}

----------------------------------------------------------------------------------------------------------

<!-- 🧠 Module 7: Semantic HTML (Interview Favourite) -->
<!-- ✅ What are Semantic Tags? -->
Semantic tags are HTML tags that clearly describe the meaning of the content inside them.

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
QUE.
Why semantic HTML is important?
ANS:-
Semantic HTML is important because:

It clearly describes the meaning of content
It improves code readability
Better SEO
It improves accessibility for screen readers


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
<!-- 📦 Module 8: Media & Extras -->
Media in HTML refers to content like audio, video, or other multimedia elements that can be embedded in a webpage.

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
The <iframe> tag is used to display another webpage inside the current webpage.

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
1️⃣5️⃣ What is SEO friendly HTML?
Answer:
Using:
* Semantic tags
* Proper headings
* Meta description
* alt attributes

Q1. What is SEO?
Ans: SEO stands for Search Engine Optimization. It is used to improve a website’s ranking on search engines.

<!-- SEO ka full form kya hai? -->
Ans: Search Engine Optimization
-------------------------------------------------------------------------------------------------------------------------------===================================================================================

<!-- What are empty (void) tags? -->
Tags without closing tags.

Examples: <br> , <hr> , <img>

<!-- What are block elements? -->
block elements take full width and starts on new line.
Examples:
Block → div, p, h1

<!-- What are inline elements? -->
inline element take required width and does not start new line.
Examples:
Inline → span, a, img


<!-- 3️⃣ <div> vs <span> -->
div is block-level element, span is inline element.

<div>This is block</div>
<span>This is inline</span>

----------------------------------------------------------------------------------

1️⃣1️⃣ Accessibility (Bonus ⭐)
alt for images
label with for
Semantic tags
Blind user & screen reader concept

1️⃣2️⃣ HTML5 (Short Points)
New semantic tags
Audio & video support
No plugins needed
Better structure

---------------------------------------------------------------------------------
🔥 HTML Tricky Interview Questions & Answers
<!-- 1️⃣ <b> aur <strong> me difference? -->
<b> sirf text ko bold karta hai
<strong> text ko important batata hai (SEO + screen reader)

👉 Interview line:
<strong> semantic hai, <b> non-semantic.

<!-- 2️⃣ <i> aur <em> me difference? -->
<i> style ke liye
<em> emphasis ke liye (meaning change)

<!-- 3️⃣ alt attribute kyun important hai? -->
Blind users (screen reader)
Image load na ho
SEO ke liye

<!-- 7️⃣ Kya hum bina <form> ke input use kar sakte hain? -->
✅ Haan, lekin
❌ data submit nahi hoga

<!-- 9️⃣ <div> aur <section> me difference? -->

<div> non-semantic
<section> semantic (meaningful block)

<!-- Empty tags kya hote hain? -->
Jinke closing tag nahi hote
Example:

<br>
<hr>
<img>

<!-- 1️⃣3️⃣ name attribute form me kyun important hai? -->
Server ko pata chalta hai data kis field ka hai.

<!-- 1️⃣4️⃣ Table aur list me difference? -->
Table → rows & columns (data)
List → items ka group

<!-- 1️⃣5️⃣ Accessibility ka matlab kya hai? -->
Website sab log use kar saken —
including blind & disabled users

---------------------------------------------------------------------------------------------------------