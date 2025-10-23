# CORE Object-Centric AI - Frontend

This is the frontend-only repository for the CORE Object-Centric AI project, designed specifically for Netlify deployment.

## Features

- Modern web interface for AI object detection
- Real-time connection to Railway backend
- Mobile-responsive design
- Drag-and-drop image upload
- Object detection, similarity search, and tracking features

## Backend

The backend API is hosted on Railway at: `https://web-production-e7ea7.up.railway.app/`

## Deployment

This frontend is automatically deployed to Netlify and connects to the Railway backend.

## Local Development

1. Open `index.html` in a web browser
2. The frontend will automatically connect to the Railway backend

## Configuration

The `config.js` file handles environment detection:
- Local development: Uses `http://localhost:8000`
- Production: Uses `https://web-production-e7ea7.up.railway.app/`