# Installing Project Dependencies

## What Are Dependencies?

Dependencies are external packages that a project needs in order to work.

The NBCM source code does not contain every library it uses. Information about the required packages is stored in the project's configuration, including `package.json`.

---

## Installing the Dependencies

First, I made sure my terminal was inside the NBCM project directory:

```powershell
cd ~/Documents/africa-consciousness-hub
```

I then ran:

```powershell
npm install
```

npm installed the packages required by the project.

My installation completed successfully and reported:

```text
found 0 vulnerabilities
```

---

## What `npm install` Does

In simple terms:

```text
package.json
     ↓
npm install
     ↓
npm reads required packages
     ↓
packages are downloaded
     ↓
node_modules/
```

The generated `node_modules` directory contains the installed dependencies needed to run the application locally.

---

## Key Lesson

After cloning a Node.js project from GitHub, the dependencies normally need to be installed before running the application.

For this project, I used:

```powershell
npm install
```

I do not need to download each dependency manually.
