import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBg = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log("Initializing particles engine:", engine);
    await loadFull(engine); // important!
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles container loaded:", container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: true, zIndex: -9 },
        particles: {
          number: {
            value: 50, // number of particles
            density: {
              enable: true, // distribute particles based on area
              area: 800, // area for density calculation
            },
          },
          color: {
            value: "#000000", // particle color
            animation: {
              enable: false, // animate color over time
              speed: 20,
              sync: false,
            },
          },
          shape: {
            type: "circle", // "circle" | "edge" | "triangle" | "star" | "polygon" | "image"
            stroke: {
              width: 0,
              color: "#000000",
            },
          },
          opacity: {
            value: 0.1, // particle opacity
            random: false, // random opacity
            animation: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3, // particle size
            random: { enable: false, minimumValue: 1 },
            animation: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          rotate: {
            value: 0, // initial rotation
            random: true, // random rotation
            direction: "clockwise", // "clockwise" | "counter-clockwise"
            animation: {
              enable: false,
              speed: 5,
              sync: false,
            },
          },
          move: {
            enable: true, // enable movement
            speed: 2, // movement speed
            direction: "none", // "none" | "top" | "top-right" | "right" | "bottom-right" | "bottom" | "bottom-left" | "left" | "top-left"
            random: false, // randomize movement
            straight: false, // straight line movement
            outModes: {
              // what happens when particle leaves canvas
              default: "out", // "out" | "bounce" | "destroy"
              top: "out",
              bottom: "out",
              left: "out",
              right: "out",
            },
            attract: {
              // attract behavior (gravity-like)
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
          links: {
            // connecting lines between particles
            enable: true,
            distance: 150,
            color: "#000000",
            opacity: 0.1,
            width: 1,
            triangles: {
              // draw triangles between 3 particles
              enable: false,
              color: "#000000",
              opacity: 0.1,
            },
          },
          collisions: {
            // particles bounce on collision
            enable: false,
            mode: "bounce", // "bounce" | "absorb" | "destroy"
          },
          wobble: {
            // wiggly movement
            enable: false,
            distance: 5,
            speed: 50,
          },
          tilt: {
            // tilting rotation effect
            enable: false,
            value: 0,
            direction: "clockwise", // "clockwise" | "counter-clockwise"
            animation: { enable: false, speed: 0, sync: false },
          },
          roll: {
            // rolling effect
            enable: false,
            speed: 25,
            darken: { enable: false, value: 0 },
            enlighten: { enable: false, value: 0 },
          },
          shadow: {
            // particle shadow
            enable: false,
            color: "#000000",
            blur: 0,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
        },
      }}
    />
  );
};

export default ParticlesBg;
