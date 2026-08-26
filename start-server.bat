@echo off
setlocal
set PORT=8000

echo Starting the portfolio at http://localhost:%PORT% ...
start "Portfolio" http://localhost:%PORT%
py -m http.server %PORT%
