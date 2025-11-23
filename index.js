import{a as u,S as d,i as f}from"./assets/vendor-DI9nXcM2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const m="https://pixabay.com/api/",h="53372962-e1472c27af09e15e68765cdc2";function p(i){return u.get(m,{params:{key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const y=new d(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function g(i){const o=i.map(({webformatURL:n,largeImageURL:t,tags:e,likes:r,views:s,comments:l,downloads:c})=>`
        <li>
              <a href="${t}"
                ><img src="${n}" alt="${e}" />
                <ul>
                  <li>
                    <h3>Likes</h3>
                    <p>${r}</p>
                  </li>
                  <li>
                    <h3>Views</h3>
                    <p>${s}</p>
                  </li>
                  <li>
                    <h3>comments</h3>
                    <p>${l}</p>
                  </li>
                  <li>
                    <h3>downloads</h3>
                    <p>${c}</p>
                  </li></ul
              ></a>
            </li>`).join("");a.galleryList.innerHTML=o,y.refresh()}function L(){a.galleryList.innerHTML=""}function S(){a.loader.classList.remove("loader-hidden")}function b(){a.loader.classList.add("loader-hidden")}const a={form:document.querySelector(".form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader")};a.form.addEventListener("submit",i=>{i.preventDefault();const n=new FormData(i.target).get("search-text").trim();S(),L(),p(n).then(t=>{if(t.hits.length===0){f.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}g(t.hits)}).catch(t=>console.error(t)).finally(()=>{b()}),a.form.reset()});
//# sourceMappingURL=index.js.map
