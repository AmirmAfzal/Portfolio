"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

type TiltProps = {
  children: React.ReactNode;
  className?: string;
  /** Max tilt in degrees */
  max?: number;
  /** Extra scale while hovering */
  hoverScale?: number;
};

/**
 * Cursor-follow 3D tilt wrapper. Automatically disabled on touch devices
 * and for users who prefer reduced motion.
 */
const Tilt = ({
  children,
  className,
  max = 8,
  hoverScale = 1.02,
}: TiltProps) => {
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(hover: none)").matches
    ) {
      return;
    }

    const setRotationX = gsap.quickTo(el, "rotationX", {
      duration: 0.4,
      ease: "power3",
    });
    const setRotationY = gsap.quickTo(el, "rotationY", {
      duration: 0.4,
      ease: "power3",
    });
    const setScale = gsap.quickTo(el, "scale", { duration: 0.3 });

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      setRotationY(px * max);
      setRotationX(-py * max);
      setScale(hoverScale);
    };

    const onLeave = () => {
      setRotationX(0);
      setRotationY(0);
      setScale(1);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [max, hoverScale]);

  return (
    <div style={{ perspective: 900 }}>
      <div
        ref={innerRef}
        className={className}
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Tilt;
