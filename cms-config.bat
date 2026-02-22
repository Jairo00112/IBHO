@echo off
REM Script para cambiar entre configuraciones de CMS
REM Uso: cms-config.bat [dev|prod]

if "%1"=="dev" (
    echo Cambiando a configuración de desarrollo...
    copy "admin\config-dev.yml" "admin\config.yml"
    echo Configuración de desarrollo activada.
) else if "%1"=="prod" (
    echo Cambiando a configuración de producción...
    copy "admin\config-prod.yml" "admin\config.yml"
    echo Configuración de producción activada.
) else (
    echo Uso: cms-config.bat [dev^|prod]
    echo.
    echo dev  - Configuración para desarrollo local
    echo prod - Configuración para producción
)