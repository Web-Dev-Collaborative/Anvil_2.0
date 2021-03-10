from flask import Blueprint, request
from flask_login import login_required, current_user
# import datetime


from app.models import db, File
from app.forms import NewFileForm

file_routes = Blueprint('files', __name__)

def form_errors(validation_errors):
    error_messages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            error_messages.append(f"{field} : {error}")
    return error_messages

@file_routes.route("", methods=['POST'])
@login_required
def create_file():
    form = NewFileForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        file = File(
            name = form.data['name'],
            content = form.data['content'],
            s3_url = form.data['s3_url'],
            folder_id = int(form.data['folder_id']),
            file_type_id = int(form.data['file_type_id']),
        )

        db.session.add(file)
        db.session.commit()
        return file.to_dict()
    return {'errors': form_errors(form.errors)}
