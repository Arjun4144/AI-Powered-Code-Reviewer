# AI-Powered Code Reviewer

An intelligent code review tool that uses Google's Gemini AI to provide detailed code analysis and suggestions for improvement.

## 🚀 Features

- Real-time code analysis
- Detailed feedback on code quality
- Best practices recommendations
- Performance optimization suggestions
- Security vulnerability detection
- Interactive code editor with syntax highlighting
- Markdown-formatted review output

## 🛠️ Technology Stack

### Frontend
- React 19
- Vite
- PrismJS for code highlighting
- React Markdown for rendering reviews
- Axios for API calls

### Backend
- Express.js
- Google Gemini AI API
- CORS for cross-origin requests
- Environment variable management with dotenv

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/AI-Powered-Code-Reviewer.git
cd AI-Powered-Code-Reviewer
```

2. Install dependencies for both frontend and backend:
```bash
# Install frontend dependencies
cd Frontend
npm install

# Install backend dependencies
cd ../Backend
npm install
```

3. Create a `.env` file in the Backend directory with your Google Gemini API key:
```env
GOOGLE_GEMINI_KEY=your_api_key_here
```

## 🚀 Running the Application

1. Start the backend server:
```bash
cd Backend
npm start
```
The server will run on http://localhost:3000

2. Start the frontend development server:
```bash
cd Frontend
npm run dev
```
The frontend will be available at http://localhost:5173

## 💡 How to Use

1. Open the application in your browser
2. Enter or paste your code in the left panel
3. Click the "Review" button
4. View the AI-generated code review in the right panel

## 🤝 Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## ⚠️ Important Notes

- Ensure you have a valid Google Gemini API key
- The AI model used is gemini-2.5-flash
- Keep your API key secure and never commit it to version control
