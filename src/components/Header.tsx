"use client";
import Image from "next/image";
import styles from "./Header.module.css";
import { GrSearch } from "react-icons/gr";
import Link from "next/link";
import { SetStateAction, useState } from "react";
const Header = () => {
  const [active, setActive] = useState("#compass");
  const [focused, setFocused] = useState(false);
  console.log({ focused });

  const handleClick = (href: SetStateAction<string>) => {
    setActive(href);
  };
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <Link href={"/"}>
          <div className={styles.logo}>
            <Image
              src="https://www.intract.io/logo/intract_text.svg"
              alt="Logo"
              width={100}
              height={100}
            />
          </div>
        </Link>
        {!focused && (
          <nav className={styles.navbar}>
            <ul className={styles.navbar_list}>
              {[
                "#compass",
                "#explore",
                "#academy",
                "#nfts",
                "#for Projects ",
              ].map((href) => (
                <li key={href}>
                  <Link href={href}>
                    <div
                      className={active === href ? styles.active : ""}
                      onClick={() => handleClick(href)}
                    >
                      {href.substring(1).charAt(0).toUpperCase() +
                        href.substring(2)}
                      <div
                        className={active === href ? styles.active_stripe : ""}
                      ></div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <div
          className={`${styles.search_input_container} ${
            focused ? styles.focused : ""
          }`}
        >
          <GrSearch />
          <input
            type="text"
            placeholder="Search for ecosystems, trending quests etc,."
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
        </div>
        <div className={styles.broadcast_container}>
          <Image
            src={"https://www.intract.io/assets/broadcast_or-04af786c.svg"}
            alt="broadcast"
            width={40}
            height={40}
          />
        </div>
        <div>
          <button className={styles.signin_button}>Sign In</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
