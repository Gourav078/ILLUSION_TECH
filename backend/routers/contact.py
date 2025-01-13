from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import crud, schema
from database import get_db

router = APIRouter(prefix="/contacts", tags=["contacts"])

@router.post("/", response_model=schema.Contact)
def create_contact(contact: schema.ContactCreate, db: Session = Depends(get_db)):
    return crud.create_contact(db=db, contact=contact)

@router.get("/{contact_id}", response_model=schema.Contact)
def read_contact(contact_id: int, db: Session = Depends(get_db)):
    db_contact = crud.get_contact(db, contact_id=contact_id)
    if not db_contact:
        raise HTTPException(status_code=404, detail="Contact not found")
    return db_contact