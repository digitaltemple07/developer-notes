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