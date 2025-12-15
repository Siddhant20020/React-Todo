# React Todo Trial Task

This is my **React Todo App** created for the frontend trial task.  
I’ve made it so a user can:

- Add a Todo (with image upload)  
- View Todo list  
- Edit a Todo (including updating image)  
- Delete a Todo  
- Mark a Todo as pending/completed  

All data is stored in **localStorage** (no backend needed) and images are stored as **Base64 strings** (which is okay for a trial like this).

---

## ✅ Todo Fields Used

- `id` → number (generated using `Date.now()`)  
- `title` → string (required input)  
- `description` → string (optional/nullable)  
- `image` → string (Base64 URL)  
- `status` → pending / completed (dropdown)

---

## 🛠 Packages I Used

I installed the following packages to make this project:

- **react** → core library for building UI  
- **react-dom** → rendering React components  
- **react-router-dom** → for handling all the routes (`/todos`, `/todos/create`, `/todos/:id/edit`)  
- **vite** → dev server and build tool  
- **@vitejs/plugin-react** → needed for Vite + React setup  
- **tailwindcss + postcss + autoprefixer** → for styling, responsive UI, and clean industry-standard look  

I installed them with:

```bash
npm install react react-dom react-router-dom
npm install -D vite @vitejs/plugin-react tailwindcss postcss autoprefixer
npx tailwindcss init -p
