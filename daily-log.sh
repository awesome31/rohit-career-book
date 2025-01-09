#!/bin/bash

# Define the directory and date format
LOG_DIR="daily-logs/2025"
TODAY=$(date +"%d-%m-%Y")
FILE="$LOG_DIR/$TODAY.md"

# Check if the directory exists, create if it doesn't
if [ ! -d "$LOG_DIR" ]; then
  mkdir -p "$LOG_DIR"
fi

# Check if the file already exists
if [ -e "$FILE" ]; then
  echo "The file $FILE already exists."
else
  # Create a new file and insert the template
  cat <<EOL > "$FILE"
# Logs for $TODAY

## Things to do

## What did I complete?

## What did I learn?
EOL

  echo "Created file: $FILE"
fi
