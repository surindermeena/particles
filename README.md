# Project Name

Short description of the project.

## Tech Stack

* Laravel
* React
* MySQL

## Requirements

* PHP
* Composer
* Node.js
* MySQL

## Installation
### 1. Clone the project
### 2. Install Laravel dependencies

```bash
composer install
```

### 3. Install React dependencies

```bash
npm install
```

### 4. Setup environment

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Configure your database details in `.env`.

### 5. Generate application key

```bash
php artisan key:generate
```

### 6. Run migrations

```bash
php artisan migrate
```

### 7. Start Laravel

```bash
php artisan serve
```

### 8. Start React

```bash
npm run dev
```

## Done

The project should now be running locally.
