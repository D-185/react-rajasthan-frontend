import * as React from 'react';
import { cn } from '../../lib/utils';

const Skeleton = ({ className, ...props }) => (
  <div
    className={cn('animate-pulse rounded-md bg-gray-100', className)}
    {...props}
  />
);

export { Skeleton };
