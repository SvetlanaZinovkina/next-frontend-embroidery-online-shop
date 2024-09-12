"use client";
import React, { useState } from "react";
import Link from "next/link";
import routes from "../routes/routes";
import { UserIcon, SearchIcon, CartIcon } from "./ui/Icons";
import styles from "../styles/components/Header.module.scss";
import LocaleSwitcher from "./ui/LocaleSwitcher";
import { DictProps } from "../types/types";

const Header: React.FC<DictProps> = ({ dict }) => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <nav className={styles.navbarRow}>
          <section className={styles.navbarLeft}>
            <button
              className={styles.navbarToggle}
              aria-controls="navbar-menu"
              aria-expanded={isMenuOpen}
              onClick={handleMenuToggle}
            >
              ☰
            </button>
            <div
              id="navbar-menu"
              className={`${styles.navbarCollapse1} ${isMenuOpen ? styles.open : ""}`}
            >
              <Link href={routes.mainPage()} className={styles.navLink}>
                {dict.navBar.main}
              </Link>
              <Link href={routes.shopPage()} className={styles.navLink}>
                {dict.navBar.embroidery}
              </Link>
              <Link href={routes.catalogSvgPath()} className={styles.navLink}>
                {dict.navBar.svg}
              </Link>
              <Link href={routes.discount()} className={styles.navLink}>
                {dict.navBar.discount}
              </Link>
            </div>
          </section>
          <section className={styles.navbarCenter}>
            <Link href={routes.mainPage()}>
              <span>Embroidery by</span>
              <span>Lana</span>
            </Link>
          </section>
          <section className={styles.navbarRight}>
            <LocaleSwitcher />
            <Link
              href={routes.getUserData()}
              className={styles.navIcon}
              aria-label="Search"
            >
              <SearchIcon />
            </Link>
            <Link
              href={routes.getUserData()}
              className={styles.navIcon}
              aria-label="User"
            >
              <UserIcon />
            </Link>
            <Link
              href={routes.getUserData()}
              className={styles.navIcon}
              aria-label="Cart"
            >
              <CartIcon />
            </Link>
          </section>
        </nav>
        <div
          className={`${styles.menuBackdrop} ${isMenuOpen ? styles.open : ""}`}
          onClick={handleCloseMenu}
        />
        <div
          className={`${styles.navbarCollapse} ${isMenuOpen ? styles.open : ""}`}
        >
          <span
            className={`${styles.navbarClose} ${isMenuOpen ? styles.open : ""}`}
            onClick={handleCloseMenu}
          >
            &times;
          </span>
          <Link href={routes.mainPage()} onClick={handleCloseMenu}>
            {dict.navBar.main}
          </Link>
          <Link href={routes.shopPage()} onClick={handleCloseMenu}>
            {dict.navBar.embroidery}
          </Link>
          <Link href={routes.catalogSvgPath()} onClick={handleCloseMenu}>
            {dict.navBar.svg}
          </Link>
          <Link href={routes.discount()} onClick={handleCloseMenu}>
            {dict.navBar.discount}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
