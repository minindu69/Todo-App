// src/config/particlesOptions.js

export const particlesOptions = {
  background: {
    color: {
      value: "#000000ff", // background color
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push", // adds particles on click
      },
      onHover: {
        enable: true,
        mode: "repulse", // particles move away on hover
      },
    },
    modes: {
      push: {
        quantity: 4, // number of particles added on click
      },
      repulse: {
        distance: 160, // distance particles move away
        duration: 0.4, // duration of repulse effect
      },
    },
  },
  particles: {
    color: {
      value: "#a600ffff", // particle color
    },
    links: {
      color: "#ee00ffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 100, // number of particles
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};
