import React from "react";

interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const TextLink: React.FC<TextLinkProps> = ({ children, ...props }) => (
  <a {...props} className={`text-blue-600 hover:underline ${props.className ?? ""}`}>
    {children}
  </a>
);

export default TextLink;