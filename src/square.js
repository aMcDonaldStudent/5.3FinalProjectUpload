import React, { useRef, useEffect } from 'react';

const SquareCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Draw a square
    context.fillStyle = 'red';
    context.fillRect(0, 0, 100, 100);
  }, []);

  return <canvas ref={canvasRef} width={100} height={100} />;
};

export default SquareCanvas;
