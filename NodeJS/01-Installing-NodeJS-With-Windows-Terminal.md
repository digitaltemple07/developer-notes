# Installing Node.js Using Windows Terminal

## Introduction

Node.js is a **JavaScript runtime** that makes it possible to execute JavaScript outside a web browser.

Normally, JavaScript runs inside browsers such as Chrome, Edge, or Firefox.

Node.js allows JavaScript to run directly on a computer or server.

For example:

```text
JavaScript
    ↓
Node.js
    ↓
Operating System
```

Node.js is heavily used for:

- Backend development
- Web servers
- APIs
- Command-line applications
- Development tools
- Package management
- React/Vite development
- Express applications
- Automation

Node.js also installs important development tools such as:

```text
npm
npx
```

---

## 1. Understanding npm and npx

### npm

**npm** means:

> **Node Package Manager**

It is used to install and manage JavaScript packages.

For example:

```powershell
npm install express
```

npm can install packages such as:

```text
Express
React
Vite
TypeScript
Axios
ESLint
```

Conceptually:

```text
npm
 ↓
Find package
 ↓
Download package
 ↓
Install package
 ↓
Make it available to project
```

### npx

**npx** is commonly described as **Node Package Execute**.

It is primarily used to execute package-provided commands without requiring you to permanently install the tool globally first.

For example:

```powershell
npx create-vite@latest
```

A simple memory aid is:

```text
Node.js → RUN JavaScript

npm     → MANAGE/install packages

npx     → EXECUTE package commands
```

---

## 2. Open Windows Terminal

Press:

```text
Windows Key
```

Search for:

```text
Windows Terminal
```

Open **PowerShell**.

The terminal prompt looked like:

```powershell
PS C:\Users\hp>
```

---

## 3. Check Whether Winget Is Available

Run:

```powershell
winget --version
```

If Winget returns a version number, Windows Package Manager is available.

---

## 4. Search for Node.js

Run:

```powershell
winget search nodejs
```

The LTS version of Node.js can be identified with the package ID:

```text
OpenJS.NodeJS.LTS
```

**LTS** means:

> **Long-Term Support**

It is generally the preferred release line when stability is the priority.

---

## 5. Install Node.js

Run:

```powershell
winget install --id OpenJS.NodeJS.LTS -e
```

The:

```text
-e
```

option means:

```text
--exact
```

Therefore, the command tells Winget:

> Install the package whose exact ID is `OpenJS.NodeJS.LTS`.

---

## 6. Restart Windows Terminal

After installation, close Windows Terminal completely and reopen it.

This is important because an existing terminal session may still contain the environment variables that existed before Node.js was installed.

A newly opened terminal reads the updated **PATH**.

---

## 7. Verify Node.js

Run:

```powershell
node --version
```

The result was:

```text
v24.19.0
```

This confirmed:

```text
Node.js installed ✅
Node executable working ✅
Node accessible through terminal ✅
```

---

## 8. Attempt to Verify npm

The next command was:

```powershell
npm --version
```

Instead of a version number, PowerShell returned an error similar to:

```text
npm.ps1 cannot be loaded because running scripts
is disabled on this system.
```

The error referenced:

```text
C:\Program Files\nodejs\npm.ps1
```

---

## 9. Attempt to Verify npx

The command:

```powershell
npx --version
```

produced a similar error:

```text
npx.ps1 cannot be loaded because running scripts
is disabled on this system.
```

PowerShell was attempting to execute:

```text
C:\Program Files\nodejs\npx.ps1
```

This meant Node.js itself was not the problem.

Instead, PowerShell's **Execution Policy** was preventing `.ps1` scripts from running.

---

## 10. Understanding Why Node Worked but npm Failed

Node.js itself runs through an executable:

```text
node.exe
```

located approximately at:

```text
C:\Program Files\nodejs\node.exe
```

The PowerShell Execution Policy does not treat this as a PowerShell script.

Therefore:

```powershell
node --version
```

worked.

However, when PowerShell resolved:

```powershell
npm
```

it found:

```text
npm.ps1
```

and when it resolved:

```powershell
npx
```

it found:

```text
npx.ps1
```

Because these are `.ps1` PowerShell scripts, the Execution Policy applied to them.

The difference can be visualized as:

```text
node
 ↓
node.exe
 ↓
Executable program
 ↓
Allowed ✅
```

While:

```text
npm
 ↓
npm.ps1
 ↓
PowerShell script
 ↓
Restricted Execution Policy
 ↓
Blocked ❌
```

---

## 11. Check the Current Execution Policy

Run:

```powershell
Get-ExecutionPolicy
```

The result was:

```text
Restricted
```

This explained why PowerShell scripts could not execute.

---

## 12. Inspect All Execution Policy Scopes

Run:

```powershell
Get-ExecutionPolicy -List
```

The initial result was:

```text
        Scope ExecutionPolicy
        ----- ---------------
MachinePolicy       Undefined
UserPolicy          Undefined
Process             Undefined
CurrentUser         Undefined
LocalMachine        Undefined
```

Although every displayed scope contained:

```text
Undefined
```

the effective policy reported by:

```powershell
Get-ExecutionPolicy
```

was:

```text
Restricted
```

So no explicit policy had been configured in those scopes, and Windows PowerShell was using its applicable default behavior.

---

## 13. See Exactly What PowerShell Finds for npm

Run:

```powershell
Get-Command npm -All
```

The result showed:

```text
CommandType       Name
-----------       ----
ExternalScript    npm.ps1
Application       npm.cmd
Application       npm
```

This was a very useful diagnostic result.

It proved that npm was actually installed.

PowerShell could see:

```text
npm.ps1
npm.cmd
npm
```

Therefore, the problem was **not**:

```text
npm missing ❌
```

and it was **not**:

```text
PATH broken ❌
```

Instead:

```text
npm exists
   ↓
PowerShell selects npm.ps1
   ↓
npm.ps1 is a PowerShell script
   ↓
Restricted policy blocks it
```

---

## 14. Change the CurrentUser Execution Policy

Rather than disabling Execution Policy protection system-wide, the policy was changed only for the current Windows user.

The command used was:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Breaking Down the Command

#### `Set-ExecutionPolicy`

```powershell
Set-ExecutionPolicy
```

means:

> Change PowerShell's Execution Policy setting.

#### `-ExecutionPolicy RemoteSigned`

```powershell
-ExecutionPolicy RemoteSigned
```

means:

> Set the new policy to `RemoteSigned`.

#### `-Scope CurrentUser`

```powershell
-Scope CurrentUser
```

means:

> Apply this setting only to the currently logged-in Windows user.

Therefore:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

can be read almost like English:

> Set the PowerShell Execution Policy to RemoteSigned for the current user.

---

## 15. Understanding PowerShell Execution Policies

PowerShell provides several Execution Policy options.

### Restricted

```text
Restricted
```

PowerShell scripts are prevented from running.

Commands and executable programs can still work, but `.ps1` scripts are blocked.

This was the policy responsible for blocking:

```text
npm.ps1
npx.ps1
```

---

### RemoteSigned

```text
RemoteSigned
```

Locally created PowerShell scripts can normally run.

Scripts downloaded from the internet are subject to additional trust and signing requirements.

Conceptually:

```text
Locally created script
        ↓
Can normally run ✅
```

While:

```text
Downloaded script
        ↓
Additional trust/signing checks
        ↓
Run or Block
```

This provides a useful balance between security and development convenience.

---

### AllSigned

```text
AllSigned
```

PowerShell scripts generally need to be digitally signed by a trusted publisher before they can run.

Conceptually:

```text
PowerShell Script
        ↓
Is it properly signed?
        ↓
 YES             NO
  ↓               ↓
Run ✅          Block ❌
```

This is more restrictive and is often more appropriate in tightly controlled environments.

---

### Unrestricted

```text
Unrestricted
```

Unsigned scripts can generally run.

Scripts downloaded from the internet may still generate warnings.

This provides less protection than `RemoteSigned`.

---

### Bypass

```text
Bypass
```

PowerShell essentially does not apply normal Execution Policy blocking or warnings.

Conceptually:

```text
PowerShell Script
        ↓
Execution Policy checks bypassed
        ↓
Run
```

This may be useful in specific controlled automation situations, but it is generally unnecessary for normal Node.js development.

---

### Undefined

```text
Undefined
```

`Undefined` means that no Execution Policy has been explicitly configured at that particular scope.

PowerShell then checks other scopes or falls back to its applicable default behavior.

---

### Execution Policy Comparison

| Policy         | Basic Meaning          | Typical Behavior                             |
| -------------- | ---------------------- | -------------------------------------------- |
| `Restricted`   | Scripts blocked        | `.ps1` scripts cannot normally run           |
| `RemoteSigned` | Local scripts allowed  | Downloaded scripts receive additional checks |
| `AllSigned`    | Signed scripts only    | Scripts generally require trusted signatures |
| `Unrestricted` | Most scripts allowed   | Internet scripts may generate warnings       |
| `Bypass`       | Policy checks bypassed | No normal Execution Policy blocking          |
| `Undefined`    | Nothing configured     | PowerShell checks another scope/default      |

For this Node.js development environment, the chosen policy was:

```text
RemoteSigned
```

and it was applied only to:

```text
CurrentUser
```

---

## 16. Verify the New Execution Policy

Run:

```powershell
Get-ExecutionPolicy
```

The result was:

```text
RemoteSigned
```

Success.

Then run:

```powershell
Get-ExecutionPolicy -List
```

The result showed:

```text
        Scope ExecutionPolicy
        ----- ---------------
MachinePolicy       Undefined
UserPolicy          Undefined
Process             Undefined
CurrentUser      RemoteSigned
LocalMachine        Undefined
```

The important change was:

```text
CurrentUser
```

from:

```text
Undefined
```

to:

```text
RemoteSigned
```

No system-wide policy needed to be changed.

---

## 17. Verify npm Again

Run:

```powershell
npm --version
```

Result:

```text
11.17.0
```

Therefore:

```text
npm installed ✅
npm accessible ✅
PowerShell permits npm.ps1 ✅
```

---

## 18. Verify npx Again

Run:

```powershell
npx --version
```

Result:

```text
11.17.0
```

Therefore:

```text
npx installed ✅
npx accessible ✅
PowerShell permits npx.ps1 ✅
```

---

## 19. Final Verification

The three main commands can now be checked together:

```powershell
node --version
npm --version
npx --version
```

The system returned:

```text
Node.js    v24.19.0
npm        11.17.0
npx        11.17.0
```

The installation was therefore successful.

```text
Node.js    ✅
npm        ✅
npx        ✅
PATH       ✅
PowerShell ✅
```

---

## 20. Understanding Node.js and PATH

The normal Node.js installation directory on Windows is:

```text
C:\Program Files\nodejs\
```

Inside that folder are files such as:

```text
node.exe
npm
npm.cmd
npm.ps1
npx
npx.cmd
npx.ps1
```

**PATH** tells Windows which directories it should automatically search when a command is entered.

Instead of having to type:

```powershell
"C:\Program Files\nodejs\node.exe" --version
```

we can simply enter:

```powershell
node --version
```

because:

```text
C:\Program Files\nodejs\
```

has been made accessible through PATH.

The process is:

```text
You type:

node

   ↓

Windows checks PATH

   ↓

C:\Program Files\nodejs\

   ↓

Finds node.exe

   ↓

Runs Node.js
```

---

## 21. Find the Node Executable

To determine exactly where Windows is finding Node.js, use:

```powershell
where.exe node
```

An expected result is:

```text
C:\Program Files\nodejs\node.exe
```

You can also check npm:

```powershell
where.exe npm
```

and npx:

```powershell
where.exe npx
```

---

## 22. Inspect PATH in PowerShell

To display PATH:

```powershell
$env:Path
```

Because the output can be difficult to read, split each entry onto its own line:

```powershell
$env:Path -split ';'
```

To search specifically for Node.js:

```powershell
$env:Path -split ';' | Select-String "nodejs"
```

A successful result should include something similar to:

```text
C:\Program Files\nodejs\
```

---

## 23. Complete Troubleshooting Journey

The entire process can be summarized as:

```text
Install Node.js with Winget
          ↓
Node.js installed
          ↓
Node.js added to PATH
          ↓
node --version
          ↓
v24.19.0 ✅
          ↓
npm --version
          ↓
npm.ps1 blocked ❌
          ↓
npx --version
          ↓
npx.ps1 blocked ❌
          ↓
Inspect Execution Policy
          ↓
Restricted
          ↓
Inspect npm commands
          ↓
npm.ps1
npm.cmd
npm
          ↓
npm is installed ✅
          ↓
Change CurrentUser policy
          ↓
RemoteSigned
          ↓
npm --version
          ↓
11.17.0 ✅
          ↓
npx --version
          ↓
11.17.0 ✅
```

---

## 24. Commands Learned During This Exercise

### Check Windows Package Manager

```powershell
winget --version
```

Checks whether Windows Package Manager is available.

---

### Search for Node.js

```powershell
winget search nodejs
```

Searches Winget for Node.js packages.

---

### Install Node.js LTS

```powershell
winget install --id OpenJS.NodeJS.LTS -e
```

Installs the Long-Term Support version of Node.js.

---

### Check Node.js

```powershell
node --version
```

Checks the installed Node.js version.

---

### Check npm

```powershell
npm --version
```

Checks the installed npm version.

---

### Check npx

```powershell
npx --version
```

Checks the installed npx version.

---

### Check the Effective Execution Policy

```powershell
Get-ExecutionPolicy
```

Displays the currently effective PowerShell Execution Policy.

---

### Check All Execution Policy Scopes

```powershell
Get-ExecutionPolicy -List
```

Displays Execution Policies for all PowerShell scopes.

---

### Inspect npm Commands

```powershell
Get-Command npm -All
```

Displays every command PowerShell can resolve for `npm`.

---

### Change the Current User Execution Policy

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Sets `RemoteSigned` for the current Windows user.

---

### Find Node.js on the Computer

```powershell
where.exe node
```

Finds the physical location of `node.exe`.

---

### Display PATH Entries Individually

```powershell
$env:Path -split ';'
```

Displays PATH directories one per line.

---

### Search PATH for Node.js

```powershell
$env:Path -split ';' | Select-String "nodejs"
```

Checks whether the Node.js installation directory appears in PATH.

---

## 25. What I Learned

This exercise taught me more than simply how to install Node.js.

I learned the relationship between:

```text
Windows Terminal
      │
      ├── PowerShell
      │
      ├── PATH
      │
      ├── Execution Policy
      │
      └── Commands
              │
              ├── node
              ├── npm
              └── npx
```

Most importantly, I learned an important troubleshooting habit:

> **Don't immediately reinstall software just because a command fails.**

Instead, investigate:

```text
1. Is the application installed?
          ↓
2. Can Windows find it?
          ↓
3. Is its folder in PATH?
          ↓
4. What executable or script is being selected?
          ↓
5. Is Windows or PowerShell blocking it?
          ↓
6. Change only what actually needs changing.
```

This troubleshooting approach will become increasingly valuable when working with:

- Git
- Node.js
- npm
- Python
- Databases
- Compilers
- Development tools
- Servers
- Command-line applications

---

## Conclusion

Node.js was successfully installed through Windows Terminal using Winget.

The Node.js executable worked immediately, but npm and npx initially failed because PowerShell's effective Execution Policy was `Restricted`.

After diagnosing the issue using:

```powershell
Get-ExecutionPolicy
Get-ExecutionPolicy -List
Get-Command npm -All
```

the Execution Policy for the current user was changed to:

```text
RemoteSigned
```

using:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

After the change:

```powershell
node --version
npm --version
npx --version
```

all worked successfully.

The final development environment was:

```text
Node.js    v24.19.0 ✅
npm        11.17.0 ✅
npx        11.17.0 ✅
PATH                ✅
PowerShell           ✅
```

This completes the installation and configuration of Node.js on Windows using Windows Terminal.
