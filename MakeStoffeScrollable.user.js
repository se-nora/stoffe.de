// ==UserScript==
// @name         Make stoffe.de scrollable in edge browser
// @namespace    https://github.com/se-nora
// @version      1.0
// @description  Removes the "overflowHidden" class from the body element to allow scrolling.
// @author       Nora
// @match        https://www.stoffe.de/*
// @grant        none
// @icon         https://www.stoffe.de/on/demandware.static/Sites-Stoffe_DE-Site/-/default/dw365490fe/images/favicons/stoffede-favicon-32x32.png
// ==/UserScript==

(function() {
    'use strict';

    // Function to remove "overflowHidden" class from the body
    function removeOverflowHidden() {
        const body = document.querySelector('body');
        if (body && body.classList.contains('overflowHidden')) {
            body.classList.remove('overflowHidden');
        }
    }

    // Run the function immediately on page load
    removeOverflowHidden();

    // Run the function again if classes change (e.g., dynamically added)
    const observer = new MutationObserver(removeOverflowHidden);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
})();