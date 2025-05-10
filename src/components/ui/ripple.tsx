'use client';

import { cn } from '@/lib/utils';
import { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface RippleProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

export const Ripple = ({ className, children, ...props }: RippleProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <div ref={ref} className={cn('ripple-container', className)} {...props}>
      {isInView && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          className="absolute inset-0 overflow-hidden"
        >
          <div className="ripple-background" />
        </motion.div>
      )}
      {children}
    </div>
  );
};
