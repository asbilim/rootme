from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from listings.views import home
urlpatterns = [
    path('', home),
]
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)