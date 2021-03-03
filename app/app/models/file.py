import datetime
from .db import db


class File(db.Model):
    __tablename__ = 'files'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    s3_url = db.Column(db.String(255), nullable=False)
    folder_id = db.Column(db.Integer,
                          db.ForeignKey('folders.id',
                                        onupdate="CASCADE",
                                        ondelete="CASCADE"),
                          nullable=False)
    file_type_id = db.Column(db.Integer,
                             db.ForeignKey('file_type.id',
                                           onupdate="CASCADE",
                                           ondelete="CASCADE"),
                             nullable=False)
    file_tag_id = db.Column(db.Integer,
                            db.ForeignKey('file_tag.id',
                                          onupdate="CASCADE",
                                          ondelete="CASCADE"),
                            nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)

    file_type = db.relationship("FileType", back_populates="file")
    file_tag = db.relationship("FileTag", back_populates="file")
    folder_id = db.relationship("Folder", back_populates="file")
