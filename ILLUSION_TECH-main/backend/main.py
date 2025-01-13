import uvicorn
from database import Base, engine
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import contact, workshop

Base.metadata.create_all(bind=engine)

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

app.include_router(workshop.router)
app.include_router(contact.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the API on port 8001!"}

if __name__ == "__main__":
    uvicorn.run("main:app", host="localhost", port=8001, reload=True)
