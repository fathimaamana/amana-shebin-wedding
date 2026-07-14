import { useEffect } from "react";
import gsap from "gsap";

const useHeroAnimation = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".hero-crescent", {
      opacity: 0,
      y: -40,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(".hero-family", {
        opacity: 0,
        y: 20,
        duration: 0.6,
      })
      .from(".hero-name", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.2,
      })
      .from(".hero-heart", {
        opacity: 0,
        scale: 0,
        duration: 0.5,
      })
      .from(".hero-invite", {
        opacity: 0,
        y: 20,
        duration: 0.6,
      })
      .from(".hero-date", {
        opacity: 0,
        y: 20,
        duration: 0.5,
      })
      .from(".hero-countdown", {
        opacity: 0,
        y: 20,
        duration: 0.6,
      })
      .from(".hero-button", {
        opacity: 0,
        y: 20,
        duration: 0.5,
      });
  }, []);
};

export default useHeroAnimation;