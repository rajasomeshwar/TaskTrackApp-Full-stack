#!/bin/bash

# Generate README.md
cat <<EOL > README.md
# Project Name

## Description
This project consists of a backend built with Spring Boot and a frontend built with React. Below are the steps to run both services.

---

## Backend Setup (Spring Boot)

### Prerequisites
- Java 17+ installed
- Maven installed
- MySQL or any required database configured

### Steps to Run
1. Navigate to the backend directory:
   \`\`\`bash
   cd Backend/ReactRealOne
   \`\`\`
2. Configure database connection in \`application.properties\`.
3. Build and run the project:
   \`\`\`bash
   mvn clean install
   mvn spring-boot:run
   \`\`\`
4. The backend should now be running on \`http://localhost:8080\`.

---

## Frontend Setup (React)

### Prerequisites
- Node.js and npm installed

### Steps to Run
1. Navigate to the frontend directory:
   \`\`\`bash
   cd Fronted/TaskTrack
   \`\`\`
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Start the React development server:
   \`\`\`bash
   npm start
   \`\`\`
4. The frontend should now be running on \`http://localhost:3000\`.

---

## Running the Full Stack
1. Start the backend first.
2. Start the frontend after the backend is running.
3. Access the application via \`http://localhost:3000\`.

---

## Technologies Used
- **Backend:** Java, Spring Boot, MySQL
- **Frontend:** React, JavaScript, Chakra UI

---

## Contributing
Feel free to contribute by submitting a pull request.

## License
This project is licensed under the MIT License.
EOL

echo "README.md file has been created successfully!"
