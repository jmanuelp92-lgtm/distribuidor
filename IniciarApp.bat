@echo off
title Servidor Local - Distribucion Animal Pro
echo Lanzando servidor de pruebas...
echo.
echo 1. Abriendo navegador en http://localhost:8000
start http://localhost:8000
echo.
echo 2. Iniciando Python HTTP Server...
python -m http.server 8000
pause