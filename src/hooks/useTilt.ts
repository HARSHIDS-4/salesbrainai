import { useEffect, useRef, useState } from 'react';

/**
 * Tracks pointer position relative to an element, returning normalized
 * rotation values for subtle 3D tilt effects. Disabled on touch devices.
 */
export function useTilt<T extends HTMLElement>(max = 8) {
  const ref = useRef<T | null>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(hover: none)').matches) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setTilt({
          ry: (px - 0.5) * max * 2,
          rx: -(py - 0.5) * max * 2,
        });
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(frame);
      setTilt({ rx: 0, ry: 0 });
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
      cancelAnimationFrame(frame);
    };
  }, [max]);

  return { ref, tilt };
}
