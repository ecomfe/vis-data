

const fs = require('fs');
const nodePath = require('path');
const svgBasePath = nodePath.join(__dirname, '../map/svg');


function run() {
    const inputFilePath = nodePath.join(svgBasePath, 'seats/seatmap-example-original.svg');
    const ouputFilePath = nodePath.join(svgBasePath, 'seats/seatmap-example.svg');

    const content = fs.readFileSync(inputFilePath, {encoding: 'utf8'});
    let nameIndex = 0;
    const outputContent = content.replace(
        /class="theatre_manager_seat_graphic"/g,
        function () {
            return 'class="theatre_manager_seat_graphic" name="seat-' + nameIndex++ + '"';
        }
    );

    fs.writeFileSync(ouputFilePath, outputContent, {encoding: 'utf8'});
}

run();
