@echo off
cd /d "%~dp0"
echo.
echo Checking for changes...
git add -A
set /p msg="Describe what you changed (e.g. 'added new project'): "
if "%msg%"=="" set msg=Update site content
git commit -m "%msg%"
git push
echo.
echo Done! Give GitHub Pages ~1 minute, then check https://inglevaibhav.github.io
pause
