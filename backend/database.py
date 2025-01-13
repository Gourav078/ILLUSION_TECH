from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
from dotenv import load_dotenv
import os


load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

# Ensure DATABASE_URL is set
if not DATABASE_URL:
    raise ValueError("DATABASE_URL is not set in the environment variables.")

# Create the database engine
engine = create_engine(DATABASE_URL)

# Test database connection
try:
    connection = engine.connect()
    print("Database connected successfully!")
    connection.close()
except Exception as e:
    print(f"Error connecting to the database: {e}")

# Create session and base
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
