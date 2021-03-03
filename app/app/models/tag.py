from .db import db


class Tag(db.Model):
    __tablename__ = "tags"

    name = db.Column(db.String(50), nullable=False)
    user_id = db.Column(db.Integer,
                        db.ForeignKey('users.id',
                                      onupdate="CASCADE",
                                      ondelete="CASCADE"),
                        nullable=True)

    user = db.relationship("User", back_populates="tag")
