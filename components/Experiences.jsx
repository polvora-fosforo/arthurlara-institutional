import React from 'react';
import globalStyles from '../styles/global.module.css';
import styles from '../styles/experiences.module.css';
import Image from 'next/image';

const Experiences = () => {

  const jobs = [
    {
      id: 1,
      title: "Twist Agência Digital",
      period: "Mar 2017 - Dec 2017",
      imgPath: "/img/twist.png",
      link: "https://twist.com.br/agenciadigital/",
      paragraphs: [
        {
          id: 1,
          content: "Twist is a digital agency and they offer from total custom websites to social media work. There, i could work for the first time ever with web development. Websites were build on Wordpress, through a page builder plugin called Divi, by Elegant Theme.",
        },
        {
          id: 2,
          content: "The plugin offered a lot of shortcuts, so you could spare writing pure HTML and CSS, but sometimes it was necessary write CSS in order to have the layout as planned.",
        },
        {
          id: 3,
          content: "Also, Wordpress could offer a variety of plugins that pretty much made using JavaScript unnecessary at the context of an agency.",
        },        
      ]
    },
    {
      id: 2,
      title: "Bit Seguros",
      period: "Feb 2018 - Apr 2019",
      imgPath: "/img/bit.png",
      link: "https://www.bitseguros.com.br",
      paragraphs: [
        {
          id: 1,
          content: "Bit Seguros is a b2b Insure Tech, and provides service for many well-known insure companies in Brazil.",
        },
        {
          id: 2,
          content: "The development team build up applications from total zero, and i've worked on front end using HTML, CSS, less, JS and JQuery.",
        },
        {
          id: 3,
          content: "Working there was challenging. I got to know JS for the first time and improve my front end as a whole.",
        },
      ]
    },
    {
      id: 3,
      title: "Antena 1",
      period: "Aug 2019 - Aug 2020",
      imgPath: "/img/antena1.png",
      link: "https://www.antena1.com.br/",
      paragraphs: [
        {
          id: 1,
          content: "The well-known brazillian radio Antena 1 owns the most listened online radio of the country, and it's website is pretty complete and interactive.",
        },
        {
          id: 2,
          content: "The website has been remade in 2017 using React, Sass and such other technologies.",
        },
        {
          id: 3,
          content: "I was able to have contact with a JS framework for the first time as well, and it felt like i needed to push my JS knowledge to a new level. There, the team would take care of the API too, an application made in Node.js. Sometimes manipulating database (MySQL) was a necessary, and all of that was really important to my career.",
        },
      ]
    },
  ];

  const mapJobs = () => {
    return jobs.map(job => {
      return (
        <li key={`job${job.id}`} className={styles.job}>
          <div className={styles.job__intro}>
            <Image
              className={styles.job__img}
              src={job.imgPath}
              alt='Twist Agência Digital'
              width={180}
              height={180}
            />
            <h4 className={styles.job__title}>
              {job.title}
            </h4>
            <p className={styles.job__period}>
              {job.period}
            </p>
            <a className={styles.job__link} href={job.link} target="_blank">{job.link}</a>
          </div>
          {job.paragraphs.map(paragraph => {
            return (
              <p
                key={`jibParagraph${paragraph.id}`}
                className={styles.job__paragraph}
              >
                {paragraph.content}
              </p>
              );
          })}
        </li>
      );
    });
  }

  return (
    <section id="experiences" className={`${globalStyles.container} ${styles.experiences__container}`}>
      <h2 className={globalStyles.subjectTitle}>Experiences</h2>
      <ul className={styles.jobs}>
        {mapJobs()}
      </ul>
    </section>
  );
}

export default Experiences;