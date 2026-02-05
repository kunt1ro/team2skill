@echo off
setlocal
cd /d "%~dp0\.."
call "%~dp0..\gradlew.bat" bootRun
