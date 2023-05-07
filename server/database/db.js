
import mongoose from "mongoose";

export const Connection = async (URL) => {
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log('Database connected Successfully:-');
    } catch (error) {
        console.log('Error while Connecting with database:-', error.message);
    }

}

export default Connection;
