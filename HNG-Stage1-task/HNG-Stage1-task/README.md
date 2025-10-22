

## 🧠 Overview
This project is part of the **HNG Internship Stage 1 Frontend task**.  
It builds on the Stage 0 “Profile Card” and evolves it into a **multi-page, responsive, and accessible web application** built using semantic HTML, CSS, and plain JavaScript.

## 🚀 Pages

### 🏠 Home (Profile Page)
Displays a professional profile card with:
- Avatar upload option  
- Bio, hobbies, dislikes  
- Dynamic **current time in milliseconds**  
- Social media links (GitHub, Twitter, LinkedIn)  

### 📄 About Me Page
A reflective page featuring:
- Personal bio  
- Goals in the HNG program  
- Areas of low confidence  
- Note to future self  
- Extra thoughts  
All sections use semantic HTML (`<main>`, `<section>`, `<h2>`) and are fully accessible.

### ✉️ Contact Us Page
Includes a **validated contact form**:
- Full Name  
- Email  
- Subject  
- Message  
Validation rules:
- All fields required  
- Email must be valid (`name@example.com`)  
- Message must be at least 10 characters  
✅ Displays **inline error messages** and a **popup success alert** when submitted successfully.  

---

## 🧩 Features
- ✅ Semantic HTML & accessibility best practices  
- ✅ Keyboard & screen reader friendly  
- ✅ Fully responsive (mobile, tablet, desktop)  
- ✅ Plain JS validation with success alert  
- ✅ Dynamic time update on Profile page  
- ✅ Sliding mobile navigation menu with toggle  
- ✅ Separate CSS/JS for each page for modularity  

---

## 🗂️ Folder Structure
```
project-folder/
│
├── index.html              # Home/Profile page
├── about.html              # About Me page
├── contact.html            # Contact Us page
│
├── style.css               # Home page styles
├── about.css               # About page styles
├── contact.css             # Contact page styles
│
├── index.js                # Home page JS
├── about.js                # About page JS
├── contact.js              # Contact form validation JS
│
└── assets/                 # Images, icons, etc.








 Validation Rules (Contact Page)

| Field | Validation Rule | Error Test ID |

| Full Name | Required | `test-contact-error-name` |
| Email | Must be valid | `test-contact-error-email` |
| Subject | Required | `test-contact-error-subject` |
| Message | Minimum 10 characters | `test-contact-error-message` |
| Success Message | Popup alert on valid submission | `test-contact-success` |



## 🧠 Accessibility
- All form inputs linked to labels via `for` attributes.  
- Error messages associated via `aria-describedby`.  
- Navigation is fully keyboard-accessible and screen-reader friendly.  



 Technologies Used
- **HTML5** (Semantic structure)
- **CSS3** (Flexbox, Grid, Media Queries)
- **JavaScript (ES6)** (Form validation, interactivity)
- **Font Awesome** (Social icons)


🔗 Live Link

[View Live Project] https://timely-douhua-77eba3.netlify.app/

How to Run Locally

1. Clone this repository:

git clone https://github.com/Iammasterlee/HNG13-STAGE-1-TASK/tree/main/HNG-Stage1-task



 Acknowledgments
Special thanks to **HNG Internship** for the opportunity to learn, build, and grow as a frontend developer.  
This project demonstrates real-world proficiency in **responsive design, accessibility, and clean JavaScript architecture