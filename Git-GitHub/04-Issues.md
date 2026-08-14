# GitHub Issues

## Introduction

GitHub Issues are one of the most useful tools for organizing and tracking work inside a GitHub repository.

An Issue can represent something that needs attention, such as:

* A bug
* A task
* A new feature
* A documentation update
* An idea
* A question
* An improvement

Although the word **Issue** sounds like it only means a problem, in GitHub it can represent almost any piece of work that needs to be tracked.

A simple way to think about it is:

> **GitHub Issues are like digital task cards or sticky notes attached to a repository.**

Instead of trying to remember everything that needs to be done, developers create Issues and work through them one by one.

---

## Why GitHub Issues Matter

GitHub Issues are important because they help developers organize, discuss, and keep track of work.

For example, while working on a website, I might notice that:

* The navigation menu is not working
* A screenshot is not displaying
* The contact form needs improvement
* The README needs to be updated
* A new feature should be added later

Instead of trying to remember all of these tasks, I can create a separate Issue for each one.

Example:

```text
Issue #1 — Fix broken navigation

Issue #2 — Correct screenshot path

Issue #3 — Improve contact form

Issue #4 — Update README

Issue #5 — Add user login feature
```

This creates a clear record of what needs to be done.

---

## What Can a GitHub Issue Be Used For?

GitHub Issues can be used for different types of work.

### Bugs

A bug is something in a project that is not working correctly.

Example:

```text
Fix login button not responding
```

---

### Features

A feature is something new that should be added to a project.

Example:

```text
Add password reset feature
```

---

### Documentation

Issues can also be used to track documentation work.

Example:

```text
Update installation instructions in README
```

---

### Improvements

An Issue can represent something that already works but could be improved.

Example:

```text
Improve mobile navigation design
```

---

### Ideas

Developers can create Issues for ideas they want to explore later.

Example:

```text
Consider adding dark mode
```

---

### Questions

An Issue can also be used to start a discussion or ask a question related to the repository.

Example:

```text
Should authentication use sessions or JWT?
```

---

## Basic Structure of a GitHub Issue

A GitHub Issue can contain several important parts.

```text
Issue
│
├── Title
├── Description
├── Comments
├── Assignee
├── Labels
├── Projects
├── Milestone
└── Status
```

Each of these helps organize the work.

---

# 1. Issue Title

The title gives a short explanation of what the Issue is about.

A good title should be clear and specific.

Bad example:

```text
Problem
```

Better example:

```text
Fix mobile navigation menu
```

Another good example:

```text
Update SSH authentication documentation
```

The title should allow someone to understand the task without opening the entire Issue.

---

# 2. Issue Description

The description contains more detailed information about the Issue.

For example:

```markdown
## Problem

The navigation menu does not open on mobile devices.

## Expected Behavior

When the menu icon is clicked, the navigation links should appear.

## Tasks

- [ ] Inspect the navigation code
- [ ] Find the problem
- [ ] Fix the issue
- [ ] Test the navigation
```

The description explains:

* What needs to be done
* Why it needs to be done
* What the expected result should be

---

# 3. Task Lists

GitHub Issues support Markdown task lists.

An incomplete task is written as:

```markdown
- [ ] Create the Issue
```

A completed task is written as:

```markdown
- [x] Create the Issue
```

Task lists are useful for breaking larger Issues into smaller steps.

Example:

```markdown
## Tasks

- [x] Create the Issue
- [x] Add a description
- [x] Add a label
- [x] Assign the Issue to myself
- [x] Add a comment
- [ ] Complete the task
- [ ] Close the Issue
```

This makes it easy to see progress.

---

# 4. Assignees

An **Assignee** is the person responsible for working on the Issue.

For example:

```text
Issue:
Fix broken contact form

Assignee:
Ken
```

When working alone, I can assign an Issue to myself.

When working with a team, different Issues can be assigned to different developers.

Example:

```text
Issue #1
Fix navigation
Assigned to Developer A

Issue #2
Build login page
Assigned to Developer B

Issue #3
Update documentation
Assigned to Developer C
```

This helps everyone understand who is responsible for each task.

---

# 5. Labels

Labels are used to categorize Issues.

Common examples include:

```text
bug
documentation
enhancement
question
help wanted
good first issue
```

For example:

```text
Issue:
Update README

Label:
documentation
```

Another example:

```text
Issue:
Login button not working

Label:
bug
```

Labels make it easier to filter and organize Issues inside a repository.

---

# 6. Comments

Comments are messages added underneath an Issue after it has been created.

The Issue description explains the original task or problem.

Comments are used to record what happens afterward.

Comments can be used for:

* Progress updates
* Questions
* Discussion
* Investigation findings
* Suggested solutions
* Testing results
* Final confirmation

For example:

```markdown
## Progress Update

I have inspected the image path and discovered that the file location is incorrect.

I will update the path and test the image again.
```

Later, another comment might say:

```markdown
The image path has now been corrected and the screenshot is displaying properly.
```

Comments create a useful history of the work done inside the Issue.

A simple way to remember this is:

> **Issue description = what needs to be done.**

> **Comments = what happens while the work is being done.**

---

# 7. Automatic Activity Records

GitHub also automatically records certain activities inside an Issue.

For example:

```text
digitaltemple07 assigned this Issue
```

or:

```text
digitaltemple07 added the documentation label
```

These are not manually written comments.

They are automatic records created by GitHub.

A comment is something that I intentionally write.

---

# 8. Open Issues

When an Issue is created, it normally starts as:

```text
Open
```

An Open Issue means that the task still needs attention.

For example:

```text
Open — Fix navigation menu
```

This means the work has not yet been completed or resolved.

---

# 9. Closed Issues

Once the work has been completed, the Issue can be closed.

Example:

```text
Closed — Fix navigation menu
```

Closing an Issue means the task has been completed, resolved, or is no longer required.

The basic lifecycle looks like this:

```text
Issue created
      ↓
Issue is Open
      ↓
Work begins
      ↓
Comments and updates
      ↓
Task completed
      ↓
Issue closed
```

---

# 10. Completing a Task vs Closing an Issue

Completing a checkbox and closing an Issue are related, but they are not exactly the same thing.

A task checkbox represents one specific step.

Example:

```markdown
- [x] Add a comment
```

Closing the Issue means that the overall work represented by the Issue is finished.

For example:

```markdown
- [x] Create Issue
- [x] Add description
- [x] Add label
- [x] Assign Issue
- [x] Add comment
- [x] Complete task
- [x] Close Issue
```

Once all the important work is complete, the entire Issue can be closed.

---

# 11. Milestones

A Milestone groups several Issues together under a larger goal.

For example:

```text
Milestone:
Version 1.0
```

It might contain:

```text
Issue #1 — Build homepage

Issue #2 — Create login system

Issue #3 — Build dashboard

Issue #4 — Add contact page
```

When all the Issues are completed, the milestone may also be considered complete.

Milestones are especially useful for larger projects.

---

# 12. Projects

GitHub Projects can be used to organize Issues visually.

For example:

```text
TODO

- Build login page
- Add profile page

IN PROGRESS

- Build homepage

DONE

- Create repository
- Configure SSH
```

Issues can be connected to GitHub Projects so developers can see the overall progress of a project.

---

# Creating My First GitHub Issue

To practice what I learned, I created my first GitHub Issue.

The title was:

```text
Practice creating and managing my first GitHub Issue
```

The objective was to understand how GitHub Issues work by using the feature directly.

My task list included:

```markdown
- [x] Create this Issue
- [x] Add a description
- [x] Add a label
- [x] Assign the Issue to myself
- [x] Add a comment
- [x] Complete the task
- [x] Close the Issue
```

I also added the:

```text
documentation
```

label and assigned the Issue to myself.

This practical exercise helped me understand the difference between reading about Issues and actually using them.

---

# Example of a Real Development Issue

Imagine I am building a website and discover that an image is not displaying.

I could create:

```text
Issue #7

Fix screenshot not displaying in documentation
```

The description could be:

```markdown
## Problem

A screenshot inside the documentation is not displaying on GitHub.

## Possible Cause

The Markdown image path may be incorrect.

## Tasks

- [ ] Check image location
- [ ] Check Markdown path
- [ ] Correct the path
- [ ] Commit the change
- [ ] Push the change to GitHub
- [ ] Confirm that the image displays
```

While working on the problem, I could add a comment:

```markdown
I discovered that the image path was pointing to the wrong folder.

I have corrected the path and I am testing it now.
```

After fixing the problem:

```markdown
The screenshot now displays correctly.

The issue has been resolved.
```

Then I can close the Issue.

---

# GitHub Issues and Git Workflow

Issues can eventually become part of a larger development workflow.

For example:

```text
Discover a problem
        ↓
Create an Issue
        ↓
Describe the problem
        ↓
Assign the Issue
        ↓
Work on the code locally
        ↓
git add
        ↓
git commit
        ↓
git push
        ↓
Create Pull Request
        ↓
Review changes
        ↓
Merge changes
        ↓
Close Issue
```

This is an important workflow used in professional software development.

---

# GitHub Issues and Markdown

GitHub Issues make heavy use of Markdown.

For example:

```markdown
# Main Heading

## Problem

The login button is not working.

### Tasks

- [ ] Inspect the code
- [ ] Fix the bug
- [ ] Test the solution

**Status:** In Progress

`login.js`
```

This means the Markdown knowledge I learned earlier can also be used when writing:

* Issue descriptions
* Comments
* Task lists
* Bug reports
* Project documentation

---

# Example Professional Issue Template

A useful format for reporting a bug is:

```markdown
## Description

Explain the problem clearly.

## Steps to Reproduce

1. Open the website
2. Click the login button
3. Enter login information
4. Click submit

## Expected Behavior

Explain what should happen.

## Actual Behavior

Explain what actually happens.

## Tasks

- [ ] Investigate the problem
- [ ] Identify the cause
- [ ] Fix the problem
- [ ] Test the solution
```

This makes Issues easier for other developers to understand.

---

# Best Practices for GitHub Issues

When creating Issues, I should try to:

1. Use clear and descriptive titles.

2. Explain the task or problem properly.

3. Break larger work into smaller tasks.

4. Use labels to categorize Issues.

5. Assign the Issue to the responsible person.

6. Use comments to record progress.

7. Keep the Issue updated while working.

8. Close the Issue when the work is completed.

9. Avoid creating vague Issues such as:

```text
Fix stuff
```

Instead, use something more specific:

```text
Fix mobile navigation menu not opening
```

---

# Common Issue Labels

Some useful labels include:

| Label              | Meaning                     |
| ------------------ | --------------------------- |
| `bug`              | Something is not working    |
| `documentation`    | Documentation work          |
| `enhancement`      | Improvement or new feature  |
| `question`         | A question needs discussion |
| `help wanted`      | Help is needed              |
| `good first issue` | Suitable for beginners      |

Labels help organize Issues as a repository grows.

---

# Important Terms

### Issue

A trackable piece of work inside a repository.

### Open Issue

An Issue that still requires attention.

### Closed Issue

An Issue that has been resolved or completed.

### Assignee

The person responsible for working on an Issue.

### Label

A category used to organize an Issue.

### Comment

A message or progress update added to an Issue.

### Task List

A list of checkboxes used to track smaller steps.

### Milestone

A larger goal that groups several Issues together.

### Project

A planning system that can organize Issues into boards, tables, or roadmaps.

---

# What I Learned

From studying and practicing GitHub Issues, I learned that an Issue is not simply a software problem.

It is a way of tracking work.

An Issue can represent:

```text
Bug
Feature
Task
Idea
Question
Documentation
Improvement
```

I also learned that a basic Issue workflow is:

```text
Create Issue
      ↓
Write description
      ↓
Add tasks
      ↓
Add label
      ↓
Assign responsibility
      ↓
Add comments and progress updates
      ↓
Complete the work
      ↓
Close the Issue
```

Most importantly, I learned that GitHub Issues help make development more organized and create a history of why work was done.

---

# Key Takeaway

> **A GitHub Issue is a trackable piece of work connected to a repository.**

It helps developers move from:

```text
"I need to remember to do this."
```

to:

```text
"This task is documented, organized, assigned, tracked, and eventually completed."
```

That makes Issues an important part of professional GitHub and software development workflows.

---

## My Learning Progress

```text
01-Installing-Git.md
        ↓
02-Markdown.md
        ↓
03-SSH-Authentication.md
        ↓
04-Issues.md
        ↓
Next: Pull Requests
```

At this stage, I can now create an Issue, describe the work, use task lists, apply labels, assign responsibility, add comments, track progress, and close the Issue when the work is complete.
