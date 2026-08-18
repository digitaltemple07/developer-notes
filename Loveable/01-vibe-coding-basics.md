# Vibe Coding with Lovable

## 1. What Is Vibe Coding?

Vibe coding is an AI-assisted approach to software development where a developer describes what they want to build or change using natural language, and an AI system generates or modifies the underlying code.

Instead of manually writing every line of code from the beginning, I can describe the desired application, feature, layout, or behavior and allow an AI development tool such as **Lovable** to help implement it.

A simplified workflow looks like:

Idea
  ↓
Natural-Language Prompt
  ↓
AI Interprets Requirements
  ↓
Code Is Generated or Modified
  ↓
Preview
  ↓
Review and Test
  ↓
Refine the Prompt
  ↓
Repeat

Vibe coding therefore changes some of the interaction between the developer and the code, but it does not eliminate the need to understand software development.

---

## 2. What Is Lovable?

Lovable is an AI-assisted web development platform that can generate and modify web applications based on natural-language instructions.

Instead of starting with an empty codebase, I can describe the application I want and use Lovable to create an initial implementation.

I can then continue the development process by asking Lovable to:

- create pages;
- modify layouts;
- add components;
- change content;
- update navigation;
- improve responsive design;
- add functionality;
- fix certain errors;
- and refine existing features.

Lovable also provides a visual preview, allowing me to inspect changes while developing the application.

---

## 3. How I Used Lovable

My first practical experience with Lovable was building the NBCM website.

I began with an idea and a detailed description of what the website should represent, its purpose, content, design direction, and functionality.

The process was approximately:

Website Idea
     ↓
Project Requirements
     ↓
Prompt Lovable
     ↓
Initial Website Generated
     ↓
Preview Website
     ↓
Identify Improvements
     ↓
Give Additional Prompts
     ↓
Lovable Modifies Code
     ↓
Review Again

This allowed me to move from an idea to a functioning web application much faster than building every part manually from scratch.

---

## 4. Vibe Coding Is an Iterative Process

One important thing I learned is that a good application is rarely produced from one prompt.

The process is iterative.

For example:

Prompt 1
   ↓
Generate initial page
   ↓
Review result
   ↓
Prompt 2
   ↓
Correct design/content
   ↓
Review result
   ↓
Prompt 3
   ↓
Add functionality
   ↓
Test
   ↓
Continue improving

Each prompt should move the application closer to the intended result.

This means I need to inspect what the AI produces instead of automatically accepting every generated change.

---

## 5. The Importance of Clear Prompts

The quality of AI-assisted development depends heavily on the quality of the instructions I provide.

A vague prompt such as:

> Add a new page.

does not provide enough information about what the page should contain or how it should behave.

A better request describes:

- the page name;
- its purpose;
- its URL/route;
- required sections;
- content requirements;
- navigation location;
- visual style;
- functionality;
- responsive behavior;
- existing components to reuse;
- and things that should not be changed.

For example:

> Create an "Our Mission" page at `/about/mission`. Reuse the existing navigation, footer, typography, colors and design system. Add the page to the About menu. Make it responsive and do not redesign unrelated pages.

This gives the AI clearer boundaries.

Detailed prompt-writing techniques are documented separately in:

`02-writing-good-prompts.md`

---

## 6. Tell the AI What NOT to Change

An important lesson I learned is that prompts should contain both **positive requirements** and **constraints**.

For example:

- Do not redesign the homepage.
- Do not change the existing color palette.
- Do not modify unrelated pages.
- Do not remove existing functionality.
- Reuse existing components where possible.
- Do not install unnecessary dependencies.

Without constraints, an AI system may make additional changes that were not part of my original intention.

This makes reviewing the generated changes especially important.

---

## 7. Vibe Coding Does Not Replace Testing

A feature appearing correctly in the Lovable preview does not automatically mean the entire application is correct.

Generated changes should still be checked for:

- broken links;
- navigation problems;
- TypeScript errors;
- broken imports;
- mobile responsiveness;
- accessibility issues;
- unexpected changes to other pages;
- build errors;
- and incorrect functionality.

The workflow should therefore be:

Generate
   ↓
Inspect
   ↓
Test
   ↓
Fix
   ↓
Test Again

not simply:

Generate
   ↓
Assume Everything Works

---

## 8. Vibe Coding and Source Code

Although Lovable allows me to interact with the project through natural language, the result is still a real software project containing source code.

That distinction is important.

Behind the visual interface are files containing components, routes, configuration, dependencies, styling, and application logic.

Therefore:

Vibe Coding
     ≠
No Coding Knowledge Required

A better way for me to think about it is:

Vibe Coding
     +
Programming Knowledge
     +
Testing
     +
Version Control
     =
More Effective AI-Assisted Development

The more I understand the underlying technologies, the better I can evaluate what the AI produces.

---

## 9. Taking Ownership of AI-Generated Code

One of my main goals is to avoid treating AI-generated code as a black box.

If AI generates an application for me, I should gradually learn:

- where the files are located;
- what the important files do;
- how components work;
- how routing works;
- how dependencies are managed;
- how the application runs locally;
- how to debug problems;
- how to modify the code manually;
- and how to manage changes with Git.

This transforms my role from simply being an AI user into someone who can increasingly understand and maintain the software being created.

---

## 10. Lovable Is Part of a Larger Development Workflow

Lovable does not need to be the only development environment.

For my current workflow, Lovable works together with GitHub, Git, VS Code, Node.js, npm, and Vite.

My workflow can be represented as:

                 LOVABLE
                    │
             Generate / Modify
                    │
                    ▼
                 GitHub
                    │
                 git pull
                    │
                    ▼
                 VS Code
                    │
               Edit / Inspect
                    │
                    ▼
             Local Development
                    │
                npm run dev
                    │
                    ▼
                  Test
                    │
                    ▼
             git add / commit
                    │
                    ▼
                git push
                    │
                    ▼
                 GitHub

This allows AI-assisted development and traditional development tools to work together.

The detailed Lovable/GitHub workflow is documented in:

`03-lovable-github-workflow.md`

---

## 11. Advantages of Vibe Coding

From my experience so far, some advantages include:

- rapid prototyping;
- faster initial development;
- turning ideas into working interfaces quickly;
- easier experimentation with layouts and features;
- reducing repetitive development work;
- making it easier to explore unfamiliar technologies;
- and allowing natural language to become part of the development workflow.

It is particularly useful for moving quickly from an idea to something that can be seen, tested, and improved.

---

## 12. Limitations and Risks

Vibe coding also has limitations.

AI-generated code may:

- contain errors;
- misunderstand requirements;
- modify things that were not supposed to change;
- introduce unnecessary code;
- create duplicate components;
- introduce dependencies that are not needed;
- produce code I do not yet understand;
- or create functionality that appears correct visually but fails technically.

For this reason, AI-generated changes should not automatically be trusted simply because they look correct.

I still need to review and test the application.

---

## 13. My Current Approach to Vibe Coding

My goal is not:

> "Let AI do all the programming for me."

My goal is:

> "Use AI to accelerate development while using the project to improve my own understanding of software development."

I want to gradually become capable of understanding, modifying, debugging, and maintaining the code whether or not Lovable is available.

---

## 14. Key Lesson

The most important lesson I have learned about vibe coding is:

> **AI can accelerate the creation of software, but the developer remains responsible for understanding the requirements, reviewing the result, testing the application, managing the source code, and deciding what should ultimately be accepted.**

Lovable helps me build faster.

Git helps me track what changed.

GitHub helps me store and synchronize the project.

VS Code allows me to work directly with the source code.

Node.js, npm, and Vite allow me to run and test the application locally.

Learning how these tools work together is helping me move from simply generating applications with AI toward understanding the complete development process.