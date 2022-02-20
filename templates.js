//Header for all the pages
const header = document.createElement('header');
header.innerHTML = 
`<nav>
    <a id="logo" href="/index.html">
        <span>DAVID CHAVEZ</span>
    </a>
    <ul>
        <li><a href="/about.html>ABOUT</a></li>
        <li><a href="/projects.html>PROJECTS</a></li>
        <li><a href="/contact.html>CONTACT</a></li>
    </ul>
</nav>`;
document.body.appendChild(header.content);

//Footer for all the pages
const footer = document.createElement('footer');
footer.innerHTML = 
    `<p>Last updated 2022</p>`;
document.body.appendChild(footer.content);
