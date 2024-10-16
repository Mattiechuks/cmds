# Generated by Django 5.1.2 on 2024-10-16 03:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Lecturer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('recent_login', models.DateTimeField()),
                ('recent_upload', models.DateTimeField()),
                ('course_taught', models.CharField(max_length=200)),
                ('interactions', models.IntegerField()),
            ],
        ),
    ]
