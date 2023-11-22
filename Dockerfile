# Use your custom base image from Docker Hub
FROM node:16
 
# Set the working directory inside the container
WORKDIR /opt
 
# Clone your GitLab repository with the specified branch
COPY /home/workspace/testing_job/betygfi-nextjs /opt/

WORKDIR /opt/betygfi-nextjs
RUN npm install -f
RUN npm run build:dev
 
# Start your Node.js application
ENTRYPOINT ["npm", "run", "start:dev"]
