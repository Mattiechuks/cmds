from django.contrib import admin
from .models import User, Student, Lecturer, Material, Course, Activity, Notification

admin.site.register(User)
admin.site.register(Student)
admin.site.register(Lecturer)
admin.site.register(Material)
admin.site.register(Course)
admin.site.register(Activity)
admin.site.register(Notification)
