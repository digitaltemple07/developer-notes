# Markdown Learning Journal

## 📚 Topic: Markdown Basics

**Date:** August 10, 2026  
**Learning Stage:** Beginner  
**Status:** ✅ Completed

---

## 🎯 Learning Objective

The goal of this lesson was to understand what Markdown is, why developers use it, and how to write properly formatted documentation using Markdown syntax.

By the end of this lesson, I wanted to understand how to:

- Create headings
- Write paragraphs
- Make text bold and italic
- Create ordered and unordered lists
- Add links
- Add images
- Write inline code
- Create code blocks
- Create tables
- Create blockquotes
- Create task lists
- Organize technical documentation
- Preview Markdown in VS Code
- Use Markdown properly on GitHub

---

# 1. What Is Markdown?

Markdown is a lightweight markup language used to format plain text.

Instead of using buttons like in Microsoft Word, Markdown uses simple symbols to tell the computer how text should be displayed.

For example:

```markdown
# Heading
## Smaller Heading

**Bold Text**

*Italic Text*
```
## 🧠 Simple Way I Understand Markdown

Markdown is like giving instructions to text.

For example:

```markdown
# Hello
```
means:

> Display "Hello" as a large heading.

And:
```markdown
**Hello**
```
means:

> Display "Hello" in bold.

Markdown allows me to concentrate on writing while still keeping my documentation clean and organized.

# 2. Why Developers Use Markdown

Markdown is commonly used by developers because it is:

- Simple to learn
- Easy to read
- Easy to write
- Supported by GitHub
- Supported by VS Code
- Useful for project documentation
- Useful for README files
- Useful for technical notes
- Useful for software documentation

One of the most common Markdown files in software development is:
```markdown
README.md
```
The `.md` extension means that the file is a Markdown document.

# 3. Markdown Headings

Markdown headings are created using the `#` symbol.

The number of `#` symbols determines the heading level.
```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```
There are six heading levels.

Important Lesson

I should normally use only one main `#` heading for the title of a document.

Example:
```markdown
# Git and GitHub Learning Journal
```
Then I can organize the document using:
```markdown
## Section

### Subsection
```
# 4. Paragraphs

Normal text can be written without any special Markdown symbols.

Example:
```markdown
I am learning Git and GitHub as part of my journey toward becoming a full-stack developer.
```
To start another paragraph, I should leave an empty line between the paragraphs.

Example:
```markdown
This is paragraph one.

This is paragraph two.
```
# 5. Bold Text

Bold text is created by placing two asterisks around the text.
```markdown
**This text is bold**
```
Result:

This text is bold

Bold text is useful when I want to emphasize something important.

# 6. Italic Text

Italic text can be created using one asterisk.
```markdown
*This text is italic*
```
Result:

This text is italic

# 7. Bold and Italic Together

I can combine bold and italic formatting using three asterisks.
```markdown
***Important text***
```
Result:

Important text

# 8. Strikethrough

Strikethrough text is created using two tilde symbols.

```markdown
~~This text has been removed~~
```
Result:

~~This text has been removed~~

This can be useful when showing that something is no longer correct or relevant.

# 9. Unordered Lists

Unordered lists can be created using `-,` `*,` or `+.`

I prefer using the hyphen because it keeps my documentation consistent.
```markdown
- Git
- GitHub
- Markdown
- HTML
- CSS
- JavaScript
```
Result:

- Git
- GitHub
- Markdown
- HTML
- CSS
- JavaScript
  
# 10. Ordered Lists

Numbered lists are useful when steps must be completed in a particular order.

```
1. Install Git
2. Create a GitHub account
3. Configure Git
4. Create an SSH key
5. Connect Git to GitHub
6. Create a repository
7. Make a commit
8. Push to GitHub
```
# 11. Nested Lists

Lists can also contain other lists.

Example:
```
- Frontend
  - HTML
  - CSS
  - JavaScript
- Backend
  - PHP
  - Node.js
  - MySQL
  ```
  This is useful for organizing related information.

  # 12. Links

Markdown allows me to create clickable links.

Syntax:
```
[Text to display](URL)
```
Example:
```
[Visit GitHub](https://github.com)
```
Result:

[Visit GitHub](https://github.com)

# 13. Images

Images use syntax similar to links, but with an exclamation mark `!` at the beginning.,

```
![Image description](image-path)
```
Example: 

```
![Git installation screenshot](../Assets/screenshots/git-installation.png)
```
The text inside the square brackets describes the image.

This is called alternative text or alt text.

## 📌 Important Lesson About Image Paths

My project structure currently looks similar to this:

```
developer-notes/
│
├── Assets/
│   ├── diagrams/
│   ├── images/
│   └── screenshots/
│
├── Git-GitHub/
│   ├── README.md
│   ├── 01-Installing-Git.md
│   ├── 02-Markdown.md
│   ├── 03-SSH-Authentication.md
│   ├── 04-Issues.md
│   ├── 05-Editing-Files.md
│   └── 06-Commits.md
│
├── HTML/
├── CSS/
├── JavaScript/
├── Linux/
├── MySQL/
├── PHP/
└── README.md
```
Because `02-Markdown.md` is inside the `Git-GitHub` folder while `Assets` is outside it, I need to move up one directory before accessing `Assets.`

Therefore:

```
../Assets/screenshots/example.png
```
Means: 
```
Go up from Git-GitHub
↓
Enter Assets
↓
Enter screenshots
↓
Find example.png
```
The `..` means:

> Go up one directory.

This is an important concept for understanding relative paths.

# 14. Inline Code

Inline code is useful when mentioning commands, filenames, variables, or short pieces of code inside a sentence.

It uses one backtick.

Example:
```
Use the `git status` command to check the repository.
```
Result:

Use the `git status` command to check the repository.

Other examples include:

```
`git add .`
```
```
`git commit -m "message"`
```
```
`README.md`
```
```
`02-Markdown.md`
```
# 15. Code Blocks

When displaying multiple lines of code, I should use three backticks.

Example:

```bash
git status
git add .
git commit -m "Learn Markdown"
git push
```
The word after the opening backticks tells Markdown which programming language or syntax is being displayed.

For shell commands, I can use:
```bash
git status
```
For JavaScript:

```javascript
console.log("Hello World");
```
For HTML:
```html
<h1>Hello World</h1>
```
# 16. Blockquotes

Blockquotes are created using the `>` symbol.

Example:
```
> The best way to learn programming is by building and documenting what I learn.
```
Result:
> The best way to learn programming is by building and documenting what I learn.

Blockquotes can be useful for:

- Important notes
- Quotes
- Warnings
- Explanations
- Key lessons

# 17. Horizontal Lines

A horizontal line can help separate major sections.

I can create one using:
```markdown
---
```
This produces a line across the page.

I use horizontal lines throughout my learning journal to separate lessons and sections.

# 18. Tables

Markdown can also create tables.

Example:

```
| Tool | Purpose |
|------|---------|
| Git | Version control |
| GitHub | Remote repository hosting |
| VS Code | Code editor |
| Markdown | Documentation |
```
Result:

| Tool | Purpose |
|------|---------|
| Git  | Version control |
| GitHub | Remote repository hosting |
| Vs Code | Code editor |
| Markdown | Documentation | 

Tables are useful when comparing information.

# 19. Task Lists

Markdown can also create checkboxes.

Example:

- [x] Install Git
- [x] Configure Git
- [x] Learn Markdown
- [x] Configure SSH
- [ ] Learn Git branches
- [ ] Learn Pull Requests
- [ ] Contribute to open source
  
  A completed task uses:
  ```
  - [x]
  ```
  An incomplete task uses:
  ```
  - [ ]
  ```
  This can be useful for tracking my learning progress.