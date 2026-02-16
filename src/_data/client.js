module.exports = {
    name: "Simon Painting Co",
    email: "Simonpaintingco@gmail.com",
    phoneForTel: "813-613-8253",
    phoneFormatted: "(813) 613-8253",
    address: {
        lineOne: "First Address Line",
        lineTwo: "Second Address Line",
        city: "Denver",
        state: "CO",
        zip: "80206",
        country: "US",
        mapLink: "https://maps.app.goo.gl/TEdS5KoLC9ZcULuQ6",
    },
    socials: {
        facebook: "https://www.facebook.com/Simonpaintingco",
        instagram: "https://www.instagram.com/simonpaintingcompany/",
        tiktok: "https://www.tiktok.com/@simonpaintingcompany"
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.simonpaintingco.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
