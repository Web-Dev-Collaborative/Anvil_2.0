from .db import db


class FileTag(db.Model):
    __tablename__ = "file_tag"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)

    file = db.relationship("File", back_populates="file_tag")
