CREATE TABLE "blog" (
  "id" SERIAL PRIMARY KEY,
  "entry_title" TEXT NOT NULL,
  "content" TEXT,
  "entry_date" TIMESTAMP,
  "photo_link" VARCHAR(255)
);