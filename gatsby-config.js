// See: //www.gatsbyjs.com/docs/gatsby-config/

const path = require(`path`);


// ------------------------------------------------------------------
// Metadata for Space Robotics #2 at IEEE SMC-IT/SCC 2025
spacerobotics2025metadata = {
  organizers: [
    {
      challenge: false,
      imageId: "ignacioGLopezFrancos",
      name: "Ignacio G. López-Francos",
      oc: true,
      lo: true,
      organization: "NASA Ames",
      sab: false,
      site: "https://www.linkedin.com/in/ilopezfrancos/",
    },
    {
      challenge: false,
      imageId: "brianColtin",
      name: "Brian Coltins",
      oc: true,
      lo: true,
      organization: "NASA Ames",
      sab: false,
      site: "https://brian.coltin.org/",
    },
    {
      challenge: true,
      imageId: "alexSowell",
      name: "Alex Sowell",
      oc: true,
      lo: false,
      organization: "NASA JSC",
      sab: false,
      site: "https://www.linkedin.com/in/samuel-alex-sowell-07695671/",
    },
    {
      challenge: false,
      imageId: "robRoyce",
      name: "Rob Royce",
      oc: true,
      lo: false,
      organization: "NASA JPL",
      sab: false,
      site: "https://www.linkedin.com/in/robroyce/",
    },
    {
      challenge: false,
      imageId: "marcelKaufmann",
      name: "Marcel Kaufmann",
      oc: true,
      lo: false,
      organization: "NASA JPL",
      sab: false,
      site: "https://www.linkedin.com/in/kaufmann-space",
    },
    {
      challenge: false,
      imageId: "kuldeepRambhai",
      name: "Kuldeep Rambhai",
      oc: true,
      lo: false,
      organization: "Redwire",
      sab: false,
      site: "https://www.linkedin.com/in/kuldeepbarad/",
    },
    {
      challenge: false,
      imageId: "ricardMarsal",
      name: "Ricard Marsal I Castan",
      oc: true,
      lo: false,
      organization: "University of Luxembourg",
      sab: false,
      site: "https://www.linkedin.com/in/ricard-marsal-44ba63155/",
    },
    {
      challenge: true,
      imageId: "maggieWang",
      name: "Maggie Wang",
      oc: true,
      lo: false,
      organization: "Stanford University",
      sab: false,
      site: "https://www.linkedin.com/in/maggie-wang/",
    },
  ],
};

// ------------------------------------------------------------------
// Sitewide metadata used to generate pages.
module.exports = {
  siteMetadata: {
    spacerobotics2025: spacerobotics2025metadata,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-antd`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `static`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-120916510-7"],
      },
    },
  ],
};
