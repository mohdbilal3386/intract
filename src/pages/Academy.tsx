"use client";
import React from "react";
import styles from "./Academy.module.css";
import Image from "next/image";

const Academy = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logo_description_container}>
        <div>
          <Image
            src="https://www.intract.io/assets/academy-animated-logo-57b2ae61.gif"
            alt="/academy-animated-logo"
            sizes="100vw"
            width={100}
            height={100}
          />
        </div>
        <div>
          <p>
            <span>Intract users</span> have together made more than
            <span> $100 million</span> in web3.
            <br />
            Join them and <span>learn how to earn crypto!</span>
          </p>
        </div>
        <div>
          <button>
            <span>Get Started</span>
            <span>
              <Image
                src="https://www.intract.io/assets/arrow-right-1c96f4ae.svg"
                alt="arrow-right"
                sizes="100vw"
                width={16}
                height={16}
              />
            </span>
          </button>
        </div>
      </div>
      {/* <div >cllslsllssll</div> */}
    </div>
  );
};

export default Academy;
