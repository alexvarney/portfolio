import emPreview from '../assets/electionsmaster-figma.webp'
import spotifyPreview from '../assets/spotify-lyrics-figma.webp'
import calcPreview from '../assets/javascript-calculator-figma.webp'

const projects = [
    {
        name: 'ElectionsMaster',
        description: 'A project to track the policy positions and polling data for candidates in upcoming elections. Built using React with a REST API powered by Node, Express and MongoDB/Mongoose.',
        demoUrl: 'https://electionsmaster.com',
        codeUrl: 'https://github.com/alexvarney/ElectionMaster',
        color: '#A3C5D9',
        asset: emPreview
    },
    {
        name: 'Spotify Lyrics',
        description: 'View the Genius.com lyrics for your currently playing track on Spotify. Written in React/Node, this project implements Spotify and Genius API authentication.',
        demoUrl: 'https://spotify-lyrics.varney.me',
        codeUrl: 'https://github.com/alexvarney/spotify-lyrics',
        color: '#9DA6F2',
        asset: spotifyPreview
    },
        {
        name: 'Vanilla JS Calculator',
        description: 'A little calculator app that I made with vanilla JS for a school assignment. It implements an extensible binary parsing tree to take an arbitrary mathematical expression and calculate a result.',
        demoUrl: 'https://alexvarney.github.io/PureJSCalculator/',
        codeUrl: 'https://github.com/alexvarney/PureJSCalculator/',
        color: '#D9C3A3',
        asset: calcPreview
    }
]

export default projects;