from django.conf.urls import url, include
from mainsite import views

urlpatterns = [
    url(r'^$', views.home, name='HomePage'),
    url(r'^forum/', include('forum.urls')),
    url(r'^login/', views.login, name='LoginPage'),
    url(r'^logout/', views.logout, name='LogOut'),
    url(r'^signup/', views.signup, name='SignUp'),
    url(r'^profile/', views.user_profile, name='Profile'),
]
