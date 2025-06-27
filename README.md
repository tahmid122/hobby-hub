# 🎉 HobbyHub 🎉

**HobbyHub** is a community-driven platform where users can discover, join, and create hobby-based local groups — such as book clubs, hiking crews, painting circles, and more. It fosters social engagement through shared interests and helps people build meaningful connections around their passions.

---

## 🚀 Live Demo

🔗 [Visit HobbyHub on Netlify](https://hobbyhub-bytahmid.netlify.app/)

---

## 🌟 Key Features

- 🔐 **Authentication System**
  - Email & Password authentication
  - Google authentication
- 🧭 **Routing**
  - Dynamic Routing
  - Private & Conditional Routes
- 🎨 **User Interface**
  - Light/Dark Mode toggle
  - Responsive and clean design
  - Smooth animations and visual transitions
- 📦 **Core Functionality**
  - Full **CRUD operations** for group management (Create, Read, Update, Delete)
  - Real-time feedback with toast notifications
  - Protected dashboard and pages
- 🛠️ **Utilities**
  - Loading indicators
  - Error handling
  - Form validations

---

## 💻 Tech Stack

| Technology / Library        | Version  | Description                               |
| --------------------------- | -------- | ----------------------------------------- |
| **React**                   | ^19.1.0  | Frontend framework                        |
| **React Router**            | ^7.6.0   | Client-side routing                       |
| **Tailwind CSS**            | ^4.1.7   | Utility-first CSS framework               |
| **DaisyUI**                 | ^5.0.35  | UI plugin for Tailwind CSS                |
| **Flowbite**                | ^3.1.2   | Tailwind component library                |
| **Firebase**                | ^11.7.3  | Authentication and hosting                |
| **Axios**                   | ^1.10.0  | HTTP client for API requests              |
| **Swiper.js**               | ^11.2.6  | Carousel/slider functionality             |
| **Recharts**                | ^3.0.0   | Chart library for data visualization      |
| **SweetAlert2**             | ^11.21.1 | Elegant pop-up alerts                     |
| **React Hot Toast**         | ^2.5.2   | Toast notification library                |
| **React Icons**             | ^5.5.0   | Icon library for React                    |
| **Lottie React**            | ^2.4.1   | Render animations using Lottie JSON files |
| **React Tooltip**           | ^5.28.1  | Tooltip library for React                 |
| **React Simple Typewriter** | ^5.0.1   | Typing animation for text                 |
| **ldrs**                    | ^1.1.7   | Lightweight loaders                       |
| **Vite**                    | ^6.3.5   | Build tool and development server         |

---

## 🔧 Dev Tools

| Tool / Library                  | Version | Purpose                        |
| ------------------------------- | ------- | ------------------------------ |
| **ESLint**                      | ^9.25.0 | JavaScript/React linting       |
| **@vitejs/plugin-react**        | ^4.4.1  | React plugin for Vite          |
| **@tailwindcss/vite**           | ^4.1.7  | Tailwind CSS plugin for Vite   |
| **@types/react**                | ^19.1.2 | Type definitions for React     |
| **@types/react-dom**            | ^19.1.2 | Type definitions for React DOM |
| **eslint-plugin-react-hooks**   | ^5.2.0  | Linting rules for React Hooks  |
| **eslint-plugin-react-refresh** | ^0.4.19 | Refresh plugin for React       |
| **Globals**                     | ^16.0.0 | Global variable definitions    |

---

## 🛠️ Local Setup

Follow these steps to run the project on your local machine:

### 📦 Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn
- A Firebase project set up (for authentication)
- Backend server (see backend repo below)

### 🚀 Steps to Run

1. **Clone the repository**

```bash
git clone https://github.com/your-username/hobbyhub-client.git
cd hobbyhub-client
```

2. **Install dependencies**

```bash
npm install
```

or with yarn:

```bash
yarn
```

3. **Set up environment variables**

Create a `.env` file in the root directory and add your Firebase config:

```env
VITE_API_URL=https://your-backend-api.com
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. **Run the development server**

```bash
npm run dev
```

The app will be running at: [http://localhost:5173](http://localhost:5173)

---

## 🔗 Backend Repository

You can find the backend source code here:

👉 [HobbyHub Backend Repo](https://github.com/tahmid122/hobby-hub-server)

---

## 🧑‍💻 Author

- **Name:** Tahmid Alam
- **GitHub:** [@tahmid122](https://www.github.com/tahmid122)
- **Email:** <mdtahmidalam122@gmail.com>

---

## 📄 License

This project is for educational and demonstration purposes. Feel free to use the structure for your own personal or academic projects.

---

> 🚧 _Note:_ Backend API and database (MongoDB) are used for handling group data and user operations. Make sure to configure your environment variables and Firebase project correctly to run this project locally.
