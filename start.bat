@echo off
echo Starting LMS Full Stack Application...
echo.

echo Starting Backend Server...
start /D "server" cmd /k "npm start"
timeout /t 3 >nul

echo Starting Frontend Development Server...
start /D "client" cmd /k "npm run dev"

echo.
echo Both servers are starting...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:5173
echo.
pause
