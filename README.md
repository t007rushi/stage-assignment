Here’s the README.md file in GitHub-flavored Markdown:

markdown
Copy code
# Story Viewer Application

A simple, performance-optimized story viewer application inspired by Instagram stories, built with React and Tailwind CSS. The app is deployed and available at the following link:

## 📦 Live Deployment

- [Story Viewer App](https://fanciful-melba-007f47.netlify.app)

---

## 🛠️ Setup Instructions

To run the application and tests locally, follow these steps:

### 1. **Clone the Repository**

```bash
git clone https://github.com/t007rushi/stage-assignment.git
cd stage-assignment
```
2. Install Dependencies
Install all the necessary dependencies using npm or yarn:

```bash
npm install
```

3. Start the Application
To run the app locally, use:

```bash
npm start
```
This will run the application in development mode, and you can view it at http://localhost:3000.

4. Running Tests
The project includes both unit and end-to-end tests. To run them, use the following commands:
End-to-End Tests (via Playwright):

```bash

npm run test:e2e
```

For running tests with Playwright UI:

```bash
npm run test:e2e:ui
```

### 1. Design Choices: React & Tailwind CSS
- **React**: Utilizes React for declarative components and local state management, ensuring maintainability and scalability.
- **Tailwind CSS**: Uses utility-first classes for rapid styling, leading to cleaner components and reduced custom CSS.

### 2. Performance Optimizations
- **Tailwind CSS**: Generates only necessary styles, reducing the final CSS bundle size.
- **Minimal Re-renders**: Functional components and hooks like `useCallback` minimize re-renders for better responsiveness.

### 3. Scalability Considerations
- **Component Reusability**: Components like `Story`, `StoryViewer`, and `StoryPreviewer` are reusable, making scaling easy.
- **Responsive Design**: Fully responsive with Tailwind, ensuring seamless adaptation to all screen sizes.

### 4. Testing
End-to-End Tests: Playwright tests the full user journey, simulating user interactions with the app. This ensures that the app behaves as expected in a real-world scenario.