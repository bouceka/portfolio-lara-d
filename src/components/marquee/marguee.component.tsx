// @flow
import './marquee.styles.scss';

import * as React from 'react';
interface Props {
  color: 'accent-1' | 'secondary';
}

const MARQUE_DATA =
  ' • hard-hitting VISUAL ASSETS FOR BRANDING & MARKETING  • hard-hitting VISUAL ASSETS FOR BRANDING & MARKETING  • hard-hitting VISUAL ASSETS FOR BRANDING & MARKETING  • hard-hitting VISUAL ASSETS FOR BRANDING & MARKETING  • hard-hitting VISUAL ASSETS FOR BRANDING & MARKETING  • hard-hitting VISUAL ASSETS FOR BRANDING & MARKETING  • hard-hitting VISUAL ASSETS FOR BRANDING & MARKETING  • hard-hitting VISUAL ASSETS FOR BRANDING & MARKETING  • hard-hitting VISUAL ASSETS FOR BRANDING & MARKETING  • ';
export const Marquee = ({ color }: Props) => {
  return (
    <div style={{ backgroundColor: `var(--color-${color})` }} className="marquee">
      <span>{MARQUE_DATA.toUpperCase()}</span>
    </div>
  );
};
