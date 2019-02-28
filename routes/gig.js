const router = require('express').Router();
const db = require('../dbConfig');
const Gig = require('../models/Gig');

router.get("/", (req, res) =>
    Gig.findAll()
        .then(gigs => {
            console.log(gigs);
            res.sendStatus(200);
        })
        .catch(err => console.log(err))
);


router.get("/add", (req, res) => {
    const data = {
        title: "Need a Full Stack Developer",
        technologies: "JS,HTML,CSS",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        budget: "80k",
        contact_email: 'imva508@gmail.com'
    }

    let { title, technologies, description, budget, contact_email } = data

    Gig.create({ title, technologies, description, budget, contact_email })
        .then((gig) => {
            res.redirect("/gigs")
        }).catch(err => console.log(err))
});



module.exports = router; 