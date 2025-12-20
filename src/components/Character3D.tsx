import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

export const Character3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 300;
    canvas.height = 300;

    let animationFrame: number;
    let rotation = 0;

    const drawCharacter = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      ctx.save();
      ctx.translate(centerX, centerY);

      // Apply rotation for 3D effect
      const scaleX = Math.cos(rotation);
      
      // Shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.beginPath();
      ctx.ellipse(0, 100, 40 * Math.abs(scaleX), 8, 0, 0, Math.PI * 2);
      ctx.fill();

      // Body (with 3D rotation)
      ctx.save();
      ctx.scale(scaleX, 1);
      
      // Body
      const gradient = ctx.createLinearGradient(-30, -60, 30, 60);
      gradient.addColorStop(0, '#10b981');
      gradient.addColorStop(1, '#059669');
      ctx.fillStyle = gradient;
      ctx.fillRect(-30, -30, 60, 80);
      
      // Head
      ctx.fillStyle = '#fbbf24';
      ctx.beginPath();
      ctx.arc(0, -60, 35, 0, Math.PI * 2);
      ctx.fill();
      
      // Hat (gnomo style)
      ctx.fillStyle = '#dc2626';
      ctx.beginPath();
      ctx.moveTo(-35, -60);
      ctx.lineTo(0, -110);
      ctx.lineTo(35, -60);
      ctx.closePath();
      ctx.fill();
      
      // Hat shadow
      ctx.fillStyle = '#991b1b';
      ctx.beginPath();
      ctx.moveTo(-35, -60);
      ctx.lineTo(0, -110);
      ctx.lineTo(0, -60);
      ctx.closePath();
      ctx.fill();
      
      // Eyes
      ctx.fillStyle = '#000000';
      const eyeOffset = scaleX > 0 ? 1 : -1;
      ctx.beginPath();
      ctx.arc(-12 * eyeOffset, -65, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(12 * eyeOffset, -65, 4, 0, Math.PI * 2);
      ctx.fill();
      
      // Smile
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, -55, 15, 0.2, Math.PI - 0.2);
      ctx.stroke();
      
      // Belt
      ctx.fillStyle = '#78350f';
      ctx.fillRect(-30, 20, 60, 8);
      
      // Belt buckle
      ctx.fillStyle = '#fbbf24';
      ctx.fillRect(-8, 18, 16, 12);
      
      // Arms
      ctx.fillStyle = '#10b981';
      // Left arm
      ctx.beginPath();
      ctx.arc(-30, 0, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillRect(-42, -5, 12, 30);
      
      // Right arm (waving)
      const waveAngle = Math.sin(rotation * 3) * 0.3;
      ctx.save();
      ctx.translate(30, 0);
      ctx.rotate(waveAngle);
      ctx.beginPath();
      ctx.arc(0, 0, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillRect(0, -5, 12, 30);
      ctx.restore();
      
      // Legs
      ctx.fillStyle = '#065f46';
      ctx.fillRect(-25, 50, 18, 40);
      ctx.fillRect(7, 50, 18, 40);
      
      // Boots
      ctx.fillStyle = '#78350f';
      ctx.beginPath();
      ctx.ellipse(-16, 90, 12, 8, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(16, 90, 12, 8, 0, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
      ctx.restore();

      rotation += 0.02;
      animationFrame = requestAnimationFrame(drawCharacter);
    };

    drawCharacter();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2
      }}
      className="flex items-center justify-center"
    >
      <div className="relative">
        <canvas
          ref={canvasRef}
          className="drop-shadow-2xl"
          style={{ width: '300px', height: '300px' }}
        />
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 blur-3xl -z-10 rounded-full" />
      </div>
    </motion.div>
  );
};
