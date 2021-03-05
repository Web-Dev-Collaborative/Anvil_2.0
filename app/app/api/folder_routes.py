from flask import Blueprint, request
from flask_login import login_required

from app.models import db, Folder
from app.forms import NewFolderForm

folder_routes = Blueprint('folders', __name__)


def form_errors(validation_errors):

    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@folder_routes.route('', methods=['POST'])
@login_required
def create_folder():
    form = NewFolderForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    print(form)
    if form.validate_on_submit():
        folder = Folder(
            name=form.data['name'],
            user_id=int(form.data['user_id']),
            category_id=int(form.data['category_id']),
        )
        db.session.add(folder)
        db.session.commit()
        return folder.to_dict()
    return {'errors': form_errors(form.errors)}
