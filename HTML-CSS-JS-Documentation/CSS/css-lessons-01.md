# CSS Fundamentals — My Learning Notes

## Introduction

After learning how HTML is used to structure a webpage, I began learning **CSS** to control how that webpage looks.

HTML answers questions such as:

```text
What content exists on the page?
```

CSS answers questions such as:

```text
Where should the content appear?
How large should it be?
What color should it have?
How much space should surround it?
How should it behave on mobile devices?
```

A simple way I now understand the relationship is:

```text
HTML = Structure
CSS  = Presentation
```

For example:

```html
<h1>About Ken</h1>
```

creates the heading.

CSS can then style it:

```css
h1 {
  font-size: 34px;
  color: black;
}
```

---

# 1. Connecting CSS to HTML

I created a separate file:

```text
style.css
```

and connected it to my HTML document using:

```html
<link rel="stylesheet" href="style.css" />
```

This code goes inside the `<head>` element:

```html
<head>
  <meta charset="UTF-8" />

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>About Imafe Kennedy</title>

  <link rel="stylesheet" href="style.css" />
</head>
```

The browser now reads:

```text
index.html
     ↓
style.css
```

The HTML provides the structure while the stylesheet controls the appearance.

---

# 2. CSS Syntax

A basic CSS rule looks like this:

```css
selector {
  property: value;
}
```

For example:

```css
body {
  background-color: white;
}
```

Here:

```text
body              = selector
background-color  = property
white             = value
```

Another example:

```css
.about-text {
  font-size: 19px;
}
```

---

# 3. CSS Classes

I learned that classes allow me to identify specific HTML elements so I can style them.

HTML:

```html
<div class="about-text">
  <p>My information goes here.</p>
</div>
```

CSS:

```css
.about-text {
  font-size: 19px;
}
```

A class selector begins with:

```text
.
```

So:

```css
.about-text
```

means:

> Find the HTML element whose class is `about-text`.

---

# 4. Removing the Browser's Default Margin

Browsers automatically place some space around the `<body>`.

I removed it using:

```css
body {
  margin: 0;
}
```

Without this, the page does not extend completely to the edges of the browser.

---

# 5. The Universal Selector

I learned about:

```css
* {
  box-sizing: border-box;
}
```

The `*` means:

> Apply this rule to every element.

`box-sizing: border-box` makes width calculations easier.

For example:

```css
width: 300px;
padding: 20px;
```

`border-box` helps keep the total element width under better control.

---

# 6. Font Styling

I used:

```css
body {
  font-family: Arial, Helvetica, sans-serif;
}
```

This tells the browser to try:

```text
Arial
↓
Helvetica
↓
sans-serif
```

If Arial is unavailable, the browser tries Helvetica.

---

# 7. Font Size

I learned to control text size using:

```css
font-size: 18px;
```

For example:

```css
.about-text p {
  font-size: 19px;
}
```

and:

```css
.about-text h1 {
  font-size: 34px;
}
```

---

# 8. Font Weight

I can control how bold text appears with:

```css
font-weight: 500;
```

or:

```css
font-weight: bold;
```

For example:

```css
.brand {
  font-weight: bold;
}
```

---

# 9. Background Colors

I used:

```css
background-color: #f4eee8;
```

to create the light cream background on my About page.

For example:

```css
body {
  background-color: #f4eee8;
}
```

and:

```css
.footer {
  background-color: white;
}
```

---

# 10. Margin

`margin` controls the space **outside** an element.

Example:

```css
.about-text h1 {
  margin-bottom: 55px;
}
```

Conceptually:

```text
ABOUT KEN
          ← margin-bottom

Paragraph begins here.
```

I also learned:

```css
margin: 0;
```

removes margin.

And:

```css
margin: 0 auto;
```

is often used to horizontally center an element that has a defined width or maximum width.

---

# 11. Padding

`padding` controls the space **inside** an element.

Example:

```css
.about-section {
  padding: 80px 5%;
}
```

Conceptually:

```text
SECTION
┌─────────────────────────────────┐
│                                 │
│     content                     │
│                                 │
└─────────────────────────────────┘
```

---

# 12. Margin vs Padding

```text
Margin  = space OUTSIDE an element
Padding = space INSIDE an element
```

---

# 13. Width

I initially controlled my image directly in HTML:

```html
<img src="ken.png" width="200" />
```

I later learned it is better to control presentation using CSS:

```css
.about-image img {
  width: 85%;
}
```

CSS should generally handle visual styling while HTML handles structure.

---

# 14. `max-width`

```css
.about-image img {
  width: 85%;
  max-width: 520px;
}
```

This means:

> The image can use 85% of its available container, but it should never become wider than 520 pixels.

---

# 15. `width: 100%`

```css
width: 100%;
```

means:

> Use the full width available inside the parent container.

---

# 16. `height: auto`

```css
.about-image img {
  width: 85%;
  height: auto;
}
```

This allows the browser to maintain the correct image proportions when its width changes.

---

# 17. `object-fit`

```css
.about-image img {
  object-fit: cover;
}
```

This helps an image fill its area without becoming stretched.

---

# 18. `display: block`

```css
.about-image img {
  display: block;
}
```

This makes the image behave as a block-level element.

---

# 19. Flexbox

One of the most important concepts I learned was **Flexbox**.

```css
.about-content {
  display: flex;
}
```

Without Flexbox:

```text
TEXT

IMAGE
```

With Flexbox:

```text
TEXT           IMAGE
```

---

# 20. `flex-direction`

Desktop:

```css
flex-direction: row;
```

```text
Element 1 → Element 2 → Element 3
```

Mobile:

```css
flex-direction: column;
```

```text
TEXT

IMAGE
```

---

# 21. `justify-content`

```css
.navbar {
  display: flex;
  justify-content: space-between;
}
```

Conceptually:

```text
LEFT                    CENTER                    RIGHT
```

I also used:

```css
justify-content: center;
```

to center my image.

---

# 22. `align-items`

```css
.navbar {
  display: flex;
  align-items: center;
}
```

This vertically aligns Flexbox items.

---

# 23. `gap`

```css
.social-links {
  display: flex;
  gap: 20px;
}
```

This creates consistent spacing between items.

---

# 24. `flex: 1`

```css
.subscribe-form input {
  flex: 1;
}
```

This allows the input to use the remaining available space.

---

# 25. `flex-shrink`

```css
.subscribe-form button {
  flex-shrink: 0;
}
```

This prevents the button from shrinking when space becomes limited.

---

# 26. `min-width: 0`

```css
.subscribe-form input {
  flex: 1;
  min-width: 0;
}
```

This allows the input to shrink properly on smaller screens.

---

# 27. Building the Subscription Form

HTML:

```html
<form class="subscribe-form">
  <input type="email" placeholder="Email Address" />

  <button type="submit">SIGN UP</button>
</form>
```

CSS:

```css
.subscribe-form {
  display: flex;
  gap: 12px;
}

.subscribe-form input {
  flex: 1;
  min-width: 0;
}

.subscribe-form button {
  flex: 0 0 105px;
}
```

Result:

```text
┌──────────────────────┐ ┌─────────┐
│ Email Address        │ │ SIGN UP │
└──────────────────────┘ └─────────┘
```

---

# 28. CSS Grid

While building the footer, I learned another layout system called **CSS Grid**.

```css
.footer {
  display: grid;
}
```

Flexbox is useful for primarily one-dimensional layouts, while Grid is useful for rows and columns.

---

# 29. `grid-template-columns`

```css
.footer {
  display: grid;
  grid-template-columns: 1fr auto;
}
```

Conceptually:

```text
LEFT AREA                       RIGHT AREA

Name                            HOME        LEARNING
Social icons                    ABOUT       GITHUB
Email                           PROJECTS    CONNECT
```

---

# 30. Creating Multiple Footer Columns

```css
.footer-links {
  display: grid;

  grid-template-columns: 150px 150px;

  column-gap: 70px;
}
```

Result:

```text
Column 1        Column 2

HOME            LEARNING
ABOUT           GITHUB
PROJECTS        CONNECT
```

---

# 31. `grid-column`

```css
.copyright {
  grid-column: 1 / -1;
}
```

This allows the copyright to span the entire grid.

---

# 32. `justify-self`

```css
.footer-links {
  justify-self: end;
}
```

This pushes the footer navigation toward the right.

---

# 33. Responsive Web Design

A webpage should adapt to:

```text
Desktop
Laptop
Tablet
Mobile phone
```

This is called **Responsive Web Design**.

---

# 34. Media Queries

```css
@media (max-width: 800px) {
}
```

This means:

> Apply these CSS rules when the browser width is 800 pixels or smaller.

Example:

```css
@media (max-width: 800px) {
  .about-content {
    flex-direction: column;
  }
}
```

---

# 35. Desktop vs Mobile CSS

The same HTML can be rearranged using CSS.

Desktop:

```css
.about-content {
  display: flex;
}
```

Mobile:

```css
@media (max-width: 800px) {
  .about-content {
    flex-direction: column;
  }
}
```

---

# 36. Creating a Hamburger Menu

HTML:

```html
<button class="menu-toggle" aria-label="Open navigation menu">
  <span></span>
  <span></span>
  <span></span>
</button>
```

Desktop CSS:

```css
.menu-toggle {
  display: none;
}
```

Mobile CSS:

```css
@media (max-width: 800px) {
  .nav-left,
  .nav-right {
    display: none;
  }

  .menu-toggle {
    display: block;
  }
}
```

---

# 37. Creating the Hamburger Lines

```html
<span></span>
<span></span>
<span></span>
```

CSS:

```css
.menu-toggle span {
  display: block;

  width: 42px;
  height: 3px;

  background-color: #111;

  margin: 7px 0;
}
```

Result:

```text
────────
────────
────────
```

---

# 38. `display: none`

```css
display: none;
```

completely hides an element.

This allowed me to hide desktop navigation links and display the hamburger menu on mobile.

---

# 39. Centering My About Image

```css
.about-image {
  display: flex;

  justify-content: center;

  align-items: center;
}
```

```css
.about-image img {
  width: 85%;

  max-width: 520px;

  height: auto;
}
```

---

# 40. Styling Links

```css
.navbar a {
  color: #111;
  text-decoration: none;
}
```

Hover:

```css
.navbar a:hover {
  text-decoration: underline;
}
```

---

# 41. `cursor: pointer`

```css
.subscribe-form button {
  cursor: pointer;
}
```

This changes the mouse cursor when hovering over the button.

---

# 42. Borders

```css
border: 1px solid #333;
```

means:

```text
1px      = thickness
solid    = border style
#333     = color
```

---

# 43. Line Height

```css
.about-text p {
  line-height: 1.7;
}
```

This improves paragraph readability.

---

# 44. Understanding the CSS Cascade

CSS written later can override CSS written earlier.

```css
.footer {
  display: grid;
}

.footer {
  display: block;
}
```

The second declaration can override the first.

Therefore:

```text
CSS order matters.
```

---

# 45. Why Media Queries Should Be Organized Carefully

Incorrect:

```css
@media (max-width: 800px) {
  /* mobile CSS */
}

/* Accidentally outside media query */

.footer {
  display: block;
}
```

Correct:

```css
@media (max-width: 800px) {
  .footer {
    display: block;
  }
}
```

This taught me to carefully check:

```text
{
}
```

---

# 46. Avoiding Duplicate CSS Rules

Instead of having several desktop versions of:

```css
.footer-links {
}
```

I should keep one desktop declaration:

```css
.footer-links {
  /* desktop styles */
}
```

and override only what changes on mobile:

```css
@media (max-width: 800px) {
  .footer-links {
    /* mobile changes */
  }
}
```

---

# 47. HTML Structure Can Affect CSS

Incorrect:

```html
<div class="footer-left">
  ...

  <div class="footer-links">...</div>
</div>
```

Correct:

```html
<div class="footer-left">...</div>

<div class="footer-links">...</div>
```

This taught me:

> Before assuming CSS is broken, first check whether the HTML structure is correct.

---

# 48. Accessibility and Icon Links

I received the warning:

```text
Links must have discernible text
```

Problem:

```html
<a href="#">
  <i class="fa-brands fa-youtube"></i>
</a>
```

Fix:

```html
<a href="#" aria-label="YouTube">
  <i class="fa-brands fa-youtube"></i>
</a>
```

Example:

```html
<div class="social-links">
  <a href="#" aria-label="YouTube">
    <i class="fa-brands fa-youtube"></i>
  </a>

  <a href="#" aria-label="Instagram">
    <i class="fa-brands fa-instagram"></i>
  </a>

  <a href="#" aria-label="Facebook">
    <i class="fa-brands fa-facebook-f"></i>
  </a>

  <a href="#" aria-label="LinkedIn">
    <i class="fa-brands fa-linkedin-in"></i>
  </a>
</div>
```

---

# 49. What I Built With CSS

Using these concepts, I transformed a basic HTML page into a responsive About Me page containing:

- Newsletter / Subscribe section
- Navigation bar
- Responsive hamburger menu
- About Me section
- Text and portrait layout
- Responsive mobile layout
- Second subscription section
- Social media icons
- Footer navigation
- Desktop footer
- Mobile footer

---

# 50. My Current Mental Model of Web Design

Before learning CSS:

```text
Heading

Paragraph

Paragraph

Image

Link

List
```

After learning CSS:

```text
DESKTOP
────────────────────────────────────────────

Subscribe                     Email   Sign Up

Home About     MY BRAND     GitHub Connect

About text                   Portrait
About text                   Portrait
About text                   Portrait

Subscribe                     Email   Sign Up

Name                          Home      Learning
Icons                         About     GitHub
Email                         Projects  Connect

© 2026
```

Mobile:

```text
MOBILE
────────────────────────

Subscribe

Newsletter text

Email             Sign Up

MY BRAND               ☰

ABOUT KEN

Paragraph
Paragraph
Paragraph

       Portrait

Subscribe

Newsletter text

Email             Sign Up

Name

Social icons

Email

HOME           LEARNING
ABOUT          GITHUB
PROJECTS       CONNECT

© 2026
```

---

# Important CSS Concepts I Have Learned So Far

```text
display
flex-direction
justify-content
align-items
gap

width
max-width
min-width
height

margin
padding

font-family
font-size
font-weight
line-height

background-color
color
border

text-decoration
cursor

object-fit

flex
flex-shrink

grid-template-columns
grid-template-rows
grid-column
grid-row
justify-self

box-sizing
```

I have also started understanding:

```text
CSS selectors
CSS classes
Flexbox
CSS Grid
Responsive design
Media queries
Desktop-first styling
CSS cascade
CSS overriding
Image responsiveness
Navigation layouts
Form layouts
Footer layouts
Accessibility
```

---

# Key Lessons From This Project

1. **HTML creates structure; CSS creates presentation.**
2. `display: flex` is useful for arranging elements beside each other.
3. `flex-direction: column` can rearrange desktop layouts for mobile.
4. CSS Grid is powerful for layouts involving rows and columns.
5. `gap` controls spacing between elements.
6. `padding` controls inside spacing while `margin` controls outside spacing.
7. `width: 100%` and `max-width` are important for responsive layouts.
8. Media queries allow one webpage to work on different screen sizes.
9. CSS written later can override CSS written earlier.
10. Mobile CSS must actually be placed inside the media query.
11. Duplicate CSS rules can make debugging difficult.
12. Some apparent CSS problems are actually caused by incorrect HTML nesting.
13. Responsive images should normally be sized with CSS instead of HTML width attributes.
14. Accessibility should be considered when designing interfaces.
15. Building an actual webpage helped me understand CSS better than simply memorizing properties.

---

# Conclusion

CSS has helped me move from creating a basic HTML document to designing an actual responsive webpage.

My current understanding is:

```text
HTML
↓
Creates the content and structure

CSS
↓
Controls layout, spacing, sizing,
typography, colors and responsiveness

JavaScript
↓
Will eventually add behavior
and interactivity
```

The About Me page introduced me to two major CSS layout systems:

```text
Flexbox
and
CSS Grid
```

It also introduced me to responsive design through:

```css
@media (max-width: 800px);
```

The next stage of my CSS learning should be to deepen my understanding of **the box model, Flexbox, CSS Grid, positioning, pseudo-classes, CSS variables, transitions, and responsive design**, while continuing to build real projects rather than only studying individual properties.
