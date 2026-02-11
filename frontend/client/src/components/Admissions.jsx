
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Admissions = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState(null);
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePhone = (phone) => {
        const re = /^\d{10}$/; // Validates a 10-digit number
        return re.test(phone);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // Reset errors
        setEmailError('');
        setPhoneError('');
        setMessage(null);

        const formData = new FormData(form.current);
        const userEmail = formData.get('user_email');
        const userPhone = formData.get('user_phone');
        let isValid = true;

        if (!validateEmail(userEmail)) {
            setEmailError('Please enter a valid email address.');
            isValid = false;
        }

        if (!validatePhone(userPhone)) {
            setPhoneError('Please enter a valid 10-digit mobile number.');
            isValid = false;
        }

        if (!isValid) return;

        setIsSubmitting(true);

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
        // Intended receiver: varghese.sen.alfin@gmail.com (Configure this in your EmailJS template settings)
        const SERVICE_ID = 'service_gmail'; // Example: service_gmail
        const TEMPLATE_ID = 'template_admission'; // Example: template_admission
        const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Example: user_123456789

        // Simulate success if keys are placeholders (for demo purposes)
        if (PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
            setTimeout(() => {
                setMessage({ type: 'success', text: 'Application submitted successfully! (Demo Mode: Email logic simulated)' });
                setIsSubmitting(false);
                e.target.reset();
            }, 1500);
            return;
        }

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setMessage({ type: 'success', text: 'Application submitted successfully! Check your email for confirmation.' });
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                setMessage({ type: 'error', text: 'Failed to submit application. Please try again later.' });
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section id="admissions" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-serif">
                        <span className="text-ajce-teal">Admissions</span> Open
                    </h2>
                    <div className="w-24 h-1 bg-ajce-gold mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Take the first step towards a bright future. Apply now for our various undergraduate and postgraduate programs.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Information Section */}
                    <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Amal Jyothi?</h3>
                        <ul className="space-y-4 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-ajce-teal mr-2">✓</span>
                                <span>NAAC 'A' Grade Accredited Institution</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-ajce-teal mr-2">✓</span>
                                <span>NBA Accredited Programs</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-ajce-teal mr-2">✓</span>
                                <span>Excellent Placement Track Record</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-ajce-teal mr-2">✓</span>
                                <span>State-of-the-art Infrastructure & Labs</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-ajce-teal mr-2">✓</span>
                                <span>Vibrant Campus Life with Technical & Cultural Events</span>
                            </li>
                        </ul>

                        <div className="mt-8 p-6 bg-teal-50 rounded-xl border border-teal-100">
                            <h4 className="font-bold text-ajce-teal mb-2">Need Help?</h4>
                            <p className="text-sm text-gray-600 mb-4">Contact our admission office for guidance.</p>
                            <p className="font-medium text-gray-800">Phone: +91 12345 67890</p>
                            <p className="font-medium text-gray-800">Email: admissions@amaljyothi.ac.in</p>
                        </div>
                    </div>

                    {/* Application Form */}
                    <div className="w-full md:w-1/2 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Quick Application Form</h3>

                        {message && (
                            <div className={`mb-6 p-4 rounded-lg text-sm font-medium ${message.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                                {message.text}
                            </div>
                        )}

                        <form ref={form} onSubmit={sendEmail} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ajce-teal focus:border-ajce-teal outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-ajce-teal focus:border-ajce-teal outline-none transition-all ${emailError ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="john@example.com"
                                />
                                {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    name="user_phone"
                                    required
                                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-ajce-teal focus:border-ajce-teal outline-none transition-all ${phoneError ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="9876543210"
                                />
                                {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Course Interested In</label>
                                <select
                                    name="course"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ajce-teal focus:border-ajce-teal outline-none transition-all bg-white"
                                >
                                    <option value="B.Tech Computer Science">B.Tech Computer Science</option>
                                    <option value="B.Tech Electronics">B.Tech Electronics</option>
                                    <option value="B.Tech Mechanical">B.Tech Mechanical</option>
                                    <option value="B.Tech Civil">B.Tech Civil</option>
                                    <option value="M.Tech">M.Tech</option>
                                    <option value="MCA">MCA</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                                <textarea
                                    name="message"
                                    rows="3"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ajce-teal focus:border-ajce-teal outline-none transition-all"
                                    placeholder="Any specific queries?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 bg-ajce-gold text-ajce-dark font-bold rounded-lg shadow-md hover:bg-ajce-gold-hover hover:shadow-lg transition-all transform hover:-translate-y-0.5 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? 'Sending...' : 'Submit Application'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Admissions;
