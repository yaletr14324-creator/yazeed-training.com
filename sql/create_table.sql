create table submissions (
  id bigserial primary key,
  name text,
  email text,
  age integer,
  option text,
  message text,
  created_at timestamptz default now()
);
