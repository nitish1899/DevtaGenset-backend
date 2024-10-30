import { Query } from "../models/query.js";
import { sendEmailNotification } from "../services/emailService.js";

const queryController = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newQuery = new Query({ name, email, message });
        await newQuery.save();

        // Send email notification
        await sendEmailNotification(name, email, message);

        return res.status(200).json({ message: 'Query raised and email sent successfully.' });
    } catch (error) {
        return res.status(500).json({ message: 'Error raising query', error });
    }
}

export { queryController };