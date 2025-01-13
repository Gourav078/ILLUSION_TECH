from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import crud, schema
from database import get_db

router = APIRouter(prefix="/workshops", tags=["workshops"])

@router.post("/", response_model=schema.Workshop)
def create_workshop(workshop: schema.WorkshopCreate, db: Session = Depends(get_db)):
    return crud.create_workshop(db=db, workshop=workshop)

@router.get("/{workshop_id}", response_model=schema.Workshop)
def read_workshop(workshop_id: int, db: Session = Depends(get_db)):
    db_workshop = crud.get_workshop(db, workshop_id=workshop_id)
    if not db_workshop:
        raise HTTPException(status_code=404, detail="Workshop not found")
    return db_workshop