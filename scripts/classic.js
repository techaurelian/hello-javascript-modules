/*
 * 
 *  Hello JavaScript Modules
 *  Copyright (c) 2018-2020 techaurelian. All rights reserved. 
 *  Licensed under the MIT license.
 *  https://techaurelian.com/hello-javascript-modules
 * 
 */

/* eslint-disable strict */

(function () {
    "use strict";

    document.body.classList.add("body--no-modules");
    document.getElementById("emoji").innerText = "😞";
    document.getElementById("before-lead").innerText = "Your browser";
    document.getElementById("lead").innerText = "doesn't support";
    document.getElementById("after-lead").innerText = "JavaScript modules natively";
    document.title = "No JavaScript Modules 😞";

    // Update the theme-color meta tag to update the browser toolbar color
    document.querySelector("meta[name=theme-color]").setAttribute("content", "#FF9800");
}());
