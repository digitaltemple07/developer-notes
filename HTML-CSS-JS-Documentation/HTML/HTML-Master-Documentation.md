# HTML Learning Journal — Master Documentation

> **Learning track:** HTML → CSS → JavaScript  
> **Current project:** Personal Portfolio  
> **Purpose:** This document records what I have learned, what I practiced, the questions I asked, the mistakes I encountered, how I corrected them, and the procedures I used to solve problems.

---

## 1. How I Am Organizing My Learning

My learning journal is organized into three main folders:

```text
HTML-CSS-Js-Documentation/
│
├── HTML/
├── CSS/
└── JavaScript/
```

I am keeping HTML, CSS, and JavaScript documentation separate because each technology has a different responsibility:

```text
HTML        → Structure and meaning
CSS         → Appearance and layout
JavaScript  → Behaviour and interaction
```

The goal is not simply to collect code. The goal is to understand **why the code works**, what problem it solves, and how to reproduce the solution myself.

---

# PART I — HTML FUNDAMENTALS

## 2. What Is HTML?

HTML stands for **HyperText Markup Language**.

HTML is a **markup language**, not a programming language.

HTML is used to structure and describe the content of a web page.

For example, HTML tells the browser:

- this is a heading
- this is a paragraph
- this is an image
- this is a link
- this is a list
- this is a form
- this is a section
- this is navigation
- this is the footer

A useful mental model is:

> **HTML gives a webpage its structure and meaning.**

CSS controls presentation and layout, while JavaScript adds behaviour and interaction.

---

# 3. Understanding HTML Elements

An HTML element normally consists of:

1. An opening tag
2. Content
3. A closing tag

Example:

```html
<p>Hello, my name is Ken.</p>
```

Breakdown:

```text
<p>                     Opening tag
Hello, my name is Ken.  Content
</p>                    Closing tag
```

The browser interprets the element according to the tag being used.

---

## 3.1 Nested Elements

HTML elements can be placed inside other elements.

Example:

```html
<p>I am learning <strong>HTML</strong>.</p>
```

Here:

- `<p>` is the parent element.
- `<strong>` is a child element.
- `HTML` is the text content of the `<strong>` element.

This is called **nesting**.

Correct nesting:

```html
<p>This is <strong>important</strong>.</p>
```

Incorrect nesting:

```html
<p>
    This is <strong>important.
</p>
</strong>
```

A good rule is:

> The element opened last should be closed first.

---

## 3.2 Parent and Child Relationships

Consider:

```html
<section>
  <h2>About Me</h2>
  <p>I am learning web development.</p>
</section>
```

The structure is:

```text
section
├── h2
└── p
```

The `<section>` is the parent.

The `<h2>` and `<p>` are children.

Understanding parent/child relationships becomes very important when working with CSS and JavaScript later.

---

# 4. Void Elements

Not every HTML element has a closing tag.

Some elements are **void elements**.

Examples:

```html
<img />
<br />
<meta />
<input />
```

Example:

```html
<img src="ken.png" alt="Portrait of Ken" />
```

Do not write:

```html
<img></img>
```

The `<img>` element does not need a closing tag.

---

# 5. The Basic HTML Document

A standard HTML document can begin like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Website</title>
  </head>

  <body></body>
</html>
```

In VS Code, I learned that typing:

```text
!
```

and pressing **Enter** can generate the basic HTML boilerplate.

---

# 6. `<!DOCTYPE html>`

The first line is:

```html
<!DOCTYPE html>
```

This tells the browser to use the modern HTML document mode.

It is a **document type declaration**, not normal visible page content.

---

# 7. The `<html>` Element

The `<html>` element is the root element of the document.

Example:

```html
<html lang="en"></html>
```

Everything else in the HTML document belongs inside `<html>`.

The attribute:

```html
lang="en"
```

declares the primary language of the document as English.

---

# 8. The `<head>` Element

The `<head>` contains information and resources about the page.

Example:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About Ken</title>
</head>
```

The head can contain:

- the page title
- character encoding
- viewport settings
- CSS links
- metadata
- external resources

The content inside `<head>` is generally not displayed as normal page content.

---

# 9. Character Encoding

This line is commonly placed inside `<head>`:

```html
<meta charset="UTF-8" />
```

UTF-8 allows a webpage to correctly represent a very large range of characters.

For example:

```text
A
B
é
₦
£
€
😂
```

The browser uses the declared character encoding when interpreting the document's text.

---

# 10. The Viewport Meta Tag

I learned to use:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

This is important for responsive websites.

It tells the browser how to size the page's viewport on devices such as phones and tablets.

Breakdown:

```text
name="viewport"
```

identifies the metadata.

```text
width=device-width
```

makes the layout viewport match the device width.

```text
initial-scale=1.0
```

sets the initial zoom level.

---

# 11. The `<title>` Element

The title is placed inside `<head>`:

```html
<title>About Ken</title>
```

It normally appears in the browser tab.

It is different from:

```html
<h1>About Ken</h1>
```

The `<title>` describes the document to the browser.

The `<h1>` is visible page content.

---

# 12. The `<body>` Element

The `<body>` contains the page content users normally see.

Example:

```html
<body>
  <h1>Welcome</h1>

  <p>Welcome to my website.</p>
</body>
```

Headings, paragraphs, images, links, navigation, forms, sections and footer content are normally placed inside the body.

---

# 13. Headings

HTML provides six heading levels:

```html
<h1>
  <h2>
    <h3>
      <h4>
        <h5>
          <h6></h6>
        </h5>
      </h4>
    </h3>
  </h2>
</h1>
```

Example:

```html
<h1>My Portfolio</h1>

<h2>About Me</h2>

<h2>My Skills</h2>

<h3>HTML</h3>

<h3>CSS</h3>
```

The heading level should communicate the structure of the document.

Do not choose headings only because one looks visually bigger. Visual appearance should normally be handled by CSS.

A simplified hierarchy is:

```text
h1
├── h2
│   ├── h3
│   └── h3
└── h2
```

---

# 14. Paragraphs

Paragraphs use `<p>`.

Example:

```html
<p>My goal is to become a full-stack web developer.</p>
```

The `<p>` element tells the browser that the content represents a paragraph.

---

# 15. Strong and Emphasis

Important text can be marked with `<strong>`:

```html
<p>HTML is <strong>important</strong>.</p>
```

Emphasized text can use `<em>`:

```html
<p>This is <em>very important</em>.</p>
```

These elements communicate meaning rather than simply asking the browser to make text visually bold or italic.

---

# 16. Lists

## 16.1 Unordered Lists

An unordered list uses:

```html
<ul></ul>
```

Each item uses:

```html
<li></li>
```

Example:

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>Git</li>
  <li>GitHub</li>
</ul>
```

Structure:

```text
ul
├── li
├── li
├── li
├── li
└── li
```

---

## 16.2 Ordered Lists

An ordered list uses:

```html
<ol></ol>
```

Example:

```html
<ol>
  <li>Learn HTML</li>
  <li>Learn CSS</li>
  <li>Learn JavaScript</li>
</ol>
```

The browser displays the items as an ordered sequence.

---

# 17. Links

Links use the anchor element:

```html
<a></a>
```

Example:

```html
<a href="https://github.com/">Visit GitHub</a>
```

The `href` attribute tells the browser where the link points.

Breakdown:

```text
<a>              element
href             attribute
"https://..."    attribute value
Visit GitHub     visible link text
</a>             closing tag
```

---

# 18. Internal Links

A link can point to another HTML page in the same website.

Example:

```html
<a href="about.html">About</a>
```

If both files are in the same directory:

```text
My-Portfolio/
├── index.html
└── about.html
```

then:

```html
<a href="about.html">About</a>
```

is sufficient.

To return to the homepage:

```html
<a href="index.html">Home</a>
```

---

# 19. Why File Paths Matter

One of the most important HTML lessons so far has been understanding file paths.

The browser resolves a relative path from the location of the HTML file containing the path.

For example:

```text
project/
├── index.html
└── images/
    └── ken.png
```

From `index.html`, the image path is:

```html
<img src="images/ken.png" alt="Portrait of Ken" />
```

But if the HTML file is deeper:

```text
project/
├── Assets/
│   └── images/
│       └── ken.png
│
└── Projects/
    └── about-me/
        └── index.html
```

then the HTML file must move up directories before entering `Assets`.

Example:

```html
<img src="../../Assets/images/ken.png" alt="Portrait of Ken" />
```

The important idea is:

```text
.   = current directory
..  = parent directory
```

So:

```text
../../
```

means:

```text
go up one directory
go up another directory
```

---

# 20. The Portfolio Path Correction

During the portfolio project, the project structure was reorganized so that the website pages sit directly inside the portfolio root.

Current structure:

```text
My-Portfolio/
├── index.html
├── about.html
├── thank-you.html
├── css/
├── js/
└── Assets/
    ├── images/
    └── screenshots/
```

Because `about.html` is now directly inside `My-Portfolio/`, a path such as:

```html
<img src="../../Assets/images/ken.png" alt="Portrait of Ken" />
```

is no longer appropriate.

The correct path from `about.html` is:

```html
<img src="Assets/images/ken.png" alt="Portrait of Ken" />
```

This is an important example of why a path must be understood relative to the HTML file.

### General rule

> Never choose `../` paths by guessing. Look at the actual folder structure and calculate the path from the HTML file to the target file.

---

# 21. Images

Images use the `<img>` element.

Example:

```html
<img src="Assets/images/ken.png" alt="Portrait of Ken" />
```

Two important attributes are:

```html
src alt
```

### `src`

Specifies the image location.

### `alt`

Provides alternative text describing the image.

Example:

```html
<img src="Assets/images/ken.png" alt="Portrait of Ken" />
```

The `alt` text is useful when the image cannot be displayed and for accessibility.

---

# 22. Image Width Attribute

HTML can provide a width value:

```html
<img src="Assets/images/ken.png" alt="Portrait of Ken" width="200" />
```

This can be useful for simple demonstrations.

As I progressed into CSS, I learned that layout and responsive image sizing are generally better controlled with CSS.

---

# 23. HTML Comments

Comments are written like this:

```html
<!-- This is a comment -->
```

The browser does not display the comment as normal page content.

Comments can organize a long HTML document:

```html
<!-- NAVIGATION -->

<nav>...</nav>

<!-- HERO -->

<section>...</section>
```

I used comments throughout my portfolio to make major sections easier to identify.

---

# 24. `<div>` and Generic Containers

A `<div>` is a generic block-level container.

Example:

```html
<div>
  <h2>About Me</h2>
  <p>I am learning web development.</p>
</div>
```

A `<div>` is useful when no more meaningful semantic element fits.

In my portfolio, examples include:

```html
<div class="hero-content"></div>
```

and:

```html
<div class="statistics"></div>
```

and:

```html
<div class="stat"></div>
```

The `class` attribute gives CSS and JavaScript a way to identify the element.

---

# 25. Semantic HTML

I learned that HTML should describe the meaning of content whenever possible.

Examples of semantic elements include:

```html
<header>
  <nav>
    <main>
      <section>
        <article>
          <footer></footer>
        </article>
      </section>
    </main>
  </nav>
</header>
```

Instead of using:

```html
<div></div>
```

for every part of a page, semantic elements can make the document's structure clearer.

Example:

```html
<header>
  <nav>...</nav>
</header>

<main>
  <section>...</section>
</main>

<footer>...</footer>
```

---

# 26. The `<nav>` Element

Navigation links can be grouped inside `<nav>`.

Example from my portfolio:

```html
<nav class="navbar">
  <div class="nav-left">
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="projects.html">Projects</a>
  </div>
</nav>
```

The `<nav>` tells the browser and assistive technologies that the content represents navigation.

---

# 27. The `<main>` Element

The primary content of a webpage can be placed inside `<main>`.

Example:

```html
<main>
  <section class="hero">...</section>
</main>
```

A page should generally have one primary `<main>` element.

---

# 28. The `<section>` Element

A section groups related content.

Example:

```html
<section class="hero">
  <h1>My Portfolio</h1>
  <p>Welcome to my website.</p>
</section>
```

In my project I used sections for areas such as:

- Subscribe
- Hero
- Footer subscribe

---

# 29. The `<footer>` Element

The footer contains information associated with the page or site.

Example:

```html
<footer class="footer">
  <p class="copyright">© 2026</p>
</footer>
```

My portfolio footer also contains:

- social links
- email
- navigation links
- copyright information

---

# 30. The `class` Attribute

A class identifies one or more elements as belonging to a particular group.

Example:

```html
<section class="hero"></section>
```

The class is:

```text
hero
```

Another example:

```html
<div class="stat"></div>
```

Classes are especially useful because CSS can select them:

```css
.hero {
    ...
}
```

and JavaScript can also select elements by class.

Important:

> A class is not itself a styling instruction. It is an identifier that other technologies can use.

---

# 31. The `id` Attribute

An `id` identifies a particular element.

Example from the portfolio:

```html
<div class="mobile-menu" id="mobileMenu"></div>
```

The element has:

```text
class = mobile-menu
id    = mobileMenu
```

JavaScript can use the ID to find that element.

For example:

```javascript
document.getElementById("mobileMenu");
```

The `id` should be unique within the document.

---

# 32. Buttons

A button uses:

```html
<button></button>
```

Example:

```html
<button type="submit">SIGN UP</button>
```

A button can perform different actions depending on its context and attributes.

Common button types include:

```html
<button type="button">
  <button type="submit">
    <button type="reset"></button>
  </button>
</button>
```

In the portfolio, the newsletter button uses:

```html
<button type="submit">SIGN UP</button>
```

because it submits a form.

---

# 33. Forms

Forms collect information from users.

A simple form:

```html
<form>
  <input type="email" name="email" placeholder="Email Address" />
  <button type="submit">SIGN UP</button>
</form>
```

Important form elements include:

```html
<form>
  <input />
  <button></button>
</form>
```

---

# 34. The `<input>` Element

An input field collects user information.

Example:

```html
<input type="email" name="email" placeholder="Email Address" required />
```

Important attributes:

### `type`

Defines the kind of input.

```html
type="email"
```

tells the browser that the expected value is an email address.

### `name`

Gives the submitted field a name.

```html
name="email"
```

### `placeholder`

Displays temporary guidance inside the input.

```html
placeholder="Email Address"
```

### `required`

Makes the field required before submission.

```html
required
```

---

# 35. The `name` Attribute in Forms

A form field's `name` is important when data is submitted.

Example:

```html
<input type="email" name="email" />
```

The name identifies the field in the submitted form data.

This became particularly important when connecting the portfolio newsletter form to Netlify Forms.

---

# 36. Netlify Form Learning

During the portfolio project, I learned that a newsletter form needs to be an actual HTML `<form>` and that the hosting service needs to be configured to receive the submission.

The main homepage form became:

```html
<form
  class="subscribe-form"
  name="newsletter"
  method="POST"
  action="/thank-you.html"
  data-netlify="true"
>
  <input type="hidden" name="form-name" value="newsletter" />

  <input type="email" name="email" placeholder="Email Address" required />

  <button type="submit">SIGN UP</button>
</form>
```

Important pieces:

```html
name="newsletter"
```

identifies the form.

```html
method="POST"
```

submits the form data.

```html
data-netlify="true"
```

tells Netlify to process the form.

```html
<input type="hidden" name="form-name" value="newsletter" />
```

helps Netlify identify the form.

```html
name="email"
```

identifies the submitted email field.

```html
required
```

prevents an empty submission.

---

# 37. What I Learned About Localhost vs Deployment

One important debugging lesson was that a Netlify form does not behave like a normal HTML-only form on a local development environment.

The general procedure I learned was:

```text
1. Build the correct HTML form.
2. Deploy the website to Netlify.
3. Let Netlify detect the form.
4. Submit the deployed form.
5. Check the Forms section in Netlify.
```

This taught me an important development principle:

> Some features depend on the hosting environment and cannot be fully tested by opening the HTML file directly in the browser.

---

# 38. Thank-You Page

The portfolio includes:

```text
thank-you.html
```

The homepage form uses:

```html
action="/thank-you.html"
```

After a successful submission, the user can be directed to the thank-you page.

The page contains:

```html
<h1>Thank You!</h1>

<p>Your email has been successfully submitted.</p>

<a href="index.html">Back to Home</a>
```

This demonstrates how multiple HTML pages can work together as one website.

---

# 39. Hidden Inputs

A hidden input is not normally visible to the user.

Example:

```html
<input type="hidden" name="form-name" value="newsletter" />
```

The field still participates in form submission.

This is useful when the receiving service needs additional information that the user does not need to enter manually.

---

# 40. External Links

My portfolio contains a GitHub link:

```html
<a href="https://github.com/digitaltemple07"> GitHub </a>
```

This demonstrates an external link because the destination is outside the portfolio website.

An internal link looks like:

```html
<a href="about.html">About</a>
```

The key difference is the destination.

---

# 41. Email Links

I learned that an anchor can also open an email application using `mailto:`.

Example:

```html
<a href="mailto:ddigitaltemple@gmail.com"> ddigitaltemple@gmail.com </a>
```

The browser treats the link as an email action rather than a normal webpage URL.

---

# 42. Accessibility Attributes

The portfolio uses `aria-label` in places where the visible content alone may not adequately describe the control.

Example:

```html
<button class="menu-close" id="menuClose" aria-label="Close menu">×</button>
```

Another example:

```html
<a href="#" aria-label="YouTube">
  <i class="fa-brands fa-youtube"></i>
</a>
```

The `aria-label` provides an accessible name for the control.

This is especially useful for icon-only links and buttons.

---

# 43. HTML and Font Awesome

The portfolio loads Font Awesome using an external stylesheet:

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
/>
```

Then icons can be represented using elements such as:

```html
<i class="fa-brands fa-youtube"></i>
```

The important HTML lesson is that external resources can be connected to a page through `<link>`.

---

# 44. Connecting CSS to HTML

The HTML document can load CSS with:

```html
<link rel="stylesheet" href="css/style.css" />
```

The `href` points to the CSS file.

My portfolio uses multiple stylesheets:

```html
<link rel="stylesheet" href="css/style.css" />
<link rel="stylesheet" href="css/home.css" />
```

This demonstrates how one HTML document can load shared CSS and page-specific CSS.

---

# 45. Connecting JavaScript to HTML

The portfolio loads JavaScript near the end of `<body>`:

```html
<script src="js/home.js"></script>
<script src="js/menu.js"></script>
```

The `src` attribute points to the JavaScript file.

Although JavaScript belongs in the JavaScript section of my learning journal, understanding how HTML connects to JavaScript is part of understanding the HTML document.

---

# 46. Understanding the Current Portfolio HTML Structure

My current portfolio homepage has this broad structure:

```text
html
├── head
│   ├── meta
│   ├── meta
│   ├── title
│   └── link
│
└── body
    ├── section.subscribe
    │   ├── div.subscribe-text
    │   └── form.subscribe-form
    │
    ├── nav.navbar
    │   ├── navigation links
    │   ├── logo
    │   ├── mobile menu
    │   └── menu button
    │
    ├── main
    │   └── section.hero
    │       └── div.hero-content
    │           ├── h1
    │           └── div.statistics
    │
    ├── section.footer-subscribe
    │   ├── div.footer-subscribe-text
    │   └── form.footer-subscribe-form
    │
    ├── footer.footer
    │   ├── identity/social links
    │   ├── email
    │   ├── footer links
    │   └── copyright
    │
    └── script elements
```

This is a practical example of how HTML creates a page hierarchy.

---

# 47. The Difference Between HTML Structure and CSS Styling

One of the most important lessons from the portfolio project is separating responsibilities.

HTML:

```html
<section class="hero">
  <h1>Imafe Kennedy Oisamoren</h1>
</section>
```

HTML says:

> This is a section containing a main heading.

CSS decides:

- where the section appears
- its height
- its spacing
- its background
- font size
- alignment
- responsive behaviour

This distinction became very important when correcting the portfolio's mobile layout.

---

# 48. HTML Questions and Problems I Encountered

## Question: Why didn't my image appear?

### Cause

The image path did not match the actual folder structure.

### Lesson

The browser resolves relative paths from the HTML file's location.

### Procedure

```text
1. Find the HTML file.
2. Find the image file.
3. Compare their folder locations.
4. Count how many directories must be moved up.
5. Enter the target folder.
6. Confirm the filename and extension.
```

---

## Question: Why did moving my Assets folder affect my images?

### Cause

Changing the folder structure changes the relative path required by the HTML.

### Lesson

File paths are dependent on project structure.

If:

```text
index.html
Assets/
└── images/
    └── ken.png
```

then:

```html
<img src="Assets/images/ken.png" alt="Portrait of Ken" />
```

But if the HTML file is deeper, the path changes.

---

# 49. Portfolio Structure Correction

The project was reorganized so the website pages are directly inside the portfolio root.

Preferred structure:

```text
My-Portfolio/
│
├── index.html
├── about.html
├── thank-you.html
│
├── css/
│   ├── style.css
│   ├── home.css
│   └── about.css
│
├── js/
│   ├── home.js
│   ├── about.js
│   └── menu.js
│
└── Assets/
    ├── images/
    ├── diagrams/
    └── screenshots/
```

This structure makes the page-to-page links easier to understand.

For example:

```html
<a href="about.html">About</a>
```

and:

```html
<a href="index.html">Home</a>
```

---

# 50. Multi-Page Website Navigation

The portfolio demonstrates a basic multi-page website.

Homepage:

```text
index.html
```

About page:

```text
about.html
```

Thank-you page:

```text
thank-you.html
```

A link from Home to About:

```html
<a href="about.html">About</a>
```

A link from About back to Home:

```html
<a href="index.html">Home</a>
```

This is one of the foundational patterns of a multi-page website.

---

# 51. `index.html` and Why It Matters

I learned that `index.html` is conventionally used as the default page of a website or directory.

For a website:

```text
My-Portfolio/
└── index.html
```

the hosting server can use `index.html` as the site's main page.

This is why my portfolio homepage is named:

```text
index.html
```

---

# 52. A Practical HTML Debugging Procedure

When an HTML feature does not work, I should not immediately change random code.

I should follow a process.

### Step 1 — Identify the problem

Example:

> The About link does not open the About page.

### Step 2 — Inspect the HTML

Look for:

```html
<a href="..."></a>
```

### Step 3 — Inspect the file structure

Confirm that the destination actually exists.

Example:

```text
My-Portfolio/
├── index.html
└── about.html
```

### Step 4 — Calculate the relative path

If both are in the same directory:

```html
href="about.html"
```

### Step 5 — Test

Click the link.

### Step 6 — Check the browser

If it fails, inspect the URL/path shown by the browser.

### Step 7 — Fix only the part responsible for the problem

This prevents unnecessary changes to working code.

---

# 53. Another Debugging Procedure: Image Not Showing

Use this checklist:

```text
[ ] Does the image file actually exist?
[ ] Is the filename correct?
[ ] Is the extension correct?
[ ] Is capitalization correct?
[ ] Is the path relative to the correct HTML file?
[ ] Did I move the image folder?
[ ] Did I move the HTML file?
[ ] Does the path contain unnecessary ../ segments?
```

Example:

```html
<img src="Assets/images/ken.png" alt="Portrait of Ken" />
```

Check:

```text
My-Portfolio/
├── about.html
└── Assets/
    └── images/
        └── ken.png
```

The path works because `about.html` and `Assets` are at the same level.

---

# 54. HTML Validation Mindset

When writing HTML, I should ask:

### Structure

- Is the document properly structured?
- Is `<!DOCTYPE html>` present?
- Is `<html>` the root element?
- Are `<head>` and `<body>` present?

### Nesting

- Are elements correctly nested?
- Are tags closed where required?

### Semantics

- Am I using the element that best describes the content?
- Should this be `<nav>`, `<main>`, `<section>`, or `<footer>` instead of a generic `<div>`?

### Attributes

- Are attributes correctly written?
- Are paths correct?
- Do images have useful `alt` text?
- Do form fields have appropriate `name` attributes?

### Links

- Does every important link point to the correct destination?

### Forms

- Does the form contain the required fields?
- Is the submission method correct?
- Is the form configured for the intended receiving service?

---

# 55. Common Mistakes I Have Learned to Avoid

## Mistake 1 — Guessing file paths

Bad approach:

```text
Try ../
Try ../../
Try ../../../
```

Better approach:

```text
Inspect the folder structure and calculate the path.
```

---

## Mistake 2 — Using headings for visual size

Do not choose:

```html
<h1></h1>
```

just because it looks large.

Use headings according to document hierarchy.

---

## Mistake 3 — Forgetting `alt`

Instead of:

```html
<img src="ken.png" />
```

prefer:

```html
<img src="ken.png" alt="Portrait of Ken" />
```

when the image conveys meaningful information.

---

## Mistake 4 — Forgetting `name` on form fields

Instead of:

```html
<input type="email" />
```

a submitted form commonly needs:

```html
<input type="email" name="email" />
```

---

## Mistake 5 — Assuming localhost proves a hosted feature works

Some hosting features depend on the deployed environment.

The Netlify form experience taught me this directly.

---

## Mistake 6 — Changing too much code at once

When debugging:

> Change one relevant thing, test it, then continue.

This makes it easier to understand what actually solved the problem.

---

# 56. HTML Knowledge Map

My current HTML knowledge can be organized like this:

```text
HTML
│
├── Document Structure
│   ├── DOCTYPE
│   ├── html
│   ├── head
│   ├── body
│   ├── meta
│   └── title
│
├── Text
│   ├── h1–h6
│   ├── p
│   ├── strong
│   └── em
│
├── Lists
│   ├── ul
│   ├── ol
│   └── li
│
├── Links
│   ├── a
│   ├── href
│   ├── internal links
│   ├── external links
│   └── mailto
│
├── Images
│   ├── img
│   ├── src
│   ├── alt
│   └── file paths
│
├── Structure
│   ├── div
│   ├── header
│   ├── nav
│   ├── main
│   ├── section
│   └── footer
│
├── Attributes
│   ├── class
│   ├── id
│   ├── href
│   ├── src
│   ├── alt
│   ├── name
│   ├── type
│   └── required
│
├── Forms
│   ├── form
│   ├── input
│   ├── button
│   ├── hidden inputs
│   └── form submission
│
├── Accessibility
│   ├── lang
│   ├── alt
│   └── aria-label
│
└── Project Integration
    ├── CSS links
    ├── JavaScript scripts
    ├── external resources
    ├── multi-page navigation
    └── Netlify Forms
```

---

# 57. What I Can Now Build With HTML

Based on what I have learned and practiced, I can build the HTML structure for:

- a personal profile
- an About page
- a portfolio homepage
- navigation menus
- multi-page websites
- image sections
- lists
- social links
- email links
- newsletter forms
- thank-you pages
- semantic page sections
- basic accessible controls

I am still learning the deeper parts of HTML, so this documentation should continue to grow rather than being treated as a finished textbook.

---

# 58. My Learning Method Going Forward

For every new HTML lesson, I should document five things:

## 1. Concept

What did I learn?

Example:

> What is the `<form>` element?

## 2. Syntax

What does the code look like?

```html
<form>...</form>
```

## 3. Meaning

What does the code actually do?

## 4. Practice

Where did I use it in my project?

## 5. Problem and Correction

What went wrong, why did it happen, and how did I fix it?

This approach is more useful than simply copying code because it creates a record of my actual development process.

---

# 59. Recommended HTML Documentation Structure

Instead of allowing the HTML folder to become a collection of unrelated lesson files, I will organize it progressively.

Recommended structure:

```text
HTML/
│
├── README.md
│
├── 01-html-fundamentals.md
├── 02-document-structure.md
├── 03-elements-and-nesting.md
├── 04-attributes.md
├── 05-text-and-headings.md
├── 06-links-and-navigation.md
├── 07-images-and-file-paths.md
├── 08-lists.md
├── 09-semantic-html.md
├── 10-forms-and-inputs.md
├── 11-accessibility.md
├── 12-portfolio-html.md
├── 13-html-debugging.md
└── 14-html-reference.md
```

The important change is that the documentation follows a learning progression:

```text
Understand HTML
      ↓
Understand document structure
      ↓
Understand elements
      ↓
Understand attributes
      ↓
Build content
      ↓
Connect pages
      ↓
Work with images/files
      ↓
Build semantic layouts
      ↓
Build forms
      ↓
Apply accessibility
      ↓
Use everything in a real project
      ↓
Debug real problems
```

---

# 60. Current HTML Learning Status

### Already practiced

- [x] What HTML is
- [x] HTML vs CSS vs JavaScript
- [x] Elements
- [x] Opening and closing tags
- [x] Nested elements
- [x] Parent and child elements
- [x] Void elements
- [x] `<!DOCTYPE html>`
- [x] `<html>`
- [x] `lang`
- [x] `<head>`
- [x] `<meta charset>`
- [x] viewport meta tag
- [x] `<title>`
- [x] `<body>`
- [x] Headings
- [x] Paragraphs
- [x] Strong and emphasis
- [x] Lists
- [x] Links
- [x] Internal links
- [x] External links
- [x] Email links
- [x] Images
- [x] `src`
- [x] `alt`
- [x] Relative file paths
- [x] `.` and `..` path concepts
- [x] Comments
- [x] `div`
- [x] Semantic HTML
- [x] `nav`
- [x] `main`
- [x] `section`
- [x] `footer`
- [x] `class`
- [x] `id`
- [x] Buttons
- [x] Forms
- [x] Inputs
- [x] `type`
- [x] `name`
- [x] `placeholder`
- [x] `required`
- [x] Hidden inputs
- [x] Basic form submission
- [x] Netlify form structure
- [x] Thank-you page
- [x] `aria-label`
- [x] Linking CSS
- [x] Linking JavaScript
- [x] Multi-page website structure
- [x] HTML debugging using real project problems

### Still to learn deeply

These should be added as future HTML lessons rather than pretending they have already been mastered:

- [ ] Tables
- [ ] `<label>` and better form accessibility
- [ ] `<textarea>`
- [ ] `<select>` and `<option>`
- [ ] `<fieldset>` and `<legend>`
- [ ] More advanced form validation
- [ ] `<article>`
- [ ] `<aside>`
- [ ] `<header>`
- [ ] `<figure>` and `<figcaption>`
- [ ] Audio
- [ ] Video
- [ ] `<iframe>`
- [ ] `data-*` attributes
- [ ] More advanced accessibility
- [ ] HTML entities
- [ ] Advanced metadata
- [ ] SEO-related HTML
- [ ] Structured data
- [ ] HTML validation tools

---

# 61. Final Understanding

My current understanding of HTML is:

> **HTML is the structural language of the web.**

It defines what the content is and how different pieces of content relate to one another.

The most important lesson so far is not memorizing every tag.

It is learning to think in terms of:

```text
Structure
Meaning
Hierarchy
Relationships
Paths
Attributes
Accessibility
User input
```

When I build a webpage, I should first ask:

> **What is this content?**

Then choose the HTML element that best describes it.

For example:

```text
Navigation      → nav
Main content    → main
Major topic     → section
Heading         → h1/h2/h3...
Paragraph       → p
Image           → img
Link            → a
User input      → form/input
Footer content  → footer
```

That is the foundation on which my CSS and JavaScript learning will build.

---

# 62. Important Rule for My Future Documentation

Whenever I solve a real problem in my portfolio, I should not only record the final code.

I should record:

```text
PROBLEM
↓
WHAT I OBSERVED
↓
WHY IT HAPPENED
↓
WHAT I CHANGED
↓
WHY THE CHANGE WORKED
↓
FINAL CODE
↓
WHAT I LEARNED
```

This will turn my learning journal from a collection of copied tutorials into a genuine record of my development as a web developer.
