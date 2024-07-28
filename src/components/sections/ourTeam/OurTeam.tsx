

import { FC } from "react";
import styles from "./OurTeam.module.css";

export  const OurTeam: FC  = () => {
    return (
    <div>
        <div className={styles.container}>

            <div className={styles.lisiy_hui}>
                <picture>
                    <source srcSet="https://i.imgur.com/8Q4Q6ZT.png"></source>
                    <img className={styles.lisiy_hui}></img>
                </picture>
                <h3 className={styles.title}>Lisiy Hui</h3>
                <div className={styles.skills}>
                    <p className={styles.skill_name}>loh    </p>
                    <p className={styles.skill_name}>pidr</p>
                    <p className={styles.skill_name}>net druzei</p>
                </div>
                <p className={styles.achievment}>main huesos</p>
                <p className={styles.descr}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolore voluptatum nobis iusto, aut ratione odit sit laudantium et neque aspernatur harum soluta nostrum esse, quo ut asperiores, repudiandae quaerat.</p>
            </div>
            <div className={styles.workers_container}>
                <div className={styles.worker}>
                    
                </div>
            </div>
        </div>

    </div>)
}