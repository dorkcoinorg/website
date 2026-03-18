import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Fade In Animation
export const fadeInAnimation = () => {
  const fadeIn = gsap.utils.toArray(".gsap-fade-in");
  if (!fadeIn.length) return;

  fadeIn.forEach((item) => {
    const scrollTriggerSupport = item.dataset.scrollTrigger;
    const animationStart = item.dataset.start || "85%";
    const animationEnd = item.dataset.end || "25%";
    const animationStagger = item.dataset.stagger || "0";
    const animationDuration = item.dataset.duration || "1";
    const animationDelay = item.dataset.delay || "0";
    const animationY = item.dataset.y || "0";
    const animationX = item.dataset.x || "0";
    const animationOpacity = item.dataset.opacity || "0";
    const scrollMarker = item.dataset.markers === "true";

    const tl = scrollTriggerSupport
      ? gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: `top ${animationStart}`,
            end: `bottom ${animationEnd}`,
            markers: scrollMarker,
            once: true,
          },
        })
      : gsap.timeline();

    tl.from(item, {
      opacity: parseFloat(animationOpacity),
      yPercent: parseFloat(animationY),
      xPercent: parseFloat(animationX),
      delay: parseFloat(animationDelay),
      stagger: parseFloat(animationStagger),
      duration: parseFloat(animationDuration),
      ease: "back.out",
    });
  });
};

// Text Split Animation
export const textAnimation = () => {
  const items = gsap.utils.toArray(".gsap-text-animation");
  if (!items.length) return;

  items.forEach((item) => {
    const scrollTriggerSupport = item.dataset.scrollTrigger;
    const animationStart = item.dataset.start || "85%";
    const animationEnd = item.dataset.end || "25%";
    const animationStagger = item.dataset.stagger || "0.05";
    const animationDuration = item.dataset.duration || "1";
    const animationDelay = item.dataset.delay || "0";
    const animationY = item.dataset.y || "50";
    const animationOpacity = item.dataset.opacity || "0";
    const splitType = item.dataset.splitType || "chars";
    const scrollMarker = item.dataset.markers === "true";

    const textSplit = new SplitText(item, {
      type: splitType,
    });

    let itemsToAnimate;

    if (splitType === "chars") {
      itemsToAnimate = textSplit.chars;
    } else if (splitType === "words") {
      itemsToAnimate = textSplit.words;
    } else if (splitType === "lines") {
      itemsToAnimate = textSplit.lines;
    } else {
      console.error("Invalid split type:", splitType);
      return;
    }

    if (!itemsToAnimate || !itemsToAnimate.length) {
      textSplit.revert();
      return;
    }

    const tl = scrollTriggerSupport
      ? gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: `top ${animationStart}`,
            end: `bottom ${animationEnd}`,
            markers: scrollMarker,
            once: true,
          },
        })
      : gsap.timeline();

    tl.from(itemsToAnimate, {
      opacity: parseFloat(animationOpacity),
      delay: parseFloat(animationDelay),
      yPercent: parseFloat(animationY),
      duration: parseFloat(animationDuration),
      stagger: parseFloat(animationStagger),
      ease: "back.out",
      onComplete: () => {
        textSplit.revert();
      },
    });
  });
};

export const rocketLaunch = () => {
  const rocketLaunch = document.querySelector(
    ".road-map-section-1__element--1"
  );
  if (rocketLaunch) {
    const startY = 0;
    const endY = 1200;
  }
};

// Initialize All Animations
export const initAllAnimations = () => {
  fadeInAnimation();
  textAnimation();
  rocketLaunch();
};

// Cleanup function
export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  gsap.killTweensOf("*");
};
