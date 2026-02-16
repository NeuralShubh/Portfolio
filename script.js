<<<<<<< HEAD
/* NAVBAR FUNCTIONALITY */
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Scroll effect on navbar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Toggle mobile menu
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close menu when link is clicked
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // Update active link on scroll with smooth tracking
  const updateActiveLink = () => {
    const sections = document.querySelectorAll("section[id], footer");
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          const href = link.getAttribute("href");
          if (href && href === `#${section.id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  };

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink();

  // Smooth scroll behavior
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 70;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
          });
        }
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const heroTl = gsap.timeline({
    defaults: { ease: "cubic.out" }
  });

  heroTl
    .to(".hero-title .reveal-text", {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      rotateX: 0,
      duration: 1.8,
      stagger: 0.15,
      ease: "cubic.out"
    })
    .to(".hero-content .reveal-text", {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      rotateX: 0,
      duration: 1.4,
      stagger: 0.12,
      ease: "cubic.out"
    }, "-=1.2")
    .to(".hero-subtext", {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      rotateX: 0,
      duration: 1,
      ease: "cubic.out"
    }, "-=0.8")
    .to(".scroll-down-wrap", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "cubic.out"
    }, "-=0.6");

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

const initCertificatesHeadingMobile = () => {
  const heading = document.querySelector("#certificates .about-header .heading");
  if (!heading) return;

  const desktopHeadingHtml = "Technical <span>Accomplishments</span>";
  const applyHeading = () => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    heading.innerHTML = isMobile ? "Certificates" : desktopHeadingHtml;
  };

  applyHeading();
  window.addEventListener("resize", applyHeading);
};

document.addEventListener("DOMContentLoaded", initCertificatesHeadingMobile);

const initAboutAnimations = () => {
  gsap.to(".about-header .reveal-text", {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    rotateX: 0,
    duration: 1.4,
    ease: "cubic.out",
    scrollTrigger: {
      trigger: ".about-header",
      start: "top 85%", 
      toggleActions: "play reverse play reverse", 
    }
  });

  // Add glow animation to the Vision span on scroll
  gsap.to(".about-header .heading span::before", {
    opacity: 1,
    duration: 0.8,
    delay: 0.6,
    ease: "cubic.out",
    scrollTrigger: {
      trigger: ".about-header",
      start: "top 85%", 
      toggleActions: "play reverse play reverse", 
    }
  });

  gsap.to(".about-header .heading span::after", {
    opacity: 0.6,
    duration: 0.8,
    delay: 0.7,
    ease: "cubic.out",
    scrollTrigger: {
      trigger: ".about-header",
      start: "top 85%", 
      toggleActions: "play reverse play reverse", 
    }
  });

  gsap.to(".text-col .reveal-text", {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    rotateX: 0,
    duration: 1.2,
    stagger: 0.12,
    ease: "cubic.out",
    scrollTrigger: {
      trigger: ".text-col",
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    }
  });

  gsap.to(".expertise-item", {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 1.2,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".expertise-grid",
      start: "top 75%",
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
  const mm = gsap.matchMedia();

  mm.add("(min-width: 769px)", () => {
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

    return () => {
      window.removeEventListener("resize", setSectionHeight);
      section.style.height = "";
      gsap.set(track, { clearProps: "transform" });
    };
  });

  mm.add("(max-width: 768px)", () => {
    section.style.height = "auto";
    gsap.set(".projects-main-header .reveal-text", {
      y: 0,
      opacity: 1,
      filter: "blur(0px)"
    });
    gsap.set(projectCards, {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      y: 0
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  initHorizontalProjects();
  ScrollTrigger.refresh();
});

const initAccomplishmentsTimeline = () => {
  if (typeof gsap === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

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
      start: isMobile ? "top 95%" : "top 90%",
      toggleActions: isMobile ? "play none none none" : "play reverse play reverse",
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
        start: isMobile ? "top 92%" : "top 85%", 
        end: isMobile ? "top 45%" : "top -20%",  
        toggleActions: isMobile ? "play none none none" : "play reverse play reverse", 
      }
    });

    if (isMobile) {
      revealTl.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.75,
        startAt: { y: 36 },
        ease: "power3.out"
      });
      return;
    }

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
  
  // Initialize particles.js after everything is loaded
  if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 60,
          "density": { "enable": true, "value_area": 800 }
        },
        "color": {
          "value": "#FFEB99"
        },
        "shape": { "type": "circle" },
        "opacity": {
          "value": 0.5,
          "random": false
        },
        "size": {
          "value": 2,
          "random": true
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#FFEB99",
          "opacity": 0.3, 
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
  }
});

// Fallback: Also try to initialize particles on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    if (typeof particlesJS !== 'undefined' && !window.particlesInitialized) {
      particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 60,
            "density": { "enable": true, "value_area": 800 }
          },
          "color": {
            "value": "#FFEB99"
          },
          "shape": { "type": "circle" },
          "opacity": {
            "value": 0.5,
            "random": false
          },
          "size": {
            "value": 2,
            "random": true
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#FFEB99",
            "opacity": 0.3, 
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
      window.particlesInitialized = true;
    }
  }, 100);
});
=======
/* NAVBAR FUNCTIONALITY */
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Scroll effect on navbar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Toggle mobile menu
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close menu when link is clicked
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // Update active link on scroll with smooth tracking
  const updateActiveLink = () => {
    const sections = document.querySelectorAll("section[id], footer");
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          const href = link.getAttribute("href");
          if (href && href === `#${section.id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  };

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink();

  // Smooth scroll behavior
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 70;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
          });
        }
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const heroTl = gsap.timeline({
    defaults: { ease: "cubic.out" }
  });

  heroTl
    .to(".hero-title .reveal-text", {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      rotateX: 0,
      duration: 1.8,
      stagger: 0.15,
      ease: "cubic.out"
    })
    .to(".hero-content .reveal-text", {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      rotateX: 0,
      duration: 1.4,
      stagger: 0.12,
      ease: "cubic.out"
    }, "-=1.2")
    .to(".hero-subtext", {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      rotateX: 0,
      duration: 1,
      ease: "cubic.out"
    }, "-=0.8")
    .to(".scroll-down-wrap", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "cubic.out"
    }, "-=0.6");

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
    rotateX: 0,
    duration: 1.4,
    ease: "cubic.out",
    scrollTrigger: {
      trigger: ".about-header",
      start: "top 85%", 
      toggleActions: "play reverse play reverse", 
    }
  });

  // Add glow animation to the Vision span on scroll
  gsap.to(".about-header .heading span::before", {
    opacity: 1,
    duration: 0.8,
    delay: 0.6,
    ease: "cubic.out",
    scrollTrigger: {
      trigger: ".about-header",
      start: "top 85%", 
      toggleActions: "play reverse play reverse", 
    }
  });

  gsap.to(".about-header .heading span::after", {
    opacity: 0.6,
    duration: 0.8,
    delay: 0.7,
    ease: "cubic.out",
    scrollTrigger: {
      trigger: ".about-header",
      start: "top 85%", 
      toggleActions: "play reverse play reverse", 
    }
  });

  gsap.to(".text-col .reveal-text", {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    rotateX: 0,
    duration: 1.2,
    stagger: 0.12,
    ease: "cubic.out",
    scrollTrigger: {
      trigger: ".text-col",
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    }
  });

  gsap.to(".expertise-item", {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 1.2,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".expertise-grid",
      start: "top 75%",
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
  
  // Initialize particles.js after everything is loaded
  if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 60,
          "density": { "enable": true, "value_area": 800 }
        },
        "color": {
          "value": "#FFEB99"
        },
        "shape": { "type": "circle" },
        "opacity": {
          "value": 0.5,
          "random": false
        },
        "size": {
          "value": 2,
          "random": true
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#FFEB99",
          "opacity": 0.3, 
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
  }
});

// Fallback: Also try to initialize particles on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    if (typeof particlesJS !== 'undefined' && !window.particlesInitialized) {
      particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 60,
            "density": { "enable": true, "value_area": 800 }
          },
          "color": {
            "value": "#FFEB99"
          },
          "shape": { "type": "circle" },
          "opacity": {
            "value": 0.5,
            "random": false
          },
          "size": {
            "value": 2,
            "random": true
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#FFEB99",
            "opacity": 0.3, 
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
      window.particlesInitialized = true;
    }
  }, 100);
});
>>>>>>> 9f762463410f2a5d32a31f4974b40a32d7c89de8
