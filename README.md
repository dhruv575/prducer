**PRD Producer Technical Description**  
---

Dhruv Gupta  
Wharton AI Executive Education					      	        		   

**Project Proposal**

I build products that help Wharton’s Executive MBA students understand how they can implement AI within their organizations. We are working on a project that specifically is meant to show off the power of “vibe coding” for building full stack applications.

Through speaking with the PRD Producer, the EMBA students should be able to create a technical description/prd like this that will then be able to be passed down to Google Firebase, which will then be tasked to implement the actual product.

We should have a two tabbed design, with the right hand side showing a live preview of what the markdown looks like, and the right form being used to interact with the user, with a UI that looks very similar to Typeform. After the first question we ask, all questions should be customized to the user’s idea

**Proposed Technical Stack**

* **Express \+ Node:** The backend will be run through Express and Node, and be hosted on Vercel. It has been created and initialized in the “backend” folder with npm init \-y   
* **OpenAI API:** We will use OpenAI’s ChatGPT 4.1 Nano as the AI model which will be   
* **React:** The frontend will be all react. The app has been created using npx create-react-app to begin with.

**Backend Setup**

We have created a backend folder in the root folder, and run npm init \-y

**PRD Creation Workflow**

**Step 1: Kickoff & Presets**  
 **UI Layout:** Two-column view—left: Typeform-style form; right: live Markdown preview.  
 **Form Question:**

**In your own words, tell us in 2–3 sentences what business challenge you want to solve and how you’d like to approach it.**  
 *(If you’d rather start from a template, pick one of these example ideas:)*

1. **Sales Chatbot** – Automates outreach and follow-ups to boost lead conversion.

2. **Expense-Report Dashboard** – Tracks and visualizes team spending in real time.

3. **Onboarding Workflow Manager** – Guides new hires through company policies and training.

4. **Customer Feedback Collector** – Gathers and analyzes satisfaction surveys automatically.

**Step 2: Overview & Key Features**  
 **Trigger:** User submits their description or selects a preset.  
 **Model Action:** Generate an “\#\# Overview” paragraph that reframes their problem and vision.  
 **Prompt to User:**

**Which 2–3 core features will make this product shine? Describe each in a sentence or two, then check any examples below or add your own.**  
 – \[ \] **Real-time Alerts**: Instantly notify users when important events occur.  
 – \[ \] **Role-Based Access**: Control who can see and do what in the app.  
 – \[ \] **Analytics Dashboard**: Give managers clear, actionable insights at a glance.  
 **\+ Add another feature:** \_\_\_\_\_\_\_\_\_\_

**Step 3: Data Models**  
 **Trigger:** After features are defined.  
 **Model Action:** Append a “\#\# Data Models” section that explains why we need to track entities.  
 **Prompt to User:**

**What are the 1–3 key data entities (e.g., Users, Transactions, Sessions) we must store, and what do we want to do with each?**  
 • **Users →** Authenticate, personalize experience  
 • **Orders →** Track status, generate invoices  
 **\+ Add another entity:** \_\_\_\_\_\_\_\_\_\_

**Step 4: Core Workflows**  
 **Trigger:** Once data models are specified.  
 **Model Action:** Add a “\#\# Workflows” section summarizing high-level flows.  
 **Prompt to User:**

**For each major workflow, outline the steps in plain English. For example:**

1. **User signs up →** Receive welcome email → Complete profile → Start using dashboard

2. **Admin reviews feedback →** Tag sentiment → Assign follow-up tasks  
    **Describe your top 2–3 workflows below:**

3. ---

4. ---

**Step 5: UI Styling & Inspiration**  
 **Trigger:** After workflows are entered.  
 **Model Action:** Create a “\#\# UI & Styling” section about design importance.  
 **Prompt to User:**

**Which website or brand’s look and feel inspires you most?**  
 Describe the style in a few sentences—colors, layout, tone, or any element you love.  
 Example: “I love Stripe’s clean white space and subtle micro-animations.”  
 **Your choice:** \_\_\_\_\_\_\_\_\_\_

**Step 6: Backend Implementation Plan**  
 **Trigger:** Once styling info is submitted.  
 **Model Action:** Append “\#\# Backend Plan” with **three clear steps**, for example:

1. **Set up Firebase Auth** to manage user logins and permissions.

2. **Design Firestore schema** for your data models (Users, Orders, Sessions).

3. **Write Cloud Functions** to handle business logic (e.g., sending alerts).

**Step 7: Frontend Implementation Plan**  
 **Trigger:** Immediately after backend steps.  
 **Model Action:** Append “\#\# Frontend Plan” with **three clear steps**, for example:

1. **Build React form components** that mirror the Typeform-style questions.

2. **Implement a live Markdown preview** using a library like react-markdown.

3. **Style with Tailwind CSS** to match the chosen UI inspiration.

**Step 8: Finalization & Download**  
 **UI Elements:**

* **“Download PRD (Markdown)”** button

* **“Get Started with Firebase”** link

* **Disclaimer:** “For highly complex ideas, you may need to refine the plan manually.”

**Backend Development Steps**

These steps are to be followed by Cursor Agent running Claude 3.7 Sonnet. Each step should only be completed one at a time, and after each step is completed, the readme file should be updated accordingly. Do NOT go ahead at all and do not set up extra steps in advance

1. Set up the file directory and all necessary introductory files for the project. Ensure we have installed and are able to run any necessary dependencies.  
2. Given the API key, set up the .env file and write the necessary prompts, ensuring that they return the exact way we needed and we are using GPT 4.1-nano. Make them resilient to failure, especially given Rate limit failures. Rate limit failures should result in a relaunch given a random time between 1 and 3 seconds of backoff.  
3. Write an API documentation markdown file with all endpoints, exactly what they expect as input, and exactly what they expect in output  
4. Edit the backend so that it can be deployed to vercel, setting up CORS, etc

**Frontend Development Steps**

1. Create a file directory with images, components, data and pages. Create a global API variable that is set and can be edited for where the server is hosted  
2. Create the layout for the app that will take up exactly 100vh  
   1. On the right 1/3rd, we should have the live display of what our markdown is at  
   2. On the left 2/3rd, we should have the typeform-esque UI  
3. Implement the form using the API documentation

**Frontend Considerations**

1. We want the frontend to be as clean and modern as possible. Have it be in a “light mode”  
2. We want the frontend to feel responsive and provide micro feedback while we’re waiting for API calls as it may take quite long