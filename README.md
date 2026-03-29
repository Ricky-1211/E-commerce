# Nike E-commerce Store

A modern, high-performance e-commerce platform built with Next.js 15, Drizzle ORM, and PostgreSQL. Features a clean, premium design inspired by top-tier athletic wear brands.

## 🚀 Features

- **Product Discovery**: Advanced filtering by category, gender, size, and color.
- **Dynamic Routing**: SEO-friendly dynamic product pages.
- **Modern Tech Stack**: Leveraging Next.js 15 for lightning-fast performance.
- **Robust Database Management**: Using Drizzle ORM with Type-safe PostgreSQL integration.
- **Premium Design**: Sleek, responsive UI with harmonious typography and glassmorphic elements.

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19
- **Database**: PostgreSQL (via Postgres.js)
- **ORM**: Drizzle ORM
- **Authentication**: Better Auth
- **Styling**: TailwindCSS 4, Lucide Icons
- **State Management**: Zustand
- **Filters**: URL-based state with `query-string`

## ⚙️ Getting Started

### 1. Environment Configuration

Create a `.env.local` file in the root directory and configure your PostgreSQL database connection:

```bash
DATABASE_URL=postgresql
```

*Note: If your password contains special characters like `@`, ensure they are URL-encoded (e.g., `@` becomes `%40`).*

### 2. Database Setup

Synchronize your schema and seed the database with initial products:

```bash
# Push schema to database
npm run db:push

# Populate sample products and configurations
npm run db:seed
```

### 3. Run the Application

Start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## 📜 Available Scripts

- `npm run dev`: Starts the Next.js development server.
- `npm run db:push`: Synchronizes your Drizzle schema with the database instantly.
- `npm run db:seed`: Populates the database with Nike sample products and category data.
- `npm run db:studio`: Opens Drizzle Studio to visualize and edit your database data.
- `npm run build`: Generates the production build of the application.

## 📁 Project Structure

- `src/app`: Next.js App Router (Layouts and Pages)
- `src/lib/actions`: Server Actions for product management and filtering.
- `src/lib/db`: Database connection and schema definitions.
- `src/lib/auth`: Authentication configuration using Better Auth.
- `src/components`: UI components and shared design elements.
