# Writing Effective Prompts for Lovable

## 1. Introduction

One of the most important skills I need when developing applications with Lovable is learning how to communicate my requirements clearly.

Lovable can generate pages, modify components, change content, fix problems, and extend an existing application, but the quality of the result depends heavily on the quality of the instructions I provide.

A vague instruction such as:

> Make my website better.

gives Lovable too much freedom to decide what "better" means.

A more useful instruction explains:

- **WHAT** I want changed;
- **WHERE** the change belongs;
- **WHY** the change is needed;
- **WHAT CONTENT** should appear;
- **HOW** it should look and behave;
- **WHAT EXISTING COMPONENTS** should be reused;
- **WHAT MUST NOT CHANGE**;
- and **HOW I will know the task is complete**.

The goal is not necessarily to write the longest possible prompt.

The goal is to write a prompt that removes unnecessary ambiguity.

---

# 2. My Basic Lovable Prompt Formula

A useful formula I can follow is:

```text
Create/Modify [WHAT]
      ↓
at/in [WHERE]
      ↓
for [PURPOSE]
      ↓
containing [CONTENT]
      ↓
with [FUNCTIONALITY]
      ↓
matching [EXISTING DESIGN]
      ↓
while preserving [WHAT MUST NOT CHANGE]
      ↓
then [TEST/VERIFY]
```

Or in one sentence:

> **Create [WHAT] at [WHERE] for [PURPOSE], containing [CONTENT], with [FUNCTIONALITY], matching [EXISTING DESIGN], while preserving [EXISTING FEATURES], then verify [EXPECTED RESULT].**

This formula can be adapted depending on the type of change I want Lovable to make.

---

# 3. The Anatomy of a Strong Prompt

For larger changes, I can divide my prompt into clearly defined sections.

```text
TASK
PURPOSE
LOCATION / ROUTE
CONTENT
DESIGN
FUNCTIONALITY
REUSE
CONSTRAINTS
RESPONSIVENESS
ACCESSIBILITY
VERIFICATION
```

Not every small prompt needs every section.

For a major page or feature, however, providing this structure makes my requirements much clearer.

---

# 4. Define the Task Clearly

The first part should explain exactly what I want Lovable to do.

Weak:

> Add something about our mission.

Better:

> Create a dedicated "Our Mission" page for NBCM.

Even better:

> Create a new "Our Mission" page for NBCM and integrate it into the existing About section of the website.

The third version provides Lovable with more context about how the page relates to the existing application.

---

# 5. Specify Where the Change Belongs

When creating pages or features, I should explain where they belong.

For pages, this often includes the route.

Example:

```text
PAGE:
Our Mission

ROUTE:
/about/mission

NAVIGATION:
Add "Our Mission" under the existing About menu.
```

This is better than simply saying:

> Add a mission page.

The route communicates where the page should exist within the application's information architecture.

---

# 6. Explain the Purpose

Lovable should understand not only what I want but why the feature exists.

Example:

```text
PURPOSE:

The page should explain NBCM's mission, long-term vision,
educational purpose, civic responsibilities, and commitment
to responsible citizenship.
```

Knowing the purpose helps the AI make better decisions about layout, hierarchy, calls to action, and content presentation.

---

# 7. Define the Content Structure

I should not leave the entire content hierarchy for Lovable to guess.

For example:

```text
PAGE STRUCTURE:

1. Hero
2. Our Mission
3. Our Vision
4. Why NBCM Exists
5. What We Believe
6. Our Commitment
7. Call to Action
```

I can go further and define what each section should contain:

```text
HERO

Eyebrow:
OUR MISSION

Heading:
Building Consciousness Through Education

Supporting text:
A concise introduction explaining NBCM's educational
and civic purpose.

Primary CTA:
Explore Our Work

Secondary CTA:
Become a Member
```

This gives me greater control over the result.

---

# 8. Preserve the Existing Design System

When adding something to an established website, I should not describe the design as though Lovable were building a completely new website.

Instead, I should explicitly tell it to inspect and preserve the existing visual language.

For example:

```text
DESIGN:

Match the existing NBCM design system.

Preserve:
- the dark editorial aesthetic;
- existing gold accent colors;
- current typography;
- serif heading treatment;
- existing spacing system;
- button styles;
- card styles;
- border treatments;
- navigation;
- footer;
- responsive behavior.

The new page should feel like it has always been part of the existing website.
```

That last sentence is particularly useful:

> **The new page should feel like it has always been part of the existing website.**

---

# 9. Reuse Existing Components

Before asking Lovable to create new UI components, I should encourage it to inspect what already exists.

Example:

```text
REUSE:

Inspect the existing project before creating new components.

Reuse the existing:
- Navbar;
- Footer;
- buttons;
- cards;
- section headings;
- containers;
- typography;
- design tokens;

where appropriate.

Do not create duplicate components when an existing component
can reasonably be reused.
```

This helps keep the application consistent and reduces unnecessary duplication.

---

# 10. Tell Lovable What NOT to Change

This is one of the most important lessons I have learned.

A good prompt does not only describe what should change.

It also establishes boundaries.

For example:

```text
CONSTRAINTS:

- Do not redesign the homepage.
- Do not change the existing color palette.
- Do not replace the navigation.
- Do not modify unrelated pages.
- Do not remove existing functionality.
- Do not change existing routes unnecessarily.
- Do not introduce unnecessary dependencies.
- Do not duplicate existing components.
```

This reduces the possibility of Lovable making unrelated changes while implementing my request.

---

# 11. Ask Lovable to Inspect Before Implementing

For larger or potentially risky changes, I can separate **planning** from **implementation**.

Instead of immediately saying:

> Build this feature.

I can first say:

```text
I want to add a new "Our Mission" page at /about/mission.

Before modifying the project, inspect the existing:

- routing structure;
- navigation;
- page layouts;
- reusable components;
- typography;
- design tokens;
- responsive patterns.

Then explain:

1. Which files need to be created.
2. Which existing files need to be modified.
3. Which components can be reused.
4. How the new route should be registered.
5. How the page should be added to navigation.

Do not make changes yet.
Give me the implementation plan first.
```

After reviewing the plan, I can then say:

```text
Proceed with the implementation according to the plan.

Preserve the existing design system and do not modify unrelated functionality.
```

This gives me more visibility into what the AI intends to change.

---

# 12. Example: Creating a Complete New Page

Suppose I want to create an NBCM "Our Mission" page.

A detailed prompt could be:

```text
TASK:

Create a new "Our Mission" page for the Neo Black
Consciousness Movement.

ROUTE:

/about/mission

PURPOSE:

The page should clearly communicate NBCM's mission,
vision, educational purpose, civic responsibilities,
and commitment to responsible citizenship.

NAVIGATION:

Add "Our Mission" under the existing About navigation menu.

PAGE STRUCTURE:

1. Hero
2. Our Mission
3. Our Vision
4. Why We Exist
5. What We Believe
6. Our Commitment
7. Call to Action

DESIGN:

Match the existing NBCM website exactly.

Reuse the current:
- dark editorial visual style;
- gold accents;
- typography;
- spacing;
- buttons;
- containers;
- section headings;
- navigation;
- footer.

The new page should feel like a natural part of the existing website,
not like a separate template.

RESPONSIVENESS:

Ensure the page works correctly on:
- desktop;
- tablet;
- mobile.

ACCESSIBILITY:

Use:
- semantic HTML;
- appropriate heading hierarchy;
- accessible links and buttons;
- sufficient contrast;
- keyboard-friendly interactive elements.

CONSTRAINTS:

- Do not redesign the homepage.
- Do not modify unrelated pages.
- Do not change the global color palette.
- Do not replace existing shared components unnecessarily.
- Do not introduce unnecessary dependencies.
- Preserve all existing functionality.

VERIFICATION:

After implementation:
- check the new route;
- check the navigation link;
- check mobile layout;
- check for broken imports;
- check for TypeScript errors;
- check that existing pages still work.
```

This gives Lovable far more useful information than:

> Create an Our Mission page.

---

# 13. Modifying Existing Content

Not every prompt needs to create a new page.

Often I will want to modify content that already exists.

For example, instead of saying:

> Change the homepage heading.

I can specify exactly what should change.

```text
On the existing homepage hero section, replace only the main heading.

CURRENT:
"The Mind Must Be Free Before the Nation Can Be Free."

NEW:
"Education. Consciousness. Responsible Citizenship."

Do not modify:
- the hero layout;
- background image;
- supporting paragraph;
- CTA buttons;
- typography;
- spacing;
- navigation;
- or any other homepage section.

Only replace the requested heading text.
```

This is a **targeted modification prompt**.

The formula is:

```text
LOCATION
   +
CURRENT CONTENT
   +
NEW CONTENT
   +
WHAT TO PRESERVE
```

---

# 14. Modifying a Paragraph

For text changes, I should identify the exact section.

Example:

```text
On the homepage, locate the introductory paragraph directly
below the hero heading.

Replace its current content with:

"NBCM promotes historical scholarship, civic education,
ethical leadership, constitutional democracy, good governance,
and responsible citizenship across Africa and the African diaspora."

Preserve the existing:
- font;
- font size;
- line height;
- width;
- spacing;
- color;
- responsive behavior.

Do not modify any other content.
```

This prevents a simple content change from becoming an unnecessary redesign.

---

# 15. Modifying a Button

Example:

```text
On the homepage hero, change the primary CTA button text from:

"Learn More"

to:

"Explore Our Mission"

Update its destination to:

/about/mission

Preserve the existing button component, styling, hover effect,
spacing, size, and responsive behavior.

Do not create a new button component.
```

This tells Lovable to modify the **content and behavior**, not redesign the component.

---

# 16. Adding Content Without Redesigning a Page

Suppose I want to add a new section.

Weak:

> Add our principles to the homepage.

Better:

```text
Add a new "Core Principles" section to the homepage.

LOCATION:

Place it after the existing introduction section and before
the next major content section.

CONTENT:

Display six principles:
- Truth
- Integrity
- Justice
- Education
- Responsibility
- Self-Determination

DESIGN:

Use existing card components and section-heading patterns
where appropriate.

Match the current NBCM typography, gold accents, borders,
spacing, and dark background.

Do not redesign the sections above or below it.

Ensure the section stacks appropriately on mobile.
```

---

# 17. Removing Content Safely

Removal prompts should also be precise.

Instead of:

> Remove the newsletter.

Use:

```text
Remove the newsletter signup section from the homepage only.

Do not remove newsletter-related functionality from other pages.

After removing the section:
- close any unnecessary vertical spacing;
- preserve the layout of the surrounding sections;
- do not modify the footer;
- do not change unrelated components.
```

This defines the scope of the removal.

---

# 18. Moving Existing Content

Example:

```text
Move the existing "Our Values" section so that it appears
immediately after the "Our Mission" section.

Do not recreate the section.

Move the existing implementation and preserve:
- its content;
- styling;
- components;
- animations;
- responsive behavior.

Do not modify the section's design.
```

The phrase:

> **Do not recreate the section. Move the existing implementation.**

can prevent unnecessary duplication.

---

# 19. Adding a Navigation Item

Navigation changes should specify hierarchy and destination.

Example:

```text
Add a new navigation item called:

"Our Mission"

under the existing:

"About"

dropdown.

Destination:

/about/mission

Preserve the existing dropdown component, typography,
spacing, hover states, icons, mobile menu behavior,
and accessibility.

Do not modify the order of existing navigation items
unless required to insert "Our Mission".
```

---

# 20. Creating a Reusable Feature

Suppose I want article cards used across multiple pages.

Instead of:

> Create article cards.

I can say:

```text
Create a reusable ArticleCard component for displaying
educational articles.

Each card should support:

- title;
- category;
- publication date;
- short excerpt;
- optional image;
- article URL;
- "Read Article" action.

Before creating it, inspect the existing project for a card component
that can be extended or reused.

The component must match the existing NBCM design system and
work responsively.

Do not duplicate an existing component if it already provides
most of this functionality.
```

This encourages reusable architecture.

---

# 21. Prompting for Responsive Design

I should avoid simply saying:

> Make it responsive.

For important layouts, I can explain the expected behavior.

Example:

```text
RESPONSIVE BEHAVIOR:

Desktop:
Display the three cards in a three-column grid.

Tablet:
Use two columns where space permits.

Mobile:
Stack the cards vertically.

Ensure:
- headings do not overflow;
- buttons remain usable;
- images maintain appropriate aspect ratios;
- horizontal scrolling is not introduced;
- spacing remains consistent with the existing mobile design.
```

This makes "responsive" more concrete.

---

# 22. Prompting for Accessibility

Accessibility should be part of the requirement rather than an afterthought.

Example:

```text
ACCESSIBILITY:

Use semantic HTML where appropriate.

Ensure:
- correct heading hierarchy;
- keyboard-accessible controls;
- visible focus states;
- descriptive link/button labels;
- appropriate image alt text;
- sufficient text/background contrast;
- form fields have associated labels.
```

---

# 23. Prompting Lovable to Fix a Bug

Bug-fixing prompts should describe the **problem**, not prematurely dictate the solution unless I know the cause.

Weak:

> Fix the menu.

Better:

```text
There is a problem with the mobile navigation.

EXPECTED:
When the menu button is tapped, the navigation should open.
Tapping it again should close the menu.

ACTUAL:
The menu opens but does not close when the button is tapped again.

Please investigate the existing mobile navigation implementation,
identify the cause, and make the smallest reasonable change necessary
to fix it.

Preserve the current navigation design and desktop behavior.

After fixing it, verify both opening and closing behavior on mobile.
```

A useful bug-report formula is:

```text
LOCATION
   ↓
EXPECTED BEHAVIOR
   ↓
ACTUAL BEHAVIOR
   ↓
INVESTIGATE
   ↓
MINIMAL FIX
   ↓
PRESERVE EXISTING BEHAVIOR
   ↓
VERIFY
```

---

# 24. Avoid Guessing the Technical Cause

If I do not know why something is broken, I should not pretend that I do.

Instead of:

> The React state is broken. Change `useState`.

I can say:

```text
The mobile menu is not closing correctly.

Please inspect the implementation and determine the actual cause
before modifying it.

Make the smallest reasonable fix and explain what caused the problem.
```

This allows the agent to investigate instead of forcing it toward an incorrect assumption.

---

# 25. Prompting for Visual Improvements

"Make it look better" is subjective.

I should explain what improvement means.

Instead of:

> Make this section more modern.

Use:

```text
Improve the visual hierarchy of the "Featured Research" section.

Keep the existing NBCM design system.

I want:
- clearer separation between the heading and content;
- more consistent card spacing;
- stronger title hierarchy;
- better use of the existing gold accent;
- improved readability on mobile.

Do not:
- change the global color palette;
- introduce gradients;
- replace the existing typography;
- redesign surrounding sections;
- add unnecessary animations.

Preserve the existing content and functionality.
```

---

# 26. Prompting for Images

When adding imagery, I should explain its purpose and treatment.

Example:

```text
Add a supporting image to the "Historical Scholarship" section.

The image should reinforce themes of African history,
education, scholarship, and intellectual inquiry.

Use the existing visual treatment for imagery on the NBCM site.

Ensure:
- the image is responsive;
- it does not dominate the text;
- appropriate alt text is provided;
- the layout remains readable without the image.

Do not modify unrelated sections.
```

---

# 27. Prompting for Forms

Forms require more than appearance.

Example:

```text
Create a contact form on the Contact page.

FIELDS:
- Full Name
- Email Address
- Subject
- Message

REQUIREMENTS:
- all fields except Subject are required;
- validate the email format;
- display clear validation messages;
- provide a clear success state;
- prevent accidental duplicate submissions where appropriate;
- use accessible labels;
- support keyboard navigation.

DESIGN:
Reuse the existing NBCM input, button, typography,
spacing, and color styles where possible.

Do not implement a fake successful submission if no backend
submission mechanism exists. Clearly identify any backend
integration still required.
```

That final instruction is important because **a form that looks functional is not necessarily functional**.

---

# 28. Ask for the Smallest Reasonable Change

For existing applications, I should often prefer targeted changes over broad rewrites.

A useful instruction is:

> **Make the smallest reasonable change necessary to implement this requirement.**

For example:

```text
Fix the alignment problem in the homepage hero on mobile.

Make the smallest reasonable change necessary.

Do not refactor unrelated components or redesign the hero.
```

This can reduce unnecessary changes.

---

# 29. Separate Large Features into Phases

Large prompts can become difficult to review.

Instead of asking:

> Build the entire knowledge platform.

I can divide it into phases.

```text
PHASE 1
Create the Knowledge landing page.

PHASE 2
Create the article card system.

PHASE 3
Create individual article pages.

PHASE 4
Add categories and filtering.

PHASE 5
Add search.

PHASE 6
Connect content to a backend/CMS.
```

Then implement and test each phase before continuing.

This also works well with Git because each meaningful feature can have its own commit.

---

# 30. One Feature at a Time

A useful development principle is:

```text
One Requirement
      ↓
One Controlled Change
      ↓
Review
      ↓
Test
      ↓
Commit
      ↓
Next Requirement
```

This is safer than:

```text
20 Requirements
      ↓
Huge AI Change
      ↓
Something Breaks
      ↓
Difficult to Identify Why
```

---

# 31. Review Before Accepting a Large Change

For important changes, I can ask Lovable to explain its intended approach first.

Example:

```text
Before implementing this feature, inspect the existing codebase.

Tell me:

1. Which files you expect to modify.
2. Which files you expect to create.
3. Which existing components you will reuse.
4. Whether any dependency needs to be installed.
5. Whether any existing route or component may be affected.

Do not implement the change yet.
```

This gives me an opportunity to understand the scope before implementation.

---

# 32. Verification Should Be Part of the Prompt

A prompt should not necessarily end with:

> Create the page.

It can end with:

```text
After implementation, verify:

- the route loads correctly;
- navigation works;
- existing pages still load;
- the desktop layout works;
- the mobile layout works;
- there are no broken imports;
- there are no obvious TypeScript errors;
- existing functionality has not been unintentionally removed.
```

This establishes a definition of done.

---

# 33. Prompt Templates I Can Reuse

## Template A — Create a New Page

```text
Create a new [PAGE NAME] page.

ROUTE:
[ROUTE]

PURPOSE:
[WHY THIS PAGE EXISTS]

CONTENT:
[SECTIONS AND CONTENT]

NAVIGATION:
[WHERE IT SHOULD BE LINKED]

DESIGN:
Match the existing website design system.
Reuse existing components and patterns where appropriate.

FUNCTIONALITY:
[REQUIRED BEHAVIOR]

RESPONSIVENESS:
[DESKTOP / TABLET / MOBILE REQUIREMENTS]

CONSTRAINTS:
- Do not modify unrelated pages.
- Do not change the global design system.
- Do not introduce unnecessary dependencies.
- Preserve existing functionality.

VERIFICATION:
Check the route, navigation, responsive layout,
imports, and relevant errors after implementation.
```

---

## Template B — Modify Existing Content

```text
LOCATION:
[PAGE AND SECTION]

CURRENT:
[CURRENT CONTENT]

CHANGE TO:
[NEW CONTENT]

PRESERVE:
[DESIGN / LAYOUT / FUNCTIONALITY]

Do not modify anything outside this requested content change.
```

---

## Template C — Add a Section

```text
Add a new [SECTION NAME] section to [PAGE].

LOCATION:
Place it [WHERE].

PURPOSE:
[WHY THE SECTION EXISTS]

CONTENT:
[WHAT IT SHOULD CONTAIN]

DESIGN:
Reuse existing section and component patterns.

Do not redesign surrounding sections.

Ensure the new section works on desktop, tablet, and mobile.
```

---

## Template D — Fix a Bug

```text
PROBLEM:
[DESCRIBE THE PROBLEM]

LOCATION:
[WHERE IT OCCURS]

EXPECTED:
[WHAT SHOULD HAPPEN]

ACTUAL:
[WHAT CURRENTLY HAPPENS]

Investigate the existing implementation and identify the cause.

Make the smallest reasonable change necessary to fix it.

Do not modify unrelated functionality.

After fixing it, verify:
[TEST CONDITIONS]
```

---

## Template E — Visual Improvement

```text
Improve the [SECTION/COMPONENT].

CURRENT PROBLEM:
[WHAT LOOKS OR FEELS WRONG]

DESIRED IMPROVEMENT:
[WHAT SHOULD IMPROVE]

PRESERVE:
- existing content;
- existing brand identity;
- global typography;
- color system;
- existing functionality.

Do not redesign unrelated sections.

Ensure the improvement works responsively.
```

---

# 34. A Prompt Checklist

Before sending an important prompt to Lovable, I can ask myself:

### Task
- What exactly am I asking Lovable to do?

### Location
- Which page, component, section, or route is involved?

### Purpose
- Why does this feature/change exist?

### Content
- What information should it contain?

### Design
- Which existing styles should it follow?

### Reuse
- Can existing components be reused?

### Functionality
- What should happen when users interact with it?

### Responsive Design
- How should it behave on smaller screens?

### Accessibility
- Are there accessibility requirements?

### Constraints
- What must Lovable NOT change?

### Verification
- How will I determine whether the change works?

If I cannot answer some of these questions, I may need to think more carefully about the requirement before asking the AI to implement it.

---

# 35. Weak Prompt vs Strong Prompt

## Weak

```text
Make the About page better.
```

Problems:

- "better" is subjective;
- no specific section is identified;
- no design requirements;
- no content requirements;
- no constraints;
- no definition of done.

## Strong

```text
Improve the introductory section of the existing About page.

PURPOSE:
Make NBCM's identity and educational mission clearer to first-time visitors.

CONTENT:
Keep the existing factual meaning, but improve the hierarchy so visitors
can quickly understand:
1. who NBCM is;
2. what NBCM studies and teaches;
3. why the organization exists.

DESIGN:
Preserve the existing NBCM dark editorial design, typography,
gold accents, navigation, footer, and overall page structure.

Do not modify other sections of the About page.

Do not add new dependencies.

Ensure the updated section remains responsive.

After implementation, verify that the page still works correctly
on desktop and mobile.
```

The strong prompt gives the AI a much clearer target.

---

# 36. Important Principle: Prompt for Intent, Not Just Appearance

I should explain the purpose behind a design decision whenever possible.

Instead of:

> Make the heading bigger.

I can say:

> Increase the visual prominence of the section heading so that visitors can immediately distinguish the section title from the supporting text. Preserve the existing typography family and overall design system.

The second instruction explains **why** the change is needed.

This gives Lovable more useful context.

---

# 37. Important Principle: Preserve What Already Works

When improving an existing application, I should distinguish between:

```text
WHAT IS BROKEN
      ↓
Change it

WHAT ALREADY WORKS
      ↓
Preserve it
```

A feature request does not automatically require a redesign.

One of my default instructions can therefore be:

> **Preserve existing functionality and visual patterns unless a change is explicitly required by this request.**

---

# 38. Important Principle: I Remain the Decision Maker

Lovable can propose and implement solutions, but I should decide:

- what the website needs;
- what content is appropriate;
- which changes should be accepted;
- what should remain unchanged;
- whether the generated result meets the requirement;
- and whether the change is ready to become part of the project.

My workflow should therefore be:

```text
I define the requirement
        ↓
Lovable proposes/implements
        ↓
I inspect
        ↓
I test
        ↓
I accept or refine
        ↓
Git records the approved change
```

---

# 39. My Core Prompting Rule

The most useful rule I have learned is:

> **Be specific about what I want, where it belongs, why it is needed, what it should contain, how it should behave, what existing design it should preserve, what must not change, and how the result should be verified.**

Good prompting is therefore not simply about writing more words.

It is about giving Lovable **clear requirements, useful context, boundaries, and a definition of success**.