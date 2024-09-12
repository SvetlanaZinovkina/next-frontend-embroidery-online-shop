import React from "react";
import Link from "next/link";
import routes from "../routes/routes";
import styles from "../styles/components/HeroSection.module.scss";
import gifBearEmbroidery from "../assets/images/background2.jpg";
import Image from "next/image";

const HeroSection: React.FC = ({ dict }: { dict: any }) => {
  return (
    <section className={styles["hero-section"]}>
      <div className={styles.container}>
        <section className={`${styles.col} ${styles["left-column"]}`}>
          <h1>{dict.mainPage.welcome}</h1>
          <span>{dict.mainPage.describe}</span>
          <Link href={routes.shopPage()} className={styles.button}>
            {dict.mainPage.catalog}
          </Link>
        </section>
        <aside className={`${styles.col} ${styles["right-column"]}`}>
          <Image
            src={gifBearEmbroidery.src}
            alt={dict.navBar.nameShop}
            width={400}
            height={200}
            priority
          />
        </aside>
      </div>
    </section>
  );
};

export default HeroSection;
