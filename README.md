# Giverve Starterkit

## Adding New Environment Variables

When you update your `.env` file, you need to ensure that the changes are also reflected in both the `Dockerfile` and `docker-compose.yml`. Here’s how to do it:

1. **Update the `.env` File**:

   - Add or change environment variables as needed.

2. **Update `Dockerfile`**:

   - Add new `ARG` directives if the variables are needed during the build process.
   - Ensure the `ENV` directives include the new variables if they are required at runtime.

   **Example**:

   ```Dockerfile
   # Dockerfile

   # Add build argument
   ARG NEW_VARIABLE

   # Use as an environment variable
   ENV NEW_VARIABLE=${NEW_VARIABLE}

   ```

3. **Update ` docker-compose.yaml`**:
   - Add or update the args section under the build key if the new variables are needed during the image build.
   - Add or update the environment section to ensure the new variables are available at runtime.

**Example**:

```docker-compose-yaml
version: "3.8"

services:
 nextjs-pages:
   container_name: nextjs-pages
   environment:
     NEW_VARIABLE: ${NEW_VARIABLE}
   build:
     context: .
     dockerfile: ./apps/nextjs-pages/Dockerfile
     args:
       NEW_VARIABLE: ${NEW_VARIABLE}
```

Summary
After updating your .env file, make sure to:

Reflect the changes in the Dockerfile by updating ARG and ENV directives as needed.
Update the docker-compose.yaml file to include the new variables under args and environment.
