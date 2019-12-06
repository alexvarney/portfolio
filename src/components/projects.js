import emWebP from '../assets/electionsmaster-figma.webp'
import spotifyWebP from '../assets/spotify-lyrics-figma.webp'
import calcWebP from '../assets/javascript-calculator-figma.webp'
import habitWebP from '../assets/habit-tracker.webp'

import emPreview from '../assets/electionsmaster-figma.png'
import spotifyPreview from '../assets/spotify-lyrics-figma.png'
import calcPreview from '../assets/javascript-calculator-figma.png'
import habitPreview from '../assets/habit-tracker.png'

const projects = [
    {
        name: 'ElectionsMaster',
        description: 'A project to track the policy positions and polling data for candidates in upcoming elections. Built using React with a REST API powered by Node, Express and MongoDB/Mongoose.',
        demoUrl: 'https://electionsmaster.com',
        codeUrl: 'https://github.com/alexvarney/ElectionMaster',
        color: '#A3C5D9',
        asset: emPreview,
        assetWebP: emWebP
    },
    {
        name: 'Spotify Lyrics',
        description: 'View the Genius.com lyrics for your currently playing track on Spotify. Written in React/Node, this project implements Spotify and Genius API authentication.',
        demoUrl: 'https://spotify-lyrics.varney.me',
        codeUrl: 'https://github.com/alexvarney/spotify-lyrics',
        color: '#9DA6F2',
        asset: spotifyPreview,
        assetWebP: spotifyWebP
    },
    {
        name: 'Habit Tracker',
        description: 'An app for tracking daily habits written with the React and an Express/Mongo backend. Implements JWT auth and multi-user support. Login to demo with username: demo@varney.me, pass: password and click app name in nav.',
        demoUrl: 'https://habittracker.varney.me',
        codeUrl: 'https://github.com/alexvarney/habit-tracker',
        color: '#C1C79E',
        asset: habitPreview,
        assetWebP: habitWebP
    },
    {
        name: 'Vanilla JS Calculator',
        description: 'A little calculator app that I made with vanilla JS for a school assignment. It implements an extensible binary parsing tree to take an arbitrary mathematical expression and calculate a result.',
        demoUrl: 'https://alexvarney.github.io/PureJSCalculator/',
        codeUrl: 'https://github.com/alexvarney/PureJSCalculator/',
        color: '#D9C3A3',
        asset: calcPreview,
        assetWebP: calcWebP
    }
]

export default projects;