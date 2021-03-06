# Use nginx on Alpine Linux as base image
FROM nginx:stable-alpine

# Set amount of nginx worker processes
RUN sed -i "s/worker_processes\s*auto/worker_processes 1/g" /etc/nginx/nginx.conf

# Disable nginx daemonization
CMD ["nginx", "-g", "daemon off;"]

# Copy nginx config
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy app source
COPY index.html /var/www/html/index.html
COPY css /var/www/html/css/
COPY images /var/www/html/images/
COPY js /var/www/html/js/
