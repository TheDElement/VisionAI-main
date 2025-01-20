# VisionAI

# Project: AI Vision Assistant

### **Team Details:**
- **FOL Group ID:** Section A Group 7
- **Team Members:** [4]

- **Name:** Darshan Mevawala  
  **Student Number:** 1258769

- **Name:** Darshan Mevawala  
  **Student Number:** 1258769

- **Name:** Hasti Kalathiya  
  **Student Number:** 1249415

- **Name:** Durva Bhatt
  **Student Number:** 1247922

---

### **Project Overview**
The **AI Vision Assistant** is a web application designed to bring AI-powered vision capabilities to life. By integrating a camera interface with real-time image processing and AI query handling, users can interact with the app to analyze their surroundings, recognize objects, and receive context-aware responses. 

---

### **Technology Stack**
- **Frontend:** Next.js (React-based framework for server-side rendering and modern UI development)
- **Backend:** Node.js (Express.js for REST APIs)
- **Database:** MongoDB (NoSQL database for scalable storage of user data and logs)
- **Cloud Infrastructure:** AWS (S3 for image storage, Lambda for real-time processing, and CloudWatch for monitoring)

---

### **Data Source Information**
- **Type:** Multi-user input
- **Details:** The application uses a remote MongoDB database to store user data, including query logs, image metadata, and authentication details. It requires unique user identification for managing personalized settings and secure data sharing. Captured images are stored in AWS S3 buckets for processing and retrieval.  
- **Difficulty Level:** Medium

---

### **Features**
#### **Core Features**
1. **Wakeup Command:** Activate the system using voice commands like "Arise."
2. **Real-Time Image Capture:** Stream and capture images from the device's camera.
3. **Object Recognition:** Analyze the environment to identify objects using AI models.
4. **Text Recognition (OCR):** Extract text from images for queries like document reading or signage understanding.
5. **Contextual Query Handling:** Ask AI questions about the recognized objects or text.

#### **Authentication**
1. **Login and Signup:** Secure user authentication with password encryption and token-based session management.
2. **Custom Wakeup Commands:** Allow users to personalize voice activation commands.

#### **User Interface**
1. **Dynamic Camera View:** Display a live camera feed with an intuitive query box for typed or spoken input.
2. **Real-Time Notifications:** Provide feedback during processing, such as "Analyzing Image" or "Listening..." 
3. **Responsive Design:** Ensure compatibility with mobile and desktop devices.

#### **Data Handling**
1. **Query Logs:** Store user interactions for review or analytics.
2. **Image Storage:** Save captured images securely in AWS S3 buckets.

#### **Security and Scalability**
1. **Secure Communication:** Use HTTPS and encrypted tokens for secure data exchange.
2. **Scalability:** Support high-traffic scenarios with AWS auto-scaling and serverless architecture.

---

### **Feature Allocation**
#### **Darshan Mevawala (Team Lead)**
- **Wakeup Command:** Implement voice recognition for commands like "Arise."
- **Real-Time Image Capture:** Integrate camera functionality for capturing images.
- **AWS S3 Integration:** Set up secure image storage.

#### **Harsh Patel**
- **Object Recognition:** Develop AI model integration for object detection.
- **Contextual Query Handling:** Enable users to ask questions about recognized objects or text.
- **Query Logs:** Create and manage a system for storing user queries.

#### **Hasti Kalathiya**
- **Login and Signup:** Develop secure user authentication and token-based session management.
- **Custom Wakeup Commands:** Allow users to personalize activation commands.
- **Real-Time Notifications:** Implement notifications for system actions like processing or errors.

#### **Durva Bhatt**
•⁠  ⁠**Dynamic Camera View:** Design and implement a responsive live camera feed UI.
•⁠  ⁠**Responsive Design:** Ensure cross-device compatibility for the application.
•⁠  ⁠**Scalability and Security:** Configure AWS services for scaling and secure communication.
---

### **Stretch Features**
1. **Multilingual Support:** Enable AI to interact in various languages.
2. **Augmented Reality (AR):** Overlay contextual labels directly on the camera feed.
3. **Offline Mode:** Limited functionality without an internet connection.
4. **Advanced AI Features:** Include facial recognition and sentiment analysis capabilities.

---

### **How to Run the Project**
#### **Prerequisites:**
- Node.js and npm installed.
- MongoDB instance running locally or remotely.
- AWS account for cloud services (S3, Lambda, etc.).

#### **Steps:**
1. **Clone the Repository:**
   ```bash
   git clone <repository_url>
   cd AI-Vision-Assistant
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   cd frontend && npm install
   cd ../backend && npm install
   ```

3. **Set Up Environment Variables:**
   - Create `.env` files in the `frontend` and `backend` directories.
   - Include necessary keys like `JWT_SECRET`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and database credentials.

4. **Run the Application:**
   - Start the backend server:
     ```bash
     cd backend
     npm start
     ```
   - Start the frontend application:
     ```bash
     cd frontend
     npm run dev
     ```

5. **Access the Application:**
   - Open `http://localhost:3000` in your browser to use the app.

---

### **Deployment**
1. **Frontend Deployment:** Host the Next.js application on Vercel.
   - **Steps:**
   
     1. Install the [Vercel CLI](https://vercel.com/docs/cli) or use the Vercel dashboard.
     2. Deploy the Next.js project:
        ```bash
        vercel
        ```
     3. Follow the prompts to configure your project.
     4. Access the live URL provided by Vercel.

2. **Backend Deployment:** Use AWS Elastic Beanstalk or EC2 for the Node.js server.
3. **Database:** Deploy MongoDB using MongoDB Atlas or an AWS-hosted instance.

---

### **Acknowledgments**
This project is a collaborative effort to demonstrate the integration of AI, modern web technologies, and cloud infrastructure in solving real-world challenges with innovative solutions.
