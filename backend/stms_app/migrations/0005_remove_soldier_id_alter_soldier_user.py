# Generated by Django 4.0.4 on 2022-05-29 02:29

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('stms_app', '0004_alter_soldier_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='soldier',
            name='id',
        ),
        migrations.AlterField(
            model_name='soldier',
            name='user',
            field=models.OneToOneField(default=1, on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]
