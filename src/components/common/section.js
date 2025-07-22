import { cn } from '@/utils/twd-merge';
import React from 'react'

const Section = ({ className, children }) => (
  <section className={cn(`p-2`, className)}>{children}</section>
);


export default Section