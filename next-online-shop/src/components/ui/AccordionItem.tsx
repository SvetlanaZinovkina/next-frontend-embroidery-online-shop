"use client";

import React, { useState } from "react";
import styles from "../../styles/components/ui/Accordion.module.scss";
import cn from 'classnames';

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  isDefaultOpen?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isDefaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordionItem}>
      <button className={styles.accordionTitle} onClick={toggleOpen}>
        {title}
        <span className={cn(styles.arrow, { [styles.open]: isOpen })}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#5f6368"
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </span>
      </button>
      {isOpen && <div className={styles.accordionContent}>{content}</div>}
    </div>
  );
};

export default AccordionItem;
