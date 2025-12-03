import type { FC } from 'react';

export type TooltipProps = {
  position: { x: number; y: number };
  text: string;
};

export const Tooltip: FC<TooltipProps> = ({ text, position }) => {
  return (
    <div className="rounded-[4px] bg-[#404040] px-5 text-[#9A9A9A]">{text}</div>
  );
};
