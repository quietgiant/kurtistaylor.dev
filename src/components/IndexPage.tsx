
import React, { useEffect } from 'react';
import { Avatar, Container, Link, Typography } from '@mui/material';
import { Description, GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import './IndexPage.scss';

export default function IndexPage() {

    useEffect(() => {
        let title = "hi, i'm kurt";
        initIndexTitle(title);
    }, []);

    function initIndexTitle(text: string) {
        const chars = [...text];
        for (var i in chars) {
            var ch = document.createElement("span");
            if (chars[i] === " ") {
                ch.innerHTML = "&nbsp;";
            } else {
                ch.textContent = chars[i];
            }
            document.querySelector(".wavetext")?.append(ch);
        }
    }

    return (
        <div className="index-page">
            <Avatar alt="kurt" src="res/img/kurt.jpg" sx={{ width: 200, height: 200 }} />
            <Typography className="title wavetext"></Typography>
            <Container className="icon-links">
                <Link href="https://twitter.com/kurthasgame" target="_blank">
                    <Twitter htmlColor="#1d9bf0"></Twitter>
                </Link>
                <Link href="https://github.com/quietgiant" target="_blank">
                    <GitHub htmlColor="#238636"></GitHub>
                </Link>
                <Link href="https://www.linkedin.com/in/kurtis-j-taylor/" target="_blank">
                    <LinkedIn htmlColor="#0a66c2"></LinkedIn>
                </Link>
                <Link href="res/docs/resume.pdf" target="_blank">
                    <Description htmlColor="silver"></Description>
                </Link>
            </Container>
        </div>
    );
}

