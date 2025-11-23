import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api";
import { clearGallery, createGallery, hideLoader, showLoader } from "./js/render-functions";

export const refs = {
    form: document.querySelector('.form'),
    galleryList: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
  
};

refs.form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const query = formData.get('search-text').trim();

    showLoader();
    clearGallery();
    getImagesByQuery(query)
    .then((data) => {
   
    if (data.hits.length === 0) {
         iziToast.error({
          message: "Sorry, there are no images matching your search query. Please try again!",
         });
        return;
      }
    createGallery(data.hits);
    })
    .catch(error => 
        console.error(error)).finally(() => {
            hideLoader();
    });
    refs.form.reset();
});
