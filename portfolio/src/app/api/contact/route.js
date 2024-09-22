import mongoose from 'mongoose';

// MongoDB connection function
const connectMongo = async () => {
    if (mongoose.connections[0].readyState) {
        return; // Already connected
    }
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

// Mongoose schema for messages
const messageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

const Message = mongoose.models.Message || mongoose.model('Message', messageSchema);

// POST handler
export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        // Connect to MongoDB
        await connectMongo();

        // Create a new message instance
        const newMessage = new Message({
            name,
            email,
            message,
        });

        // Save the message to the database
        await newMessage.save();

        // Return a success response
        return new Response(JSON.stringify({ success: true, message: 'Message saved successfully!' }), {
            status: 200,
        });
    } catch (error) {
        return new Response(JSON.stringify({ success: false, message: 'Server Error' }), {
            status: 500,
        });
    }
}
