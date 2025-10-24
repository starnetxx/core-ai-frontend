// Simple configuration for localhost vs production
const config = {
    // For local development
    local: {
        apiUrl: 'http://localhost:8000'
    },
    // For production (any .com domain, Netlify, etc.)
    production: {
        apiUrl: 'https://starnetwork-coremodel.hf.space'  // Hugging Face Spaces
    }
};

// Simple environment detection
const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

let currentConfig;
if (isLocal) {
    currentConfig = config.local;
} else {
    currentConfig = config.production;  // Everything else uses Hugging Face Spaces
}

// Export for use in index.html
window.API_CONFIG = currentConfig;
