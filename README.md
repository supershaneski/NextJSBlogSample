# Sample Blog Site Using [Next.JS](https://nextjs.org/)

This project is an exercise in my study of NextJS and ReactJS.<br>

*   The main objective is to get familiar about routing in NextJS.
*   Additional objective is to probe what else is possible like using external CSS and vanilla JS manipulating the DOM. So this may not show what is best practice in NextJS/ReactJS coding.

## Description

The index page will show the latest blog entry.<br>
The latest blog entry is known based on the date entry and not file date.<br>
Every blog entry has an associated banner image that is fix positioned.

A side menu containing the list of entries is shown in descending order.<br>
Clicking any link from the side menu will route to /blog/[slug].js.<br>
A previous and next link will be shown at the bottom if there are any.<br>

The header will retract if user will scroll upward.<br>
This is controlled by DOM manipulation JS codes.

The layout is designed so that it will respond when viewed in mobile.<br>
It will re-arrange the layout so that the blog entry is shown first before the menu.

## Available Scripts

In the project directory, you can run:

### `npm install`

To install the required modules.

The project contains only a few extra modules aside from the base modules in nextjs.

*   react-markdown
*   gray-matter
*   raw-loader

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
