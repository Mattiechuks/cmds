from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = [
        ('admin', 'Admin'),
        ('lecturer', 'Lecturer'),
        ('student', 'Student'),
    ]
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='student')

    groups = models.ManyToManyField(
        'auth.Group',
        related_name='myapp_user_set',
        blank=True,
        help_text='The groups this user belongs to.',
        verbose_name='groups',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='myapp_user_set',
        blank=True,
        help_text='Specific permissions for this user.',
        verbose_name='user permissions',
    )

class Student(models.Model):
    name = models.CharField(max_length=100)
    recent_login = models.DateTimeField()
    courses_enrolled = models.IntegerField()
    interactions = models.IntegerField()

    def __str__(self):
        return self.name

class Lecturer(models.Model):
    name = models.CharField(max_length=100)
    recent_login = models.DateTimeField()
    recent_upload = models.DateTimeField()
    course_taught = models.CharField(max_length=200)
    interactions = models.IntegerField()

    def __str__(self):
        return self.name

class Material(models.Model):
    title = models.CharField(max_length=200)
    uploaded_by = models.ForeignKey(Lecturer, on_delete=models.CASCADE)
    upload_date = models.DateTimeField(auto_now_add=True)
    file = models.FileField(upload_to='materials/')

    def __str__(self):
        return self.title


class Activity(models.Model):
    description = models.CharField(max_length=255)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.description


class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.TextField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Notification for {self.user.username}"

class Course(models.Model):
    title = models.CharField(max_length=200)
    lecturer = models.ForeignKey(Lecturer, on_delete=models.CASCADE)
    students = models.ManyToManyField(Student)
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return self.title

class Report(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
