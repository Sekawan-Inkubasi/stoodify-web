import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Play, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

interface SpinWheelProps {
  onNumberSelected: (num: number) => void;
  isSpinning: boolean;
  setIsSpinning: (val: boolean) => void;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
}

const TOTAL_SEGMENTS = 100;
const SEGMENT_ANGLE = 360 / TOTAL_SEGMENTS; // 3.6 degrees

const PALETTE = [
  '#0062FF', // Stoodify Electric Blue
  '#0F172A', // Deep Slate
  '#00B2FF', // Vibrant Cyan
  '#10B981', // Emerald
  '#F59E0B', // Amber
  '#6366F1', // Indigo
];

export const SpinWheel: React.FC<SpinWheelProps> = ({
  onNumberSelected,
  isSpinning,
  setIsSpinning,
  soundEnabled,
  setSoundEnabled,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const currentRotationRef = useRef<number>(0);
  const animationFrameRef = useRef<number | null>(null);
  const lastTickIndexRef = useRef<number>(-1);
  const lastTickTimeRef = useRef<number>(0);

  const [selectedNumberDisplay, setSelectedNumberDisplay] = useState<number | null>(null);

  // Sync mute state with sound manager
  useEffect(() => {
    sounds.setMuted(!soundEnabled);
  }, [soundEnabled]);

  // Draw the 100-segment wheel
  const drawWheel = useCallback((rotationDeg: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = canvas.width;
    const center = size / 2;
    const radius = center - 16;

    ctx.clearRect(0, 0, size, size);

    // Save context for rotation
    ctx.save();
    ctx.translate(center, center);
    ctx.rotate((rotationDeg * Math.PI) / 180);

    const radPerSeg = (2 * Math.PI) / TOTAL_SEGMENTS;

    // Draw all 100 slices
    for (let i = 0; i < TOTAL_SEGMENTS; i++) {
      const num = i + 1;
      const startAngle = i * radPerSeg;
      const endAngle = (i + 1) * radPerSeg;

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius, startAngle, endAngle);
      ctx.closePath();

      ctx.fillStyle = PALETTE[i % PALETTE.length];
      ctx.fill();

      // Hairline slice border
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 0.75;
      ctx.stroke();

      // Draw number text near the rim
      ctx.save();
      ctx.rotate(startAngle + radPerSeg / 2);
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 9px monospace';
      ctx.fillText(num.toString(), radius - 6, 0);
      ctx.restore();
    }

    // Outer wheel bezel ring
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#0F172A';
    ctx.lineWidth = 6;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, radius + 4, 0, 2 * Math.PI);
    ctx.strokeStyle = '#0062FF';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.restore();

    // Center Hub (Stoodify Emblem)
    ctx.save();
    ctx.translate(center, center);

    // Hub outer shadow ring
    ctx.beginPath();
    ctx.arc(0, 0, 44, 0, 2 * Math.PI);
    ctx.fillStyle = '#0F172A';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.35)';
    ctx.shadowBlur = 12;
    ctx.fill();

    // Hub inner white circle
    ctx.beginPath();
    ctx.arc(0, 0, 38, 0, 2 * Math.PI);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();

    // Hub border
    ctx.beginPath();
    ctx.arc(0, 0, 38, 0, 2 * Math.PI);
    ctx.strokeStyle = '#0062FF';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Stoodify Brand Hub Text
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '900 13px system-ui, sans-serif';
    ctx.fillStyle = '#0F172A';
    ctx.fillText('STOODIFY', 0, -5);

    ctx.font = 'bold 9px monospace';
    ctx.fillStyle = '#0062FF';
    ctx.fillText('QUIZ 1-100', 0, 10);

    ctx.restore();

    // Top Pointer Indicator (12 o'clock, pointing downward)
    ctx.save();
    ctx.translate(center, 12);

    ctx.beginPath();
    ctx.moveTo(-16, -10);
    ctx.lineTo(16, -10);
    ctx.lineTo(0, 26);
    ctx.closePath();
    ctx.fillStyle = '#EF4444';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = 8;
    ctx.shadowOffsetY = 3;
    ctx.fill();

    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, -2, 4, 0, 2 * Math.PI);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();

    ctx.restore();
  }, []);

  // Initial draw & resize handler
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const displaySize = 540;
    canvas.width = displaySize * dpr;
    canvas.height = displaySize * dpr;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
    }

    drawWheel(currentRotationRef.current);
  }, [drawWheel]);

  // Spin initiation with true random probability across 1-100
  const startSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setSelectedNumberDisplay(null);
    lastTickIndexRef.current = -1;
    lastTickTimeRef.current = 0;

    // Pick random target number between 1 and 100
    const targetNumber = Math.floor(Math.random() * TOTAL_SEGMENTS) + 1;
    const targetIndex = targetNumber - 1;

    // Calculate exact angle to stop at the top pointer (270 degrees)
    const sliceCenter = (targetIndex + 0.5) * SEGMENT_ANGLE;
    const targetNormalizedAngle = (270 - sliceCenter + 360) % 360;

    const currentAngle = currentRotationRef.current;
    const currentNormalized = ((currentAngle % 360) + 360) % 360;

    let delta = targetNormalizedAngle - currentNormalized;
    if (delta < 0) {
      delta += 360;
    }
    const totalSpinDelta = 5 * 360 + delta;
    const finalAngle = currentAngle + totalSpinDelta;

    const startTime = performance.now();
    const duration = 4600;

    const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);

      const currentDeg = currentAngle + totalSpinDelta * easedProgress;
      currentRotationRef.current = currentDeg;
      drawWheel(currentDeg);

      // Sound ticker: check which slice passed the pointer
      const pointerNormalizedAngle = ((270 - (currentDeg % 360) + 360) % 360);
      const currentSegmentIndex = Math.floor(pointerNormalizedAngle / SEGMENT_ANGLE);

      if (currentSegmentIndex !== lastTickIndexRef.current) {
        // Enforce 48ms minimum spacing (max ~20 ticks/sec) so rapid spin doesn't buzz or distort
        if (currentTime - lastTickTimeRef.current >= 48) {
          sounds.playTick();
          lastTickTimeRef.current = currentTime;
        }
        lastTickIndexRef.current = currentSegmentIndex;
      }

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        currentRotationRef.current = finalAngle;
        drawWheel(finalAngle);
        setIsSpinning(false);
        setSelectedNumberDisplay(targetNumber);

        setTimeout(() => {
          onNumberSelected(targetNumber);
        }, 500);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center select-none w-full max-w-2xl mx-auto px-4 py-4">
      <div className="relative flex flex-col items-center">
        
        {/* Subtle Ambient Glow */}
        <div className="absolute w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Canvas Wheel */}
        <div className="relative w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] md:w-[480px] md:h-[480px] flex items-center justify-center">
          <canvas
            ref={canvasRef}
            style={{ width: '100%', height: '100%' }}
            className="rounded-full shadow-2xl transition-transform"
          />
        </div>

        {/* Selected Number Banner Highlight (When Stopped) */}
        {selectedNumberDisplay && !isSpinning && (
          <div className="mt-4 px-5 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-bold text-[#0062FF] flex items-center gap-2 animate-bounce">
            <Sparkles className="w-4 h-4" />
            Nomor Terpilih: #{selectedNumberDisplay}
          </div>
        )}

        {/* Wheel Action Area */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          
          {/* Main SPIN Button */}
          <button
            onClick={startSpin}
            disabled={isSpinning}
            className={`px-10 py-4 rounded-2xl font-black text-lg tracking-wider transition-all duration-200 shadow-xl flex items-center gap-3 cursor-pointer ${
              isSpinning
                ? 'bg-slate-300 text-slate-500 cursor-not-allowed scale-95 shadow-none'
                : 'bg-[#0062FF] hover:bg-[#0052D9] text-white hover:scale-105 active:scale-95 shadow-[0_8px_25px_rgba(0,98,255,0.4)]'
            }`}
          >
            <Play className={`w-5 h-5 fill-current ${isSpinning ? 'animate-spin' : ''}`} />
            {isSpinning ? 'RODA BERPUTAR...' : 'PUTAR RODA (SPIN)'}
          </button>

          {/* Sound Toggle Button */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-[#0062FF] shadow-xs transition-all cursor-pointer flex items-center gap-2 text-xs font-semibold"
            title={soundEnabled ? 'Matikan Suara' : 'Nyalakan Suara'}
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-4 h-4 text-[#0062FF]" />
                <span className="hidden sm:inline">Suara: ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-slate-400" />
                <span className="hidden sm:inline">Suara: MUTE</span>
              </>
            )}
          </button>

        </div>

        {/* Informative Readout */}
        <p className="mt-3 text-xs text-slate-500 font-medium">
          Putar roda untuk mendapatkan 1 dari 100 tantangan kuis IT!
        </p>

      </div>
    </div>
  );
};
