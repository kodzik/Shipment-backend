from django.urls import path
from main.views import ShipmentViews

urlpatterns = [
    path('shipments/', ShipmentViews.as_view() ),
]