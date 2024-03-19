#!/bin/bash

cwd=$(pwd)
find ~/Documents/Study-Materials -type f -name "*Notes.pdf" | 
    while IFS= read -r  file; do
        echo "Copying $file..."
        newname=$(basename "$file" | sed 's/ Notes//g')
        cp -f "$file" "$cwd/public/notes/$newname" 
    done