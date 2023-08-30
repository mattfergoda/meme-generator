function createMeme(e) {
  e.preventDefault()

  let imgLinkInputElement = document.getElementById('filelink');
  let topTextInputElement = document.getElementById('toptext');
  let bottomTextInputElement = document.getElementById('bottomtext');

  if (!imgLinkInputElement.value || !topTextInputElement.value || !bottomTextInputElement.value) return;
  // Create a new "meme" div.
  let meme = document.createElement('div');
  meme.classList.add('meme');

  // Create the image element.
  let memeImage = document.createElement("IMG");
  memeImage.className = 'meme-image';
  memeImage.src = imgLinkInputElement.value;
  
  // Create the top text element.
  let topTextMemeElement = document.createElement("P");
  topTextMemeElement.innerHTML = topTextInputElement.value.toUpperCase();
  topTextMemeElement.className = 'meme-text top-text';

  // Create the bottom text element.
  let bottomTextMemeElement = document.createElement("P");
  bottomTextMemeElement.innerHTML = bottomTextInputElement.value.toUpperCase();
  bottomTextMemeElement.className = 'meme-text bottom-text';

  // Create the delete button.
  let deleteButtonElement = document.createElement("button");
  deleteButtonElement.innerHTML = 'Delete';
  deleteButtonElement.className = 'delete-button';
  // Add an event listener for this meme's delete button.
  deleteButtonElement.addEventListener("click", deleteMeme);
  
  // Add these elements to the "meme" div.
  meme.appendChild(memeImage);
  meme.appendChild(topTextMemeElement);
  meme.appendChild(bottomTextMemeElement);
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
  let thisMeme = this.parentNode;
  thisMeme.remove();
}

function addButtonListeners() {
  let form = document.getElementById('meme-form');
  form.addEventListener("submit", createMeme);
}

addButtonListeners();