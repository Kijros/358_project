
const isLink = document.getElementById('ISpage');
const itLink = document.getElementById('ITpage');
const csLink = document.getElementById('CS');
const homeLink = document.getElementById('homePage');

const mainAreaContainer = document.getElementById('mainAreaContainer');
const originalMainAreaHTML = mainAreaContainer.innerHTML;

function applyMainLayout() {
    mainAreaContainer.style.display = 'flex';
    mainAreaContainer.style.justifyContent = 'center';
    mainAreaContainer.style.alignItems = 'flex-start';
    mainAreaContainer.style.gap = '32px';
}

function loadISContent(event) {

    mainAreaContainer.innerHTML = '';
    applyMainLayout();

    const mainBox = document.createElement('div');
    mainBox.id = 'mainBox';

    const isMainBoxContent = `
        <div id="isHeaderBanner" style="
            background-color: #007BFF;
            height: 100px;
            margin: -24px -24px 0 -24px;
            border-radius: 8px 8px 0 0;">
        </div>

        <div id="isBioSection">
            <div id="isIcon" style="
                width: 70px; height: 70px;
                border: 4px solid #fff;
                border-radius: 50%;
                background-color: #f0f0f0;
                margin-top: -50px;
                margin-bottom: 10px;
                z-index: 5;
                position: relative;">
            </div>

            <h1>Information Systems Department</h1>
            <p style="color:black;">
                <b>Bio:</b> Focused on data management, software engineering,
                business analysis, and digital transformation.
            </p>
        </div>
    `;
    mainBox.innerHTML = isMainBoxContent;

    const sideContent = document.createElement('div');
    sideContent.id = 'sideContent';
    sideContent.innerHTML = `
        <h3 style="color: darkgreen;">IS Resources</h3>
        <ul>
            <li><a href="https://fcitweb.kau.edu.sa/fcitwebsite/is-courses-en.php"">IS Course Catalog</a></li>
            <li><a href="https://computing.kau.edu.sa/ar/pages-depis-ar.aspx">Is website </a></li>
        </ul>
    `;

    mainAreaContainer.appendChild(mainBox);
    mainAreaContainer.appendChild(sideContent);
}
// --------------------------------------------------- IT
function loadITContent(event) {
    mainAreaContainer.innerHTML = '';
    applyMainLayout();
    const mainBox = document.createElement('div');
    mainBox.id = 'mainBox';
    const itMainBoxContent = `
        <div id="itHeaderBanner" style="
            background-color: #FF9800;
            height: 100px;
            margin: -24px -24px 0 -24px;
            border-radius: 8px 8px 0 0;">
        </div>

        <div id="itBioSection">
            <div id="itIcon" style="
                width: 70px; height: 70px;
                border: 4px solid #fff;
                border-radius: 50%;
                background-color: #f0f0f0;
                margin-top: -50px;
                margin-bottom: 10px;
                z-index: 5;
                position: relative;">
            </div>

            <h1>Information Technology Department</h1>
            <p style="color:black;">
                <b>Bio:</b> Focused on infrastructure, networking, cybersecurity,
                cloud computing, and system administration.
            </p>
        </div>
    `;
    mainBox.innerHTML = itMainBoxContent;
    const sideContent = document.createElement('div');
    sideContent.id = 'sideContent';
    sideContent.innerHTML = `
        <h3 style="color: darkblue;">IT Resources</h3>
        <ul>
            <li><a href="https://fcitweb.kau.edu.sa/fcitwebsite/it-courses-en.php">IT Course Catalog</a></li>
            <li><a href="https://computing.kau.edu.sa/ar/pages-depit-ar.aspx">IT website</a></li>
        </ul>
    `;
    mainAreaContainer.appendChild(mainBox);
    mainAreaContainer.appendChild(sideContent);
}
// --------------------------------------------------- CS
function loadCSContent(event) {
    mainAreaContainer.innerHTML = '';
    applyMainLayout();
    const mainBox = document.createElement('div');
    mainBox.id = 'mainBox';
    const csMainBoxContent = `
        <div id="csHeaderBanner" style="
            background-color: #8A2BE2;
            height: 100px;
            margin: -24px -24px 0 -24px;
            border-radius: 8px 8px 0 0;">
        </div>
        <div id="csBioSection">
            <div id="csIcon" style="
                width: 70px; height: 70px;
                border: 4px solid #fff;
                border-radius: 50%;
                background-color: #f0f0f0;
                margin-top: -50px;
                margin-bottom: 10px;
                z-index: 5;
                position: relative;">
            </div>
            <h1>Computer Science Department</h1>
            <p style="color:black;">
                <b>Bio:</b> Focused on algorithms, programming, AI, machine learning,
                theory of computation, and software development.
            </p>
        </div>
    `;
    mainBox.innerHTML = csMainBoxContent;

    const sideContent = document.createElement('div');
    sideContent.id = 'sideContent';
    sideContent.innerHTML = `
        <h3 style="color: purple;">CS Resources</h3>
        <ul>
            <li><a href="https://fcitweb.kau.edu.sa/fcitwebsite/cs-courses-en.php">CS Course Catalog</a></li>
            <li><a href="https://computing.kau.edu.sa/ar/pages-depcs-ar.aspx">CS site</a></li>
        </ul>
    `;
    mainAreaContainer.appendChild(mainBox);
    mainAreaContainer.appendChild(sideContent);
}
function loadHomePage(event) {
    mainAreaContainer.innerHTML = originalMainAreaHTML;
}
isLink.addEventListener('click', loadISContent);
itLink.addEventListener('click', loadITContent);
csLink.addEventListener('click', loadCSContent);
homeLink.addEventListener('click', loadHomePage);
