(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&a(t)}).observe(document,{childList:!0,subtree:!0});function c(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=c(o);fetch(o.href,s)}})();const i="./DB/magicItems.json";fetch(i).then(e=>e.json()).then(e=>e).catch(e=>{console.error("Error al obtener datos",e)});function l(e,r,c="end"){const a=document.querySelector(r);switch(c){case"end":a.insertAdjacentHTML("beforeend",`${e}`);break;case"start":a.insertAdjacentHTML("afterbegin",`${e}`);break;case"before":a.insertAdjacentHTML("beforebegin",`${e}`);break;case"after":a.insertAdjacentHTML("afterend",`${e}`);break;default:throw new Error("valor invalido, valores válidos son (end, start, before y after)")}}const n=`
<header class="headerPage">
  <nav class="headerPage-navbar">
    <div class="headerPage-containerLogo">
      <img class="headerPage-logo" src="#" alt="title page">
    </div>
    <button id="btnMenu" aria-label="desplegar o ocultar menu mobile" class="headerPage-btnMenu">
      <svg class="headerPage-btnSvg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"/>
      </svg>
    </button> 
    <div class="headerPage-searchBar">
      <label for="iconSearch" class="headerPage-labelSearch">
        <svg class="headerPage-searchIcon"  viewBox="0 0 24 24"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748ZM12.1779 7.17624C11.4834 7.48982 11 8.18846 11 9C11 10.1046 11.8954 11 13 11C13.8115 11 14.5102 10.5166 14.8238 9.82212C14.9383 10.1945 15 10.59 15 11C15 13.2091 13.2091 15 11 15C8.79086 15 7 13.2091 7 11C7 8.79086 8.79086 7 11 7C11.41 7 11.8055 7.06167 12.1779 7.17624Z"></path></svg>
      </label>
      <input id="iconSearch" class="headerPage-searchInput" type="search">
    </div
    <div class="headerPage-containerIcons">
      <a class="headerPage-shoppingCarLink" href="#">
        <svg class="headerPage-shoppingCarIcon" viewBox="0 0 24 24"><path d="M4.00436 6.41662L0.761719 3.17398L2.17593 1.75977L5.41857 5.00241H20.6603C21.2126 5.00241 21.6603 5.45012 21.6603 6.00241C21.6603 6.09973 21.6461 6.19653 21.6182 6.28975L19.2182 14.2898C19.0913 14.7127 18.7019 15.0024 18.2603 15.0024H6.00436V17.0024H17.0044V19.0024H5.00436C4.45207 19.0024 4.00436 18.5547 4.00436 18.0024V6.41662ZM6.00436 7.00241V13.0024H17.5163L19.3163 7.00241H6.00436ZM5.50436 23.0024C4.67593 23.0024 4.00436 22.3308 4.00436 21.5024C4.00436 20.674 4.67593 20.0024 5.50436 20.0024C6.33279 20.0024 7.00436 20.674 7.00436 21.5024C7.00436 22.3308 6.33279 23.0024 5.50436 23.0024ZM17.5044 23.0024C16.6759 23.0024 16.0044 22.3308 16.0044 21.5024C16.0044 20.674 16.6759 20.0024 17.5044 20.0024C18.3328 20.0024 19.0044 20.674 19.0044 21.5024C19.0044 22.3308 18.3328 23.0024 17.5044 23.0024Z"></path></svg>
      </a>
      <a class="headerPage-loginLink"  href="#">
        <svg class="headerPage-loginIcon" viewBox="0 0 24 24"><path d="M3 4.99509C3 3.89323 3.89262 3 4.99509 3H19.0049C20.1068 3 21 3.89262 21 4.99509V19.0049C21 20.1068 20.1074 21 19.0049 21H4.99509C3.89323 21 3 20.1074 3 19.0049V4.99509ZM6.35687 18H17.8475C16.5825 16.1865 14.4809 15 12.1022 15C9.72344 15 7.62182 16.1865 6.35687 18ZM12 13C13.933 13 15.5 11.433 15.5 9.5C15.5 7.567 13.933 6 12 6C10.067 6 8.5 7.567 8.5 9.5C8.5 11.433 10.067 13 12 13Z"></path></svg>
      </a>
    </div>
    <ul id="menu" class="headerPage-menu">
      <li class="headerPage-li"><a class="headerPage-link" href="https://www.google.com">Home</a></li>
      <li class="headerPage-li"><a class="headerPage-link" href="#">Products</a></li>
      <li class="headerPage-li"><a class="headerPage-link" href="#">About</a></li>
      <li class="headerPage-li"><a class="headerPage-link" href="#">Contact</a></li>
    </ul>
  </nav>
  <div class="headerPage-banner">
    <h1 class="headerPage-pageTitle">Items Magic</h1>
  </div>
</header>
`,d=()=>{const e=document.querySelector("#menu");e.classList.toggle("menu--open");const r=e.classList.contains("menu--open"),c=document.querySelectorAll(".headerPage-link");r?c.forEach(a=>{a.tabIndex=0,a.style.pointerEvents="auto",a.classList.add("link-opacity-1")}):c.forEach(a=>{a.tabIndex=-1,a.style.pointerEvents="none",a.classList.remove("link-opacity-1")})},f=`
<footer class="footer">
<form  class="footer-form" action="" method="get">
  <p class="footer-info">Suscríbete a nuestro boletín semanal para estar actualizados con nuestras ofertas y nuevos producto</p>
  <div class="footer-newsletter">
    <input class="footer-response" type="email" placeholder="Ingresa tu correo" name="email">
    <input class="footer-submitResponse" type="submit" value="Enviar">
  </div>
  <div class="footer-conditionsBlock">
    <input class="footer-conditionCheck" id="aceptar" type="checkbox" name="textBoletin" value="true">
    <label class="footer-conditions" for="conditions">
      <a  id="conditions" class="footer-seeConditions" href="">Aceptar la política de tratamientos de datos</a>
    </label>
  </div>
</form>
<div class="socialMedia">
  <div class="socialMedia-title">
  Síguenos en:
  </div>
  <a class="socialMedia-link">
    <svg fill="currentColor" class="socialMedia-icon" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
    </svg>
  </a>
  <a class="socialMedia-link">
    <svg  fill="currentColor" class="socialMedia-icon" viewBox="0 0 16 16">
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
    </svg>
  </a>
  <a class="socialMedia-link">
    <svg class="socialMedia-icon" fill="currentColor"  viewBox="0 0 16 16">
    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
    </svg>
  </a>
  <a class="socialMedia-link">
    <svg  fill="currentColor" class="socialMedia-icon" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
    </svg>
  </a>
</div>

<ul class="footer-list">
  <li class="footer-listItem">
    <label for="accordionToggle" class="footer-accordionHead">
      <h3 class="footer-accordionTitle">Atención al cliente</h3>
    </label>
    <input class="footer-accordionHeadToggle" type="checkbox" id="accordionToggle">
    <ul class="footer-accordionBody">
      <li class="footer-accordionItem">
        <a href="">Preguntas frecuentes</a>
      </li>
      <li class="footer-accordionItem">
        <a href="">Cambios y devoluciones</a>
      </li>
      <li class="footer-accordionItem">
        <a href="">Coberturas</a>
      </li>
      <li class="footer-accordionItem">
        <a href="">Post Venta</a>
      </li>
    </ul>
  </li>
  <li class="footer-listItem">
    <label for="accordionToggle2" class="footer-accordionHead">
      <h3 class="footer-accordionTitle">Sobre nosotros</h3>
    </label>
    <input class="footer-accordionHeadToggle" type="checkbox" id="accordionToggle2">
    <ul class="footer-accordionBody">
      <li class="footer-accordionItem">
        <a href="">¿Quienes somos?</a>
      </li>
      <li class="footer-accordionItem">
        <a href="">Nuestras sedes</a>
      </li>
      <li class="footer-accordionItem">
        <a href="">Blog</a>
      </li>
      <li class="footer-accordionItem">
        <a href="">Actualizaciones</a>
      </li>
    </ul>
  </li>
  <li class="footer-listItem">
    <label for="accordionToggle3" class="footer-accordionHead">
      <h3 class="footer-accordionTitle">Tratamientos de datos</h3>
    </label>
    <input class="footer-accordionHeadToggle" type="checkbox" id="accordionToggle3">
    <ul class="footer-accordionBody">
      <li class="footer-accordionItem">
        <a href="">Privacidad</a>
      </li>
      <li class="footer-accordionItem">
        <a href="">Accesibilidad</a>
      </li>
      <li class="footer-accordionItem">
        <a href="">Términos y condiciones</a>
      </li>
    </ul>
  </li>
  </ul>
  <p class="footer-copyright">Copyright</p>
</footer>
`;l(n,"body","start");const h=document.querySelector("#btnMenu"),u=document.querySelectorAll(".headerPage-link");u.forEach(e=>{e.tabIndex=-1});h.addEventListener("click",d);l(f,"#app","after");
