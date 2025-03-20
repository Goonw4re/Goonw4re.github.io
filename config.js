/**
 * GOONWARE Site Configuration
 * 
 * This file contains all configurable settings for the GOONWARE website
 * Edit this file to update links and other dynamic content
 */

const CONFIG = {
    // Download links
    downloads: {
        latest: {
            installer: "https://github.com/Goonw4re/goonware/releases/latest",
            version: "1.0.0",
            releaseDate: "March 2025"
        },
        allReleases: "https://github.com/Goonw4re/goonware/releases"
    },
    
    // GitHub repository links
    repository: {
        main: "https://github.com/Goonw4re/goonware",
        issues: "https://github.com/Goonw4re/goonware/issues",
        wiki: "https://github.com/Goonw4re/goonware/wiki"
    },
    
    // Social media links
    social: {
        twitter: "https://twitter.com/goonware",
        discord: "https://discord.gg/goonware"
    },
    
    // Contact information
    contact: {
        email: "contact@goonware.example.com"
    }
};

// Make configuration available globally
window.SITE_CONFIG = CONFIG; 