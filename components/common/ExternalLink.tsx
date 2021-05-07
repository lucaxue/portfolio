import React from 'react';

interface Props {
  href: string;
  children: React.ReactNode;
  [other: string]: any;
}

const ExternalLink: React.FC<Props> = ({ href, children, ...other }) => (
  <a href={href} {...other} rel="noreferrer noopener" target="_blank">
    {children}
  </a>
);

export default ExternalLink;
