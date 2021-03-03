from flask.cli import AppGroup
from .users import seed_users, undo_users
from .tags import seed_tags, undo_tags
from .categories import seed_categories, undo_categories

seed_commands = AppGroup('seed')


@seed_commands.command('all')
def seed():
    seed_users()
    seed_tags()
    seed_categories()


@seed_commands.command('undo')
def undo():
    undo_users()
    undo_tags()
    undo_categories()
