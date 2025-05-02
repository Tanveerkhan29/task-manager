# 📝 Task Manager - Fullstack App

This is a fullstack **Task Manager** application built with:

- **Frontend:** React.js
- **Backend:** Django + Django REST Framework
- **Authentication:** JWT (JSON Web Tokens)

---

## 📁 Project Structure

TASK-MANAGER/
├── task-manager-backend/ # Django backend (API)
└── task-manager-frontend/ # React frontend (UI)
## 🚀 Features

- User Login using JWT
- Create / Read / Update / Delete Tasks
- Private tasks per user
- Responsive design with React
- REST API built with Django + DRF

---

## ⚙️ How to Run

### 1. Clone this repo
```bash
git clone https://github.com/Tanveerkhan29/Task-manager.git
cd Task-manager
cd task-manager-backend
python -m venv env
env\Scripts\activate      # For Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver


# Setup Frontend (React)
In new terminal:

cd task-manager-frontend
npm install
npm start

##📦 API Endpoints
POST /api/token/ – Get access & refresh token

GET /api/tasks/ – List user tasks

POST /api/tasks/ – Create task

PUT /api/tasks/<id>/ – Update task

DELETE /api/tasks/<id>/ – Delete task

# 📌 Notes
Make sure backend runs on localhost:8000 and frontend on localhost:3000

CORS is enabled for local frontend access

All data is secured using JWT

🔐 Sample Credentials
You can create your own user from Django Admin or use:


Username: BlazeWorkshop
Password: tanveerkhan323

note : CREATE YOUR OWN superuser for login :)

👨‍💻 Author
Tanveer Ahmed
GitHub Profile