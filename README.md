# Note Taking Application

A full-stack note-taking application built with Next.js (frontend) and NestJS (backend).

## Project Structure

```
note-app/
├── src/                 # Frontend (Next.js)
│   ├── app/            # Next.js app directory
│   ├── components/     # React components
│   └── services/       # API services
│
└── backend/            # Backend (NestJS)
    ├── src/           # NestJS source code
    └── prisma/        # Database schema and migrations
```

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL
- Docker (optional)

### Frontend Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start PostgreSQL (if using Docker)
docker-compose up -d

# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Start development server
npm run start:dev
```

## Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Backend (.env)
```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/note_app?schema=public"
```

## Features

- Create, read, update, and delete notes
- Real-time updates
- Responsive design
- Type-safe API calls
- Database persistence 