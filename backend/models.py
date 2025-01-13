from sqlalchemy import Column, Integer, String, Text
from database import Base

class Workshop(Base):
    __tablename__ = "workshops"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    phone = Column(String, unique=True,index=True)
    organization = Column(String, index=True)
    reason = Column(Text)

class Contact(Base):
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    phone = Column(String, unique=True,index=True)
    message = Column(Text)