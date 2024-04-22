// Cookies refusal
// Initially made by chalios°

/* 
    This code is a workaround to uncheck every checkboxes in cookie consent panels.

    Industrials tries to force users to consent to cookies by using a well known
    social engineering technique : fatigue, human laziness.
    So to circumvent this evident attack to reglementation and user rights, this code allows
    to uncheck all checkboxes in cookie management panel of any site.

    The procedure is :

    - At presentation of cookie management panel, often after clicking "set preferences", 
    open the developper panel of your browser : (fn)F12 on Chrome or Firefox,⌥⌘C sur Safari sur Mac...

    - Make sure to have the panel with checkboxes visible onscreen.

    - copy/paste the code to the javascript console of your browser and press Enter.

    - Click on the button on cookie panel to save your preferences. 
    (Should I mention that it is wise to visually check that each box has been unchecked before confirming?)

    And you're done! You can close developper panel.
*/

/* 
    This code is public domain.
    Contribution is welcome. As redistribution, reappropriation, refactorization...

    For example you could add more classnames to the classnames array below.
    It's the class of the <input checkbox ...> that are in setting panel. 
    Use the inspect command in browser's developper tools (right-click -> inspect) to find it
    easily with your mouse.
*/

// General selector for checkboxes within consent panels
const checkboxes = document.querySelectorAll('input[type="checkbox"][class*="consent"], input[type="checkbox"][class*="legit"]');

// Uncheck all found checkboxes
checkboxes.forEach(checkbox => { checkbox.checked = false; });

// Provide feedback
if (checkboxes.length) {
    console.log(`${checkboxes.length} cookie consent checkboxes have been unchecked.`);
} else {
    console.warn('No cookie consent checkboxes found. Please ensure the cookie panel is visible.');
}