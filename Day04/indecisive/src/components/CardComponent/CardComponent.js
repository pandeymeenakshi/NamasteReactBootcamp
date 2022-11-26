import React from 'react';
import './CardComponent.css';


const teamDetails = [
    {
        photo: "https://scontent.fdel27-5.fna.fbcdn.net/v/t1.6435-9/120300090_1401917953339744_4526160489616159108_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vf01-5emDmEAX-A_b6P&tn=cOTsm3FbCjEH4WMU&_nc_ht=scontent.fdel27-5.fna&oh=00_AfA-HYnJL6dh8lVSiv1kfJyVhldGgo-Jz4JVVohCYD3V_g&oe=63A84959",
        name: "Meenakshi Pandey",
        place: "Electronic City, Bangalore ",
        company: "Siemens Healthineers",
        designation: "Full Stack Developer",
        id: "meenakshipandey#1422",
        linkedinProfile: "https://www.linkedin.com/in/meenakshi-pandey-590b3079/"
    },
    {
        photo: "https://scontent.fblr1-4.fna.fbcdn.net/v/t39.30808-6/300263394_8002850723090093_2751057166146335726_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4RmZpGywgsIAX8Cp-h-&_nc_ht=scontent.fblr1-4.fna&oh=00_AfD5NI7x4rCyqYs04MAAh6hq91QixLQNJQB-ce2T8uynwQ&oe=6385377D",
        name: "Sumit Gokhale",
        place: "Brookfield, Bangalore",
        Company: "Ciena",
        designation: "Software Engineer 2",
        linkedinProfile: "https://www.linkedin.com/in/sumit-gokhale/",
        id: "SumitARG#5866"
    },
    {
        photo: "https://aravind-g-portfolio.netlify.app/images/aravind-mall.jpg",
        name: "Aravind Ganesh",
        place: "Thiruvallur , TamilNadu",
        company: "Epsilon",
        designation: "Front End Developer 2",
        linkedinProfile: "https://www.linkedin.com/in/aravind-g-frontend/",
        id: "AravindGanesh#4021"
    },
    {
        photo: "https://instagram.fblr23-1.fna.fbcdn.net/v/t51.2885-19/306817343_403500325191739_1289749220104928338_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fblr23-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=pQfVvX37ODYAX8jlrxK&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCyvNX3NSHd67oR9YI7zcuh1Js9KWsybP43WUX02n9DFA&oe=638688C7&_nc_sid=8fd12b",
        name: "Ehraz Ahmad",
        place: "Hoodi, Bangalore",
        company: "Symphony Talent",
        designation: "Full Stack Developer",
        linkedinProfile: "",
        id: ""
    },
    {
        photo: "https://scontent.fdel27-5.fna.fbcdn.net/v/t1.6435-9/120300090_1401917953339744_4526160489616159108_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vf01-5emDmEAX-A_b6P&tn=cOTsm3FbCjEH4WMU&_nc_ht=scontent.fdel27-5.fna&oh=00_AfA-HYnJL6dh8lVSiv1kfJyVhldGgo-Jz4JVVohCYD3V_g&oe=63A84959",
        name: "Meenakshi Pandey",
        place: "Electronic City, Bangalore ",
        company: "Siemens Healthineers",
        designation: "Full Stack Developer",
        linkedinProfile: "www.linkedin.com/in/meenakshi-pandey-590b3079",
        id: "meenakshipandey#1422"
    },
    {
        photo: "https://drive.google.com/file/d/16n4Tjzb7yAMD4G4NxPMXEIAmtmO5fsLa/view?usp=sharing",
        name: "Sudhanshu Kansal",
        place: "Ghaziabad",
        college: "Lovely Professional University ",
        designation: "Aspiring Software Engineer ",
        linkedinProfile: "https://www.linkedin.com/in/sudhanshukansal09/",
        id: "sudhanshukansal#6088"
    },
    {
        photo: "https://scontent.fdel27-5.fna.fbcdn.net/v/t1.6435-9/120300090_1401917953339744_4526160489616159108_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vf01-5emDmEAX-A_b6P&tn=cOTsm3FbCjEH4WMU&_nc_ht=scontent.fdel27-5.fna&oh=00_AfA-HYnJL6dh8lVSiv1kfJyVhldGgo-Jz4JVVohCYD3V_g&oe=63A84959",
        name: "Meenakshi Pandey",
        place: "Electronic City, Bangalore ",
        company: "Siemens Healthineers",
        designation: "Full Stack Developer",
        id: "meenakshipandey#1422",
        linkedinProfile: "https://www.linkedin.com/in/meenakshi-pandey-590b3079/"
    }, {
        photo: "https://scontent.fdel27-5.fna.fbcdn.net/v/t1.6435-9/120300090_1401917953339744_4526160489616159108_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vf01-5emDmEAX-A_b6P&tn=cOTsm3FbCjEH4WMU&_nc_ht=scontent.fdel27-5.fna&oh=00_AfA-HYnJL6dh8lVSiv1kfJyVhldGgo-Jz4JVVohCYD3V_g&oe=63A84959",
        name: "Meenakshi Pandey",
        place: "Electronic City, Bangalore ",
        company: "Siemens Healthineers",
        designation: "Full Stack Developer",
        id: "meenakshipandey#1422",
        linkedinProfile: "https://www.linkedin.com/in/meenakshi-pandey-590b3079/"
    }
]

const CardComponent = () => {

    return (
        <>
            {teamDetails.map((data, index) => (
                <div className="card">
                    <img className="card-img" src={data.photo} alt='Image Not found' onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = require("../../assets/person.png");
                    }} />
                    <h1><b>{data.name}</b></h1>
                    <p className="title"><b>{data.designation}</b></p>
                    <div className="card-info">
                        <i>
                            <p>{data.company}</p>
                            <span className="card-location">
                                <img src={require("../../assets/location.jpg")} target="_blank" />
                                {data.place}
                            </span>
                            <p>{data.id}</p>

                            <span className="linkedin">
                                <a href={data.linkedinProfile} target="_blank">
                                    <img className="linkedin-img" src={require("../../assets/linkedin.png")} />
                                </a >
                            </span>

                        </i>
                    </div>
                </div >
            ))}
        </>
    );
}


export default CardComponent;