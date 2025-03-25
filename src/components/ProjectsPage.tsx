
import React from 'react';
import { Typography } from '@mui/material';
import './ProjectsPage.scss';

export default function ProjectsPage() {

    return (
        <div className="about-page">
            <Typography variant="h1" className="title">projects</Typography>
            <Typography className="text">
                Hey there! I'm Kurtis Taylor, a software engineer based in the Midwest.
                I am currently a Senior Software Engineer at <a href="https://www.sweetwater.com/" target="_blank" rel="noreferrer">Sweetwater</a>.
                I have a MS in Computer Science and minor in Mathematics from <a href="https://www.pfw.edu/" target="_blank" rel="noreferrer">Purdue University Fort Wayne</a>.
                I really like to apply these to skills to two areas - investing in various securities and beating the sportsbooks. In my spare time, I like to golf, hike, and cook.
            </Typography>
        </div>
    );
}

