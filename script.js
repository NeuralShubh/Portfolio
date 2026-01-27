/* =====================================================
   LENIS – SMOOTH SCROLL SETUP
===================================================== */

// Initialize Lenis for smooth scrolling
const lenis = new Lenis();

// Sync Lenis scroll with GSAP ScrollTrigger
lenis.on("scroll", ScrollTrigger.update);

// Use GSAP ticker to drive Lenis animation
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // convert seconds to milliseconds
});

// Disable GSAP lag smoothing for accurate scroll sync
gsap.ticker.lagSmoothing(0);



/* =====================================================
   GSAP – MAIN ANIMATIONS (ON DOM LOAD)
===================================================== */
document.addEventListener("DOMContentLoaded", () => {

  // Register GSAP plugin
  gsap.registerPlugin(ScrollTrigger);

  /* ---------------------------------------------
     PROJECTS HEADING ANIMATION
  ---------------------------------------------- */
  gsap.from(".projects-heading", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#horizontal-scroll",
      start: "top 80%",
    },
  });


  /* ---------------------------------------------
     HORIZONTAL SCROLL SECTION
  ---------------------------------------------- */
  const horizontalSection = document.querySelector(".horizontal");

  gsap.to(".horizontal", {
    x: () => -(horizontalSection.scrollWidth - window.innerWidth),
    scrollTrigger: {
      trigger: ".horizontal",
      start: "center center",
      end: () => "+=" + horizontalSection.scrollWidth,
      pin: "#horizontal-scroll",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });


  /* ---------------------------------------------
     PROJECT CARD ENTRY ANIMATION
  ---------------------------------------------- */
  document.querySelectorAll(".card").forEach((card) => {
    gsap.from(card, {
      x: 250,
      duration: 0.6,
      scrollTrigger: {
        trigger: card,
        start: "top bottom",
        toggleActions: "play none none reverse",
      },
    });
  });


  /* ---------------------------------------------
     HERO / INTRO SECTION ANIMATION
  ---------------------------------------------- */
  const heroTimeline = gsap.timeline();

  heroTimeline
    .from(".heading", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    })
    .from(
      ".content p",
      {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.8"
    );
});



/* =====================================================
   ABOUT SECTION ANIMATION
===================================================== */
gsap.from(".about .heading", {
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".about",
    start: "top 75%",
  },
});

gsap.from(".about-text", {
  y: 30,
  opacity: 0,
  duration: 0.8,
  stagger: 0.25,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".about",
    start: "top 70%",
  },
});



/* =====================================================
   VISION SECTION ANIMATION
===================================================== */
gsap.from(".vision-section .heading", {
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".vision-section",
    start: "top bottom",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".vision-text", {
  y: 30,
  opacity: 0,
  duration: 0.8,
  stagger: 0.25,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".vision-section",
    start: "top bottom",
    toggleActions: "play none none reverse",
  },
});



/* =====================================================
   PARTICLE BACKGROUND (CANVAS)
===================================================== */

// Canvas setup
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");

// Particle configuration
let particles = [];
const particleCount = 60;
const colors = ["#bbbb4f7c", "#bbbb4f51"];

// Resize canvas to full screen
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();


/* ---------------------------------------------
   PARTICLE CLASS
---------------------------------------------- */
class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 2 + 0.5;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.speedX = (Math.random() - 0.5) * 0.6;
    this.speedY = (Math.random() - 0.5) * 0.6;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Bounce from edges
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}


/* ---------------------------------------------
   PARTICLE INITIALIZATION
---------------------------------------------- */
function initParticles() {
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
}

initParticles();


/* ---------------------------------------------
   PARTICLE ANIMATION LOOP
---------------------------------------------- */
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();




