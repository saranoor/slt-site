# 1. Use an official Python image
FROM python:3.11-slim

# 2. Set the directory where our code will live inside the container
WORKDIR /app

# 3. Prevent Python from writing .pyc files and enable unbuffered logging
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# 4. Install system dependencies (needed for some Python packages)
RUN apt-get update && apt-get install -y build-essential libpq-dev && rm -rf /var/lib/apt/lists/*

# 5. Copy requirements and install them
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# 6. Copy the rest of your Django code
COPY . /app/

# 7. The command to start the server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]