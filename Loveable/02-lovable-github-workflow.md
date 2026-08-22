# Connecting Lovable to GitHub

## 1. Introduction

After creating my NBCM website with Lovable, I wanted to connect the project to GitHub.

This was an important step because I did not want the project to exist only inside Lovable. I wanted access to the source code through GitHub so that I could eventually download the project to my computer, work with it in VS Code, learn Git, and manage the project's development history.

---

## 2. How I Connected Lovable to GitHub

I connected GitHub directly from inside my existing Lovable project.

From the project settings, I navigated to the **Git** section under the project settings and connected my GitHub account/repository.

After the connection was completed, Lovable showed the repository associated with the project and the Git branch being used.

For my NBCM project, the repository was:

`digitaltemple07/africa-consciousness-hub`

and the connected branch was:

`main`

The connection meant that the Lovable project and its GitHub repository could work together as part of the same development workflow.

My setup became:

Lovable Project
      ↓
Git Integration
      ↓
GitHub Repository
      ↓
africa-consciousness-hub
      ↓
main branch

---

## 3. Why I Connected Lovable to GitHub

I connected Lovable to GitHub because I wanted more control and ownership over the project source code.

The connection allows the project to become part of a normal Git-based development workflow rather than remaining only inside an AI development environment.

This gives me the ability to:

- keep the project source code in a Git repository;
- maintain a history of changes through commits;
- access the project outside Lovable;
- clone the repository onto my computer;
- open and modify the source code in VS Code;
- test the application locally;
- push my local changes back to GitHub;
- and learn a real Git/GitHub development workflow.

This created an important connection between the tools I was learning:

Lovable
   ↕
GitHub
   ↕
Git
   ↕
VS Code
   ↕
Local Development

---

## 4. What Is a Git Branch?

A **branch** is an independent line of development inside a Git repository.

A repository can contain multiple branches.

For example:

main
│
├── feature/new-page
│
├── feature/search
│
└── fix/mobile-navigation

Branches allow developers to work on changes without immediately changing the main version of the project.

For example, I could create a branch for a new NBCM page, work on it, test it, and later merge it into the main version of the website.

At this stage of my project, I am primarily working with the `main` branch.

---

## 5. What Does `main` Mean?

`main` is the name commonly used for the primary branch of a Git repository.

In my NBCM repository, `main` represents the primary development history of the project.

When I checked my local branch using:

```bash
git branch
```
Git showed

```bash
* main
```
The `*` indicated that `main` was the branch I was currently working on.

When I later pushed my changes using:

```bash
git push origin main
```
I was telling Git to push my local commits from the `main` branch to the corresponding repository on GitHub.

## 6. What Does `origin` Mean?

`origin` is the conventional name Git gives to the remote repository associated with a local repository, especially when the repository has been cloned.

In my project, I checked the remote using:

```bash
git remote -v
```
and Git showed my GitHub repository as `origin.`

Conceptually:

Local Repository
│
│ origin
▼
GitHub Repository

Therefore, in:

```bash
git push origin main
```
the parts mean:

* `git push` — send my commits to a remote repository;
* `origin` — the name of that remote repository;
* `main` — the branch I want to push.

So I can read:

```bash
git push origin main
```
As:
> Push my local `main` branch to the remote repository called `origin.`

## 7. What I Learned

Connecting Lovable to GitHub helped me understand that Lovable, Git, and GitHub perform different roles.

Lovable helps me generate and modify the application using AI.
Git tracks changes to the source code.
GitHub stores and hosts the Git repository remotely.
VS Code allows me to work directly with the source code on my computer.

Connecting these tools gave me a development workflow where I can use AI-assisted development while still having access to the actual source code and its version history.