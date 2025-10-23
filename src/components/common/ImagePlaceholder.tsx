import React from 'react';

/**
 * Define las props que aceptará el componente.
 * @param width - Clases de ancho de Tailwind (ej: 'w-full', 'w-64', 'w-1/2').
 * @param height - Clases de alto de Tailwind (ej: 'h-64', 'h-48', 'h-screen').
 * @param className - Clases adicionales de Tailwind para estilos extras.
 */

interface ImagePlaceholderProps {
  width: string;
  height: string;
  className?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ width, height, className = '' }) => {
  return (
    <div className={`${width} ${height} bg-zinc-300  flex items-center justify-center rounded-sm  ${className}`}>
      <img src="/picture-icon.svg" alt="Placeholder de imagen de producto" className="w-1/3 h-1/3 opacity-50" />
    </div>
  );
};

export default ImagePlaceholder;
