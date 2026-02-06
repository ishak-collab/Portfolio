
import React, { useEffect, useRef } from 'react';

interface BinaryParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  decay: number;
  char: string;
}

const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<BinaryParticle[]>([]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Helper: Create a single binary particle
    const createParticle = (x: number, y: number): BinaryParticle => {
      // Randomize velocity for a "drift" effect
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.5 + 0.2; 
      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.floor(Math.random() * 10 + 10), // Font size between 10px and 20px
        opacity: 1,
        decay: Math.random() * 0.02 + 0.015, // Random fade speed
        char: Math.random() > 0.5 ? '1' : '0'
      };
    };

    // Spawn a burst of particles
    const spawnParticles = (x: number, y: number, count: number) => {
      for (let i = 0; i < count; i++) {
        // Add slight randomness to spawn position so they don't clump perfectly
        const offsetX = (Math.random() - 0.5) * 20;
        const offsetY = (Math.random() - 0.5) * 20;
        particlesRef.current.push(createParticle(x + offsetX, y + offsetY));
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Spawn binary digits
      spawnParticles(e.clientX, e.clientY, 3);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render particles
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        
        // Update physics
        p.x += p.vx;
        p.y += p.vy;
        p.opacity -= p.decay;

        // Remove dead particles
        if (p.opacity <= 0) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        // Draw
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.font = `bold ${p.size}px "Courier New", monospace`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Neon Glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#22d3ee'; // Neon Cyan
        ctx.fillStyle = '#ffffff';   // White Core for readability
        
        ctx.fillText(p.char, p.x, p.y);
        
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-[100]" 
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default CursorTrail;
