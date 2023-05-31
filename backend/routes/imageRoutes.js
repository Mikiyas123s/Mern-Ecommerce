const cloudinary = require('cloudinary');
const router = require('express').Router();
require('dotenv').config();

cloudinary.config({
    cloud_name: "dwbp7yzdh",
    api_key: "345197473377477",
    api_secret: "zPBD3wgSG4GiQxyh5VZtU-jKlT0"
})

router.delete('/:public_id', async(req, res) => {
    const { public_id } = req.params;
    try {
        await cloudinary.uploader.destroy(public_id);
        res.status(200).send();
    } catch (e) {
        res.status(400).send(e.message)
    }
})

//lwfkdcd7
module.exports = router;