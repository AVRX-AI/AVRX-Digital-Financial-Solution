import React, { useEffect, useRef } from 'react';

export const Hero3DCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth || 600;
      height = canvas.height = canvas.parentElement.clientHeight || 500;
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracking for 3D tilt reaction
    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Nodes representing AVRX Pillars
    const nodes = [
      { name: 'DIGITAL', color: '#00f0ff', angle: 0, speed: 0.008, radius: 140 },
      { name: 'FINANCE', color: '#10b981', angle: (Math.PI * 2) / 5, speed: 0.008, radius: 140 },
      { name: 'TAX', color: '#f59e0b', angle: ((Math.PI * 2) / 5) * 2, speed: 0.008, radius: 140 },
      { name: 'INSURANCE', color: '#a855f7', angle: ((Math.PI * 2) / 5) * 3, speed: 0.008, radius: 140 },
      { name: 'AI CORE', color: '#3b82f6', angle: ((Math.PI * 2) / 5) * 4, speed: 0.008, radius: 140 }
    ];

    // Background floating particles
    const particles: { x: number; y: number; vx: number; vy: number; radius: number; alpha: number }[] = [];
    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.6 + 0.2
      });
    }

    let corePulse = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2 + (mouseX - width / 2) * 0.04;
      const centerY = height / 2 + (mouseY - height / 2) * 0.04;

      // Draw background particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${p.alpha})`;
        ctx.fill();
      });

      // Draw Outer Orbital Rings
      corePulse += 0.03;
      const pulseScale = Math.sin(corePulse) * 4;

      ctx.beginPath();
      ctx.arc(centerX, centerY, 140 + pulseScale, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.15)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([6, 6]);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.beginPath();
      ctx.arc(centerX, centerY, 80 - pulseScale * 0.5, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Central AVRX 3D Brain Core
      const grad = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, 45);
      grad.addColorStop(0, '#ffffff');
      grad.addColorStop(0.3, '#00f0ff');
      grad.addColorStop(0.7, '#3b82f6');
      grad.addColorStop(1, 'rgba(5, 8, 17, 0)');

      ctx.beginPath();
      ctx.arc(centerX, centerY, 45 + pulseScale * 0.8, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Central Text Label
      ctx.font = 'bold 12px Inter, sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('AVRX AI', centerX, centerY);

      // Render Rotating Node Network
      nodes.forEach(node => {
        node.angle += node.speed;

        const x = centerX + Math.cos(node.angle) * node.radius;
        const y = centerY + Math.sin(node.angle) * (node.radius * 0.65); // Elliptical 3D perspective

        // Draw connection beam to core
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = node.color + '40'; // 25% opacity
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Node Outer Glow
        const nodeGrad = ctx.createRadialGradient(x, y, 2, x, y, 22);
        nodeGrad.addColorStop(0, node.color);
        nodeGrad.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(x, y, 22, 0, Math.PI * 2);
        ctx.fillStyle = nodeGrad;
        ctx.fill();

        // Node Solid Sphere
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fillStyle = '#050811';
        ctx.strokeStyle = node.color;
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();

        // Node Name Label Pill
        ctx.font = 'bold 10px Inter, sans-serif';
        ctx.fillStyle = '#e2e8f0';
        ctx.textAlign = 'center';
        ctx.fillText(node.name, x, y + 24);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full h-full min-h-[420px] relative flex items-center justify-center select-none">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
