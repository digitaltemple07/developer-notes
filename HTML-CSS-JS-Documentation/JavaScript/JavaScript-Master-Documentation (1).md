# JavaScript Learning Journal — Master Documentation

> **Learning track:** HTML → CSS → JavaScript  
> **Current project:** Personal Portfolio  
> **Purpose:** Record the JavaScript concepts, code, questions, corrections, debugging procedures, and real project lessons I have learned so far.

---

# 1. What Is JavaScript?

JavaScript is the programming language I am using to add **behaviour and interaction** to my webpages.

My current mental model is:

```text
HTML
↓
Structure

CSS
↓
Presentation

JavaScript
↓
Behaviour and Interaction
```

For example:

```text
HTML
→ creates the counter

CSS
→ makes the counter look good

JavaScript
→ makes the number count upward
```

---

# 2. My First Practical JavaScript Project

The first major JavaScript feature I built in my portfolio was an animated statistics counter.

The homepage contains:

```html
<h2 class="counter" data-target="8000">0</h2>

<h2 class="counter" data-target="6000">0</h2>

<h2 class="counter" data-target="1000000">0</h2>
```

The desired result is approximately:

```text
0 → 1K+ → 2K+ → ... → 8K+

0 → 1K+ → 2K+ → ... → 6K+

0 → 1K+ → 2K+ → ... → 1M+
```

JavaScript is responsible for changing the displayed numbers.

---

# 3. Connecting JavaScript to HTML

The JavaScript files are stored in:

```text
My-Portfolio/
└── js/
    ├── about.js
    ├── home.js
    └── menu.js
```

The homepage loads the scripts using:

```html
<script src="js/home.js"></script>
<script src="js/menu.js"></script>
```

This is normally placed near the bottom of the `<body>`.

The relationship is:

```text
index.html
    ↓
js/home.js
    ↓
homepage JavaScript

index.html
    ↓
js/menu.js
    ↓
mobile menu JavaScript
```

---

# 4. My First JavaScript Debugging Lesson

One of my early problems was that the JavaScript did not appear to work.

Instead of immediately changing the code, I learned to test whether the JavaScript file was actually loading.

I used:

```javascript
console.log("JavaScript is working!");
```

Then I opened the browser's Developer Tools and checked the Console.

If the message appeared:

```text
JavaScript is working!
```

I knew the file had been loaded.

This is a very important debugging habit:

> First determine whether the JavaScript is running before trying to debug what the JavaScript is doing.

---

# 5. JavaScript File Paths

My JavaScript file was initially not in the correct location.

The HTML was looking for:

```html
<script src="js/home.js"></script>
```

Therefore, the browser expected:

```text
My-Portfolio/
├── index.html
└── js/
    └── home.js
```

If the file is somewhere else, the browser cannot load it from that path.

The browser may show an error such as:

```text
404 Not Found
```

A 404 means the requested resource could not be found at that path.

---

# 6. My JavaScript Folder Correction

The correct project structure became:

```text
My-Portfolio/
│
├── index.html
├── about.html
├── thank-you.html
│
├── css/
│
├── js/
│   ├── about.js
│   ├── home.js
│   └── menu.js
│
└── Assets/
```

This made:

```html
<script src="js/home.js"></script>
```

resolve correctly from `index.html`.

The lesson was:

> JavaScript file paths work the same basic way as HTML image and CSS paths: the path must correctly describe where the target file is located relative to the HTML file.

---

# 7. JavaScript Variables

I learned about:

```javascript
const
```

and:

```javascript
let;
```

Example:

```javascript
const target = Number(element.dataset.target);

let current = 0;
```

## `const`

Use `const` when the variable itself should not be reassigned.

Example:

```javascript
const duration = 3000;
```

## `let`

Use `let` when the value needs to change.

Example:

```javascript
let current = 0;

current++;
```

This gives me a basic rule:

```text
const → variable binding should not be reassigned

let → variable value will be changed
```

---

# 8. The `console.log()` Function

I learned to use:

```javascript
console.log();
```

to inspect information while debugging.

Example:

```javascript
console.log("JavaScript is working!");
```

I can also log values:

```javascript
console.log(target);
```

or:

```javascript
console.log(counters);
```

This allows me to inspect what JavaScript is actually seeing.

---

# 9. Selecting HTML Elements

I learned to use:

```javascript
document.querySelectorAll(".counter");
```

My code:

```javascript
const counters = document.querySelectorAll(".counter");
```

This means:

> Find all elements matching the `.counter` CSS selector.

The HTML:

```html
<h2 class="counter">0</h2>
```

matches:

```javascript
".counter";
```

The result is a collection of matching DOM elements.

---

# 10. `querySelector()`

The related method:

```javascript
document.querySelector();
```

returns the first matching element.

Example:

```javascript
const menuToggle = document.querySelector(".menu-toggle");
```

This finds the first element with:

```html
class="menu-toggle"
```

---

# 11. `querySelectorAll()`

For multiple elements:

```javascript
const counters = document.querySelectorAll(".counter");
```

If the page contains:

```html
<h2 class="counter">0</h2>
<h2 class="counter">0</h2>
<h2 class="counter">0</h2>
```

JavaScript can select all three.

This became important because I wanted to animate multiple counters.

---

# 12. `getElementById()`

For an element with a unique ID:

```javascript
const mobileMenu = document.getElementById("mobileMenu");
```

The HTML:

```html
<div id="mobileMenu"></div>
```

is selected using:

```javascript
document.getElementById("mobileMenu");
```

The basic difference is:

```text
querySelector()
→ first CSS selector match

querySelectorAll()
→ all CSS selector matches

getElementById()
→ element with a specific ID
```

---

# 13. Functions

A function is a reusable block of JavaScript instructions.

Example:

```javascript
function countup() {
  // instructions
}
```

I used functions to separate different responsibilities.

For example:

```javascript
function formatNumber(number) {
    ...
}
```

and:

```javascript
function countup() {
    ...
}
```

This makes the code easier to understand.

---

# 14. Function Parameters

A function can receive a value through a parameter.

Example:

```javascript
function formatNumber(number) {
    ...
}
```

Here:

```text
number
```

is the parameter.

When the function is called:

```javascript
formatNumber(8000);
```

the value:

```text
8000
```

is passed into the parameter.

---

# 15. Returning a Value

A function can return a result.

Example:

```javascript
function formatNumber(number) {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M+";
  }

  if (number >= 1000) {
    return (number / 1000).toFixed(0) + "K+";
  }

  return number;
}
```

The `return` statement gives a result back to the code that called the function.

---

# 16. HTML `data-*` Attributes

I learned how HTML can store custom data using `data-*` attributes.

Example:

```html
<h2 class="counter" data-target="8000">0</h2>
```

Here:

```text
class="counter"
```

identifies the element.

And:

```text
data-target="8000"
```

stores the target number.

This is useful because JavaScript can read the value without hard-coding every target directly into the JavaScript.

---

# 17. Reading `data-target` With `dataset`

JavaScript can read:

```html
data-target="8000"
```

using:

```javascript
element.dataset.target;
```

Example:

```javascript
const target = element.dataset.target;
```

The browser exposes:

```text
data-target
```

through:

```javascript
dataset.target;
```

This is an important connection between HTML and JavaScript.

---

# 18. Converting Text to a Number

Values read from HTML attributes are not automatically treated as JavaScript numbers.

I used:

```javascript
Number(element.dataset.target);
```

Example:

```javascript
const target = Number(element.dataset.target);
```

This converts the value into a number.

Conceptually:

```text
"8000"
↓
Number()
↓
8000
```

This matters because I want to perform mathematical calculations.

---

# 19. My First Counter Approach

My first approach was based on `setInterval()`.

The basic idea was:

```javascript
function countup(element) {
  const target = Number(element.dataset.target);

  let current = 0;

  const counter = setInterval(() => {
    current++;

    element.textContent = current;

    if (current >= target) {
      clearInterval(counter);
    }
  }, 1);
}
```

The idea was:

```text
start at 0
↓
increase current
↓
update HTML
↓
repeat
↓
stop at target
```

---

# 20. `setInterval()`

I learned that:

```javascript
setInterval();
```

repeatedly executes code after a specified interval.

Example:

```javascript
setInterval(() => {
  current++;
}, 10);
```

The number:

```text
10
```

represents milliseconds.

However, this approach created an important problem.

---

# 21. The Counter Synchronization Problem

I initially had multiple counters.

For example:

```text
8,000
6,000
1,000,000
```

If each counter used its own independent `setInterval()`, each counter effectively had its own timer.

This means the counters could reach their targets at different times.

The problem became:

```text
8K+      ← finishes at one time

6K+      ← finishes at another time

1M+      ← finishes at another time
```

I wanted:

```text
8K+      ┐
6K+      ├── finish together
1M+      ┘
```

This led to one of my most important JavaScript lessons.

---

# 22. The Solution: Shared Animation Progress

Instead of giving each counter its own timer, I created one shared animation.

The key idea is:

```text
ONE TIMER
   ↓
ONE PROGRESS VALUE
   ↓
ALL COUNTERS
```

The important code is:

```javascript
const progress = Math.min((currentTime - startTime) / duration, 1);
```

Then every counter uses that same:

```text
progress
```

value.

---

# 23. `performance.now()`

I used:

```javascript
const startTime = performance.now();
```

`performance.now()` gives a high-resolution timestamp useful for measuring elapsed time.

The animation can then compare:

```javascript
currentTime - startTime;
```

to determine how much time has passed.

---

# 24. Animation Duration

I used:

```javascript
const duration = 3000;
```

The unit is milliseconds.

Therefore:

```text
1000 ms = 1 second
2000 ms = 2 seconds
3000 ms = 3 seconds
5000 ms = 5 seconds
```

My counters therefore animate for approximately:

```text
3 seconds
```

---

# 25. Calculating Animation Progress

The formula is:

```javascript
const progress = Math.min((currentTime - startTime) / duration, 1);
```

Conceptually:

```text
elapsed time
────────────── = progress
duration
```

Examples:

```text
0     = 0%
0.25  = 25%
0.50  = 50%
0.75  = 75%
1     = 100%
```

The `Math.min(..., 1)` ensures the progress does not go above `1`.

---

# 26. `Math.min()`

Example:

```javascript
Math.min(0.8, 1);
```

returns:

```text
0.8
```

But:

```javascript
Math.min(1.2, 1);
```

returns:

```text
1
```

Therefore:

```javascript
Math.min(progress, 1);
```

can keep progress from exceeding 100%.

---

# 27. Calculating the Current Counter Value

I used:

```javascript
const current = Math.floor(progress * target);
```

Suppose:

```text
target = 8000
progress = 0.5
```

Then:

```text
8000 × 0.5
= 4000
```

For another counter:

```text
6000 × 0.5
= 3000
```

For:

```text
1000000 × 0.5
= 500000
```

All three use the same progress value.

That is why they remain synchronized.

---

# 28. `Math.floor()`

I used:

```javascript
Math.floor();
```

to convert the calculated value to a whole number.

Example:

```javascript
Math.floor(12.9);
```

returns:

```text
12
```

This prevents the counter from displaying unnecessary decimal values during the animation.

---

# 29. `requestAnimationFrame()`

I learned:

```javascript
requestAnimationFrame();
```

as a browser-friendly way to create animations.

My code:

```javascript
requestAnimationFrame(update);
```

asks the browser to call:

```javascript
update;
```

on a future animation frame.

This allows the counter to update smoothly as the browser renders the page.

---

# 30. The `update()` Function

Inside the counter function I created:

```javascript
function update(currentTime) {
  const progress = Math.min((currentTime - startTime) / duration, 1);

  counters.forEach((counter) => {
    const target = Number(counter.dataset.target);

    const current = Math.floor(progress * target);

    counter.textContent = formatNumber(current);
  });

  if (progress < 1) {
    requestAnimationFrame(update);
  }
}
```

The browser repeatedly calls `update()` while the animation is running.

---

# 31. `forEach()`

I used:

```javascript
counters.forEach((counter) => {
    ...
});
```

This means:

> Perform these instructions for every counter.

If there are three counters:

```text
counter 1
counter 2
counter 3
```

the callback runs for each one.

This allowed one animation loop to control all counters.

---

# 32. Updating HTML With `textContent`

I used:

```javascript
counter.textContent = formatNumber(current);
```

This changes the text displayed inside the HTML element.

For example:

```html
<h2 class="counter">0</h2>
```

can become:

```html
<h2 class="counter">8K+</h2>
```

through JavaScript.

This is one of my first practical examples of DOM manipulation.

---

# 33. DOM Manipulation

DOM stands for:

> Document Object Model.

The browser represents the HTML document as objects that JavaScript can interact with.

For example:

```javascript
document.querySelector(".counter");
```

selects an HTML element.

Then:

```javascript
element.textContent = "8K+";
```

changes what the user sees.

My mental model is:

```text
HTML
↓
Browser creates DOM
↓
JavaScript selects DOM elements
↓
JavaScript changes DOM
↓
Browser displays the change
```

---

# 34. Number Formatting

I created:

```javascript
function formatNumber(number) {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M+";
  }

  if (number >= 1000) {
    return (number / 1000).toFixed(0) + "K+";
  }

  return number;
}
```

The purpose is to convert large numbers into shorter display values.

Examples:

```text
8000
↓
8K+

6000
↓
6K+

1000000
↓
1.0M+
```

---

# 35. `if` Statements

I learned that JavaScript can make decisions using:

```javascript
if
```

Example:

```javascript
if (number >= 1000000) {
    ...
}
```

This means:

> If the number is greater than or equal to one million, execute this code.

Then:

```javascript
if (number >= 1000) {
    ...
}
```

checks whether it is at least one thousand.

---

# 36. Comparison Operators

I used:

```javascript
>=
```

This means:

> Greater than or equal to.

Example:

```javascript
number >= 1000;
```

Other comparison operators I will continue learning include:

```text
>
<
>=
<=
===
!==
```

---

# 37. `toFixed()`

I used:

```javascript
.toFixed(1)
```

Example:

```javascript
(1000000 / 1000000).toFixed(1);
```

produces:

```text
1.0
```

Then:

```javascript
+"M+";
```

creates:

```text
1.0M+
```

For thousands I used:

```javascript
.toFixed(0)
```

so:

```text
8000 / 1000
= 8
= 8K+
```

---

# 38. The Complete Counter Code

My current homepage counter JavaScript is:

```javascript
console.log("JavaScript is working!");

const counters = document.querySelectorAll(".counter");

function formatNumber(number) {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M+";
  }

  if (number >= 1000) {
    return (number / 1000).toFixed(0) + "K+";
  }

  return number;
}

function countup() {
  const duration = 3000;
  const startTime = performance.now();

  function update(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);

    counters.forEach((counter) => {
      const target = Number(counter.dataset.target);

      const current = Math.floor(progress * target);

      counter.textContent = formatNumber(current);
    });

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

countup();
```

---

# 39. Understanding the Counter Code as a Process

Instead of memorizing the code, I should understand the process:

```text
Select all counters
       ↓
Read each target
       ↓
Start a timer
       ↓
Measure elapsed time
       ↓
Calculate progress
       ↓
Calculate each counter's current value
       ↓
Format the number
       ↓
Update the HTML
       ↓
Request another animation frame
       ↓
Repeat until progress = 1
       ↓
Stop
```

This is much more important than memorizing the exact syntax.

---

# 40. Why All Counters Now Stop Together

The key is that there is only one:

```javascript
startTime;
```

and one:

```javascript
progress;
```

for all counters.

Therefore:

```text
Counter 1 → same progress
Counter 2 → same progress
Counter 3 → same progress
```

At the end:

```text
progress = 1
```

for all of them.

So they finish together.

---

# 41. Stopping the Animation

The animation continues while:

```javascript
if (progress < 1) {
  requestAnimationFrame(update);
}
```

Once:

```text
progress = 1
```

the condition becomes false.

JavaScript does not request another animation frame.

Therefore the animation stops.

---

# 42. Mobile Menu JavaScript

The portfolio also uses JavaScript for the mobile navigation menu.

The file is:

```text
js/menu.js
```

It controls:

```text
Open menu
Close menu
Close menu when a link is clicked
Prevent background scrolling while menu is open
Restore scrolling when menu closes
```

---

# 43. Selecting the Mobile Menu Elements

The code begins with:

```javascript
const menuToggle = document.querySelector(".menu-toggle");

const mobileMenu = document.getElementById("mobileMenu");

const menuClose = document.getElementById("menuClose");
```

This connects JavaScript to the HTML controls.

The HTML contains:

```html
<button class="menu-toggle"></button>
```

```html
<div id="mobileMenu"></div>
```

and:

```html
<button id="menuClose"></button>
```

---

# 44. `addEventListener()`

I learned that JavaScript can listen for user actions.

Example:

```javascript
menuToggle.addEventListener(
    "click",
    function () {
        ...
    }
);
```

This means:

> When the menu toggle is clicked, execute this function.

The general pattern is:

```javascript
element.addEventListener("event", function () {
  // action
});
```

---

# 45. Opening the Mobile Menu

My code:

```javascript
menuToggle.addEventListener("click", function () {
  mobileMenu.classList.add("active");

  document.body.style.overflow = "hidden";
});
```

There are two important actions.

First:

```javascript
mobileMenu.classList.add("active");
```

adds the CSS class:

```text
active
```

Second:

```javascript
document.body.style.overflow = "hidden";
```

prevents the background page from scrolling while the full-screen menu is open.

---

# 46. `classList.add()`

I learned:

```javascript
element.classList.add("active");
```

adds a CSS class to an element.

The CSS contains:

```css
.mobile-menu.active {
  display: block;
}
```

So JavaScript and CSS work together:

```text
JavaScript
↓
adds "active"
↓
CSS sees ".active"
↓
menu becomes visible
```

This is an important example of the three technologies working together.

---

# 47. Closing the Mobile Menu

The close button uses:

```javascript
menuClose.addEventListener("click", function () {
  mobileMenu.classList.remove("active");

  document.body.style.overflow = "";
});
```

The class is removed:

```javascript
classList.remove("active");
```

and the body's overflow is restored:

```javascript
document.body.style.overflow = "";
```

---

# 48. `classList.remove()`

This is the opposite of:

```javascript
classList.add();
```

Example:

```javascript
mobileMenu.classList.remove("active");
```

Meaning:

> Remove the `active` class from the element.

The relationship is:

```text
add("active")
→ open state

remove("active")
→ closed state
```

---

# 49. Closing the Menu When a Link Is Clicked

I also selected all mobile navigation links:

```javascript
const menuLinks = document.querySelectorAll(".mobile-menu-links a");
```

Then:

```javascript
menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    mobileMenu.classList.remove("active");

    document.body.style.overflow = "";
  });
});
```

This means every mobile navigation link receives a click listener.

When the user selects a link:

```text
menu closes
↓
background scrolling is restored
↓
browser follows the link
```

---

# 50. `forEach()` With Event Listeners

This is another practical use of:

```javascript
forEach();
```

Instead of writing:

```javascript
link1.addEventListener(...);
link2.addEventListener(...);
link3.addEventListener(...);
```

I can select all matching links and loop through them:

```javascript
menuLinks.forEach(function (link) {
    ...
});
```

This reduces repetition.

---

# 51. JavaScript + CSS + HTML Working Together

The mobile menu is a good example of the three technologies working together.

### HTML

Creates:

```html
<button>
  <div>
    <nav>
      <a></a>
    </nav>
  </div>
</button>
```

### CSS

Controls:

```text
appearance
position
full-screen layout
visibility
```

### JavaScript

Controls:

```text
click
open
close
active class
scroll locking
```

The process is:

```text
User clicks hamburger
        ↓
JavaScript detects click
        ↓
JavaScript adds "active"
        ↓
CSS sees ".mobile-menu.active"
        ↓
Menu becomes visible
```

---

# 52. JavaScript Debugging Procedure

When JavaScript does not work, I should follow a process.

## Step 1 — Check the script path

Example:

```html
<script src="js/home.js"></script>
```

Does the file actually exist there?

---

## Step 2 — Add a console test

```javascript
console.log("JavaScript is working!");
```

If nothing appears, investigate the script loading/path.

---

## Step 3 — Open Developer Tools

Use:

```text
Browser
→ Developer Tools
→ Console
```

Look for errors.

---

## Step 4 — Check 404 errors

A 404 can indicate an incorrect file path.

---

## Step 5 — Check the selector

If this returns nothing:

```javascript
document.querySelector(".counter");
```

verify that the HTML actually contains:

```html
class="counter"
```

---

## Step 6 — Check IDs

If using:

```javascript
document.getElementById("mobileMenu");
```

verify:

```html
id="mobileMenu"
```

exists exactly.

---

## Step 7 — Check the event

If a button does not respond:

```javascript
addEventListener("click", ...)
```

verify that the correct element was selected.

---

## Step 8 — Check the JavaScript console for runtime errors

A JavaScript error can stop later code from running.

---

## Step 9 — Change one thing at a time

Do not rewrite the entire script immediately.

Find the smallest failing part and test it.

---

# 53. Common JavaScript Mistakes I Should Avoid

## Mistake 1 — Wrong file path

```html
<script src="wrong-folder/home.js"></script>
```

when the file actually exists at:

```text
js/home.js
```

---

## Mistake 2 — Wrong selector

JavaScript:

```javascript
document.querySelector(".counter");
```

HTML:

```html
<h2 class="statistics"></h2>
```

These do not match.

---

## Mistake 3 — Wrong ID

JavaScript:

```javascript
document.getElementById("mobile-menu");
```

HTML:

```html
id="mobileMenu"
```

These are different IDs.

---

## Mistake 4 — Forgetting `Number()`

HTML:

```html
data-target="8000"
```

JavaScript should explicitly convert it when mathematical calculations require a number:

```javascript
Number(element.dataset.target);
```

---

## Mistake 5 — Creating separate timers when synchronization is required

Using separate timers for multiple counters can produce different completion times.

The solution was one shared animation clock.

---

# 54. My JavaScript Learning Progress

## Already Practiced

- [x] What JavaScript is
- [x] Connecting JavaScript to HTML
- [x] JavaScript file paths
- [x] `console.log()`
- [x] `const`
- [x] `let`
- [x] Functions
- [x] Function parameters
- [x] `return`
- [x] `querySelector()`
- [x] `querySelectorAll()`
- [x] `getElementById()`
- [x] `data-*` attributes
- [x] `dataset`
- [x] `Number()`
- [x] `if`
- [x] Comparison operators
- [x] `forEach()`
- [x] `textContent`
- [x] `Math.floor()`
- [x] `Math.min()`
- [x] `toFixed()`
- [x] `setInterval()`
- [x] `clearInterval()`
- [x] `performance.now()`
- [x] `requestAnimationFrame()`
- [x] Animation duration
- [x] Shared animation progress
- [x] Synchronized counters
- [x] DOM manipulation
- [x] `addEventListener()`
- [x] Click events
- [x] `classList.add()`
- [x] `classList.remove()`
- [x] Basic scroll locking
- [x] Browser Console debugging
- [x] JavaScript file/path debugging
- [x] Basic HTML/CSS/JavaScript integration

---

# 55. Topics I Still Need to Learn Deeply

These should become future JavaScript lessons:

```text
[ ] JavaScript data types
[ ] Strings
[ ] Numbers
[ ] Booleans
[ ] null
[ ] undefined
[ ] Arrays
[ ] Objects
[ ] Operators in depth
[ ] Comparison and logical operators
[ ] Loops
[ ] for
[ ] while
[ ] do...while
[ ] Arrow functions
[ ] Scope
[ ] Block scope
[ ] Function scope
[ ] Template literals
[ ] Destructuring
[ ] Spread operator
[ ] Rest parameters
[ ] Array methods
[ ] map()
[ ] filter()
[ ] find()
[ ] reduce()
[ ] DOM traversal
[ ] createElement()
[ ] append()
[ ] remove()
[ ] Event bubbling
[ ] Event delegation
[ ] Forms and JavaScript
[ ] Form validation
[ ] Keyboard events
[ ] Mouse events
[ ] Local storage
[ ] JSON
[ ] Fetch API
[ ] Promises
[ ] async/await
[ ] APIs
[ ] Error handling
[ ] try/catch
[ ] Modules
[ ] import/export
[ ] JavaScript classes
[ ] npm
[ ] JavaScript project structure
```

---

# 56. Recommended JavaScript Documentation Structure

I recommend organizing the JavaScript folder progressively:

```text
JavaScript/
│
├── README.md
│
├── 01-javascript-fundamentals.md
├── 02-variables-and-data-types.md
├── 03-operators-and-conditionals.md
├── 04-functions.md
├── 05-arrays-and-loops.md
├── 06-objects.md
├── 07-dom-selection.md
├── 08-dom-manipulation.md
├── 09-events.md
├── 10-forms.md
├── 11-browser-apis.md
├── 12-animations.md
├── 13-portfolio-javascript.md
├── 14-javascript-debugging.md
└── 15-javascript-reference.md
```

This is better than simply adding every new lesson to one giant file.

---

# 57. Portfolio JavaScript Structure

My current project uses:

```text
My-Portfolio/
│
├── js/
│   ├── about.js
│   ├── home.js
│   └── menu.js
```

### `home.js`

Responsible for:

```text
Homepage statistics counters
```

### `menu.js`

Responsible for:

```text
Mobile navigation
```

### `about.js`

Currently exists but does not contain JavaScript logic.

This is actually a good thing: I should not add JavaScript simply because a file exists. JavaScript should be added when the page actually needs behaviour.

---

# 58. Current JavaScript Architecture

My current mental model is:

```text
index.html
│
├── counter HTML
│      ↓
│   home.js
│      ↓
│   counter animation
│
└── mobile menu HTML
       ↓
    menu.js
       ↓
    open / close behaviour
```

This is a simple example of separating JavaScript responsibilities.

---

# 59. The Most Important JavaScript Lesson So Far

My biggest JavaScript lesson is not `setInterval()` or `requestAnimationFrame()`.

It is learning to **reason about the problem**.

The original problem was:

> Why don't my counters finish together?

Instead of simply making the interval faster, I learned to ask:

```text
Does each counter have its own timer?
        ↓
Yes.
        ↓
Then they have independent timelines.
        ↓
I need one shared timeline.
        ↓
Create one startTime.
        ↓
Calculate one progress value.
        ↓
Apply that progress to every counter.
```

That is the beginning of programming as problem-solving rather than just copying code.

---

# 60. My JavaScript Problem-Solving Formula

For future JavaScript problems:

```text
OBSERVE THE PROBLEM
        ↓
CHECK WHETHER THE SCRIPT LOADS
        ↓
CHECK THE CONSOLE
        ↓
CHECK SELECTORS
        ↓
CHECK VARIABLES
        ↓
CHECK VALUES / DATA TYPES
        ↓
CHECK EVENT LISTENERS
        ↓
CHECK THE DOM
        ↓
CHECK THE LOGIC
        ↓
CHANGE ONE THING
        ↓
TEST
        ↓
DOCUMENT WHAT I LEARNED
```

---

# 61. Final JavaScript Understanding

My current understanding is:

> **JavaScript allows me to make a webpage respond to data, time, and user actions.**

So far, I have used it to make my portfolio:

```text
1. Animate statistics
2. Read data from HTML
3. Change displayed content
4. Respond to clicks
5. Open and close the mobile menu
6. Add and remove CSS classes
7. Control page scrolling
```

My current web-development mental model is:

```text
HTML
↓
What exists?

CSS
↓
How does it look?

JavaScript
↓
What does it do?
```

---

# 62. Complete Technology Relationship

My portfolio now demonstrates the three technologies working together:

```text
                 WEBPAGE
                    │
        ┌───────────┼───────────┐
        ↓           ↓           ↓
      HTML         CSS      JavaScript
        │           │           │
        ↓           ↓           ↓
    Structure    Appearance   Behaviour
        │           │           │
        └───────────┼───────────┘
                    ↓
             Interactive Website
```

### Counter example

```text
HTML
→ data-target="8000"

CSS
→ styles the statistics

JavaScript
→ animates 0 → 8K+
```

### Mobile menu example

```text
HTML
→ menu button + menu links

CSS
→ full-screen mobile menu design

JavaScript
→ opens/closes the menu
```

This is the foundation on which my future JavaScript learning will build.

---

# 63. What I Should Learn Next

The next JavaScript stage should not immediately jump into complicated frameworks.

A better progression is:

```text
JavaScript Fundamentals
        ↓
Variables & Data Types
        ↓
Conditionals
        ↓
Functions
        ↓
Arrays
        ↓
Loops
        ↓
Objects
        ↓
DOM
        ↓
Events
        ↓
Forms
        ↓
Browser APIs
        ↓
Async JavaScript
        ↓
Fetch / APIs
        ↓
Modules
        ↓
Larger Projects
```

The goal is to understand **vanilla JavaScript deeply first**.

Only after that should I move into technologies such as:

```text
Node.js
React
Express
Next.js
```

because those technologies will make much more sense when the JavaScript fundamentals are solid.

---

# 64. Final Rule for My JavaScript Journal

For every new JavaScript lesson, I should document:

```text
WHAT IS THE CONCEPT?
        ↓
WHAT PROBLEM DOES IT SOLVE?
        ↓
WHAT IS THE SYNTAX?
        ↓
HOW DOES IT WORK?
        ↓
WHERE DID I USE IT?
        ↓
WHAT PROBLEM DID I ENCOUNTER?
        ↓
WHY DID IT HAPPEN?
        ↓
HOW DID I FIX IT?
        ↓
WHAT DID I LEARN?
        ↓
WHAT SHOULD I PRACTICE NEXT?
```

This keeps my JavaScript documentation connected to **real programming problems**, not just syntax memorization.

---

# 65. JavaScript Reflection

I started JavaScript by trying to make numbers count.

That simple feature introduced me to:

```text
Variables
Functions
DOM
Data attributes
Numbers
Conditions
Loops through elements
Timers
Animation frames
Time measurement
Mathematics
Formatting
Events
CSS classes
User interaction
Debugging
```

This is an important lesson:

> A small real project can teach many programming concepts at once.

My portfolio is therefore not just a website I am building.

It is also my JavaScript laboratory.
