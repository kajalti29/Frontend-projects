<!-- 🔥 1. What is Semantic HTML? Why is it important? -->
Semantic tags are HTML tags that clearly describe the meaning of the content inside them.
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


<!-- 🔥 2. Difference Between ID and Class? -->


<!-- 2️⃣ Difference between <div> and <span>? -->
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
