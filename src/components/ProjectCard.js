import React from 'react'
import styles from './ProjectCard.module.css'

export default function ProjectCard({project}) {

    const {name, description, demoUrl, codeUrl, color, asset} = project

    return (
        <div className={styles.card} style={{backgroundColor: color}}>
            <h3>{name}</h3>
            <div className={styles.inner_container}>
                <img src={asset} />
                <p className={styles.description}>{description}</p>
                <div className={styles.buttonRow}>
                    <a target="_blank" href={demoUrl}>Demo</a>
                    <a target="_blank" href={codeUrl}>Code</a>
                </div>
            </div>
        </div>
    )
}
