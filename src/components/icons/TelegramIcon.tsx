
import React from 'react';

interface TelegramIconProps {
  className?: string;
  size?: number | string;
}

const TelegramIcon: React.FC<TelegramIconProps> = ({ className, size = 24 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4625 14.0087 10.4335 14.0052 10.4055C14.0017 10.3775 13.993 10.3514 13.98 10.33C13.94 10.29 13.9 10.28 13.86 10.27C13.82 10.26 13.77 10.27 13.73 10.29C13.68 10.31 12.35 11.18 9.73 12.9C9.39 13.13 9.08 13.24 8.81 13.24C8.51 13.24 7.94 13.07 7.51 12.93C6.98 12.76 6.56 12.67 6.59 12.38C6.61 12.23 6.82 12.08 7.23 11.93C10.05 10.7 11.95 9.91 12.93 9.55C15.7 8.51 16.27 8.33 16.64 8.33C16.71 8.33 16.86 8.35 16.95 8.43C17.03 8.49 17.05 8.58 17.06 8.64C17.06 8.71 17.07 8.78 17.07 8.8H16.64Z" />
    </svg>
  );
};

export default TelegramIcon;
