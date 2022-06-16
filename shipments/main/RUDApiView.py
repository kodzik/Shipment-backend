from rest_framework.generics import RetrieveUpdateDestroyAPIView
from main.serializers import ShipmentSerializer
from main.models import Shipment

class ShipmentViewsSimplified(RetrieveUpdateDestroyAPIView):
    serializer_class = ShipmentSerializer
    # lookup_url_kwarg = 'id'
    lookup_field = 'shipment_id'
    queryset = Shipment.objects.all()

    def get_queryset(self):

        id = self.request.query_params.get('shipment_id')
        queryset = Shipment.objects.filter(shipment_id=(id))
        return queryset