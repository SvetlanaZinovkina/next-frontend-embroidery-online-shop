import styles from "../styles/components/Rules.module.scss";
import React from "react";
import AccordionItem from "./ui/AccordionItem";
import { DictProps } from "../types/types";

const Rules: React.FC<DictProps> = ({ dict }) => {
  return (
    <>
      <section className={styles.container}>
        <AccordionItem
          title={dict.policy.title}
          content={
            <article className={styles.row}>
              <span className={styles.text}>{dict.mainPage.rules1}</span>
              <span className={styles.text}>{dict.mainPage.rules2}</span>
              <span className={styles.text}>{dict.mainPage.rules3}</span>
              <span className={styles.text}>{dict.mainPage.rules4}</span>
              <span className={styles.text}>
                <span className={styles.highlight}>{dict.mainPage.rules5}</span>
              </span>
              <span className={styles.text}>
                <span className={styles.highlight}>{dict.mainPage.rules6}</span>
              </span>
              <span className={styles.text}>{dict.mainPage.rules7}</span>
              <span className={styles.text}>{dict.mainPage.rules8}</span>
            </article>
          }
          isDefaultOpen={true}
        />
        <AccordionItem
          title={dict.policy.sitePolicy}
          content={
            <article className={styles.row}>
              <span className={styles.text}>{dict.policy.changePolicy}</span>
              <span className={styles.text}>{dict.policy.beforeBuy}</span>
              <span className={styles.text}>{dict.policy.afterBuy}</span>
              <span className={styles.text}>
                <span className={styles.highlight}>
                  {dict.policy.contactMe}
                </span>
              </span>
              <span className={styles.text}>
                <span className={styles.highlight}>{dict.policy.chatMe}</span>
              </span>
            </article>
          }
        />
        <AccordionItem
          title={dict.policy.confidentialPolicy}
          content={
            <article className={styles.row}>
              <span className={styles.textPolicy}>{dict.policy.policy1}</span>
              <span className={styles.textPolicyTitle}>
                {dict.policy.policyTitle1}
              </span>
              <span className={styles.textPolicy}>{dict.policy.policy2}</span>
              <span className={styles.textPolicyTitle}>
                {dict.policy.policyTitle2}
              </span>
              <span className={styles.textPolicy}>{dict.policy.policy3}</span>
              <span className={styles.textPolicyTitle}>
                {dict.policy.policyTitle3}
              </span>
              <span className={styles.textPolicy}>{dict.policy.policy4}</span>
              <span className={styles.textPolicyTitle}>
                {dict.policy.policyTitle4}
              </span>
              <span className={styles.textPolicy}>{dict.policy.policy5}</span>
              <span className={styles.textPolicyTitle}>
                {dict.policy.policyTitle5}
              </span>
              <span className={styles.textPolicy}>{dict.policy.policy6}</span>
              <span className={styles.textPolicyTitle}>
                {dict.policy.policyTitle6}
              </span>
              <span className={styles.textPolicy}>{dict.policy.policy7}</span>
              <span className={styles.textPolicyTitle}>
                {dict.policy.policyTitle7}
              </span>
              <span className={styles.textPolicy}>{dict.policy.policy8}</span>
              <span className={styles.textPolicyTitle}>
                {dict.policy.policyTitle8}
              </span>
              <span className={styles.textPolicy}>{dict.policy.policy9}</span>
              <span className={styles.textPolicyTitle}>
                {dict.policy.policyTitle9}
              </span>
              <span className={styles.textPolicy}>{dict.policy.policy10}</span>
            </article>
          }
        />
        {/*<h3 className={styles.title}>{t("policy.confidentialPolicy")}</h3>*/}
        {/*<article className={styles.row}>*/}
        {/*  <span className={styles.textPolicy}>{t("policy.policy1")}</span>*/}
        {/*  <span className={styles.textPolicyTitle}>*/}
        {/*    {t("policy.policyTitle1")}*/}
        {/*  </span>*/}
        {/*  <span className={styles.textPolicy}>{t("policy.policy2")}</span>*/}
        {/*  <span className={styles.textPolicyTitle}>*/}
        {/*    {t("policy.policyTitle2")}*/}
        {/*  </span>*/}
        {/*  <span className={styles.textPolicy}>{t("policy.policy3")}</span>*/}
        {/*  <span className={styles.textPolicyTitle}>*/}
        {/*    {t("policy.policyTitle3")}*/}
        {/*  </span>*/}
        {/*  <span className={styles.textPolicy}>{t("policy.policy4")}</span>*/}
        {/*  <span className={styles.textPolicyTitle}>*/}
        {/*    {t("policy.policyTitle4")}*/}
        {/*  </span>*/}
        {/*  <span className={styles.textPolicy}>{t("policy.policy5")}</span>*/}
        {/*  <span className={styles.textPolicyTitle}>*/}
        {/*    {t("policy.policyTitle5")}*/}
        {/*  </span>*/}
        {/*  <span className={styles.textPolicy}>{t("policy.policy6")}</span>*/}
        {/*  <span className={styles.textPolicyTitle}>*/}
        {/*    {t("policy.policyTitle6")}*/}
        {/*  </span>*/}
        {/*  <span className={styles.textPolicy}>{t("policy.policy7")}</span>*/}
        {/*  <span className={styles.textPolicyTitle}>*/}
        {/*    {t("policy.policyTitle7")}*/}
        {/*  </span>*/}
        {/*  <span className={styles.textPolicy}>{t("policy.policy8")}</span>*/}
        {/*  <span className={styles.textPolicyTitle}>*/}
        {/*    {t("policy.policyTitle8")}*/}
        {/*  </span>*/}
        {/*  <span className={styles.textPolicy}>{t("policy.policy9")}</span>*/}
        {/*  <span className={styles.textPolicyTitle}>*/}
        {/*    {t("policy.policyTitle9")}*/}
        {/*  </span>*/}
        {/*  <span className={styles.textPolicy}>{t("policy.policy10")}</span>*/}
        {/*</article>*/}
      </section>
    </>
  );
};

export default Rules;
