# Editing Files in Git and GitHub

Editing a file simply means **changing or updating the contents of an existing file** in a repository.

A file can be edited directly on the GitHub website or locally on a computer using an editor such as Visual Studio Code.

## Editing a File Locally

The basic process is:

1. Open the repository in VS Code.
2. Open the file you want to modify.
3. Make the necessary changes.
4. Save the file.
5. Use Git to record and upload the changes.

The Git workflow is:

```bash
git status
git add .
git commit -m "Describe the changes"
git push
```

## What Each Step Means

* **Edit** — modify the contents of the file.
* **Save** — save the changes on the computer.
* **`git status`** — check which files have changed.
* **`git add`** — stage the changes for the next commit.
* **`git commit`** — record the changes in Git history.
* **`git push`** — upload the commits to GitHub.
* **`git pull`** - Gets changes from the remote repository.
* **`git log`** - Shows recent commit history.

## Editing Forked Repositories

Files inside a repository that I have forked can also be edited because the fork is my own copy of the original repository.

Changes made to my fork do not automatically affect the original repository.

If I want my changes to be added to the original project, I can later submit them through a **Pull Request**.

## Key Takeaway

Editing changes the contents of a file, while a commit records those changes in Git history.

A simple workflow to remember is:

**Edit → Save → Status → Add → Commit → Push**
