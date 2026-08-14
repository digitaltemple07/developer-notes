# SSH Authentication Learning Journal

## 📚 Topic: SSH Authentication with GitHub

**Learning Stage:** Beginner  
**Status:** ✅ Completed

---

## 🎯 Learning Objective

The goal of this lesson was to understand how SSH authentication works and how to securely connect my local computer to GitHub.

By the end of this lesson, I wanted to understand how to:

- Understand what SSH means
- Understand authentication
- Understand public and private keys
- Generate an SSH key pair
- Locate my SSH keys
- Add my public key to GitHub
- Test my SSH connection
- Understand SSH repository URLs
- Push code to GitHub using SSH
- Protect my private key

---

# 1. What Is SSH?

SSH stands for:

**Secure Shell**

SSH is a secure communication method that allows one computer to connect to another computer or remote service over a network.

In my GitHub workflow, SSH allows my computer to securely communicate with GitHub.

Instead of repeatedly entering a username and password, SSH uses cryptographic keys to verify my identity.

A simple way I understand it is:


```text
My Computer
     ↓
SSH Authentication
     ↓
GitHub
``` 

SSH helps GitHub answer the question:

> "Is this really Ken's computer?"

# 2. What Is Authentication?

Authentication means proving who I am.

For example, when logging into a website, I may authenticate using:

- Username
- Password
- PIN
- Fingerprint
- Face recognition
- Security key

With GitHub SSH authentication, I authenticate using an SSH key pair.

The key pair consists of:

```text
Private Key + Public Key
```
Both keys work together.

# 3. Why GitHub Uses SSH

GitHub repositories can be accessed using different methods.

Two common methods are:
- HTTPS
- SSH


An HTTPS repository URL may look like:

```text
https://github.com/username/repository.git
```
When SSH is properly configured, I can use commands such as:

```bash
git pull
```
and:

```bash
git push
```
without entering my GitHub password every time

# 4. Understanding Public and Private Keys

This was one of the most important concepts I learned.

SSH creates two related keys:

```bash
Private Key
Public Key
```
They work together but have very different purposes.

### 🔐 Private Key

The private key stays on my computer.

Example:

```text
id_ed*55*9
```
The private key must remain secret.

I should:

- Never upload it to GitHub
- Never send it to anyone
- Never paste it into a website
- Never commit it into a repository
- Never share screenshots containing it

The private key proves that my computer owns the matching public key.

### 🔓 Public Key

The public key can be shared.

Example:

```bash
id_ed255433.pub
```

This is the key i add to GitHub.
GitHub stores the public key and use it to verify my computer.

# 5. Simple Public and Private Key Analogy

A simple way I understand SSH authentication is to imagine a lock and a key.

```type
GitHub
  │
  │ stores
  ↓
Public Key
```
My computer keeps: 

```bash
Private Key
```
When my computer tries to connect, GitHub checks whether my private key matches the public key stored in my GitHub account.

If they match:

```
Access Granted ✅
```
If they do not match:

```
Access Denied ❌
```
# 6. The Most Important Security Rule

The public key can be shared. The private key must remain private.

I should remember:

```text
PUBLIC KEY  → Share with GitHub
PRIVATE KEY → Keep on my computer
```
This is one of the most important SSH security concepts.

7. Checking Whether SSH Already Exists

Before generating a new SSH key, I can check the `.ssh` directory.

In PowerShell:

```bash
ls ~/.ssh
```
The `~` symbol represents my home directory.

On Windows, this normally points to something similar to:

```type
C:\Users\MyUsername
```

Therefore: 

```bash
~/.ssh
```
may represent: 

```
C:\Users\MyUsername\.ssh
```

# 8. Generating an SSH Key

I generated an SSH key using:

```bash
ssh-keygen -t ed25519 -C "my-email@example.com"
```

Breaking this command down: 

```bash
ssh-keygen
```
means: 

> Generate an SSH key.

The option:

```bash
-t ed25519
```
specifies the type of cryptographic key.

The option:

```bash
-C "my-email@example.com"
```
adds a comment to help identify the key.

# 9. What Happened After Running ssh-keygen

After running:

```bash
ssh-keygen -t ed25519 -C "my-email@example.com"
```
I was asked where the key should be saved.

The default location normally looks similar to:

```bash
C:\Users\MyUsername\.ssh\id_ed25519
```

Pressing:

```type
Enter
```
accepts the default location.

# 10. SSH Passphrase

SSH may also ask me to create a passphrase.

A passphrase provides an additional layer of protection for the private key.

The idea is:

```type
Private Key
    +
Passphrase
    =
More Security
```
A passphrase is different from my GitHub password.

It protects the SSH private key stored on my computer.

# 11. Files Created by SSH

After generating the key, two files are created.

Example:

```type
id_ed25519
id_ed25519.pub
```
Their purpose is:

| File | Purpose |
|------|---------|
| `id_ed*55*9` | Private SSH key |
| `id_ed25519.pub` | Public SSH key | 

The most important difference is:

```bash
id_ed25519      → SECRET
id_ed25519.pub  → SHAREABLE
```
# 12. Viewing My Public SSH Key

To view my public key in PowerShell, I can use:

```bash
Get-Content ~/.ssh/id_ed25519.pub
```
Another possible command is:

```bash
cat ~/.ssh/id_ed25519.pub
```

The output normally begins with something similar to:

```bash
ssh-ed25519
```
and ends with the email or comment I used when creating the key.

# 13. Adding the SSH Key to GitHub

Once I copied my public key, I added it to my GitHub account.

The process is approximately:

```bash
GitHub
   ↓
Settings
   ↓
SSH and GPG keys
   ↓
New SSH key
   ↓
Add public key
```
I gave the key a meaningful title so that I could identify the computer.

For example:

```type
HP Laptop
```
Then I pasted the contents of:

```bash
id_ed25519.pub
```
into GitHub.

# 14. Why I Should Give SSH Keys Clear Names

A GitHub account may eventually contain several SSH keys.

For example:

```bash
Personal Laptop
Work Laptop
Desktop Computer
Development Server
```
Giving keys descriptive names helps me identify which device each key belongs to.

This becomes more important as I work with more computers and servers.

# 15. Testing My SSH Connection

After adding the public key to GitHub, I tested the connection using:

```bash
ssh -T git@github.com
```
This command asks GitHub:

> Can my computer authenticate using SSH?

The first time I connected, SSH may ask whether I trust GitHub's host.

A message may appear asking me to confirm the connection.

I can type:

```
yes
```
if I am connecting to the legitimate GitHub service and have verified the host information where appropriate.

# 16. Successful SSH Authentication

When the SSH connection works correctly, GitHub returns a success message indicating that authentication succeeded.

This means:
```bash
My Computer
     ↓
Private SSH Key
     ↓
GitHub checks Public Key
     ↓
Keys Match
     ↓
Authentication Successful ✅
```
At this point, my computer is successfully authenticated with GitHub.

# 17. SSH Authentication vs Git Authorization

An important concept is that authentication and authorization are related but different.

Authentication asks:

> Who are you? 

Authorization  asks: 

> What are you allowed to do?

SSH proves my identity.

GitHub then determines whether my account has permission to:

- Read a repository
- Clone a repository
- Push changes
- Manage a repository

So:

```
Authentication = Who are you?
Authorization  = What can you do?
```
# 18. SSH Repository URLs

When using SSH, GitHub repository addresses usually follow this format:

```
git@github.com:username/repository.git
```
For Example: 

```
git@github.com:digitaltemple07/developer-notes.git
```
This tells Git to communicate with GitHub using SSH authentication.

# 19. Checking My Git Remote

I can check the remote repository configured for my project using:

```bash
git remote -v
```
An SSH-configured repository may display:

```
origin  git@github.com:username/repository.git (fetch)
origin  git@github.com:username/repository.git (push)
```
This tells me that Git is using SSH for the remote connection.

# 20. What Is origin?

When I run:

```bash
git remote -v
```
I may see:

```
origin
```
`origin` is simply the default nickname Git normally gives to the remote repository.

For example:

```
origin
   ↓
git@github.com:digitaltemple07/developer-notes.git
```
Instead of repeatedly typing the full repository address, Git can refer to it as:

```
origin
```
# 21. Local Repository vs Remote Repository

Another concept I learned is the difference between local and remote repositories.

My local repository exists on my computer.

Example:

```
C:\Users\hp\Documents\developer-notes
```
The remote repository exists on GitHub.

Example:

```
github.com/digitaltemple07/developer-notes
``` 
SSH creates the secure authentication mechanism that allows my local Git repository to communicate with the GitHub repository.

```
LOCAL COMPUTER
developer-notes
      │
      │ SSH
      ↓
GITHUB
developer-notes
``` 
# 22. SSH and git push

After configuring SSH, I can push commits using:
```bash
git push
```
The workflow becomes: 
```
Edit files
    ↓
git add
    ↓
git commit
    ↓
git push
    ↓
SSH Authentication
    ↓
GitHub
```
Git handles my code changes.

SSH handles the secure authentication.

# 23. Git and SSH Are Not the Same Thing

This was another important distinction.

Git is:

> A verson control system.

SSH is: 

> A  secure communication and authentication protocol. 

GitHub  is:  

>  An online pltform that hosts Git  repositories.

Therefore:

``` 
Git
│
│ manages versions
↓
My Repository


SSH
│
│ provides secure authentication
↓
GitHub


GitHub
│
│ stores remote repository
↓
Internet
```
Git can use SSH to communicate securely with GitHub.

# 24. Common SSH Problems
Problem 1: Permission Denied

A common error is:

```
Permission denied (publickey)
```
This may mean:

- The SSH key was not added to GitHub
- The wrong key is being used
- The SSH agent does not know about the key
- The repository URL is incorrect
- The GitHub account does not have repository permission

### Problem 2: Wrong Repository URL

If my remote uses HTTPS:

```
https://github.com/digitaltemple07/repository.git
```
then Git is not using the SSH URL.

An SSH remote should look like:

```
git@github.com:digitaltemple07/repository.git
```
### Problem 3: Accidentally Sharing the Private Key

This is a serious security mistake.

I must NEVER publish:

```
id_ed25519
```
Only this file should be copied to GitHub:

```
id_ed25519.pub
```
# 25. SSH Security Best Practices

I should follow these rules:

- Never share my private key
- Never commit private keys to GitHub
- Use a passphrase when appropriate
- Give SSH keys descriptive names
- Remove old keys from GitHub when a device is no longer used
- Protect access to my computer
- Verify commands before running them
- Keep backups and recovery options secure

# 26. SSH Key Flow

The complete authentication process can be represented like this:

```
Generate SSH Key Pair
        ↓
Private Key created
        ↓
Public Key created
        ↓
Keep Private Key on Computer
        ↓
Copy Public Key
        ↓
Add Public Key to GitHub
        ↓
Test Connection
        ↓
ssh -T git@github.com
        ↓
Authentication Successful
        ↓
Use Git with GitHub
```