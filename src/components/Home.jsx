import React from 'react'
import vg from "../assets/2.webp";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
    return (
        <>
            <div className="home" id="home">
                <main>
                    <h1>TechyStar</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />

                <div>
                    <p>
                        We are your one and only solution to the tech problems you face
                        every day. We are leading tech company whose aim is to increase the
                        problem solving ability in children.
                    </p>
                </div>
            </div>

            <div className="home3" id="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>

                        TechyStar: Empowering Problem Solving in Children
                        <br/>
                        Introduction:
                        TechyStar is a leading tech company dedicated to providing innovative solutions for the everyday problems faced by individuals, with a particular focus on enhancing problem-solving abilities in children. We believe that by fostering critical thinking skills and encouraging creativity, we can empower the next generation to become adept at overcoming challenges and shaping a better future.
                        <br/>
                        Our Mission:
                        At TechyStar, our mission is to equip children with the necessary tools and knowledge to navigate the increasingly complex world of technology. We strive to inspire young minds, instilling in them a passion for problem-solving and encouraging them to embrace the opportunities that technology presents. By doing so, we aim to nurture a generation of confident and capable individuals who can adapt to the ever-evolving tech landscape.
                    </p>
                </div>
            </div>

            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>

                    <article>
                        <div
                            style={{
                                animationDelay: "0.3s",
                            }}
                        >
                            <a href = "https://google.com" target={"blank"} ><AiFillGoogleCircle /></a>
                            <p>Google</p>
                        </div>

                        <div
                            style={{
                                animationDelay: "0.5s",
                            }}
                        >
                            <a href = "https://amazon.com" target={"blank"} ><AiFillAmazonCircle /></a>
                            <p>Amazon</p>
                        </div>

                        <div
                            style={{
                                animationDelay: "0.7s",
                            }}
                        >
                            <a href = "https://youtube.com" target={"blank"} ><AiFillYoutube /></a>
                            <p>Youtube</p>
                        </div>

                        <div
                            style={{
                                animationDelay: "1s",
                            }}
                        >
                            <a href = "https://instagram.com" target={"blank"} ><AiFillInstagram /></a>
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home