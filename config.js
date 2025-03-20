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
            installer: "https://github.com/yourusername/goonware/releases/latest/download/goonware-setup.exe",
            version: "1.0.0",
            releaseDate: "May 2023"
        },
        allReleases: "https://github.com/yourusername/goonware/releases"
    },
    
    // GitHub repository links
    repository: {
        main: "https://github.com/yourusername/goonware",
        issues: "https://github.com/yourusername/goonware/issues",
        wiki: "https://github.com/yourusername/goonware/wiki"
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