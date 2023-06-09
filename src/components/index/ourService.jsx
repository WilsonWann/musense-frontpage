import React from 'react';
import styles from './css/ourService.module.css';
import ServiceBox from "./serviceBox";
import WhyMusense from "./whyMusense";



export default function OurService() {
  return (
    <div className={styles['our-service-wrapper']}>
      <div
        id='service'
        className={styles['our-service']}
      />
      <ServiceBox />

      <WhyMusense />
    </div>
  );
}