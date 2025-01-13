from sqlalchemy.orm import Session
import models, schema

# Workshop CRUD operations
def get_workshop(db: Session, workshop_id: int):
    return db.query(models.Workshop).filter(models.Workshop.id == workshop_id).first()

def get_workshops(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Workshop).offset(skip).limit(limit).all()

def create_workshop(db: Session, workshop: schema.WorkshopCreate):
    db_workshop = models.Workshop(**workshop.dict())
    db.add(db_workshop)
    db.commit()
    db.refresh(db_workshop)
    return db_workshop

# Contact CRUD operations
def get_contact(db: Session, contact_id: int):
    return db.query(models.Contact).filter(models.Contact.id == contact_id).first()

def get_contacts(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Contact).offset(skip).limit(limit).all()

def create_contact(db: Session, contact: schema.ContactCreate):
    db_contact = models.Contact(**contact.dict())
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    return db_contact