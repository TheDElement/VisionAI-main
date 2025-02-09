
# VisionAI

## Project: Full Stack AI Career Coach

### **Team Details:**
- **FOL Group ID:** Section A Group 7
- **Team Members:** [4]

- **Name:** Darshan Mevawala  
  **Student Number:** 1258769

- **Name:** Harsh Patel  
  **Student Number:** 1252428

- **Name:** Hasti Kalathiya  
  **Student Number:** 1249415

- **Name:** Durva Bhatt  
  **Student Number:** 1247922

---

### **Project Overview**
The **Full Stack AI Career Coach** is a web application designed to assist job seekers in their career journey. The platform leverages AI to generate ATS-friendly resumes and cover letters, alongside providing industry-specific reports to keep users updated on the latest trends and job role requirements.

---

### **Technology Stack**
- **Frontend:** Next.js (React-based framework for server-side rendering and modern UI development)
- **Backend:** Node.js (Express.js for REST APIs)
- **Database:** Neon DB (PostgreSQL for efficient data management)
- **ORM:** Prisma (for database schema management)
- **Cloud Functions:** Inngest (for serverless event-driven workflows)
- **UI Framework:** Shadcn UI (for modern, accessible UI components)
- **Styling:** Tailwind CSS (for responsive, utility-first design)

---

### **Features**
#### **Core Features**
1. **Resume Generator:** Create ATS-friendly resumes tailored to specific job roles using AI.
2. **Cover Letter Generator:** Generate personalized, professional cover letters.
3. **Industry Report Generator:** Provide real-time industry insights and latest job role updates.
4. **Job Role Recommendations:** AI-driven suggestions based on user profile and career goals.
5. **Document Templates:** Multiple templates for resumes and cover letters.

#### **Authentication**
1. **Login and Signup:** Secure user authentication with password encryption and token-based session management.
2. **Profile Management:** Allow users to update personal information and job preferences.

#### **User Interface**
1. **Dashboard:** Central hub for managing resumes, cover letters, and industry reports.
2. **Real-Time Notifications:** Instant feedback on actions like resume generation and job recommendations.
3. **Responsive Design:** Optimized for mobile and desktop experiences.

#### **Data Handling**
1. **User Data Storage:** Securely store user profiles, documents, and preferences.
2. **Analytics Dashboard:** Provide insights on job trends and user interaction metrics.

#### **Security and Scalability**
1. **Secure Communication:** Use HTTPS, JWT, and encryption for secure data handling.
2. **Scalability:** Built with serverless architecture to handle high-traffic scenarios.

---

### **Feature Allocation**
#### **Darshan Mevawala (Team Lead)**
- **Dark Mode:** Implement theme toggle for user customization.
- **Resume Generator:** Integrate AI model for generating ATS-friendly resumes.
- **AWS Integration:** Manage deployment and serverless functions.
- **Job Role Recommendations:** Develop AI algorithms for career suggestions.

#### **Harsh Patel**
- **Cover Letter Generator:** Develop AI-driven cover letter generation.
- **Industry Report Generator:** Implement real-time industry insights feature.
- **Analytics Dashboard:** Design and develop job trends analytics.
- **Document Templates:** Create and manage multiple templates for resumes and cover letters.

#### **Hasti Kalathiya**
- **Authentication:** Secure login/signup functionality.
- **Profile Management:** Enable users to update personal info.
- **Real-Time Notifications:** System notifications for user actions.
- **User Data Storage:** Implement secure data storage for user profiles and documents.

#### **Durva Bhatt**
- **UI/UX Design:** Responsive design using Tailwind CSS and Shadcn UI.
- **Scalability and Security:** Implement best practices for performance and security.
- **Integration with Job Portals:** Enable direct application to job listings via APIs.
- **AI Interview Prep:** Develop mock interview features with AI-generated questions and feedback.

---

### **Stretch Features**
1. **Multilingual Support:** Support for multiple languages in resume/cover letter generation.
2. **Job Application Tracker:** Track job applications and statuses.
3. **Advanced Analytics:** Provide detailed insights on job trends and user behavior.
4. **Offline Mode:** Limited functionality without an internet connection.

---

### **Sprint 1 Tasks**
1. **Project Setup:**
   - Initialize Next.js and Node.js repositories.
   - Set up Neon DB and Prisma ORM.
   - Configure Inngest for event-driven workflows.

2. **Authentication Module:**
   - Implement user registration and login.
   - Token-based session management.

3. **Resume Generator MVP:**
   - Develop basic AI-powered resume generation.
   - Basic template integration.

4. **Responsive UI Design:**
   - Dashboard wireframe design.
   - Implement core UI components.

5. **Environment Setup:**
   - Set up `.env` files for environment variables.
   - Configure deployment pipelines (Vercel for frontend, AWS for backend).

---

### **How to Run the Project**
#### **Prerequisites:**
- Node.js and npm installed.
- Neon DB instance.
- AWS/Inngest account for cloud services.

#### **Steps:**
1. **Clone the Repository:**
   ```bash
   git clone <repository_url>
   cd Full-Stack-AI-Career-Coach
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   cd frontend && npm install
   cd ../backend && npm install
   ```

3. **Set Up Environment Variables:**
   - Create `.env` files in `frontend` and `backend`.
   - Include keys for JWT, DB credentials, AWS access, etc.

4. **Run the Application:**
   - Start the backend:
     ```bash
     cd backend
     npm start
     ```
   - Start the frontend:
     ```bash
     cd frontend
     npm run dev
     ```

5. **Access the Application:**
   - Visit `http://localhost:3000`.

---

### **Deployment**
1. **Frontend Deployment:**
   - Host on Vercel using Vercel CLI:
     ```bash
     vercel
     ```

2. **Backend Deployment:**
   - Deploy on AWS (EC2 or Lambda).

3. **Database:**
   - Neon DB hosted instance.

---

### **Acknowledgments**
This project is a collaborative effort to showcase how AI can revolutionize career development through automation and personalized coaching.
