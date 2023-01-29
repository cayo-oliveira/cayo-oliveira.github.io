import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'YouEngCode',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        YouEngCode is an online platform designed to help people learn programming and software engineering in a fun and interactive way.
      </>
    ),
  },

  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        YouEngCode focuses on teaching the skills needed for a career in data science and data enginnera (machine learning and machine learning engineer). 
        See more on <code>youtube.com/@YouEngCode</code>.
      </>
    ),
  },
  {
    title: 'Who ?',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        It is designed for people of all skill and experience levels, from beginners to experienced professionals. 
        In addition, some courses are free, which makes it accessible to everyone.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
