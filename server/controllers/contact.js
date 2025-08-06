import Contact from "../models/Contact.js";

export const contactForm = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name|| !email || !message) {
            return res.send(400).json({
                error: "All fields are required!"
            });
        }

        const newContact = new Contact({
            name, email, message
        });

        await newContact.save();

        res.status(201).json({
            message: "Message Sent Successfully!"
        });
    } catch (error) {
        console.error("Contact Form Error", error);
        res.status(500).json({
            error: "Something went wrong! Please try again."
        });
    }
};