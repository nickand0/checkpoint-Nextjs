//contact.js
"use client"; // Add this if you're using Next.js 13's app directory
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
            name: '',
            email: '',
            message: '',
        });
        const [success, setSuccess] = useState(null);
        const [error, setError] = useState(null);
        
        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        };
        
        const handleSubmit = async (e) => {
            e.preventDefault();
        
            try {
                const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
            
                const data = await res.json();
            
                if (data.success) {
                    setSuccess('Your message has been sent!');
                    setFormData({ name: '', email: '', message: '' }); // Reset form
                } else {
                    setError('Failed to send the message. Please try again.');
                }
            } catch (err) {
                setError('An error occurred. Please try again.');
            }
        };
    return (
        <div className='h-full'>
            <Navbar />
            <div className="h-[80vh] md:h-[83vh] bg-gray-100 py-0 md:py-10 flex flex-col justify-center items-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Contact<span className='text-blue-300'> Me</span></h1>
                    
                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                            >
                                Send Message
                            </button>
                            {success && <p className="text-green-500 mt-4 text-center">{success}</p>}
                            {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
