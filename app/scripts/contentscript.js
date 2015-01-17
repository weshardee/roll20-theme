'use strict';

var line = '------------------------------------------';
console.log('\'Allo \'Allo! Content script');

var head = document.head || document.documentElement;

var link = document.createElement('link');
link.href = chrome.extension.getURL('styles/main.css');
link.rel = 'stylesheet';
head.appendChild(link);

// var lrScript = document.createElement('script');
// lrScript.src = 'https://127.0.0.1:35729/livereload.js';
// head.appendChild(lrScript);

// remove original styles
console.log(line);
console.log('removing sheet styles');
var styles = document.getElementsByTagName('style')[0];
styles.parentNode.removeChild(styles);
console.log(line);
