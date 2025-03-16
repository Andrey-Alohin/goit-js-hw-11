import{a as m,S as L,i as c}from"./assets/vendor-DMjJPMAs.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();m.defaults.baseURL="https://pixabay.com/api/";const b="49354290-35d6e1dc5d842ed86975730ff",v=o=>({params:{key:b,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}});function q(o){return new Promise((t,s)=>{m.get("",v(o)).then(i=>{if(i.data.total!==0){t(i.data.hits);return}else{s(`Sorry, there are no images matching your ${o}. Please try again!`);return}}).catch(i=>{s(i.message)})})}function S(o,t){d();const s=o.map(({largeImageURL:e,webformatURL:r,tags:a,likes:p,views:h,comments:y,downloads:g})=>`
    <li class= "item">
      <a href="${e}">
        <img class= "item-img" src="${r}" alt="${a}" />
        <div class = "item-descrp">
          <table>
            <tr>
              <th>Likes</th>
              <th>Views</th>
              <th>Comment</th>
              <th>Downloads</th>
            </tr>
            <tr>
              <td>${p}</td>
              <td>${h}</td>
              <td>${y}</td>
              <td>${g}</td>
            </tr>
          </table>
        </div>
      </a>
    </li>
    `).join("");t.insertAdjacentHTML("beforeend",s),new L(".item a",{captions:!0,captionsData:"alt",captionDelay:1e3}).refresh()}function d(){const o=document.querySelectorAll(".item");if(o.length!==0)for(const t of o)t.remove();else return}const n=document.querySelector(".form"),$=document.querySelector(".gallery"),f=document.querySelector(".loader");function O(){f.classList.add("active")}function l(){f.classList.remove("active")}const u=()=>n.reset();n.addEventListener("submit",o=>{o.preventDefault();const t=n.querySelector('[name="search-text"]').value.trim();if(t!=="")O(),q(t).then(s=>{l(),S(s,$)}).catch(s=>{l(),d(),c.error({message:s,position:"center",timeout:2e3})}).finally(()=>{u()});else{c.warning({message:"Field must not be empty!",position:"center",timeout:2e3}),u();return}});
//# sourceMappingURL=index.js.map
