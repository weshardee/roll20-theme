'use strict';

var line = '------------------------------------------';
console.log('\'Allo \'Allo! Content script');

var head = document.head || document.documentElement;

var link = document.createElement('link');
link.href = chrome.extension.getURL('styles/main.css');
link.rel = 'stylesheet';
head.appendChild(link);

var script = document.createElement('script');
script.src = chrome.extension.getURL('scripts/main.js');
head.appendChild(script);

// remove original styles
console.log(line);
console.log('removing sheet styles');
var styles = document.getElementsByTagName('style')[0];
styles.parentNode.removeChild(styles);
console.log(line);