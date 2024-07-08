"use client";
import React from "react";
import styles from "./Accordion.module.css";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  return (
    <div className={styles.accordion_item}>
      <div className={styles.accordion_item_container}>
        <div className={styles.accordion_item_image}>
          <Image
            src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/6bb30883bc5042809b9d20926341f8ac.jpg"
            sizes="100vw"
            width={100}
            height={100}
            alt="stack"
          />
        </div>
        <div className={styles.accordion_item_description}>
          #1: What are airdrops, and how can they change your life?
          <hr />
          <div className={styles.accordion_item_footer}>
            <div className={styles.quest_task}>7 Tasks</div>
            <div className={styles.progressbar}>
              <div className={styles.progress_bar_container}>
                <div></div>
              </div>
            </div>
            <IoMdCheckmark />
          </div>
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const items = [
    { title: "Item 1", content: "Content for item 1" },
    { title: "Item 2", content: "Content for item 2" },
    { title: "Item 3", content: "Content for item 3" },
  ];

  return (
    <div className={styles.container}>
      <div
        className={isOpen ? styles.open_accordion : styles.accordion}
        onClick={toggleAccordion}
      >
        <div className={styles.accordion_image}>
          <Image
            src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/2d1ac16ea7c9416d94a74f2ba2fe8d4a.png"
            sizes="100vw"
            width={100}
            height={100}
            alt="stack"
          />
          <div>6 Quests</div>
        </div>
        <div className="header_title_description">
          <div className={styles.accordion_title}>Basics of Crypto</div>
          <div className={styles.accordion_description}>
            The safest and easiest place to start your crypto journey!
          </div>
          <hr />
          <div className={styles.accordion_reward_count}>
            <Image
              src="https://www.intract.io/assets/xp-icon-aacd204a.svg"
              sizes="100vw"
              width={100}
              height={100}
              alt="stack"
            />
            1490 XPs
          </div>
        </div>
      </div>
      {isOpen &&
        items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
          />
        ))}
    </div>
  );
};

export default Accordion;
