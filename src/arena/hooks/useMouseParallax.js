import { useEffect, useRef } from 'react';

export function useMouseParallax(intensity = 10) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let frameId;
    const onMove = (event) => {
      const bounds = node.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        node.style.setProperty('--parallax-x', `${x * intensity}px`);
        node.style.setProperty('--parallax-y', `${y * intensity}px`);
      });
    };
    const reset = () => {
      node.style.setProperty('--parallax-x', '0px');
      node.style.setProperty('--parallax-y', '0px');
    };
    node.addEventListener('pointermove', onMove);
    node.addEventListener('pointerleave', reset);
    return () => { cancelAnimationFrame(frameId); node.removeEventListener('pointermove', onMove); node.removeEventListener('pointerleave', reset); };
  }, [intensity]);

  return ref;
}
