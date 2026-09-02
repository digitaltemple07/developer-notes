# Running the Website Locally

## What Does Running Locally Mean?

Running the website locally means starting the application on my own computer instead of viewing only the deployed version on the internet.

This allows me to develop and test changes before they are pushed or deployed.

---

## Starting the Development Server

From inside the project directory:

```text
C:\Users\hp\Documents\africa-consciousness-hub
```

I ran:

```powershell
npm run dev
```

The project started successfully using Vite and displayed:

```text
Local:   http://localhost:8080/
Network: http://192.168.1.9:8080/
```

I opened the local address in my browser and confirmed that the NBCM website was running successfully from my computer.

---

## Understanding `localhost`

`localhost` refers to my own computer.

Therefore:

```text
http://localhost:8080/
```

means that the website is being served by a development server running on my computer through port `8080`.

The basic process is:

```text
NBCM Source Code
       ↓
npm run dev
       ↓
Vite Development Server
       ↓
localhost:8080
       ↓
Web Browser
```

---

## Stopping the Development Server

The development server continues running while the terminal process is active.

I can stop it from the terminal with:

```text
Ctrl + C
```

Stopping the development server does **not** delete or damage the project files.

I can start it again later with:

```powershell
npm run dev
```

---

## Key Lesson

My basic local-development workflow is:

```powershell
cd ~/Documents/africa-consciousness-hub
npm install
npm run dev
```

`npm install` installs the required packages, while `npm run dev` starts the development server so I can test the website locally.
