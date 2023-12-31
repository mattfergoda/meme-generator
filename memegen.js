function createMeme(e) {
  // Prevents the page from reloading on form submit.
  e.preventDefault()

  // Get the text field inputs from the user.
  let imgLinkInputElement = document.getElementById('filelink');
  let topTextInputElement = document.getElementById('toptext');
  let bottomTextInputElement = document.getElementById('bottomtext');

  // Do nothing if the user didn't complete all fields.
  if (!imgLinkInputElement.value || !topTextInputElement.value || !bottomTextInputElement.value) return;
  
  // Create a new "meme" div that holds the image/text container div, 
  // and the delete button.
  let meme = document.createElement('div');
  meme.classList.add('meme');

  // This div will have the image, top text, and bottom text.
  let memeImageContainer = document.createElement('div');
  memeImageContainer.classList.add('meme-image-container');

  // Create the image element.
  let memeImage = document.createElement("IMG");
  memeImage.className = 'meme-image';
  memeImage.src = imgLinkInputElement.value;
  
  // Create the top text element.
  let topTextMemeElement = document.createElement("div");
  topTextMemeElement.innerHTML = topTextInputElement.value.toUpperCase();
  topTextMemeElement.className = 'meme-text top-text';

  // Create the bottom text element.
  let bottomTextMemeElement = document.createElement("div");
  bottomTextMemeElement.innerHTML = bottomTextInputElement.value.toUpperCase();
  bottomTextMemeElement.className = 'meme-text bottom-text';

  // Create the delete button.
  let deleteButtonElement = document.createElement("button");
  deleteButtonElement.innerHTML = 'Delete';
  deleteButtonElement.className = 'delete-button';
  // Add an event listener for this meme's delete button.
  deleteButtonElement.addEventListener("click", deleteMeme);
  
  // Add image, top text, and bottom text to "meme-image-container"
  memeImageContainer.appendChild(memeImage);
  memeImageContainer.appendChild(topTextMemeElement);
  memeImageContainer.appendChild(bottomTextMemeElement);

  // Add these elements to the "meme" div.
  meme.appendChild(memeImageContainer);
  meme.appendChild(deleteButtonElement);

  // Add the "meme" div to the "meme-gallery" div.
  let memeGallery = document.getElementById('meme-gallery');
  memeGallery.appendChild(meme);

  // Clear the form's inputs.
  imgLinkInputElement.value = '';
  topTextInputElement.value = '';
  bottomTextInputElement.value = '';
}

function deleteMeme(e) {
  // Get the delete button's parent, which is the meme div.
  let thisMeme = this.parentNode; 
  thisMeme.remove(); // Delete it.
}

function addButtonListeners() {
  let form = document.getElementById('meme-form');
  form.addEventListener("submit", createMeme);
}

addButtonListeners();