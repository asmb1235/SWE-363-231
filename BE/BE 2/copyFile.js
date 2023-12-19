const fs = require('fs');
const path = require('path');

// Function to copy files based on extensions
function copyFiles(sourceDir, targetDir) {
    // Read the contents of the source directory
    fs.readdir(sourceDir, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        // Filter files with specific extensions (.txt, .jpg)
        const filteredFiles = files.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return ext === '.txt' || ext === '.jpg';
        });

        // Copy filtered files to the target directory
        filteredFiles.forEach(file => {
            const sourcePath = path.join(sourceDir, file);
            const targetPath = path.join(targetDir, file);

            fs.copyFile(sourcePath, targetPath, (err) => {
                if (err) {
                    console.error(`Error copying ${file}:`, err);
                } else {
                    console.log(`Copied ${file} to ${targetDir}`);
                }
            });
        });
    });
}

// Get command-line arguments
const [,, sourceDirectory, targetDirectory] = process.argv;

// Validate the provided arguments
if (!sourceDirectory || !targetDirectory) {
    console.error('Usage: node fileCopy.js <source directory> <target directory>');
    process.exit(1);
}

// Call the function to copy files
copyFiles(sourceDirectory, targetDirectory);
