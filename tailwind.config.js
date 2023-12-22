/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#A729F5',
        'deep-navy': '#313E51',
        'navy': "#3B4D66",
        'ashy':"#626C7F",
        'light-blue':'#ABC1E1',
        'whitey-blue':"#F4F6FA",
        'success-green':'#26D782',
        'error-red':"#EE5454"
      }
    },
  },
  plugins: [],
}