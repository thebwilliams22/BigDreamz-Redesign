const scrollRevealOption = {
    distance:"50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".section__container h3", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".section__container h1", {
    ...scrollRevealOption,
    origin:"left",
    delay: 500,
});
ScrollReveal().reveal(".section__container h2", {
    ...scrollRevealOption,
    origin:"right",
    delay: 1000,
});
ScrollReveal().reveal(".section__container button", {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".nav__links li", {
    ...scrollRevealOption,
    origin:"top",
    interval:300,
    delay: 2000,
});

ScrollReveal().reveal(".socials a", {
    duration: 1000,
    interval: 500,
    delay: 4000,
});
ScrollReveal().reveal(".about__section h3, .about__section h1, .about__section .about__text, .about__section .about__btn", {
    ...scrollRevealOption,
    origin: "bottom",
    interval: 150,   // stagger the elements a little
    delay: 2000      // start after the hero animations finish
});
/* -------------------------------------------------
   SIMPLE VANILLA CAROUSEL FOR THE GRAPHIC SECTION
   ------------------------------------------------- */
(function () {
    const carousel = document.querySelector('.carousel');
    if (!carousel) return;               // safety

    const slides    = carousel.querySelectorAll('.slide');
    const slidesWrapper = carousel.querySelector('.slides');   // <‑‑ NEW
    const leftBtn   = carousel.querySelector('.arrow--left');
    const rightBtn  = carousel.querySelector('.arrow--right');
    let currentIdx  = 0;

    // Show slide at index i and move the wrapper
    const showSlide = i => {
        slides.forEach((s, idx) => s.classList.toggle('active', idx === i));
        // translate the whole row
        slidesWrapper.style.transform = `translateX(-${i * 100}%)`;
    };

    leftBtn.addEventListener('click', () => {
        currentIdx = (currentIdx - 1 + slides.length) % slides.length;
        showSlide(currentIdx);
    });

    rightBtn.addEventListener('click', () => {
        currentIdx = (currentIdx + 1) % slides.length;
        showSlide(currentIdx);
    });

    /* ---- swipe support – unchanged ---- */
    let startX = 0;
    carousel.addEventListener('touchstart', e => startX = e.touches[0].clientX);
    carousel.addEventListener('touchend', e => {
        const diff = e.changedTouches[0].clientX - startX;
        if (Math.abs(diff) > 50) diff > 0 ? leftBtn.click() : rightBtn.click();
    });
})();
ScrollReveal().reveal(".graphics__section h1, .carousel, .graphic__info", {
    ...scrollRevealOption,
    origin: "bottom",
    interval: 150,
    delay: 2000   // starts after the sports‑services section finishes
});
/* Skillz – reveal heading, image+text, and optional button */
ScrollReveal().reveal(".skillz__section h1, .skillz__content, .skillz__extra", {
    ...scrollRevealOption,
    origin: "bottom",
    interval: 150,
    delay: 3000  // after the graphics carousel finishes
});