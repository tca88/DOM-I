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

// let headerNavClass = document.getElementsByTagName('nav')[0];
// headerNavClass.classList.add('header-nav');
// // console.log(headerNavClass.classList);

// ADD NAV ITEMS TO A TAGS//
// first, need to create an array containing nav items.
// loop through the array and set the corresponding text to each nav link. 
let navItems = Object.keys(siteContent["nav"]).map(function(k) {
  return siteContent["nav"][k];
});
navItems.pop();
// console.log(navItems);
const listItems = document.querySelectorAll('nav a');

listItems.forEach((item, i) => {
  item.textContent = navItems[i];
});

// ADD CTA ITEMS (HEADING, BUTTON AND IMAGE) TO CTA SECTION//
const ctaHeading = document.querySelector('.cta .cta-text h1');
// console.log(ctaHeading);
ctaHeading.textContent = siteContent["cta"]["h1"];

const ctaButton = document.querySelector('.cta .cta-text button');
ctaButton.textContent = siteContent["cta"]["button"];

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);



// TOP CONTENT: ADD FEATURES AND ABOUT CONTENT//
const topContent = document.querySelectorAll(".main-content .top-content .text-content");
// console.log(topContent);

const featuresContent = topContent[0];
featuresContent.classList.add('features-content');
const featuresContentHeading = document.querySelector('.text-content.features-content h4');
featuresContentHeading.textContent = siteContent["main-content"]["features-h4"];
const featuresContentText = document.querySelector('.text-content.features-content p');
featuresContentText.textContent = siteContent["main-content"]["features-content"];

const aboutContent = topContent[1];
aboutContent.classList.add('about-content');
const aboutContentHeading = document.querySelector('.text-content.about-content h4');
aboutContentHeading.textContent = siteContent["main-content"]["about-h4"];
const aboutContentText = document.querySelector('.text-content.about-content p');
aboutContentText.textContent = siteContent["main-content"]["about-content"];

// ADD MAIN CONTENT MIDDLE IMAGE//
const mainMiddleImg= document.getElementById("middle-img");
mainMiddleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// BOTTOM CONTENT: ADD SERVICES, PRODUCT AND VISION CONTENT//
const bottomContent = document.querySelectorAll(".main-content .bottom-content .text-content");
// console.log(bottomContent);

const servicesContent = bottomContent[0];
servicesContent.classList.add('services-content');
const servicesContentHeading = document.querySelector('.text-content.services-content h4');
servicesContentHeading.textContent = siteContent["main-content"]["services-h4"];
const servicesContentText = document.querySelector('.text-content.services-content p');
servicesContentText.textContent = siteContent["main-content"]["services-content"];

const productContent = bottomContent[1];
productContent.classList.add('product-content');
const productContentHeading = document.querySelector('.text-content.product-content h4');
productContentHeading.textContent = siteContent["main-content"]["product-h4"];
const productContentText = document.querySelector('.text-content.product-content p');
productContentText.textContent = siteContent["main-content"]["product-content"];

const visionContent = bottomContent[2];
visionContent.classList.add('vision-content');
const visionContentHeading = document.querySelector('.text-content.vision-content h4');
visionContentHeading.textContent = siteContent["main-content"]["vision-h4"];
const visionContentText = document.querySelector('.text-content.vision-content p');
visionContentText.textContent = siteContent["main-content"]["vision-content"];

// CONTACT CONTENT//
const contactHeading = document.querySelector('.contact h4');
contactHeading.textContent = siteContent["contact"]["contact-h4"];
const contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].textContent = siteContent["contact"]["address"];
contactInfo[1].textContent = siteContent["contact"]["phone"];
contactInfo[2].textContent = siteContent["contact"]["email"];