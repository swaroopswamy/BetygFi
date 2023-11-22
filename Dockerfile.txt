# Use the Nginx base image from your Docker Hub repository
FROM devopsolvendo/solvendo-baseimage:2

# Create the "nginx" system user
RUN useradd -r nginx

# Set the working directory to root
WORKDIR /home

# Remove any existing content in the Nginx HTML directory
RUN rm -rf /usr/share/nginx/html/*

# Create a "document" folder inside the Nginx HTML directory
RUN mkdir /usr/share/nginx/html/Document

COPY Approachpaper.pdf /usr/share/nginx/html/Document/

# Copy the contents of the Next.js 'out' directory to the Nginx HTML directory
COPY ./out/ /usr/share/nginx/html/

# Change the ownership of the copied files to the "nginx" user
RUN chown -R nginx:nginx /usr/share/nginx/html/*

# Copy your updated nginx.conf file to the appropriate location in the container
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the default Nginx port (usually 80)
EXPOSE 80

# Command to start Nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]


