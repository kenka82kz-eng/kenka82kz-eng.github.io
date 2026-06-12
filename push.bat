@echo off
SET PATH=%PATH%;C:\Program Files\Git\cmd
cd /d "c:\Users\user\Desktop\SAMGA site"

echo.
echo === Измененные файлы ===
git status --short

echo.
set /p MSG=Комментарий (Enter = "update"):
if "%MSG%"=="" set MSG=update

git add .
git commit -m "%MSG%"
git push

echo.
echo === Готово! Сайт обновится через ~1 минуту ===
echo SAMGA:      https://kenka82kz-eng.github.io/
echo Мешітхан:   https://kenka82kz-eng.github.io/meshitkhan.html
echo.
pause
