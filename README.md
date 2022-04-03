# Example Todo App

An example application that lists tasks from the database.

# Installation

| :memo:        | Please install any missing packages you encounter |
|---------------|:--------------------------------------------------|

### 1. Create user

The application will run under its own user account. For this purpose, create
the user with the login name `todoapp` .

### 2. Prepare directories

Your organization has decided that all applications serving web pages must be
placed under `/srv/www/`. Create the directory structure and assign sensible
permissions. Keep in mind that multiple users/applications might use this
directory in the future.

### 3. Create application directory

Create the directory for the application itself `/srv/www/todo-app` and assign
appropriate permissions.

### 4. Download source code

Download the source code and place it under `/srv/www/todo-app` .

Using git is an option:
```bash
git clone https://github.com/bbusuioc/todo-app
```

Another option would be to use wget (search link for downloading as an archive
on Github).

### 5. Install productive dependencies

```
npm install --production
```

### 6. Set environment variables

The application is configured using environment variables.

Set the following variables for the database connection:

```bash
export DATABASE_HOST=
export DATABASE_NAME=
export DATABASE_USER=
export DATABASE_PASSWORD=
```

Also set the environment variable `NODE_ENV` to `production` in order to disable
debugging output when errors occur.

If `PORT` is unset, the default port 8000 will be used. This is OK for our
example.

### 7. Run the app

```bash
node bin/www
```
