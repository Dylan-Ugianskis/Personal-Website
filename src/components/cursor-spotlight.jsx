import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledCursorSpotlight = styled.div`
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: radial-gradient(
    600px at ${({ x }) => x}px ${({ y }) => y}px,
    rgba(29, 78, 216, 0.15),
    transparent 80%
  );
  transition: background 0.15s ease;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CursorSpotlight = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = ev => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return <StyledCursorSpotlight x={mousePosition.x} y={mousePosition.y} />;
};

export default CursorSpotlight;
