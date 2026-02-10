/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'ajce-teal': '#007A65',
                'ajce-teal-dark': '#005f4e',
                'ajce-teal-light': '#339483', // Lighter shade for gradients
                'ajce-dark': '#1a1a1a',
                'ajce-light': '#f8f9fa', // Slightly cooler subtle gray
                'ajce-gold': '#FFC107', // Accent/Call to Action
                'ajce-gold-hover': '#FFD54F',
                'ajce-blue': '#1E3A8A', // Deep blue for contrast
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Merriweather', 'serif'], // Adding a serif option if needed
            },
            backgroundImage: {
                'hero-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23007a65' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }
        },
    },
    plugins: [],
}
