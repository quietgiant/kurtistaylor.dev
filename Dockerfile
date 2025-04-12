# Build stage
FROM node:18-alpine as builder

WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Build the app
RUN yarn build

# Production stage
FROM nginx:alpine

# Copy built assets from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Add nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 7777
EXPOSE 7777

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 