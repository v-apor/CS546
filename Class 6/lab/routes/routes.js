//You will code the route in this file
//Lecture Code Refernece -> https://github.com/stevens-cs546-cs554/CS-546/tree/master/lecture_05/routes

/*
import the router and create the follow routes using the GET http method

'/aboutme';
'/mystory';
'/educationhistory'

export the router */

import { Router } from "express";
const router = Router();

const aboutme = {
    firstName: "Apoorv",
    lastName: "Chandrakar",
    biography:
        "While specialization is cool, I'd love to know about everything.\nAll I wanna be\nIs everything at once",
    favoriteMovies: [
        "Interstellar",
        "Harry Potter",
        "Eternal Sunshine of the Spotless Mind",
        "A Beautiful Mind",
    ],
    hobbies: ["Football", "Piano", "Running"],
    fondestMemory: "Playing football with friends after school.",
};

const mystory = {
    storyTitle: "Legend of a Legend",
    storyGenre: "Non-Fiction",
    story: "Once upon a time.\nThere was a Hero.\nHe died.",
};

const educationhistory = [
    {
        schoolName: "Massachusets Institute of Technology",
        degreeEarned: "Doctor of Philosophy",
        numberOfYearsAttended: 4,
        favoriteClasses: [
            "Reinforcemet Learning",
            "Natural Language Processing",
        ],
        favoriteSchoolMemory: "Getting Nobel Prize",
    },
    {
        schoolName: "Stanford",
        degreeEarned: "Master of Science",
        numberOfYearsAttended: 2,
        favoriteClasses: ["Distributed Systems", "System Design"],
        favoriteSchoolMemory: "Getting Turing Award",
    },
    {
        schoolName: "Harvard",
        degreeEarned: "Bachelor of Science",
        numberOfYearsAttended: 4,
        favoriteClasses: ["Art", "Science", "Math", "Psycology"],
        favoriteSchoolMemory: "Being Alive",
    },
];

router.get("/aboutme", async (req, res) => {
    res.send(aboutme);
});

router.get("/mystory", async (req, res) => {
    res.send(mystory);
});

router.get("/educationhistory", async (req, res) => {
    res.send(educationhistory);
});

export default router;
