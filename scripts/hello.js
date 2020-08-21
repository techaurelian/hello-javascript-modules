/*
 * 
 *  Hello JavaScript Modules
 *  Copyright (c) 2018-2020 techaurelian. All rights reserved. 
 *  Licensed under the MIT license.
 *  https://techaurelian.com/hello-javascript-modules
 * 
 */

/**
 * Confirms that the browser supports JavaScript modules natively.
 * @returns {void}
 */
export default function helloJavaScriptModules() {
    document.body.classList.add("body--yes-modules");
    document.getElementById("emoji").innerText = "😎";
    document.getElementById("before-lead").innerText = "Congratulations! Your browser";
    document.getElementById("lead").innerText = "supports";
    document.getElementById("after-lead").innerText = "JavaScript modules natively";
    document.title = "Yes! JavaScript Modules! 😎";

    // Update the theme-color meta tag to update the browser toolbar color
    document.querySelector("meta[name=theme-color]").setAttribute("content", "#4CAF50");
}
