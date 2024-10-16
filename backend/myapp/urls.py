from django.urls import path
from .views import UserCreateView, LoginView, ProfileView, LecturerListView, StudentListView, MaterialListView, OverviewView, RecentActivityView, NotificationListView, CourseListView, ReportListView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    path('register/', UserCreateView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('profile/', ProfileView.as_view(), name='profile'),
    path('lecturers/', LecturerListView.as_view(), name='lecturers'),
    path('students/', StudentListView.as_view(), name='students'),
    path('materials/', MaterialListView.as_view(), name='materials'),
    path('overview/', OverviewView.as_view(), name='overview'),
    path('recent-activity/', RecentActivityView.as_view(), name='recent-activity'),
    path('notifications/', NotificationListView.as_view(), name='notifications'),
    path('courses/', CourseListView.as_view(), name='courses'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('reports/', ReportListView.as_view(), name='reports'),

]
