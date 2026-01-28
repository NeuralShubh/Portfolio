document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const heroTl = gsap.timeline({
    defaults: { ease: "expo.out" }
  });

  heroTl
    .to(".hero-title .reveal-text", {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 2,
      stagger: 0.2,
    })
    .to(".hero-content .reveal-text, .hero-subtext", {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1.5,
      stagger: 0.1,
    }, "-=1.4")
    .to(".scroll-down-wrap", {
      opacity: 1,
      y: 0,
      duration: 1,
    }, "-=0.8");

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

const initAboutAnimations = () => {
  gsap.to(".about-header .reveal-text", {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 1.2,
    ease: "expo.out",
    scrollTrigger: {
      trigger: ".about-header",
      start: "top 90%", 
      toggleActions: "play reverse play reverse", 
    }
  });

  gsap.to(".text-col .reveal-text", {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 1,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".text-col",
      start: "top 85%",
      toggleActions: "play reverse play reverse",
    }
  });

  gsap.to(".expertise-item", {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 1.5,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".expertise-grid",
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  initAboutAnimations();
  ScrollTrigger.refresh();
});


const initHorizontalProjects = () => {
  const track = document.querySelector(".horizontal-track");
  const section = document.querySelector("#projects-horizontal");
  const stickyWrap = document.querySelector(".horizontal-sticky-wrap");
  const projectCards = document.querySelectorAll(".project-card");

  if (!track || !section) return;

  const scrollSpeedFactor = 2; 

  const setSectionHeight = () => {
    const horizontalWidth = track.scrollWidth;
    section.style.height = `${horizontalWidth * scrollSpeedFactor}px`;
  };
  
  setSectionHeight();
  window.addEventListener("resize", setSectionHeight);

  gsap.to(track, {
    x: () => -(track.scrollWidth - window.innerWidth + 100),
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      pin: stickyWrap,
      scrub: 1.2,
      invalidateOnRefresh: true,
      anticipatePin: 1
    }
  });

  gsap.to(".projects-main-header .reveal-text", {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 1.2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    }
  });

  gsap.to(projectCards, {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    y: 0,
    duration: 1.5,
    stagger: 0.2,
    ease: "expo.out",
    scrollTrigger: {
      trigger: section,
      start: "top 70%",
      toggleActions: "play reverse play reverse",
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  initHorizontalProjects();
  ScrollTrigger.refresh();
});

const initAccomplishmentsTimeline = () => {
  if (typeof gsap === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".timeline-track", {
    scaleY: 0,
    transformOrigin: "top center",
    ease: "none",
    scrollTrigger: {
      trigger: "#certificates", 
      start: "top 40%",         
      end: "bottom 80%",
      scrub: 1.2, 
    }
  });

  gsap.to("#certificates .about-header .reveal-text", {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 1.2,
    ease: "expo.out",
    scrollTrigger: {
      trigger: "#certificates .about-header",
      start: "top 90%",
      toggleActions: "play reverse play reverse",
    }
  });

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



const initFooterAnimations = () => {
  if (typeof gsap === "undefined") {
    console.warn("GSAP or ScrollTrigger not found. Ensure script tags are in the HTML.");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".watermark-text", {
    x: -80,
    ease: "none",
    scrollTrigger: {
      trigger: "#main-footer",
      start: "top bottom", 
      end: "bottom top",
      scrub: 1.5,
    }
  });

  gsap.to(".social-link", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".footer-bottom",
      start: "top 92%",
      toggleActions: "play none none none" 
    }
  });

  const ctaBtn = document.querySelector(".cta-button");
  
  if (ctaBtn) {
    ctaBtn.addEventListener("mousemove", (e) => {
      const rect = ctaBtn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(ctaBtn, {
        x: x * 0.25,
        y: y * 0.25,
        duration: 0.4,
        ease: "power2.out"
      });
    });

    ctaBtn.addEventListener("mouseleave", () => {
      gsap.to(ctaBtn, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.3)" 
      });
    });
  }
};

window.addEventListener("load", () => {
  initFooterAnimations();
});

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 120,
      "density": { "enable": true, "value_area": 800 }
    },
    "color": {
      "value": "#900f0f"
    },
    "shape": { "type": "circle" },
    "opacity": {
      "value": 0.7,
      "random": false
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#900f0f",
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

