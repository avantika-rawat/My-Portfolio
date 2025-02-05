// navbar animation

gsap.from(".head", {
  y: -80,
  duration: 1,
  delay: 0.5,
});

//cards animation

var tline = gsap.timeline({
  scrollTrigger: {
    trigger: ".skills",
    start: "top 70%",
    end: " top 80%",
    scrub: 0.6,
    stagger: 1.6,
    ease: "power3.out",
  },
});

tline.from(".skills .section-skill-title", {
  x: -180,
  opacity: 0,
  duration: 1.5,
});

tline.from(".skills .cards", {
  y: 180,
  opacity: 0,
  duration: 2,
  delay: 1.5,
});

//portfolio animation

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".Portfolio",
    start: "top 70%",
    end: "top 20%",
    scrub: 0.6,
    ease: "power3.out",
  },
});

tl.from(".Portfolio .section-pfolio-title", {
  x: -180,
  opacity: 0,
  duration: 2,
});

tl.from(".Portfolio .item", {
  y: 180,
  opacity: 0,
  duration: 1.5,
  stagger: 0.2,
});

//cert animation
var tlCert = gsap.timeline({
  scrollTrigger: {
    trigger: ".certificates",
    start: "top 90%",
    end: "top 100%",
    scrub: 0.6,
    markers: true,
    ease: "power3.out",
  },
});

tlCert.from(".cert-head h2", {
  y: 180,
  opacity: 0,
  duration: 2,
});
