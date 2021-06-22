from django.urls import path
from .views import IndexView,contactform
urlpatterns = [
    path('',IndexView.as_view(),name="home"),
    path('contactform',contactform,name="contact")
]