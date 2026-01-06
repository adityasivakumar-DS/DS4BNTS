import React from 'react';
import './Footer.css';

export interface FooterLink {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  /** Footer sections */
  sections?: FooterSection[];
  /** Copyright text */
  copyright?: string;
  /** Social media links */
  socialLinks?: Array<{ icon: React.ReactNode; href?: string; onClick?: () => void }>;
}

export const Footer: React.FC<FooterProps> = ({
  sections = [
    {
      title: 'Shop',
      links: [
        { label: 'New Arrivals', href: '#' },
        { label: 'Best Sellers', href: '#' },
        { label: 'Sale', href: '#' },
      ],
    },
    {
      title: 'About',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Contact', href: '#' },
        { label: 'Careers', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'FAQ', href: '#' },
        { label: 'Shipping', href: '#' },
        { label: 'Returns', href: '#' },
      ],
    },
  ],
  copyright = `© ${new Date().getFullYear()} E-Commerce. All rights reserved.`,
  socialLinks = [],
}) => {
  return (
    <footer className="ecommerce-footer">
      <div className="ecommerce-footer__container">
        <div className="ecommerce-footer__sections">
          {sections.map((section, index) => (
            <div key={index} className="ecommerce-footer__section">
              <h3 className="ecommerce-footer__section-title">{section.title}</h3>
              <ul className="ecommerce-footer__links">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      onClick={link.onClick}
                      className="ecommerce-footer__link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {socialLinks.length > 0 && (
          <div className="ecommerce-footer__social">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                onClick={social.onClick}
                className="ecommerce-footer__social-link"
                aria-label="Social media link"
              >
                {social.icon}
              </a>
            ))}
          </div>
        )}

        <div className="ecommerce-footer__bottom">
          <p className="ecommerce-footer__copyright">{copyright}</p>
        </div>
      </div>
    </footer>
  );
};

