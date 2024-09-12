"use client";

import React from "react";
import Link from "next/link";
import styles from "../styles/components/Footer.module.scss";
import routes from "../routes/routes";
import { useSelector } from "react-redux";
import { AppState } from "../types/store-types";

const Footer: React.FC = ({dict}) => {
  const locale = useSelector((state: AppState) => state.lang.lang);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <section className={styles.col}>
            <div className={styles.contact}>
              <h3>{dict.footer.contacts}</h3>
              <p>{dict.footer.phoneNumber}</p>
              <p>{dict.footer.email}</p>
              <p>{dict.footer.address}</p>
              <Link href={routes.policy(locale)} className={styles.link}>
                {dict.footer.policy}
              </Link>
            </div>
          </section>
          <section className={styles.colnav}>
            <div className={styles.leftcol}>
              <Link href={routes.mainPage()} className={styles.link}>
                {dict.footer.navBar.main}
              </Link>
              <Link href={routes.shopPage()} className={styles.link}>
                {dict.footer.navBar.embroidery}
              </Link>
              <Link href={routes.catalogSvgPath()} className={styles.link}>
                {dict.footer.navBar.svg}
              </Link>
            </div>
            <div className={styles.rightcol}>
              <Link href={routes.discount()} className={styles.link}>
                {dict.footer.navBar.discount}
              </Link>
              <Link href={routes.policy(locale)} className={styles.link}>
                {dict.footer.navBar.contactMe}
              </Link>
              <Link href={routes.policy(locale)} className={styles.link}>
                {dict.footer.navBar.telegramShop}
              </Link>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
