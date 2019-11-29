import React from 'react'
import styles from './Page2.module.css'
import classNames from 'classnames'
import projects from '../projects'
import ProjectCard from '../ProjectCard'

export default function Page2() {
    return (
        <div id="projects" className={classNames(styles.page)}>
            
            <div className="container">
                <h1>My Projects</h1>
            </div>

            <div className={styles.projects_container}>
                {projects.map(project => (
                    <div key={project.name} className={styles.flex_child}>
                        <ProjectCard project={project} />
                    </div>
                ))}

            </div>

        </div>
    )
}
