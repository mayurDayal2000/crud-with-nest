# Use an official Node.js runtime as a parent image
FROM node:22.3

# Set the working directory in the container
WORKDIR /nest-app/

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install any needed packages specified in package.json
RUN yarn install

# Bundle app source inside the Docker image
COPY . .

# Build your application
RUN yarn build

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Command to run when starting the container
CMD ["yarn", "run", "start:dev"]
