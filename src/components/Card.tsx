"use client";
import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className={styles.card}>
      <div>{children}</div>
    </div>
  );
};

export default Card;
