'use client';
import { cn } from '@/lib/utils';
import { ReactNode, useRef } from 'react';
import { useInView } from 'framer-motion';

interface RippleProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

export const Ripple = ({ className, children, ...props }: RippleProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <div ref={ref} className={cn('ripple-container', className)} {...props}>
      <div
        className={cn(
          'absolute inset-0 overflow-hidden transition-opacity duration-100 ease-out',
          isInView ? 'opacity-100' : 'opacity-0'
        )}
      >
        <div className="ripple-background" />
      </div>
      {children}
    </div>
  );
};
