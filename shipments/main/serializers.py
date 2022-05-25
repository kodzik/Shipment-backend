from rest_framework import serializers
from .models import Shipment

class ShipmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Shipment
        fields = ('shipment_id', 'order_id', 'ship_date', 'origin', 'destination', 'customer', 'type', 'carrier', 'status')