import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

const CardSkeleton = () => (
  <Card className="overflow-hidden">
    <Skeleton className="h-48 w-full" />
    <CardHeader>
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-1/2 mt-2" />
    </CardHeader>
    <CardFooter className="pt-0">
      <Skeleton className="h-9 w-full" />
    </CardFooter>
  </Card>
);

export default CardSkeleton;
