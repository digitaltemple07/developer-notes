---

# 51. Building a Homepage From a Reference

I started building a simple homepage by using a reference design and recreating its layout with HTML and CSS.

The homepage contains:

```text
Navbar
↓
Hero Section
↓
Statistics
↓
Subscribe Section
↓
Footer
```

This helped me understand how individual CSS concepts work together to create a complete webpage.

## 52. Creating a Responsive Navbar

I created a desktop navigation containing:

```text
Home | About | Projects

        My Name

Newsletter | Lessons | Connect
```

I used Flexbox to position the navigation items.

For mobile devices, I hid the desktop navigation:

```text
.nav-left,
.nav-right {
  display: none;
}
```

and displayed a hamburger menu:

```text
.menu-toggle {
  display: block;
}
```

This taught me how the same HTML structure can have different layouts on desktop and mobile.

## 53. Creating a Mobile Hamburger Icon

I used a button containing three elements:

```text
<button class="menu-toggle">
  <span></span>
  <span></span>
  <span></span>
</button>
```

Then styled the lines with CSS:

```text
.menu-toggle span {
  display: block;
  width: 42px;
  height: 3px;
  margin: 7px 0;
}
```

This created:

```text
────────
────────
────────
```

## 54. Positioning the Subscribe Section

I created a newsletter section containing:

```text
Subscribe
To receive our weekly newsletter

[ Email Address ] [ SIGN UP ]
```

Desktop uses a horizontal Flexbox layout:

```text
.subscribe {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

On mobile, I changed the direction:

```text
.subscribe {
  flex-direction: column;
}
```

This placed the subscription text above the form.

## 55. Making the Subscribe Form Responsive

I allowed the email input to use available space:

```text
.subscribe-form input {
  flex: 1;
  min-width: 0;
}
```

I prevented the button from shrinking:

```text
.subscribe-form button {
  flex-shrink: 0;
}
```

This helped the form fit better on smaller screens.

## 56. Creating a Responsive Footer

I created a footer containing:

```text
Name
Social media icons
Email

HOME             NEWSLETTER
ABOUT            LESSONS
PROJECTS         CONNECT

© 2026
```

On desktop, I used a two-column layout.

On mobile, I changed the footer to a vertical layout:

```text
.footer {
  display: flex;
  flex-direction: column;
}
```

The navigation links remained in two columns using CSS Grid.

## 57. Responsive Hero Image

I used a background image for the hero section:

```text
.hero {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
```

`cover` makes the image fill the hero area while maintaining its proportions.

I learned that `cover` can crop parts of an image when the container and image have different proportions.

To make the hero follow a consistent image ratio, I used:

```text
.hero {
  aspect-ratio: 16 / 9;
}
```

## 58. Comparing My Design With a Reference

While building the homepage, I repeatedly compared:

```text
Reference design
       ↓
My webpage
       ↓
Identify differences
       ↓
Adjust CSS
       ↓
Compare again
```

This taught me that recreating a design is not only about writing CSS, but also about observing:

- spacing
- alignment
- sizing
- positioning
- proportions
- responsive behavior

## 59. My Current Understanding of Responsive Design

I now understand that responsive design means more than simply making elements smaller.

A responsive design can change:

```text
Layout
Spacing
Font sizes
Navigation
Image positioning
Form arrangement
Footer structure
```

For example:

```text
DESKTOP

Text        Image


MOBILE

Text

Image
```

CSS media queries allow these changes to happen at different screen widths.

## 60. Homepage CSS Lessons

Through this homepage project, I practiced:

```text
Flexbox
CSS Grid
Media Queries
Responsive Images
Background Images
Aspect Ratio
Navigation Layouts
Hamburger Menus
Forms
Footers
Spacing
Alignment
CSS Cascade
```

Most importantly, I learned to use CSS concepts together to recreate a complete responsive webpage instead of studying each property in isolation.
