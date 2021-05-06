const router = require('express').Router();
const verifyToken = require('../middlewares/verify-token');
const Contact = require('../models/template/contact');


router.post('/contacts', async (req, res) => {
    try {
        let contact = new Contact();
        contact.name = req.body.name;
        contact.email = req.body.email;
        contact.subject = req.body.subject;
        contact.message = req.body.message;

        await contact.save();
        res.json({
            success: true,
            message: "Mensagem enviada com sucesso"
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
});


// Get
router.get('/contacts', verifyToken, async (req, res) => {
    try {
        let contacts = await Contact.find()
        res.json({
            success: true,
            contacts: contacts
        })
    } catch (err) {
        res.status(500).json({
            success: true,
            contact: contact
        });
    }
});

module.exports = router;