// The arrays that all the posts are saved in

// the functionlaty of the user post button
function userPosts() {
    mainDiv = document.getElementById('main-content-div');
    
    existingPosts = Array.from(mainDiv.children);
    
    mainDiv.innerHTML = '';

    postForm = document.createElement('form');
    postForm.id = 'postForm';

    titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.placeholder = 'Enter a title';
    titleInput.id = 'postTitle';
    titleInput.required = true;

    paragraphInput = document.createElement('textarea');
    paragraphInput.placeholder = 'Enter your paragraph';
    paragraphInput.id = 'postParagraph';
    paragraphInput.required = true;

    submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';

    postForm.appendChild(titleInput);
    postForm.appendChild(paragraphInput);
    postForm.appendChild(submitButton);

    mainDiv.appendChild(postForm);

    postForm.addEventListener('submit', function (event) {
        event.preventDefault();

        title = document.getElementById('postTitle').value;
        paragraph = document.getElementById('postParagraph').value;

        newPost = document.createElement('div');
        newPost.classList.add('posts');

        postTitle = document.createElement('h1');
        postTitle.textContent = title;

        postParagraph = document.createElement('p');
        postParagraph.textContent = paragraph;

        newPost.appendChild(postTitle);
        newPost.appendChild(postParagraph);

        mainDiv.innerHTML = '';
        
        existingPosts.forEach(post => mainDiv.appendChild(post));
        
        mainDiv.appendChild(newPost);
    });
}

