# HTML Fundamentals — What I Have Learned So Far

## Introduction

I recently started learning **HTML**, which stands for **HyperText Markup Language**.

HTML is not a programming language. It is a **markup language used to structure and describe the content of a web page**.

HTML tells the browser what different pieces of content represent. For example:

* Headings
* Paragraphs
* Images
* Links
* Lists
* Buttons
* Videos
* Forms
* Sections

A simple way I now understand HTML is:

> HTML gives a web page its structure.

CSS will later control how the page looks, while JavaScript will add behavior and interactivity.

---

## What Is an HTML Element?

HTML pages are built using **elements**.

A normal HTML element usually contains three parts:

1. Opening tag
2. Content
3. Closing tag

Example:

```html
<p>Hello, my name is Ken.</p>
```

In this example:

```text
<p>                     Opening tag
Hello, my name is Ken.  Content
</p>                    Closing tag
```

The opening and closing tags tell the browser what type of content it is dealing with.

---

## Child Elements

An HTML element can also contain another HTML element.

Example:

```html
<p>
    I am learning <strong>HTML</strong>.
</p>
```

The `<strong>` element is inside the `<p>` element.

This means `<strong>` is a **child element** of `<p>`.

This helped me understand that HTML elements can be nested inside other elements to create a structured document.

---

## Void Elements

Not every HTML element has content or a closing tag.

Some elements are known as **void elements**.

Examples include:

```html
<img>
<meta>
<br>
```

For example:

```html
<img src="ken.png" alt="Portrait of Ken">
```

The `<img>` element does not require a closing `</img>` tag.

---

## Creating the Basic HTML Structure

In VS Code, I learned that I can quickly generate the basic HTML structure by typing:

```text
!
```

and pressing **Enter**.

VS Code generates a structure similar to:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>
```

I can also write the structure manually.

---

## `<!DOCTYPE html>`

The first line of an HTML document is usually:

```html
<!DOCTYPE html>
```

This tells the browser that the document should be interpreted as modern HTML.

It is a document declaration rather than normal visible page content.

---

## The `<html>` Element

The `<html>` element is the root element of the page.

Example:

```html
<html lang="en">

</html>
```

Everything else in the HTML document is placed inside this element.

The:

```html
lang="en"
```

part is an **attribute**.

It tells browsers and accessibility tools that the primary language of the page is English.

---

## The `<head>` Element

The `<head>` contains information about the document that is usually not displayed as normal page content.

Example:

```html
<head>
    <meta charset="UTF-8">
    <title>About Ken</title>
</head>
```

The head may contain information such as:

* Page title
* Character encoding
* CSS links
* Metadata
* Other resources used by the browser

---

## Understanding Character Encoding and UTF-8

I learned that computers store text as numbers.

A **character encoding** is a system that tells the computer which number represents which character.

For example, computers need a way to understand characters such as:

```text
A
B
₦
£
é
😂
```

UTF-8 is a widely used character encoding that supports a huge range of letters, symbols, languages and emoji.

This HTML:

```html
<meta charset="UTF-8">
```

tells the browser:

> Interpret the text in this HTML document using UTF-8 encoding.

---

## The `<title>` Element

The title element is placed inside the `<head>`.

Example:

```html
<title>About Ken</title>
```

The title normally appears in the browser tab.

It is different from the visible main heading of the webpage.

---

## The `<body>` Element

The `<body>` contains the content users normally see inside the browser.

Example:

```html
<body>
    <h1>Hey, I'm Ken</h1>

    <p>
        Welcome to my first HTML project.
    </p>
</body>
```

Headings, paragraphs, images, lists and links are normally placed inside the body.

---

## Headings

HTML provides heading elements from:

```html
<h1>
```

through:

```html
<h6>
```

I learned that headings should represent the hierarchy of the document rather than simply being selected because of their visual size.

Example:

```html
<h1>About Ken</h1>

<h2>About Me</h2>

<h2>What I'm Learning</h2>

<h2>My Goals</h2>
```

`<h1>` represents the main page heading.

`<h2>` represents major sections under it.

---

## Paragraphs

Paragraphs are created using:

```html
<p>
```

Example:

```html
<p>
    My goal is to become a full-stack web developer.
</p>
```

This tells the browser that the content represents a paragraph.

---

## Lists

I learned how to create an unordered list using:

```html
<ul>
```

Individual items are created using:

```html
<li>
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

Here, the `<li>` elements are child elements of the `<ul>` element.

---

## Links

Links are created using the anchor element:

```html
<a>
```

Example:

```html
<a href="https://github.com/">Visit my GitHub</a>
```

I learned that:

```html
href=""
```

is an attribute.

The `href` attribute tells the browser where the link should take the user.

---

## Attributes

Attributes are pieces of additional information that describe or configure an HTML element.

Example:

```html
<a href="https://github.com/">GitHub</a>
```

Here:

```text
a       = element
href    = attribute
URL     = attribute value
GitHub  = element content
```

Another example is:

```html
<img src="ken.png" alt="Portrait of Ken">
```

Here:

```text
src
alt
```

are both attributes.

---

## Images

Images are added using the `<img>` element.

Example:

```html
<img src="ken.png" alt="Portrait of Ken">
```

I learned that:

```html
src=""
```

tells the browser where the image file is located.

The:

```html
alt=""
```

attribute describes the image.

If the browser cannot find the image, the alternative text may be displayed.

---

## Relative File Paths

One of the most useful things I learned while building my first project was how file paths work.

My project structure looked similar to:

```text
DEVELOPER-NOTES/
│
├── Assets/
│   └── images/
│       └── ken.png
│
└── Projects/
    └── about-me/
        └── index.html
```

At first I wrote:

```html
<img src="images/ken.png" alt="Portrait of Ken">
```

The image did not appear because the browser searched for:

```text
Projects/about-me/images/ken.png
```

But the actual image was located inside the main `Assets` folder.

I learned that:

```text
..
```

means:

> Go up one folder.

Therefore:

```html
<img src="../../Assets/images/ken.png" alt="Portrait of Ken">
```

means:

> Go up two directories, enter Assets, enter images, and find ken.png.

This introduced me to **relative paths**.

---

## Controlling Image Width in HTML

I also learned that I can temporarily control the width of an image using the `width` attribute.

Example:

```html
<img
    src="../../Assets/images/ken.png"
    alt="Portrait of Ken"
    width="200"
>
```

This tells the browser to display the image at approximately 200 pixels wide.

Later, I will learn how to control image sizing and layout properly using CSS.

---

## HTML Comments

Comments allow developers to leave notes inside HTML that are not displayed as normal browser content.

Example:

```html
<!-- About Me Section -->

<h2>About Me</h2>
```

Comments can be useful for explaining or organizing sections of code.

---

## Inline Elements and Page Layout

While working with my image and GitHub link, I discovered another important concept.

My code looked similar to:

```html
<a href="https://github.com/">Visit my GitHub</a>

<img src="ken.png" alt="Portrait of Ken">
```

The browser placed the link beside the image because elements such as `<a>` and `<img>` can behave inline by default.

This helped me understand an important difference between HTML and CSS:

> HTML describes what content represents, while CSS controls how that content is positioned and styled.

If I want to precisely place an image on the left and a link on the top-right, I will eventually use CSS.

---

## My First HTML Project

To practise everything I learned, I created my first HTML-only **About Me page**.

The project allowed me to practise:

* HTML document structure
* Headings
* Paragraphs
* Lists
* Links
* Images
* Attributes
* Comments
* Nested elements
* Relative file paths
* Image sizing
* Basic semantic structure

My project structure is:

```text
Projects/
└── about-me/
    └── index.html
```

I also learned why `index.html` is commonly used as the default page of a website or directory.

---

## HTML vs CSS vs JavaScript

My current understanding is:

### HTML

Defines the **structure and meaning** of the webpage.

Example:

```text
This is a heading.
This is a paragraph.
This is an image.
This is a link.
```

### CSS

Controls the **appearance and layout**.

Example:

```text
Make this heading blue.
Put this image on the left.
Make this text bigger.
Add spacing between these elements.
```

### JavaScript

Controls **behavior and interaction**.

Example:

```text
When the user clicks this button, open a menu.
```

A simple way I remember it is:

> **HTML = Structure**
> **CSS = Appearance**
> **JavaScript = Behavior**

---

## Git Workflow for My HTML Project

Because this project is inside my Git repository, I can also practise Git while learning HTML.

After making changes, my workflow is:

```bash
git status
git add .
git commit -m "Practice HTML structure, links, lists and images"
git push
```

This allows me to document the progress of my HTML learning journey through commits.

---

## What I Have Learned So Far

At this stage I understand that HTML is much more than putting text inside angle brackets.

HTML is about **describing the meaning and structure of web content**.

I now understand:

* What HTML is
* HTML elements
* Opening and closing tags
* Content
* Child elements
* Void elements
* Attributes
* HTML document structure
* `DOCTYPE`
* `<html>`
* `<head>`
* `<body>`
* UTF-8
* Headings
* Paragraphs
* Lists
* Links
* Images
* Alternative text
* Relative file paths
* Comments
* Basic image sizing
* The difference between structure and presentation

My next goal is to continue strengthening my HTML foundation before using CSS to control the appearance and layout of the pages I build.
