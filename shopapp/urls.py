from django.urls import path,include
from .views import IndexPage,ViewSetsVeiw,LoginRegister
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register('',ViewSetsVeiw)
urlpatterns=[
    path('',IndexPage,name='index'),
    path('addshirt/',include(router.urls)),
    path('logreg/<int:pk>/',LoginRegister,name='loginregister')

] + static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)