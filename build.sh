#!/bin/sh
echo "Compile interpreter..."
browserify -t browserify-css src/myapp.js -o src/main.js
echo "Copying files to moodle..."
cp src/main.js /home/vitor/moodle-docker/qportugol/portugol_interpreter/main.js
cp src/app.css /home/vitor/moodle-docker/qportugol/portugol_interpreter/app.css
# echo "Minifing files..."
# uglifyjs /home/vitor/moodle-docker/qportugol/portugol_interpreter/main.js -c -m -o /home/vitor/moodle-docker/qportugol/portugol_interpreter/main.js
# uglifycss /home/vitor/moodle-docker/qportugol/portugol_interpreter/app.css > /home/vitor/moodle-docker/qportugol/portugol_interpreter/app.css
echo "Complete"
