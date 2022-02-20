//Header for all the pages
const htmlStr = 
`
<nav>   
    <a id="logo" href="/index.html">
    <span>DAVID CHAVEZ</span>
    </a>
    <ul>
        <li><a href="/about.html>ABOUT</a></li>
        <li><a href="/projects.html>PROJECTS</a></li>
        <li><a href="/contact.html>CONTACT</a></li>
    </ul>
</nav>
`
const davidNavs = document.getElementsByTagName('david-nav');
Object.values(davidNavs).forEach(davidNav => {
    davidNav.innerHTML = htmlStr
})

/*
Footer for all the pages
const footnote = document.createElement('div');
footnote.innerHTML = 
    `<p>Last updated 2022</p>`;
var getFooter = document.getElementsByTagName('footer')[0];
getFooter.appendChild(footnote.content);
*/