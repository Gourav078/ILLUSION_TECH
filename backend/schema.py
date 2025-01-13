from pydantic import BaseModel

class WorkshopBase(BaseModel):
    name: str
    email: str
    phone: str
    organization: str
    reason: str

class WorkshopCreate(WorkshopBase):
    pass

class Workshop(WorkshopBase):
    id: int

    class Config:
        orm_mode = True

class ContactBase(BaseModel):
    name: str
    email: str
    phone: str
    message: str

class ContactCreate(ContactBase):
    pass

class Contact(ContactBase):
    id: int

    class Config:
        orm_mode = True