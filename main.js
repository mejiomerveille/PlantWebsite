/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const navMenu = document.getElementById("nav-menu");
const navlink = document.querySelectorAll(".nav-link");
const hamburger= document.getElementById("hamburger")

hamburger.addEventListener("click",()=>{
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle('ri-close-large-line')
})

navlink.forEach(link =>{
    link.addEventListener("click", () =>{
        navMenu.classList.toggle("left-[0]")
        hamburger.classList.toggle('ri-close-large-line')
    })
})

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
const scrollUp = () =>{
    const scrollUpBtn = document.getElementById("scroll-up")

    if(this.scrollY >=250){
        scrollUpBtn.classList.remove("-bottom-1/2")
        scrollUpBtn.classList.add("bottom-4")
    } else{
        scrollUpBtn.classList.add("-bottom-1/2")
        scrollUpBtn.classList.remove("bottom-4")
    }
}

window.addEventListener("scroll",scrollUp)


/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
const scrollHeader = () =>{
    const header = document.getElementById("navbar")

    if(this.scrollY >=50){
        header.classList.add("border-b","border-yellow-500")
    } else{
        header.classList.remove("border-b","border-yellow-500")
    }
}

window.addEventListener("scroll",scrollHeader)


/*~~~~~~~~~~~~~~~ SWIPER ~~~~~~~~~~~~~~~*/
const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed:400,
    spaceBetween:30,
    autoplay:{
        delay:3000,
        disableOnInteraction:false
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    },
    grabCursor:true,
    breakpoints:{
        640:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        },
    }
  

  });
  


/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/

const activeLink = () =>{
    const sections = document.querySelectorAll('section')
    const navlinks = document.querySelectorAll(".nav-link")

    let current = "home"

    sections.forEach(section =>{
        const sectionTop = section.offsetTop;

        if(this.scrollY >= sectionTop- 60){
            current = section.getAttribute("id")
        }
    })

    navlinks.forEach(item =>{
        item.classList.remove("active")
        if(item.href.includes(current)){
            item.classList.add("active")
        }
    })
}

window.addEventListener("scroll", activeLink)


/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/

const sr = ScrollReveal({
    origin:"top",
    distance: "60px",
    duration:2500,
    delay:300,
    reset:true
})

sr.reveal(`.home__data , .about_top , .popular__top, .review__top, .review__swiper, .footer__icon, .footer__content, .copy_right`)
sr.reveal(`.home__image`, {delay:500, scale:0.5})

sr.reveal(`.service__card, .popular__card` ,{interval:100})

sr.reveal(`.about__leaf ` ,{interval:1000, origin: "right"})
sr.reveal(`.review__leaf, .footer__floral ` ,{interval:1000, origin: "left"})

sr.reveal(`.about__item__1-content ,.about__item__1-img` ,{origin: "right"})
sr.reveal(`.about__item__2-content ,.about__item__2-img` ,{origin: "left"})


const cartButtons = document.querySelectorAll('.popular__card button');

cartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Redirect to the cart page
    window.location.href = 'cart.html'; // Replace 'cart.html' with the actual path to your cart page
  });
});

// ... (previous JavaScript code)

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-cart')) {
        const plant = JSON.parse(event.target.dataset.plant);
        panier.push(plant);

        // Store cart in local storage
        localStorage.setItem('panier', JSON.stringify(panier));

        // Redirect to cart page, including cart data in the URL (optional, but a good practice)
        window.location.href = `cart.html`;
    }
});

// ... (rest of the code)