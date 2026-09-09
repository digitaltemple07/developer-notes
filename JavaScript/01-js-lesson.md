````markdown
# JavaScript Countdown / Counter Lesson

## Overview

I learned how to use JavaScript to turn static HTML numbers into **dynamic animated counters**.

For example:

```text
0 → 1K → 2K → 3K → ... → 8K+
```
````

In this project:

- **HTML** → stores the counter elements and target numbers.
- **CSS** → controls the appearance and layout.
- **JavaScript** → controls the counting animation.

---

## 1. HTML Data Attributes

I used the custom `data-target` attribute to store the final value of each counter.

```html
<h2 class="counter" data-target="8000">0</h2>
<h2 class="counter" data-target="6000">0</h2>
<h2 class="counter" data-target="1000000">0</h2>
```

- `class="counter"` identifies the elements JavaScript should control.
- `data-target` stores the final number.
- `0` is the starting value displayed on the page.

JavaScript can access `data-target` using:

```javascript
element.dataset.target;
```

---

## 2. Selecting HTML Elements

I used `querySelectorAll()` to select all elements with the `.counter` class.

```javascript
const counters = document.querySelectorAll(".counter");
```

`querySelectorAll()` returns all matching elements so JavaScript can work with them.

---

## 3. JavaScript Functions

A function is a reusable block of code that performs a specific task.

```javascript
function countUp() {
  // instructions
}
```

Functions help organize code and make it reusable.

---

## 4. Variables

I used `const` and `let` to store values.

```javascript
const target = Number(element.dataset.target);
let current = 0;
```

- `const` → used when the variable should not be reassigned.
- `let` → used when the value will change.
- `Number()` → converts a value into a number.

---

## 5. Number Formatting

I created a function to display large numbers in a shorter format.

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

Examples:

```text
8000     → 8K+
6000     → 6K+
1000000  → 1.0M+
```

---

## 6. `setInterval()`

I learned that `setInterval()` repeatedly executes code after a specified time interval.

Example:

```javascript
setInterval(() => {
  current++;
}, 10);
```

However, using a separate `setInterval()` for every counter means each counter has its own timer. Therefore, counters with different target values finish at different times.

---

## 7. Synchronized Counters

To make all counters **start together and finish together**, I changed the approach to use one shared animation.

```javascript
function countUp() {
  const duration = 3000;
  const startTime = performance.now();

  function update(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);

    counters.forEach((counter) => {
      const target = Number(counter.dataset.target);
      const current = Math.floor(target * progress);

      counter.textContent = formatNumber(current);
    });

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

countUp();
```

Instead of giving each counter its own timer, all counters use the **same progress value**.

Therefore:

```text
8K+   → reaches 100%
6K+   → reaches 100%
1M+   → reaches 100%
```

at the same time.

---

## 8. `requestAnimationFrame()`

I learned that:

```javascript
requestAnimationFrame(update);
```

is designed for browser animations.

It repeatedly calls the `update()` function while the animation is running, allowing the counters to update smoothly.

---

## 9. Animation Progress

The animation calculates its progress using:

```javascript
const progress = Math.min((currentTime - startTime) / duration, 1);
```

The `progress` value represents how far the animation has gone:

```text
0   = 0%
0.5 = 50%
1   = 100%
```

Each counter uses the same progress:

```javascript
const current = Math.floor(target * progress);
```

For example, at 50%:

```text
8,000 × 50%      = 4,000
6,000 × 50%      = 3,000
1,000,000 × 50%  = 500,000
```

This allows counters with different target values to remain synchronized.

---

## 10. Animation Duration

I control the animation length with:

```javascript
const duration = 3000;
```

`3000` milliseconds equals **3 seconds**.

Examples:

```javascript
2000; // 2 seconds
3000; // 3 seconds
5000; // 5 seconds
```

---

## 11. Stopping the Animation

The animation continues while:

```javascript
if (progress < 1) {
  requestAnimationFrame(update);
}
```

When:

```javascript
progress = 1;
```

JavaScript stops requesting new animation frames.

As a result, **all counters stop at the same time**.

---

## 12. Complete JavaScript Code

```javascript
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

function countUp() {
  const duration = 3000;
  const startTime = performance.now();

  function update(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);

    counters.forEach((counter) => {
      const target = Number(counter.dataset.target);
      const current = Math.floor(target * progress);

      counter.textContent = formatNumber(current);
    });

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

countUp();
```

---

## 13. Debugging Lesson

I also learned that when JavaScript does not work, I should **debug the problem instead of immediately rewriting the code**.

For example:

```javascript
console.log("JavaScript is working!");
```

can confirm that the JavaScript file is being loaded.

I also learned to check the browser's **Developer Tools → Console** for errors such as:

```text
404 Not Found
```

A `404` means the browser could not find the requested file.

In my project, the problem was caused by the JavaScript file being in a different folder from the HTML file. Moving the JavaScript file into the correct folder fixed the problem.

---

# Key Lessons Learned

```text
HTML
 ↓
data-target stores the final number
 ↓
JavaScript reads the target
 ↓
Function controls the animation
 ↓
Shared progress controls all counters
 ↓
requestAnimationFrame() updates the animation
 ↓
Progress reaches 100%
 ↓
All counters stop together
```

### JavaScript concepts learned

- `data-*` attributes
- `dataset`
- `querySelectorAll()`
- `const`
- `let`
- Functions
- Function parameters
- `Number()`
- `if` statements
- `forEach()`
- `setInterval()`
- `requestAnimationFrame()`
- `performance.now()`
- `Math.floor()`
- `Math.min()`
- Number formatting
- Animation duration
- Synchronized animations
- DOM manipulation
- Browser Console debugging
- Relative file paths

```

I can next help you document **`IntersectionObserver`**, which will let you make these counters start only when the statistics section becomes visible on the screen.
```
