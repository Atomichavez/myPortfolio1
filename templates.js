//Header for all the pages
const htmlStr = 
`   
    <a id="logo" href="/index.html">
    <span>DAVID CHAVEZ</span>
    </a>
    <ul>
        <li><a href="/about.html>ABOUT</a></li>
        <li><a href="/projects.html>PROJECTS</a></li>
        <li><a href="/contact.html>CONTACT</a></li>
    </ul>
`
const davidNavs = document.getElementsByTagName('nav');
Object.values(davidNavs).forEach(davidNav => {
    davidNav.innerHTML = htmlStr
})


//Footer for all the pages
const footnote = document.createElement('div');
footnote.innerHTML = 
    `<p>Last updated 2022</p>`;
var getFooter = document.getElementsByTagName('footer');
Object.values(getFooter).forEach(footer => {
    footer.appendChild(footnote.content);
})
