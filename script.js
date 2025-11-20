// The arrays that all the posts are saved in
mainContetnArr = [];

// the functionlaty of the user post button
function userPosts(){
    mainDiv = document.getElementById('main-content-div');
    postBtn = document.getElementById("postBtn");
    postBtn.addEventListener('click', function(){
        // create a div for the form
        postDiv = document.createElement('div');
        postDiv.classList.add("postFormDiv");

        postForm = document.createElement('form');

        title = document.createElement('input');
        title.type = 'text';
        title.placeholder = "Title";

        bodyText = document.createElement('input');
        bodyText.type = 'text';
        bodyText.placeholder = "Body Text";

        // make the user able to add an image here 




    })

}

// if there is any bug probaly from this function check later *********************
function replaceCurrentDivContent(newDiv){
    currentDiv = document.getElementById("main-content-div");
    currentDiv.innerHTML = "";
    currentDiv.innerHTML = newDiv.innerHTML
}
