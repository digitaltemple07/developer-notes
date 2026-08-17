# Understanding Git Commits

A **commit** is a recorded checkpoint of changes made to a project.

When I edit a file, save it, and then commit the changes, Git creates a permanent record of what changed at that point in time.

A commit helps Git remember the development history of a project.

## What a Commit Represents

A commit represents a **snapshot of the project at a specific moment**.

For example, if I update my GitHub learning documentation and run:

```bash
git add .
git commit -m "Add documentation about Git commits"
```

Git records those staged changes as a new commit.

I can think of a commit as saying:

> "This is what my project looked like after I completed this particular change."

Each commit becomes part of the project's history.

## The Basic Commit Workflow

When working locally, the normal workflow is:

```text
Edit File
   ↓
Save File
   ↓
git status
   ↓
git add
   ↓
git commit
   ↓
git push
```

Example:

```bash
git status
git add .
git commit -m "Update Git learning notes"
git push
```

### What Each Command Does

`git status` checks which files have been modified, added, or deleted.

```bash
git status
```

`git add` prepares changes to be included in the next commit.

```bash
git add .
```

`git commit` records the staged changes in Git history.

```bash
git commit -m "Add Git commit documentation"
```

`git push` sends my local commits to the remote repository on GitHub.

```bash
git push
```

## What Is a Commit Message?

A **commit message** is a short description explaining what was changed in a commit.

For example:

```bash
git commit -m "Fix broken image path in README"
```

The message:

```text
Fix broken image path in README
```

explains the purpose of that commit.

## Why Commit Messages Matter

Commit messages are important because they help me and other developers understand **why a change was made**.

Imagine a project has hundreds of commits.

Messages such as:

```text
update
changes
fix
stuff
```

do not provide much useful information.

Clear commit messages are much better:

```text
Add installation instructions
Fix broken README image
Update SSH authentication guide
Remove outdated Git commands
Add examples to Issues documentation
```

Good commit messages make the history of a project easier to understand.

## Good vs Bad Commit Messages

### Poor Commit Message

```bash
git commit -m "changes"
```

This does not explain what was changed.

### Better Commit Message

```bash
git commit -m "Add explanation of GitHub Issues"
```

This clearly explains what the commit contains.

Another example:

```bash
git commit -m "Fix spelling errors in Markdown guide"
```

Anyone looking at the project history can understand what happened.

## Git Builds Project History Using Commits

Every time I create a commit, Git adds another checkpoint to the project's history.

For example:

```text
Commit 1
Create README
   ↓
Commit 2
Add Git installation guide
   ↓
Commit 3
Add Markdown documentation
   ↓
Commit 4
Add SSH authentication guide
   ↓
Commit 5
Add GitHub Issues documentation
   ↓
Commit 6
Add Git commit documentation
```

Together, these commits form the **history of the project**.

Instead of only seeing the current version of the project, Git allows me to see how the project developed over time.

## Viewing Commit History

I can view the commit history from the terminal using:

```bash
git log
```

Git may display information such as:

```text
commit a7c92e...
Author: Developer Name
Date: ...

    Add Git commit documentation
```

For a simpler history, I can use:

```bash
git log --oneline
```

Example:

```text
a7c92ef Add Git commit documentation
7bd812a Add editing files guide
92ab301 Add GitHub Issues documentation
```

Each line represents a different commit.

## Every Commit Has a Unique ID

Git gives every commit a unique identifier called a **commit hash**.

It may look something like:

```text
a7c92ef37a2d...
```

This allows Git to distinguish one commit from another.

A shortened version of the hash is often shown when using:

```bash
git log --oneline
```

For example:

```text
a7c92ef Add Git commit documentation
```

Here:

```text
a7c92ef
```

is the shortened commit ID.

## Commits Help Track Changes

Because Git keeps commits, I can see:

* what was changed;
* when it was changed;
* who made the change;
* why the change was made;
* which version came before or after it.

This becomes extremely useful when several developers are working on the same project.

## Commits Can Help Recover Earlier Work

Since commits act as checkpoints, Git can help developers return to or inspect earlier versions of a project.

For example:

```text
Version 1 → Working correctly
Version 2 → New feature added
Version 3 → Bug introduced
```

Because Git recorded each stage, a developer can investigate earlier commits to understand when the problem appeared.

This is one of the major advantages of version control.

## Commit vs Push

A **commit** and a **push** are not the same thing.

A commit records changes in the Git repository on my computer.

A push sends those commits to a remote repository such as GitHub.

```text
My Computer                     GitHub

Edit
 ↓
Save
 ↓
git add
 ↓
git commit
 ↓
Local Git History
        |
        | git push
        ↓
                           GitHub Repository
```

This means I can create several commits locally before pushing them to GitHub.

For example:

```bash
git commit -m "Add introduction"
git commit -m "Add installation steps"
git commit -m "Fix Markdown formatting"

git push
```

The push can upload all of those new commits to GitHub.

## A Simple Way to Think About Commits

I can compare Git commits to checkpoints while playing a game.

Without checkpoints, if something goes wrong, it can be difficult to know where the problem started.

With checkpoints, I can see my progress:

```text
Checkpoint 1
Started project

Checkpoint 2
Added homepage

Checkpoint 3
Added navigation

Checkpoint 4
Fixed navigation bug
```

Git commits work in a similar way.

Each commit records meaningful progress in the development of a project.

## Best Practices for Commits

When creating commits, I should try to:

* commit meaningful changes;
* write clear commit messages;
* avoid vague messages such as `"stuff"` or `"update"`;
* check my changes with `git status`;
* stage only the files I want to commit;
* commit regularly instead of waiting until many unrelated changes have accumulated.

A good commit should make it easy to answer:

> **What changed in this commit?**

## Key Takeaway

A **Git commit is a recorded checkpoint of changes in a project**.

Commit messages explain what those changes represent, while Git connects each commit together to create the history of the project.

The important workflow to remember is:

```text
Edit
 ↓
Save
 ↓
Check
 ↓
Stage
 ↓
Commit
 ↓
Push
```

Or:

```bash
git status
git add .
git commit -m "Describe the change"
git push
```

The three most important ideas are:

**Commit = record the change.**

**Commit message = explain the change.**

**Commit history = show how the project developed over time.**
