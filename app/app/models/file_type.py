from .db import db


class FileType(db.Model):
    __tablename__ = "file_type"

    name = db.Column(db.String(50), nullable=False)

    file = db.relationship("File", back_populates="file_type")
