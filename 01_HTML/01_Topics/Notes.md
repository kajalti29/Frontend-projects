<!-- ✅ What is HTML? -->
HTML (HyperText Markup Language) is the standard markup language is used to create the structure of web pages using elements and tags.

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

✅HTML5:-
An HTML5 document is a web page that follows the HTML5 standard.
It uses modern HTML rules and features to create web pages.

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

<p>This is paragraph</p>

Element → Start tag + content + end tag

<p>Hello</p>
-------------------------------------------------------
<!-- Q3. What is the difference between Tag and Element? -->

Tag is an instruction written inside < >

Element is a complete structure consisting of opening tag, content, and closing tag

👉 Example:
<p>Hello</p> is an element.

<!-- ✅ Attributes -->

Attributes provide additional information about an HTML elements.

<input type="text" placeholder="Enter name">

<!-- ✅ Comments in HTML -->
Comments are used to explain code and are not displayed in the browser.
<!-- This is a comment -->

<!-- ✅ Case Sensitivity -->
HTML tags are not case-sensitive, but lowercase is best practice.

✅<link> → connects CSS file
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

<!-- 2️⃣ Internal-->
Internal CSS is written <style> tag in <head> section of HTML.

<style>
h1 { color: green; }
</style>

<!-- 3️⃣ External ⭐ (Best) -->
written in a separate .CSS file and linked to HTML using <link> tag.

<!-- 📌 Interview Q: Which is best? -->
✅ External CSS
--------------------------------------------------------------------------------------------------------------------

<!-- 🟢 3️⃣ Links-->

 Link:-
 A link is a clickable element that takes the user to another webpage, file, or section when clicked.

 or
 A link connects one web page to another and allows navigation on the web.

 <a href="https://example.com">Visit Page</a>

<!-- ✅ <a> Tag (Anchor Tag) -->
<!-- What is <a> tag -->
The <a> tag is used to create hyperlinks in HTML.

Hindi:-
<a> tag ka use HTML me link banane ke liye hota hai.

✅ href(Hypertext Reference):-
href is an attribute that defines the destination of a hyperlink.

href ek attribute hai jo batata hai ki link par click karne ke baad user kahan jayega.

<a href="about.html">About</a>

✅ target="_blank":-
The target="_blank" attribute opens the link in a new tab.

<a href="https://google.com" target="_blank">Google</a>

------------------------------------------------------------------------------------------------------

<!-- what is <img> tag -->
<img> tag is used to display images on a webpage.

<img src="photo.jpg" alt="My Photo">

<!-- src, alt, title -->

<!-- src (source) -->
src is an attribute that defines the image path.
👉Image ka path / location 
batata hai.

<img src="image.jpg">

<!-- alt (alternate text) -->
alt attribute provides alternate text.
👉 Agar image load na ho to text show hota hai

<!-- ✅ Q7. Difference between href and src? -->

href → link ke liye

src → image, video ke liye

📌 Interview Line:

“href navigation ke liye hota hai, src content load karne ke liye.”

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
    <li>HTML</li>
    <li>CSS</li>
    <li>JS</li>
</ol> -->

✅ Unordered List <ul>:-
 An unordered list is used when order does not matter.
<!-- 
<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Mango</li>
</ul> -->

✅ Description List <dl>:-
A description list is used to show terms and their descriptions.

Tags used:

<dl> → Description list
<dt> → Description term
<dd> → Description definition
<!-- 
<dl>
  <dt>HTML</dt>
  <dd>Markup language for web structure</dd>

  <dt>CSS</dt>
  <dd>Used for styling web pages</dd>
</dl> -->

----------------------------------------------------------------------------------------------------------
<!-- 📊 Module 5: Tables (Day 5) -->

<!-- what is Table -->
An Html table is used to Display data in rows and columns.

<!-- Basic Table Tags -->
<table>
Used to create a table.

<tr> (table row)
Used to create a row in the table.

<td> (table data)
Used to create a cell (data) in a row.

<th> (table heading)
Used for heading cells (bold & center by default).

<!-- rowspan -->
Used to merge rows vertically.

<td rowspan="2">HTML</td>

<!-- colspan -->

Used to merge columns horizontally.

<td colspan="2">Web</td>

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

It sends data using GET or POST method.

<form action="" method="post">
action → data kaha send hoga
method → GET / POST

<!-- ✅ What is GET and POST -->
GET and POST are HTTP methods used to send form data from client to server.


GET method sends data through the URL and is less secure.

POST method sends data securely in the request body.


<!-- Real Interview Question -->
<!-- Q: Which method is best for login form? -->
A:
POST method, because it is more secure.

<!-- <input> types -->
Input tag is used to collect different types of user input using the type attribute.
<input type="text">
<input type="password">
<input type="email">
<input type="number">
<input type="radio">
<input type="checkbox">
<input type="submit">
<input type="reset">

<!-- Q: Difference between radio and checkbox? -->
A
Radio allows only one selection, checkbox allows multiple selections.

<!-- <label>  -->
The <label> tag is used to define a name for an input field and improve accessibility.

<label for="email">Email</label>
<input type="email" id="email">

<!-- <textarea> -->
The <textarea> tag is used to enter multi-line text.

<textarea rows="4" cols="30"></textarea>

<!-- 🔹 <select> & <option> -->
<select> creates a dropdown list
<select>
  <option>India</option>
  <option>USA</option>
</select>

<!-- 🔹 Important Attributes -->
✅ name:-
Server ko data bhejne ke liye mandatory

<input type="text" name="username">

🎯 Interview:
Name attribute is used to identify form data on the server.

✅ value:-
Input ki actual value

<input type="text" value="Admin">

✅ placeholder:-
Placeholder provides a hint text(temporary).

<input type="email" placeholder="Enter email">

Login / Registration form
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
It helps SEO
It improves accessibility for screen readers
-----------------------------------------------------------------------------------------------------------------------
<!-- 📦 Module 8: Media & Extras -->
HTML media and extra tags like audio, video, iframe, details, and progress help embed rich content and improve user interaction without external plugins.

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

<!-- 🟢 🔟 HTML Attributes (Common) -->
✅ id:-
The id attribute is used to uniquely identify an element.

✅ class:-
The class attribute is used to apply the same style to multiple elements.

✅ style:-
The style attribute is used to apply inline CSS to an element.

<p style="color: red;">Hello</p>

✅ title:-
The title attribute provides additional information on hover.

-----------------------------------------------------------------------------------------------------------------------------
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
<!-- What are attributes in HTML -->
Attribute provide extra information about web page.

<img src="photo.jpg" alt="My Photo">
<!-- What is the id attribute? -->
The id attribute is used to uniquely identify an element.

<!-- What is the class attribute? -->
The class attribute is used to apply the same style to multiple elements.

<!--Difference between id and class? -->

Q13. Difference between <b> and <strong>?
<b> is for bold text, <strong> is for important text.

. Difference between <i> and <em>?
<i> is italic, <em> shows emphasis.

<!-- ✅ Q8. What are empty elements? -->
Empty elements are HTML elements that do not have content or a closing tag.

<br>
<hr>
<img>

<!-- ✅ Q9. What is the difference between Block and Inline elements? -->

Block elements take full width and start on a new line
Block → <div>, <p>

Inline elements take only required width
Inline → <span>, <a>

<!-- ✅ Q10. What is semantic HTML? -->
Semantic tags are HTML tags that clearly describe the meaning of the content inside them.

<header>
<nav>
<section>
<footer>

<!-- ✅ Q11. Difference between <div> and <span>? -->
<div> is a block-level element
<span> is an inline element

👉 Both are non-semantic.

<!-- ✅ Q12. What is DOCTYPE? -->
DOCTYPE tells the browser that the document is an HTML5 documents.

<!-- ✅ Q13. How do you link CSS and JS in HTML? -->
<link rel="stylesheet" href="style.css">
<script src="app.js"></script>

<!-- ✅ Q14. What happens if alt attribute is missing? -->

Answer:
Accessibility issue

SEO impact

Image broken hone par text nahi dikhega

<!-- ✅ Q15. Is HTML case-sensitive? -->
No, HTML is not case-sensitive, but lowercase is recommended.

--------------------------------------------------------------------------------------------------------------

<!-- What is the <a> tag? -->
It is used to create hyperlinks.

Q22. What is a table in HTML?
Tables display data in rows and columns.

Q23. What is <th>?
Table heading cell.

Q24. What is rowspan?
It merges rows.

Q25. What is colspan?
It merges columns.

Q26. What is a form?
Forms collect user input.

Q27. What is the <input> tag?
It takes user data.

Q28. Types of input fields?
Text, email, password, radio, checkbox, submit.

Q38. What is iframe?
It embeds another webpage.

Q39. What are data- attributes?
Used to store custom data.

Q40. Is HTML case‑sensitive?
No, HTML is not case‑sensitive.

-------------------------------------------------------------------------------------------