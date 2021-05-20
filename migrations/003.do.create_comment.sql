CREATE TABLE "comment" (
  "id" SERIAL PRIMARY KEY,
  "comment_title" TEXT,
  "comment_date" TIMESTAMP,
  "comment_author" INTEGER REFERENCES "user"(id),
  "post_id" INTEGER REFERENCES "blog"(id) 
);