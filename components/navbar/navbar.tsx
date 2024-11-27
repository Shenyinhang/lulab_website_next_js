/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-09-09 22:26:40
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-11-27 21:39:38
 * @FilePath: /lulab_website_next_js/components/Navbar/Navbar.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */

'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styles from './navbar.module.css';
import { IconLogo } from '../icon/icon_logo';
import { IconZh } from '../icon/icon_zh';
import { IconEn } from '../icon/icon_en';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isMobile = useMediaQuery('(max-width: 768px)');
    const router = useRouter();

    const t = useTranslations('AppNav');

    const navItems = [
        { name: t('home'), path: '/' },
        { name: t('about'), path: '/about' },
        { name: t('training'), path: '/course' },
        { name: t('clubs'), path: '/clubs' },
    ];



    // 语言切换逻辑
    const [currentLocale, setCurrentLocale] = useState('zh');

    useEffect(() => {
        // 从路径中获取当前语言
        const locale = pathname.startsWith('/en') ? 'en' : 'zh';
        setCurrentLocale(locale);
    }, [pathname]);

    const toggleLanguage = () => {
        const newLocale = currentLocale === 'zh' ? 'en' : 'zh';
        const newPath = pathname.replace(/^\/[a-z]{2}/, '');
        router.push(`/${newLocale}${newPath}`);
        setCurrentLocale(newLocale);
    };

    const isActive = (path: string) => {
        if (path === '/') {
            return pathname === path;
        }
        return pathname.startsWith(path);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.navContainer}>
                {/* Logo Section */}
                <motion.div
                    className={styles.leftSection}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/" className={styles.logo}>
                        <div className={styles.logoContainer}>
                            <IconLogo />
                            <motion.span
                                className={styles.logoText}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                LU LAB
                            </motion.span>
                        </div>
                    </Link>
                </motion.div>

                {/* Desktop Navigation */}
                <div className={`${styles.desktopNav} ${isMobile ? 'hidden' : ''}`}>
                    <div className={styles.navLinks}>
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.path}
                                className={styles.navItem}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Link
                                    href={item.path}
                                    className={`${styles.navLink} ${isActive(item.path) ? styles.active : ''}`}
                                >
                                    <span>{item.name}</span>
                                </Link>
                                {isActive(item.path) && (
                                    <motion.div
                                        className={styles.underline}
                                        layoutId="underline"
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30
                                        }}
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Language Toggle Button */}
                    <motion.button
                        className={styles.langToggle}
                        onClick={toggleLanguage}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {currentLocale === 'zh' ? <IconEn /> : <IconZh />}
                    </motion.button>
                </div>

                {/* Mobile Menu Button and Language Toggle */}
                <div className={styles.mobileControls}>
                    <motion.button
                        className={styles.langToggle}
                        onClick={toggleLanguage}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {currentLocale === 'zh' ? <IconEn /> : <IconZh />}
                    </motion.button>

                    {isMobile && (
                        <motion.button
                            className={styles.mobileMenuBtn}
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {isOpen ? <CloseIcon /> : <MenuIcon />}
                        </motion.button>
                    )}
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className={styles.mobileNav}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.path}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 5 }}
                                    style={{ padding: '1rem 0' }}
                                >
                                    <Link
                                        href={item.path}
                                        className={`${styles.mobileNavLink} ${isActive(item.path) ? styles.active : ''}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
