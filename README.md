# Ruba Website

Full-stack app with a React frontend (Vite) and a Django backend for booking appointments.

## Project Structure
```
front-end/   # React UI
backend/     # Django API (bookings app)
```

## Prerequisites
- Node.js 18+
- Python 3.11+ with `backend/.venv` (or create your own virtualenv)
- PostgreSQL running locally (default) or a reachable instance

## Backend (Django)
1. Activate env and install deps (already installed in `.venv` if present):
   ```bash
   cd backend
   .\.venv\Scripts\activate   # PowerShell on Windows
   ```
2. Set environment variables (adjust for your DB):
   ```bash
   $env:POSTGRES_DB="postgres"
   $env:POSTGRES_USER="postgres"
   $env:POSTGRES_PASSWORD="<your_password>"
   $env:POSTGRES_HOST="127.0.0.1"
   $env:POSTGRES_PORT="5432"
   ```
3. Run migrations and start server:
   ```bash
   python manage.py migrate
   python manage.py runserver  # serves API at http://localhost:8000
   ```
4. API endpoint: `POST http://localhost:8000/api/bookings/`

## Frontend (React)
1. Install deps and run dev server:
   ```bash
   cd front-end
   npm install
   npm run dev  # default at http://localhost:5173
   ```
2. Set API base URL via Vite env (optional; defaults to localhost:8000):
   Create `front-end/.env.local` with:
   ```
   VITE_API_BASE_URL=http://localhost:8000
   ```

## Admin
- Create a superuser to access Django admin:
  ```bash
  cd backend
  .\.venv\Scripts\activate
  python manage.py createsuperuser
  ```
  Login at `http://localhost:8000/admin/`.

## Testing
```bash
cd backend
.\.venv\Scripts\activate
python manage.py test
```
