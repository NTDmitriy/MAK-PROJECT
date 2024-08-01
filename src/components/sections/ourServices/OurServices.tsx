import { Container } from "@/components/ui/container/Container";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { FC } from "react";
import styles from "./OurServices.module.css";
import { IconOurServicesRound } from "@/components/ui/icons/serviseIcons/IconOurServicesRound";
import { WhyUsIcon } from "@/components/ui/icons/genericIcons/WhyUsIcon";

export const OurServices: FC = () => {
  return (
    <Section>
      <Container>
        <BlockTitle
          leftSide={true}
          background="НАШИ УСЛУГИ"
          descrSideway={
            <>
              <span key="1">Наши решения адаптированы под различные ниши и помогают</span>
              <span key="2" className={styles.yellow}>
                 эффективно привлекать клиентов 
              </span>
               <span key="3">и повышать узнаваемость вашего бренда</span>
            </>
          }
        >
          Наши услуги
        </BlockTitle>
        <div className={styles.container}>
        <div className={`${styles.card} ${styles.card1}`} >
          <div className={styles.round_icon}></div>
            <h3 className={styles.title}>Реклама</h3>
            <p className={styles.text}>Яндекс Директ</p>
            <p className={styles.text}>ВКонтакте</p>
            <p className={styles.text}>Google Ads</p>
            <p className={styles.text}>Telegram Ads</p>

            <WhyUsIcon 
            width={90}
            height={90}
            className={styles.icon}/>
        </div>
        <div className={`${styles.card} ${styles.card2}`} >
        <div className={styles.round_icon}></div>
            <h3 className={styles.title}>cоздаение сайтов</h3>
            <p className={styles.text}>Wordpress</p>
            <p className={styles.text}>Tilda</p>
            <p className={styles.text}>ModX</p>
            <p className={styles.text}>На самописной CMS</p>
            
            <WhyUsIcon 
            width={90}
            height={90}
            className={styles.icon}/>
        </div>
        <div className={`${styles.card} ${styles.card3}`} >
        <div className={styles.round_icon}></div>
            <h3 className={styles.title}>трафик и SEO</h3>
            <p className={styles.text}>Инфлюенс (i)</p>
            <p className={styles.text}>Посевы (i)</p>
            <p className={styles.text}>Email рассылки по базам</p>
            <p className={styles.text}>SEO-продвижение</p>
            
            <WhyUsIcon 
            width={90}
            height={90}
            className={styles.icon}/>
        </div>
        <div className={styles.form }>                                                                                                                     
          
        </div>
        <div className={`${styles.card} ${styles.card4}`} >
        <div className={styles.round_icon}></div>
            <h3 className={styles.title}>Нишевое продвижение</h3>
            <p className={styles.text}>Онлайн-школ</p>
            <p className={styles.text}>Магазинов на маркетплейсах</p>
            <p className={styles.text}>Строительных компаний</p>
            <p className={styles.text}>Медицинских учреждений</p>
            
            <WhyUsIcon 
            width={90}
            height={90}
            className={styles.icon}/>
        </div>
      
        
      </div>
      </Container>
      
    </Section>
  );
};