# myapp/views.py
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from django.contrib.auth import authenticate
from .models import User, Student, Lecturer, Material, Activity, Notification, Course, Report
from .serializers import UserSerializer, StudentSerializer, LecturerSerializer, MaterialSerializer, ActivitySerializer, NotificationSerializer, CourseSerializer, ReportSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.db.models import Count
from .middleware import role_required


class UserCreateView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        data = request.data
        user = User(username=data['username'], email=data['email'], role=data['role'])
        user.set_password(data['password'])
        user.save()
        return Response(UserSerializer(user).data, status=HTTP_201_CREATED)

class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        data = request.data
        username = data.get('username')
        password = data.get('password')
        user = authenticate(username=username, password=password)
        if user:
            refresh = RefreshToken.for_user(user)
            return Response({'refresh': str(refresh), 'access': str(refresh.access_token)}, status=HTTP_200_OK)
        return Response({"detail": "Invalid credentials"}, status=HTTP_400_BAD_REQUEST)

class ProfileView(generics.RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user

class LecturerListView(APIView):
    @role_required('admin')
    def get(self, request, *args, **kwargs):
        lecturers = Lecturer.objects.all()
        serializer = LecturerSerializer(lecturers, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

class StudentListView(APIView):
    @role_required('admin')
    def get(self, request, *args, **kwargs):
        students = Student.objects.all()
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

class MaterialListView(APIView):
    def get(self, request, *args, **kwargs):
        materials = Material.objects.all()
        serializer = MaterialSerializer(materials, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

class OverviewView(APIView):
    def get(self, request, *args, **kwargs):
        total_students = Student.objects.count()
        total_lecturers = Lecturer.objects.count()
        total_materials = Material.objects.count()
        total_interactions = (
            Student.objects.aggregate(total_interactions=Count('interactions'))['total_interactions'] +
            Lecturer.objects.aggregate(total_interactions=Count('interactions'))['total_interactions']
        )
        data = {
            'totalStudents': total_students,
            'totalLecturers': total_lecturers,
            'totalMaterials': total_materials,
            'totalInteractions': total_interactions,
        }
        return Response(data, status=HTTP_200_OK)

class RecentActivityView(APIView):
    def get(self, request, *args, **kwargs):
        activities = Activity.objects.all().order_by('-date')[:10]
        serializer = ActivitySerializer(activities, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

class NotificationListView(APIView):
    def get(self, request, *args, **kwargs):
        notifications = Notification.objects.all()
        serializer = NotificationSerializer(notifications, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

class CourseListView(APIView):
    def get(self, request, *args, **kwargs):
        courses = Course.objects.all()
        serializer = CourseSerializer(courses, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

class ReportListView(APIView):
    def get(self, request, *args, **kwargs):
        reports = Report.objects.all()
        serializer = ReportSerializer(reports, many=True)
        return Response(serializer.data, status=HTTP_200_OK)
