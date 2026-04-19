# Genwe Films

A highly cinematic, immersive, and premium portfolio website for Genwe Films. Built to showcase brand films, short films, CGI advertisements, and product films with uncompromised performance and visual fidelity.

## 🎬 Features

- **Cinematic Dark UI**: A bespoke, deeply atmospheric interface tailored specifically for video-first content.
- **High-Performance Video Streaming**: Powered by [Mux](https://mux.com/), ensuring buffer-free, adaptive-bitrate video playback across all devices.
- **Fluid Micro-Interactions**: Complex, butter-smooth layout transitions and scroll animations powered by `motion/react`.
- **Dynamic Portfolio Grid**: A heavily optimized, masonry-style project grid featuring seamless category filtering and responsive resizing.
- **Lead Capture & Notifications**: A premium contact form integrated directly with **Supabase** for database logging and **EmailJS** for instant lead notification emails.

## 🛠 Tech Stack

- **Framework**: React (via Vite)
- **Styling**: Tailwind CSS
- **Animations**: Motion (Framer Motion)
- **Video Delivery**: `@mux/mux-player-react`
- **Backend/Database**: Supabase
- **Email Service**: EmailJS
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js installed on your machine.

### Installation

1. Clone the repository and navigate into the project directory:
   ```bash
   cd genwe-films
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal).

## 🗂 Project Structure

- `src/components/` - Contains all reusable UI components (Hero, WorkCard, Navbar, etc.).
- `src/pages/` - Top-level page views (LandingPage, Work, Contact, Services, Process).
- `src/data/projects.ts` - Centralized data store for all portfolio videos and metadata.
- `src/lib/` - Configuration files for third-party services (e.g., Supabase client).

## 📝 License

This project is proprietary and intended solely for the use of Genwe Films.
