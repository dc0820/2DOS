import React from 'react';
// @ts-ignore
import saga from '../../../assets/pictures/projects/software/saga.mp4';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import scroll from '../../../assets/pictures/projects/software/scroll.mp4';
// @ts-ignore
import websiteOS from '../../../assets/pictures/projects/software/websiteOS.mp4';
// Corrected the import path and added the file extension for WebScanner
import WebScanner from '../../../assets/pictures/WebScanner.png';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on
                over the last few years.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>danielcook.org</h2>
                <br />
                <p>
                    danielcook.org is my portfolio website. The project was an absolute
                    challenge to make in both technically and
                    creatively. Early in 2023, I knew I wanted to make an
                    interactive portfolio to aid my job search. I eventually got
                    the idea for this site around early April and began
                    development early May. It is created a fully interactive Operating System 
                    website with React, Nextjs, TypeScript, and styled-components frameworks.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={websiteOS} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> A screen record of the OS website
                            running on my computer.
                        </sub>
                    </p>
                </div>

                <h2>danielcookthreejs.org</h2>
                <br />
                <p>
                    danielcookthreejs.org is my second portfolio website that focuses more on Three.js. 
                    The project was an absolute
                    joy to make and challenged me both technically and
                    creatively. Early in 2023, I also wanted to make an
                    interactive portfolio to aid my job search and revolve around my work. I eventually got
                    the idea for this site around early June and began
                    development early August. Using a scene environment of a 3D scene that 
                    is fully interactable to showcase this website.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 2:</b> Blender Scene of the 3D website.
                            The scene from Blender was baked and exported in a
                            GLTF format.
                        </sub>
                    </p>
                </div>
                <p>
                    I'm skipping over a lot of details in exchange for brevity,
                    but I do plan on doing a more in-depth breakdown for those
                    interested sometime in the future. To get updates with that
                    project feel free to follow me on twitter{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://twitter.com/d_wayne_c"
                    >
                        @d_wayne_c
                    </a>
                </p>
            </div>
            <div className="text-block">
                <h2>Guntattchment Saga The Sequel</h2>
                <br />
                <p>
                    Guntattchment Saga or GSTS is a wave-based top
                    down shooter where you progress by building the most
                    outrageous of weapons through attaching as many attachments
                    on your weapon as you can. The game ceased development in
                    2019 because I unfortunately was packed in school.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={saga} />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 3: </b> Guntattchment Saga Gameplay
                                demo, featuring the main character along with a
                                few of our grunt and dasher enemies.
                            </sub>
                        </p>
                    </div>
                </div>
                <p>
                    Guntattchment Saga was a really fun project to work on and
                    had a multitude of challenges. An interesting challenge that
                    you may not even notice was the rotation of objects such as
                    the players weapon. Rotating pixel art is a very difficult
                    thing to do because in the world of pixels you are dealing
                    with such a little amount of information. Even a single
                    misplaced pixel can cause a sprite to read in a totally
                    different and unintended way. To deal with this we developed
                    an algorithm to prioritize outlines, while rotating the
                    insides with a simple Nearest Neighbor algorithm. Doing so
                    resulted in a relatively readable sprite when rotating
                    sprites. It was a surprisingly difficult challenge as it
                    intersected both art and programming, but was fun to work on
                    overall.
                </p>
                <br />
                <p>
                    Unfortunately, the game currently is not in a releasable
                    state and so there is no demo available online. If this ever
                    changes, however, a link to the game will be added here.
                </p>
            </div>
            <div className="captioned-image"> 
                <img src={WebScanner} alt="Web Scanner" style={styles.image} />
                <p style={styles.caption}>
                    <sub>
                        <b>Figure X:</b> This is my web scanner GUI.
                    </sub>
                </p>
            </div>
            
            <div>
                <ResumeDownload />
            </div>
        </div> // Corrected the comment placement
    );
};

const styles: { [key: string]: React.CSSProperties } = { // Updated to use React.CSSProperties
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
    image: {
        width: '100%',
        padding: 12,
    }
};

export default SoftwareProjects;
