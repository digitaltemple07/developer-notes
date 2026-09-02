# Setting Up Node.js

## What Is Node.js?

**Node.js** allows JavaScript to run outside the browser. For this project, I needed Node.js on my computer so I could install the project's dependencies and run the NBCM website locally.

Node.js also installs **npm (Node Package Manager)**, which is used to manage JavaScript packages.

---

## Checking Whether Node.js Was Installed

I first checked Node.js with:

```powershell
node -v
```

Initially, Windows did not recognize the `node` command because Node.js was not installed.

After installing Node.js, I ran the command again:

```powershell
node -v
```

and received:

```text
v24.19.0
```

I then checked npm:

```powershell
npm -v
```

After resolving a Windows PowerShell execution-policy issue, npm returned:

```text
11.17.0
```

This confirmed that both Node.js and npm were available.

---

## PowerShell Issue I Encountered

When I initially ran:

```powershell
npm -v
```

PowerShell reported that `npm.ps1` could not be loaded because script execution was disabled.

I resolved this for my Windows user account with:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Afterward:

```powershell
npm -v
```

worked successfully.

---

## Key Lesson

Before working with a Node.js project, I can verify my environment with:

```powershell
node -v
npm -v
```

If both commands return version numbers, Node.js and npm are available on my system.
