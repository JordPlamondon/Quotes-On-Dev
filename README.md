<img width="1272" alt="screen shot 2017-12-14 at 12 10 37 am" src="https://user-images.githubusercontent.com/32422707/33981868-5e07586a-e063-11e7-8952-ea1710ce466e.png">


# Quotes on Dev Starter

A WordPress starter theme for the Quotes on Dev project, forked from Underscores.

## Installation

### 1. Download me (don't clone me!)

Then add me to your `wp-content/themes` directory.

### 2. Rename the `quotesondev-starter-master` directory

Make sure that the theme directory name is project appropriate! Do you need `starter` or `master` in the directory name?

### 3. Install the dev dependencies

Next you'll need to run `npm install` **inside your theme directory** to install the npm packages you'll need for Gulp, etc.

### 4. Update the proxy in `gulpfile.js`

Lastly, be sure to update your `gulpfile.js` with the appropriate URL for the Browsersync proxy (so change `localhost[:port-here]/[your-dir-name-here]` to the appropriate localhost URL).

And now would be a good time to `git init` :)

**Things I learned:**

> This project was mainly focused on making a making a get request to a wp API endpoint, so using Ajax, I figured out how to add a new quote that got generated dynamically with the click of a button. The URL now updates as well after appending the history API. There is also a submit page where I learned how to make a post request, allowing the user to submit a new quote to the site which is then saved into the database (made with a custom page template). I have incorporated an affirmative message when a quote is succesfully submitted, and an error message when the quote isn't. There wasn't a whole lot of CSS in this project, although flexbox was used, along with various styling mixins. 


**Notes**
>Quote author and corresponding social media link on the home page load correctly after a couple of refreshes (shows up in the wrong area at first).


