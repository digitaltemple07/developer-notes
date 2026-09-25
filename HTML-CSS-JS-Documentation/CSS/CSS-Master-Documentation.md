# CSS Learning Journal — Master Documentation

> **Learning track:** HTML → CSS → JavaScript  
> **Current project:** Personal Portfolio  
> **Purpose:** Record the CSS concepts, code, questions, corrections, debugging procedures, and real project lessons I have learned so far.

---

# 1. How I Understand CSS

After learning HTML, I began learning CSS.

A simple mental model is:

```text
HTML = Structure
CSS  = Presentation
JavaScript = Behaviour
```

HTML answers:

> What content exists?

CSS answers:

> How should that content look, be positioned, sized, spaced, and respond to different screen sizes?

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

# 2. Connecting CSS to HTML

CSS can be placed in a separate stylesheet:

```text
style.css
```

and connected to HTML using:

```html
<link rel="stylesheet" href="css/style.css" />
```

This normally goes inside `<head>`.

The relationship is:

```text
HTML
  ↓
loads
  ↓
CSS
  ↓
styles
  ↓
HTML elements
```

---

# 3. CSS Syntax

A basic CSS rule looks like this:

```css
selector {
  property: value;
}
```

Example:

```css
body {
  background-color: white;
}
```

Breakdown:

```text
body              = selector
background-color  = property
white             = value
```

---

# 4. CSS Selectors

Selectors tell CSS which HTML elements should receive a rule.

## Element selector

```css
p {
  color: black;
}
```

## Class selector

```css
.about-text {
  font-size: 19px;
}
```

The period `.` means class.

## ID selector

```css
#mobileMenu {
  display: none;
}
```

The `#` means ID.

## Universal selector

```css
* {
  box-sizing: border-box;
}
```

The `*` selects every element.

---

# 5. The Universal Selector and `box-sizing`

I learned:

```css
* {
  box-sizing: border-box;
}
```

The universal selector means every element.

`box-sizing: border-box` makes width calculations easier when an element has content, padding, and borders.

---

# 6. Removing Default Body Margin

Browsers have default styles. One common example is the body's default margin.

I removed it with:

```css
body {
  margin: 0;
}
```

This became important when making the portfolio layout extend properly toward the edges of the screen.

---

# 7. Font Family

```css
body {
  font-family: Arial, Helvetica, sans-serif;
}
```

The browser tries the fonts from left to right and can fall back to the next option if a font is unavailable.

---

# 8. Font Size

```css
.about-text h1 {
  font-size: 34px;
}

.about-text p {
  font-size: 19px;
}
```

---

# 9. Font Weight

```css
.brand {
  font-weight: bold;
}
```

or:

```css
font-weight: 500;
```

---

# 10. Text and Background Colors

Text:

```css
body {
  color: #111;
}
```

Background:

```css
.footer-subscribe {
  background-color: #f4eee8;
}
```

---

# 11. Margin

`margin` controls space **outside** an element.

```css
.about-text h1 {
  margin-bottom: 55px;
}
```

Useful patterns include:

```css
margin: 0;
```

and:

```css
margin: 0 auto;
```

---

# 12. Padding

`padding` controls space **inside** an element.

```css
.about-section {
  padding: 80px 5%;
}
```

Remember:

```text
Margin  = outside
Padding = inside
```

---

# 13. Width, `max-width`, and Responsive Sizing

Example:

```css
.about-image img {
  width: 85%;
  max-width: 520px;
}
```

Meaning:

> The image can use 85% of its available space, but it should never become wider than 520px.

`width: 100%` means the element can use the available width of its containing block.

---

# 14. `height: auto`

For responsive images:

```css
img {
  width: 100%;
  height: auto;
}
```

This lets the browser preserve the image's proportions when the width changes.

---

# 15. `object-fit`

```css
.about-image img {
  object-fit: cover;
}
```

This is useful when an image needs to fill a defined area without being stretched out of proportion.

---

# 16. `display: block`

```css
.about-image img {
  display: block;
}
```

This makes the image behave as a block-level element and can make layout control easier.

---

# 17. Flexbox

One of the most important concepts I learned is **Flexbox**.

```css
.about-content {
  display: flex;
}
```

It is especially useful for arranging items along one main axis.

Conceptually:

```text
TEXT        IMAGE
```

---

# 18. `flex-direction`

Desktop:

```css
.about-content {
  display: flex;
  flex-direction: row;
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

This can change:

```text
DESKTOP
TEXT → IMAGE

MOBILE
TEXT
IMAGE
```

---

# 19. `justify-content`

```css
.navbar {
  display: flex;
  justify-content: space-between;
}
```

Other values I have used include:

```css
justify-content: center;
justify-content: flex-start;
justify-content: flex-end;
```

---

# 20. `align-items`

```css
.navbar {
  display: flex;
  align-items: center;
}
```

For a horizontal Flexbox row, this commonly controls vertical alignment.

---

# 21. `gap`

```css
.social-links {
  display: flex;
  gap: 20px;
}
```

`gap` creates consistent space between flex or grid items.

---

# 22. `flex`

```css
.subscribe-form input {
  flex: 1;
}
```

This allows the input to use available remaining space in the flex container.

---

# 23. `flex-shrink`

```css
.subscribe-form button {
  flex-shrink: 0;
}
```

This prevents the button from shrinking when space becomes limited.

---

# 24. `min-width: 0`

```css
.subscribe-form input {
  flex: 1;
  min-width: 0;
}
```

This allows a flex item to shrink properly when the container becomes narrow.

---

# 25. Building the Subscription Form With Flexbox

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

---

# 26. CSS Grid

While building the footer, I learned CSS Grid.

```css
.footer {
  display: grid;
}
```

Flexbox is especially useful for one-dimensional layouts, while Grid is especially useful when thinking in rows and columns.

---

# 27. `grid-template-columns`

```css
.footer {
  display: grid;
  grid-template-columns: 1fr auto;
}
```

The first column can take flexible space while the second can size according to its content.

---

# 28. Multiple Grid Columns

```css
.footer-links {
  display: grid;
  grid-template-columns: 150px 150px;
  column-gap: 70px;
}
```

Conceptually:

```text
COLUMN 1        COLUMN 2
HOME            LEARNING
ABOUT           GITHUB
PROJECTS        CONNECT
```

---

# 29. `grid-template-rows`

```css
.footer {
  display: grid;
  grid-template-rows: auto auto;
}
```

This defines the grid's row structure.

---

# 30. `grid-column`

```css
.copyright {
  grid-column: 1 / -1;
}
```

This allows the copyright element to span the full grid width.

---

# 31. `justify-self`

```css
.footer-links {
  justify-self: end;
}
```

This positions the grid item toward the end of its grid area.

---

# 32. Responsive Web Design

A website should adapt to:

```text
Desktop
Laptop
Tablet
Mobile
```

This is called **Responsive Web Design**.

The same HTML can be rearranged using CSS rather than creating a completely separate mobile page.

---

# 33. Media Queries

```css
@media (max-width: 800px) {
}
```

This means the enclosed CSS applies when the viewport is 800px wide or smaller.

Example:

```css
@media (max-width: 800px) {
  .about-content {
    flex-direction: column;
  }
}
```

---

# 34. Hamburger Menu Styling

HTML:

```html
<button class="menu-toggle" aria-label="Open navigation menu">
  <span></span>
  <span></span>
  <span></span>
</button>
```

Desktop:

```css
.menu-toggle {
  display: none;
}
```

Mobile:

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

The three spans can become the three lines:

```css
.menu-toggle span {
  display: block;
  width: 42px;
  height: 3px;
  background-color: #111;
  margin: 7px 0;
}
```

JavaScript later controls the actual opening and closing behaviour.

---

# 35. `display: none`

```css
display: none;
```

This removes the element from the normal visual layout.

It was useful for hiding desktop navigation on mobile.

---

# 36. Navigation Styling

```css
.navbar a {
  color: #111;
  text-decoration: none;
  font-size: 18px;
}
```

Hover state:

```css
.navbar a:hover {
  text-decoration: underline;
}
```

Active link:

```css
.navbar .active {
  text-decoration: underline;
}
```

---

# 37. Borders

```css
.footer-subscribe-form input {
  border: 1px solid #222;
}
```

Breakdown:

```text
1px   = thickness
solid = style
#222  = color
```

---

# 38. `cursor: pointer`

```css
button {
  cursor: pointer;
}
```

This changes the cursor when hovering over the control.

---

# 39. `text-decoration`

```css
text-decoration: none;
```

can remove a link's default underline.

```css
text-decoration: underline;
```

can add an underline.

---

# 40. Line Height

```css
.about-text p {
  line-height: 1.7;
}
```

This controls the vertical distance between lines of text and can improve readability.

---

# 41. CSS Cascade

If multiple rules apply to the same element, the browser determines which declaration wins using the cascade, including specificity and source order.

Example:

```css
.footer {
  display: grid;
}

.footer {
  display: block;
}
```

With equal specificity, the later declaration can win.

Important lesson:

> CSS order matters.

---

# 42. CSS Specificity

Selectors do not all have equal priority.

For example:

```css
p {
  color: black;
}
```

is less specific than:

```css
.about-text p {
  color: blue;
}
```

An ID selector such as:

```css
#mobileMenu {
    ...
}
```

has greater specificity than a normal class selector.

This is important when a CSS rule appears to be ignored.

---

# 43. Media Query Mistake

A responsive rule must actually be inside its media query.

Incorrect:

```css
@media (max-width: 800px) {
  /* mobile rules */
}

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

This taught me to carefully check opening and closing braces:

```text
{
}
```

when debugging responsive CSS.

---

# 44. Avoiding Duplicate CSS Rules

Repeated selectors make CSS difficult to understand.

Instead of:

```css
.footer-links { ... }
.footer-links { ... }
.footer-links { ... }
```

prefer one base rule:

```css
.footer-links {
  /* desktop/default styles */
}
```

and a mobile override:

```css
@media (max-width: 800px) {
  .footer-links {
    /* only mobile changes */
  }
}
```

---

# 45. HTML Structure Can Affect CSS

A CSS problem can actually be an HTML structure problem.

For example, the intended structure might be:

```text
footer
├── footer-left
└── footer-links
```

but the HTML might accidentally become:

```text
footer
└── footer-left
    └── footer-links
```

The CSS may then behave differently.

Important lesson:

> Before assuming CSS is broken, check whether the HTML structure is correct.

---

# 46. Accessibility-Aware UI

I learned that icon-only links should have an accessible name.

Problem:

```html
<a href="#">
  <i class="fa-brands fa-youtube"></i>
</a>
```

Improved:

```html
<a href="#" aria-label="YouTube">
  <i class="fa-brands fa-youtube"></i>
</a>
```

This is primarily an HTML accessibility feature, but it matters when styling UI controls.

---

# 47. CSS File Organization

As the portfolio became larger, I separated styles by responsibility:

```text
css/
├── style.css
├── home.css
└── about.css
```

The idea is:

```text
style.css
    ↓
shared/global styles

home.css
    ↓
homepage-specific styles

about.css
    ↓
About-page-specific styles
```

This helps prevent one huge stylesheet from becoming difficult to manage.

---

# 48. Shared vs Page-Specific CSS

Shared styles can include:

```css
body
.navbar
.navbar a
.footer
.social-links
```

Page-specific styles can include:

```css
.hero
.statistics
.about-section
.about-content
.about-text
.about-image
```

---

# 49. Building the About Page Layout

The main About layout uses Flexbox:

```css
.about-content {
  max-width: 1500px;
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 100px;
}
```

Text:

```css
.about-text {
  flex: 1;
}
```

Image area:

```css
.about-image {
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
}
```

This creates a two-column desktop layout.

---

# 50. Making the About Page Mobile

Desktop:

```text
TEXT                    IMAGE
```

Mobile:

```text
TEXT

IMAGE
```

CSS:

```css
@media (max-width: 800px) {
  .about-content {
    flex-direction: column;
  }
}
```

---

# 51. Footer Layout

The footer uses Grid:

```css
.footer {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  column-gap: 100px;
  padding: 30px 4% 25px;
}
```

This creates a structured row-and-column layout.

---

# 52. Footer Subscribe Section

```css
.footer-subscribe {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 5%;
}
```

The form:

```css
.footer-subscribe-form {
  display: flex;
  gap: 20px;
  width: 500px;
}
```

Input:

```css
.footer-subscribe-form input {
  flex: 1;
  min-width: 0;
  padding: 18px;
  font-size: 16px;
}
```

Button:

```css
.footer-subscribe-form button {
  padding: 18px 25px;
  border: none;
  font-size: 16px;
  cursor: pointer;
}
```

---

# 53. Real CSS Problem: Mobile Layout Did Not Match the Reference

### Observation

The mobile version of the portfolio did not have the same spacing and arrangement as the reference design.

### Investigation

I checked:

```text
width
padding
margin
display
flex-direction
gap
media queries
```

### Lesson

A page is not automatically responsive just because it has a media query. The mobile layout must explicitly define the required behaviour.

---

# 54. Real CSS Problem: Logo and Close Button Touching Screen Edges

I noticed that my mobile implementation had the logo and close button touching the screen edges while the reference had internal spacing.

The important lesson was to inspect the parent container rather than randomly moving the child elements.

Debugging process:

```text
1. Find the parent container.
2. Inspect its width.
3. Inspect its padding.
4. Inspect child alignment.
5. Compare desktop and mobile rules.
6. Change the smallest relevant property.
```

---

# 55. Real CSS Problem: Sticky Navigation

I added:

```css
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
}
```

It behaved differently across pages.

This taught me to compare:

```text
which stylesheet is loaded
whether another rule overrides it
parent containers
page-specific CSS
HTML structure
```

A CSS rule can be correct but still behave differently because of the surrounding layout or other declarations.

---

# 56. Real CSS Problem: Image Sizing

The image needed to resize without becoming distorted.

The solution used:

```css
width: 85%;
max-width: 520px;
height: auto;
```

Lesson:

```text
width       → controls size
max-width   → limits growth
height:auto → preserves aspect ratio
```

---

# 57. Real CSS Problem: Form Input Was Not Shrinking

The subscription form used:

```css
.subscribe-form {
  display: flex;
}
```

Input:

```css
.subscribe-form input {
  flex: 1;
  min-width: 0;
}
```

Button:

```css
.subscribe-form button {
  flex-shrink: 0;
}
```

Lesson:

> Responsive Flexbox sometimes requires explicit control over shrinking.

---

# 58. My CSS Debugging Procedure

When CSS does not produce the expected result:

### Step 1 — Describe the visual problem

Example:

> The navigation is touching the edge of the screen.

### Step 2 — Find the HTML element

```html
<nav class="navbar"></nav>
```

### Step 3 — Find the CSS selector

```css
.navbar {
}
```

### Step 4 — Check the parent

The parent may control positioning, width, padding, or alignment.

### Step 5 — Check layout properties

```text
display
position
width
max-width
height
margin
padding
gap
flex
grid
align-items
justify-content
```

### Step 6 — Check media queries

Is a mobile rule overriding the desktop rule?

### Step 7 — Check specificity

Is another selector more specific?

### Step 8 — Check source order

Does a later declaration override the earlier one?

### Step 9 — Check HTML structure

Is the element actually where I think it is?

### Step 10 — Change one thing

Test before making another change.

---

# 59. CSS Mental Model

```text
HTML
│
├── elements
├── hierarchy
└── content
        │
        ↓
CSS
│
├── selectors
├── properties
├── values
├── typography
├── colors
├── spacing
├── sizing
├── layout
├── responsiveness
└── visual states
        │
        ↓
JavaScript
│
└── behaviour and interaction
```

---

# 60. CSS Concepts I Have Learned

```text
*
box-sizing

selectors
classes
IDs

color
background-color

font-family
font-size
font-weight
line-height

width
max-width
min-width
height

margin
padding

border
border-top

text-decoration
cursor

object-fit

display
block
flex
grid
none

flex-direction
justify-content
align-items
gap
flex
flex-shrink

min-width

grid-template-columns
grid-template-rows
grid-column
justify-self

:hover

@media

CSS cascade
CSS specificity
CSS source order

responsive images
responsive layouts
navigation layouts
form layouts
footer layouts
accessibility-aware UI
```

---

# 61. What I Can Now Build With CSS

Using what I have learned so far, I can style:

- navigation bars
- hero sections
- About pages
- image/text layouts
- subscription forms
- buttons
- social links
- footers
- responsive layouts
- hamburger-menu layouts
- desktop layouts
- mobile layouts
- Flexbox layouts
- Grid layouts
- basic hover states
- responsive images

More importantly, I can now look at a design and begin asking:

```text
What is the container?
What is the layout system?
Is this Flexbox or Grid?
Where does the spacing come from?
What changes on mobile?
Which element controls the width?
Which rule is overriding another?
```

---

# 62. Recommended CSS Documentation Structure

I recommend organizing the CSS folder progressively:

```text
CSS/
│
├── README.md
│
├── 01-css-fundamentals.md
├── 02-selectors-and-specificity.md
├── 03-box-model.md
├── 04-spacing-and-sizing.md
├── 05-typography-and-colors.md
├── 06-flexbox.md
├── 07-css-grid.md
├── 08-positioning.md
├── 09-responsive-design.md
├── 10-media-queries.md
├── 11-pseudo-classes.md
├── 12-forms-and-ui.md
├── 13-navigation-and-menus.md
├── 14-portfolio-css.md
├── 15-css-debugging.md
└── 16-css-reference.md
```

The master document can remain the complete record, while these smaller files can later become focused study notes.

---

# 63. CSS Learning Progress

## Already Practiced

- [x] What CSS is
- [x] HTML vs CSS
- [x] Connecting CSS to HTML
- [x] CSS syntax
- [x] Element selectors
- [x] Class selectors
- [x] ID selectors
- [x] Universal selector
- [x] `box-sizing`
- [x] Body margin reset
- [x] Font family
- [x] Font size
- [x] Font weight
- [x] Colors
- [x] Background colors
- [x] Margin
- [x] Padding
- [x] Width
- [x] `max-width`
- [x] `min-width`
- [x] Height
- [x] `height: auto`
- [x] `object-fit`
- [x] `display: block`
- [x] Flexbox
- [x] `flex-direction`
- [x] `justify-content`
- [x] `align-items`
- [x] `gap`
- [x] `flex`
- [x] `flex-shrink`
- [x] CSS Grid
- [x] `grid-template-columns`
- [x] `grid-template-rows`
- [x] `grid-column`
- [x] `justify-self`
- [x] Media queries
- [x] Responsive layouts
- [x] Hamburger menu styling
- [x] Hover states
- [x] Borders
- [x] `cursor`
- [x] `text-decoration`
- [x] `line-height`
- [x] CSS cascade
- [x] Basic specificity
- [x] Source order
- [x] Responsive images
- [x] Form layouts
- [x] Footer layouts
- [x] CSS debugging
- [x] Accessibility-aware UI

## Topics Still To Learn Deeply

- [ ] Complete CSS box model
- [ ] `position: static`
- [ ] `position: relative`
- [ ] `position: absolute`
- [ ] `position: fixed`
- [ ] `position: sticky`
- [ ] `z-index`
- [ ] Overflow
- [ ] CSS units: `px`, `%`, `em`, `rem`, `vw`, `vh`
- [ ] CSS variables
- [ ] Pseudo-elements
- [ ] More pseudo-classes
- [ ] Transitions
- [ ] Transforms
- [ ] Animations
- [ ] CSS functions
- [ ] `calc()`
- [ ] `clamp()`
- [ ] `min()`
- [ ] `max()`
- [ ] Advanced Grid
- [ ] Flexbox sizing in depth
- [ ] CSS architecture
- [ ] Reusable component styles
- [ ] Advanced responsive design
- [ ] Accessibility in CSS
- [ ] Dark mode
- [ ] Modern CSS features

---

# 64. Final CSS Understanding

My current understanding is:

> **CSS controls how HTML content is presented, positioned, sized, spaced, and adapted to different screens.**

I have moved from simply changing:

```css
color: black;
font-size: 20px;
```

to understanding larger layout concepts:

```text
Box Model
    ↓
Flexbox
    ↓
Grid
    ↓
Responsive Design
    ↓
Media Queries
    ↓
Cascade
    ↓
Specificity
    ↓
Debugging
```

The most important lesson from building my portfolio is:

> **CSS is not just about making a webpage look beautiful. It is about understanding how elements participate in a layout system.**

When something looks wrong, I should ask:

```text
What is the parent?
What is the child?
What display mode is being used?
What is controlling the width?
What is controlling the spacing?
Is Flexbox or Grid involved?
Is a media query changing the rule?
Is another selector overriding it?
Is the HTML structure correct?
```

---

# 65. My CSS Problem-Solving Formula

For future CSS problems, I will use:

```text
OBSERVE
   ↓
IDENTIFY THE ELEMENT
   ↓
IDENTIFY THE PARENT
   ↓
CHECK HTML STRUCTURE
   ↓
CHECK CSS SELECTOR
   ↓
CHECK LAYOUT SYSTEM
   ↓
CHECK WIDTH / HEIGHT
   ↓
CHECK MARGIN / PADDING / GAP
   ↓
CHECK MEDIA QUERY
   ↓
CHECK SPECIFICITY / CASCADE
   ↓
MAKE ONE CHANGE
   ↓
TEST
   ↓
DOCUMENT THE LESSON
```

This is the CSS workflow I want to carry into future projects.
