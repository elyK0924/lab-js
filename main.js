fetch('assets/data.json')
.then(response => {
    return response.json()
})
.then(data => {
    console.log(data);
    renderMainPage(data);
    renderNavBar(data);
});

function renderNavBar(){
    document.querySelector("nav").innerHTML=`
    <ul>
        <li>
            <a href="#about">About</a>
        </li>
        <li>
            <a href="#news">News</a>
        </li>
        <li>
            <a href="#projects">Projects</a>
        </li>
    </ul>
    `
}

function renderMainPage(data){
    document.querySelector("main").innerHTML=`
    <section id="about">
    <h1 id="name" class="animate__animated animate__infinite animate__pulse">${data.about.name}</h1>
    <div class="row">
        <div class="col-6">
            <img class="profile-image" width="250px" src=${data.about.photo}>
        </div>
        <div class="col-6">
            <p>
            <strong><span id="summary-description">${data.about.title}</span></strong>
            <br>
            <span class="personal-links">
            <i><a href="mailto:vitiky@bc.edu">vitiky@bc.edu</a></i>
            <br><br>
                <a href="https://www.twitter.com/kyleviti24" target="_blank">
                    <i class="fa-brands fa-twitter"></i>
                </a> |
                <a href="https://instagram.com/kyleviti" target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                </a> |
                <a href="https://www.linkedin.com/in/kyleviti/" target="_blank">
                    <i class="fa-brands fa-linkedin"></i>
                </a> |
                <a href="https://github.com/elyK0924" target="_blank">
                    <i class="fa-brands fa-github"></i>
                </a>
            </span>
            </p>
            <p id="self-description">
                Kyle Viti is currently a senior at Boston College, studying Computer Science with a minor in Music. 
                He is originally from Warwick, Rhode Island, though his current residence is in Bradenton, Florida with his parents. 
                After graduation, Kyle would like to begin work in the ever-growing field of Computer Science, either as 
                a CyberSecurity professional, an Information Technology expert, or a web application developer.
            </p>
        </div>
    </div>
</section>

<section id="news">
    <h1>News</h1>
    <div class="row">
            <div class="col-4">${data.news[0].date}</div><div class="col-8">${data.news[0].title}</div>
            <div class="col-4">${data.news[1].date}</div><div class="col-8">${data.news[1].title}</div>
            <div class="col-4">${data.news[2].date}</div><div class="col-8">${data.news[2].title}</div>
            <div class="col-4">${data.news[3].date}</div><div class="col-8">${data.news[3].title}</div>
            <div class="col-4">${data.news[4].date}</div><div class="col-8">${data.news[4].title}</div>
    </div>
</section>

<section id="projects">
    <h1>Projects</h1>
        <div class="col-4">
        <h3><span class="coursework-tag">${data.projects[0].tags}</span></h3>
        <ul>
            <li>
                <a href="command-line.html">${data.projects[0].title}</a>
            </li>
            <strong><i>Collaboration with Maya Rao (BC 2021)</i></strong>
        </ul>
        </div>
        <div class="col-8">
        <h3><span class="personal-tag">${data.projects[1].tags}</span></h3>
        <ul>
            <li>
                <a href="photo-to-pdf.html">${data.projects[1].title}</a>
            </li>
        </ul>
        </div>
</section>
    `;
}