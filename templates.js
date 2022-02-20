//Header for all the pages
const nav = document.createElement('nav');
nav.innerHTML = 
`   <a id="logo" href="/index.html">
        <span>DAVID CHAVEZ</span>
    </a>
    <ul>
        <li><a href="/about.html>ABOUT</a></li>
        <li><a href="/projects.html>PROJECTS</a></li>
        <li><a href="/contact.html>CONTACT</a></li>
    </ul>`;
var getHeader = document.getElementsByTagName('header');
getHeader.appendChild(nav.content);

//Footer for all the pages
const footnote = document.createElement('div');
footnote.innerHTML = 
    `<p>Last updated 2022</p>`;
var getFooter = document.getElementsByTagName('footer');
getFooter.appendChild(footnote.content);
