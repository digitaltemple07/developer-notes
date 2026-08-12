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

```
Private Key + Public Key
```
Both keys work together.