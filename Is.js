// Get references to the persistent elements
const isLink = document.getElementById('ISpage');
const homeLink = document.getElementById('homePage'); // to return to home page
const mainAreaContainer = document.getElementById('mainAreaContainer'); 
const originalMainAreaHTML = mainAreaContainer.innerHTML; // contain original html
// The load function creates the new header and bio content
function loadISContent(event) {
mainAreaContainer.innerHTML = '';   // remove existing content for both min and side content
    // We want the IsPage to have some of mainContainer properties 
    mainAreaContainer.style.display = 'flex'; 
    mainAreaContainer.style.justifyContent = 'center';
    mainAreaContainer.style.alignItems = 'flex-start'; 
    mainAreaContainer.style.gap = '32px'; 
    

    const mainBox = document.createElement('div'); // new mainBox that we will append later
    mainBox.id = 'mainBox';
    
    // only add style for the new things because the rest are in the mainContainer.
    // this is just a multi line string that wen appended later will be intereptedded as HTML
    const isMainBoxContent = `
        <div id="isHeaderBanner" style="
            background-color: #007BFF; 
            height: 100px; 
            margin: -24px -24px 0 -24px; 
            border-radius: 8px 8px 0 0;">
        </div>
        
        <div id="isBioSection">
            <div id="isIcon" style="
                width: 70px; 
                height: 70px; 
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
            **Bio:** This section is dedicated to all things related to Information Systems, including data management, software engineering, and business analysis.
            </p>
            </div>
    `;
    mainBox.innerHTML = isMainBoxContent;
    // do the same for side content
    const sideContent = document.createElement('div');
    sideContent.id = 'sideContent';
    
    // Custom content for the side panel
    const isSideContent = `
        <h3 style="color: darkgreen;">IS Resources</h3>
        <p>Quick links for the IS department:</p>
        <ul>
            <li><a href="#">IS Course Catalog</a></li>
            <li><a href="#">Faculty Directory</a></li>
        </ul>
        <p>Welcome to the IS section!</p>
    `;
    sideContent.innerHTML = isSideContent;
    // both new elements are appended as a mainContener
    mainAreaContainer.appendChild(mainBox);
    mainAreaContainer.appendChild(sideContent);
}

// Attach the function to the 'click' event of the IS link
isLink.addEventListener('click', loadISContent);

function loadHomePage(event) {
    mainAreaContainer.innerHTML = originalMainAreaHTML;
}
homeLink.addEventListener( 'click',loadHomePage); 
