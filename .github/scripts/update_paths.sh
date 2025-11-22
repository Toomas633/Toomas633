#!/bin/bash

update_paths() {
input_file=$1
string_to_remove="/home/runner/work/Toomas633/Toomas633/"
jq --arg str_to_remove "$string_to_remove" '
  .[] |= (
  if .filePath then .filePath = (.filePath | sub($str_to_remove; ""))
  elif .source then .source = (.source | sub($str_to_remove; ""))
  else .
  end
  )
' "$input_file" > "$input_file.tmp"

mv "$input_file.tmp" "$input_file"

echo "Paths updated in $input_file"
}

export -f update_paths

find .reports/ -name "*.json" -exec bash -c 'update_paths "$0"' {} \;

# Update LCOV coverage files to use forward slashes for SonarCloud
echo "Updating LCOV file paths..."
if [ -f "frontend/coverage/lcov.info" ]; then
  sed -i 's|\\|/|g' frontend/coverage/lcov.info
  echo "Updated frontend/coverage/lcov.info"
fi

if [ -f "backend/coverage/lcov.info" ]; then
  sed -i 's|\\|/|g' backend/coverage/lcov.info
  echo "Updated backend/coverage/lcov.info"
fi