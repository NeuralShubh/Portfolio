/* =====================================================
   1. LENIS SMOOTH SCROLL SETUP
===================================================== */
// This creates the high-end smooth scrolling effect
const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

/* =====================================================
   2. MAIN ANIMATION LOGIC
===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  
  // Register the ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // HERO REVEAL ANIMATION
  // This selects all .reveal-text elements and moves them up
  const heroTl = gsap.timeline();

  heroTl.to(".reveal-text", {
    y: 0,            // Move to original position
    opacity: 1,      // Make visible
    duration: 1.2,   // Speed of animation
    ease: "power4.out",
    stagger: 0.1,    // Delay between each line
    delay: 0.5       // Wait a bit before starting
  });

  // TYPEWRITER EFFECT
  // This handles the dynamic text for your AI/ML focus
  const typewriterElement = document.getElementById('typewriter');
  
  if (typewriterElement) {
    new Typewriter(typewriterElement, {
      strings: [
        'Intelligent Systems', 
        'Machine Learning Models', 
        'Statistical Insights', 
        'Data-Driven Solutions'
      ],
      autoStart: true,
      loop: true,
      delay: 75,
      deleteSpeed: 50,
    });
  }
});






/* ---------------------------------------------
   REDESIGNED ABOUT - REVERSIBLE LOGIC
---------------------------------------------- */

// 1. "The Vision" Title Animation
gsap.to(".about-header .reveal-text", {
  y: 0,
  opacity: 1,
  duration: 1.2,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".about-header",
    start: "top 90%", 
    // Changed to 'play' so it doesn't reset and disappear
    toggleActions: "play none none none", 
  }
});

// 2. Narrative Paragraphs
gsap.to(".text-col .reveal-text", {
  y: 0,
  opacity: 1,
  duration: 1,
  stagger: 0.15,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".text-col",
    start: "top 85%",
    toggleActions: "play none none none",
  }
});

// 3. Expertise Grid Items (The 4 Boxes)
// We target the container to trigger all boxes at once with a stagger
gsap.to(".expertise-item", {
  y: 0,
  opacity: 1,
  duration: 0.8,
  stagger: 0.2,
  ease: "expo.out",
  scrollTrigger: {
    trigger: ".expertise-grid",
    start: "top 85%",
    toggleActions: "play none none none",
  }
});








/* ---------------------------------------------
   PHASE 5: THE DARK STEALTH SYNC
---------------------------------------------- */
const initDarkScroll = () => {
  const track = document.querySelector(".horizontal-track");
  const section = document.querySelector("#projects-horizontal");

  if (!track || !section) return;

  // The 60px buffer keeps Project 07 (Matrix Lab) just away from the edge
  const getScrollAmount = () => {
    return -(track.scrollWidth - window.innerWidth + 60);
  };

  const setSectionHeight = () => {
    // This removes the "blank space" by matching vertical height to horizontal track
    section.style.height = `${track.scrollWidth + 60}px`;
  };
  
  setSectionHeight();
  window.addEventListener("resize", setSectionHeight);


  gsap.to(".projects-main-header .reveal-text", {
  y: 0,
  opacity: 1,
  duration: 1.2,
  ease: "power4.out",
  scrollTrigger: {
    trigger: "#projects-horizontal",
    start: "top 80%",
    toggleActions: "play none none none",
  }
});


  gsap.to(track, {
    x: getScrollAmount,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "bottom bottom", 
      pin: ".horizontal-sticky-wrap",
      scrub: 1.2, // Higher number = smoother, more "liquid" feel
      invalidateOnRefresh: true,
      // Prevents the page from jumping when the pinning starts
      anticipatePin: 1 
    }
  });
};

document.addEventListener("DOMContentLoaded", initDarkScroll);








/* =====================================================
   ACCOMPLISHMENTS: ULTRA-PROACTIVE START JS
   Triggers the line when the section is 40% into the viewport
===================================================== */

const initAccomplishmentsTimeline = () => {
  if (typeof gsap === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);

  // 1. THE DRAWING LINE (ULTRA-EARLY START)
  gsap.from(".timeline-track", {
    scaleY: 0,
    transformOrigin: "top center",
    ease: "none",
    scrollTrigger: {
      trigger: "#certificates", 
      // "top 40%" starts drawing while the section is still 
      // in the lower half of the viewer's screen
      start: "top 40%",         
      end: "bottom 80%",
      scrub: 1.2, 
    }
  });

  // 2. THE STAGGERED REVEAL (CARDS, DOTS, YEARS)
  const timelineItems = document.querySelectorAll(".timeline-item");

  timelineItems.forEach((item, index) => {
    const isEven = index % 2 !== 0;
    const card = item.querySelector(".cert-card");
    const dot = item.querySelector(".timeline-dot");
    const year = item.querySelector(".time-stamp");

    const revealTl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top 85%", 
        end: "top -20%",  
        toggleActions: "play reverse play reverse", 
      }
    });

    revealTl.to(dot, {
      scale: 1,
      duration: 0.4,
      ease: "back.out(1.7)"
    })
    .to(year, {
      opacity: 1,
      duration: 0.4,
      ease: "power2.out"
    }, "-=0.2")
    .to(card, {
      opacity: 1,
      x: 0,
      duration: 0.7,
      startAt: { x: isEven ? 80 : -80 }, 
      ease: "power3.out"
    }, "-=0.3");
  });
};

window.addEventListener("load", initAccomplishmentsTimeline);







/* =====================================================
   FOOTER: FINAL KINETIC JS CODE
   Author: Gemini
   Features: Parallax, Magnetic Button, Staggered Reveal
===================================================== */

const initFooterAnimations = () => {
  // 1. Safety Check: Ensure GSAP and ScrollTrigger are loaded in HTML
  if (typeof gsap === "undefined") {
    console.warn("GSAP or ScrollTrigger not found. Ensure script tags are in the HTML.");
    return;
  }

  // Register the ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // 2. PARALLAX WATERMARK
  // Makes 'GEMINI' drift horizontally as you scroll
  gsap.to(".watermark-text", {
    x: -80, // Subtle leftward drift
    ease: "none",
    scrollTrigger: {
      trigger: "#main-footer",
      start: "top bottom", 
      end: "bottom top",
      scrub: 1.5, // Tied to scroll speed for a smooth feel
    }
  });

  // 3. SOCIAL LINKS STAGGERED REVEAL
  // Animates the hidden social icons into view
  gsap.to(".social-link", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.15, // Creates the one-by-one 'wave' effect
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".footer-bottom",
      start: "top 92%", // Triggers when the bottom section enters the screen
      toggleActions: "play none none none" 
    }
  });

  // 4. MAGNETIC BUTTON EFFECT
  // Pulls the WhatsApp button toward the mouse for better UX
  const ctaBtn = document.querySelector(".cta-button");
  
  if (ctaBtn) {
    ctaBtn.addEventListener("mousemove", (e) => {
      const rect = ctaBtn.getBoundingClientRect();
      // Calculate mouse position relative to button center
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(ctaBtn, {
        x: x * 0.25, // Strength of the magnetic pull
        y: y * 0.25,
        duration: 0.4,
        ease: "power2.out"
      });
    });

    ctaBtn.addEventListener("mouseleave", () => {
      // Elastic snap-back when the mouse leaves
      gsap.to(ctaBtn, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.3)" 
      });
    });
  }
};

// Start animations once the browser has fully loaded all assets
window.addEventListener("load", () => {
  initFooterAnimations();
});
















































/* ---------------------------------------------
   PARTICLES CONFIG: DEEP RED #900f0f
---------------------------------------------- */
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 120, // Increased count for better visibility
      "density": { "enable": true, "value_area": 800 }
    },
    "color": {
      "value": "#900f0f" // Your requested Deep Red
    },
    "shape": { "type": "circle" },
    "opacity": {
      "value": 0.7, // Higher opacity so the dark red is visible
      "random": false
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#900f0f", // Lines match the new red
      "opacity": 0.4, 
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2
    }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "grab" }
    }
  }
});
