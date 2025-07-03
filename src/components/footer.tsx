'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { href: 'https://github.com', icon: FaGithub, label: 'GitHub' },
        { href: 'https://linkedin.com', icon: FaLinkedin, label: 'LinkedIn' },
        { href: 'https://twitter.com', icon: FaTwitter, label: 'Twitter' },
        { href: 'https://instagram.com', icon: FaInstagram, label: 'Instagram' },
        { href: 'https://gmail.com', icon: FaEnvelope, label: 'Email' },
    ];

    return (
        <footer className="bg-gradient-to-br from-gray-50 via-white to-indigo-50 border-t border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Bottom Bar with Social Media */}
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-2 text-gray-600">
                        <span>© {currentYear} Fariz.Broo. All rights reserved.</span>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4">
                        {socialLinks.map((social) => (
                            <Link
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-indigo-700 hover:border-indigo-300 hover:shadow-md transition-all duration-200 group"
                                aria-label={social.label}
                            >
                                <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center space-x-2 text-gray-600">
                        <span>Made with</span>
                        <FaHeart className="w-4 h-4 text-red-500 animate-pulse" />
                        <span>in Indonesia</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
