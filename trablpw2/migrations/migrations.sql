CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    name TEXT,
    telephone TEXT,
    email TEXT
  );
  
  -- Tabela de professores
  CREATE TABLE IF NOT EXISTS teachers (
    id SERIAL PRIMARY KEY,
    name_teacher TEXT
  );
  
  -- Tabela de disciplinas
  CREATE TABLE IF NOT EXISTS subjects (
    id SERIAL PRIMARY KEY,
    course_name TEXT,
    workload INTEGER
  );