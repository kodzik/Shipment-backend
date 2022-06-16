from django.urls import path
from main.views import ShipmentViews
from main.RUDApiView import ShipmentViewsSimplified

urlpatterns = [
    path('shipments/', ShipmentViews.as_view(), name="shipments" ),
    path('shipments/<int:pk>', ShipmentViews.as_view(), name="shipments_params" ),
    # path('shipments/', ShipmentViewsSimplified.as_view(), name="shipments" ),
    # path('shipments/<int:shipment_id>', ShipmentViewsSimplified.as_view(), name="shipments_params" ),
]