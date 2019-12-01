import React from 'react'
import styles from './ProjectCard.module.css'

export default function ProjectCard({project}) {

    const {name, description, demoUrl, codeUrl, color, asset, assetWebP} = project

    return (
        <div className={styles.card} style={{backgroundColor: color}}>
            <h3>{name}</h3>
            <div className={styles.inner_container}>
                        <picture
          
        >
          <source type="image/webp" srcSet={assetWebP} alt="screenshot of project"/>
          <img src={asset} alt={`Screenshot of ${name}`} alt="screenshot of project"/>
        </picture>
                
                <p className={styles.description}>{description}</p>
                <div className={styles.buttonRow}>
                    <a target="_blank" rel="noopener noreferrer" href={demoUrl}>Demo</a>
                    <a target="_blank" rel="noopener noreferrer" href={codeUrl}>Code</a>
                </div>
            </div>
        </div>
    )
}
