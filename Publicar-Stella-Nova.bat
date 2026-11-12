
@echo off
setlocal
cd /d "%~dp0"

echo ========================================
echo       PUBLICAR STELLA NOVA
echo ========================================
echo.

for /f "delims=" %%B in ('git branch --show-current') do set "BRANCH=%%B"

if not "%BRANCH%"=="v5" (
    echo ERROR: No estas en la rama v5.
    pause
    exit /b 1
)

echo [1/3] Preparando cambios...
git add -A
if errorlevel 1 goto error

git diff --cached --quiet
if not errorlevel 1 goto no_changes

echo [2/3] Guardando cambios...
git commit -m "Actualizar wiki Stella Nova"
if errorlevel 1 goto error

:no_changes
echo [3/3] Subiendo a GitHub...
git push origin v5
if errorlevel 1 goto error

echo.
echo ========================================
echo       PUBLICACION COMPLETADA
echo ========================================
echo.
echo GitHub Actions actualizara tu wiki.
echo.
pause
exit /b 0

:error
echo.
echo HUBO UN ERROR. Revisa los mensajes anteriores.
pause
exit /b 1
