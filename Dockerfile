# Base Stage: This is the initial stage where we set up the common base for other stages.
FROM node:20-slim AS base
COPY . /app
WORKDIR /app

# Production Dependencies Stage: Here, we install only the production dependencies.
FROM base AS prod-deps
RUN --mount=type=cache,id=npm,target=/npm/store npm install --prod --frozen-lockfile

# Build Stage
FROM base AS build
COPY . .
RUN --mount=type=cache,id=npm,target=/npm/store npm install --frozen-lockfile
# Replace this with your actual build command
RUN npm run build

# Final Stage: In this stage, we prepare the final image by copying the necessary files.
FROM base
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist
EXPOSE 4000
CMD ["npm", "start"]