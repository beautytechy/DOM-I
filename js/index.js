const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const links = document.querySelectorAll('a');

links.forEach((item, i) => { 
  (item.textContent = Object.values(siteContent.nav)[i]
  )})

links.forEach((item) => (item.style.color = 'green'))

const mainimg = document.getElementById("cta-img");
mainimg.setAttribute('src', siteContent["cta"]["img-src"])

const lowerimg = document.getElementById("middle-img");
lowerimg.setAttribute('src', siteContent["main-content"][ "middle-img-src"])

const headline = document.querySelector('h1');
headline.textContent = siteContent["cta"]["h1"];

const ctabutton = document.querySelector('button');
ctabutton.textContent = siteContent["cta"]["button"];

const allh4 = document.querySelectorAll('h4')

allh4[0].textContent = ('h4', siteContent["main-content"]["features-h4"])

allh4[1].textContent = ('h4', siteContent["main-content"]["about-h4"])

allh4[2].textContent = ('h4', siteContent["main-content"]["services-h4"])

allh4[3].textContent = ('p', siteContent["main-content"]["product-h4"])

allh4[4].textContent = ('h4', siteContent["main-content"]["vision-h4"])

allh4[5].textContent = ('h4', siteContent["contact"]["contact-h4"])

const maintext = document.querySelectorAll('p')

maintext[0].textContent = ('p', siteContent["main-content"]["features-content"])

maintext[1].textContent = ('p', siteContent["main-content"]["about-content"])

maintext[2].textContent = ('p', siteContent["main-content"]["services-content"])

maintext[3].textContent = ('p', siteContent["main-content"]["product-content"])

maintext[4].textContent = ('p', siteContent["main-content"]["vision-content"])

maintext[4].textContent = ('p', siteContent["main-content"]["vision-content"])


const address = document.querySelectorAll('.contact p');

address.forEach((item, i) => {
  (item.textContent = Object.values(siteContent.contact)[i+1]
)})

const footertext = document.querySelector('footer p');

footertext.textContent=siteContent["footer"]["copyright"]

const navBar = document.querySelector('nav');

const newLink = document.createElement('a');

newLink.textContent = "Pricing";

newLink.style.color = 'green';

navBar.appendChild(newLink);

const newLink2 = document.createElement('a');

newLink2.textContent = "Events";

newLink2.style.color = 'green';

navBar.prepend(newLink2);

