from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from main.models import Shipment
from main.serializers import ShipmentSerializer


class ShipmentViews(APIView):
    def get(self, request, pk=None):
        if pk:
            shipment = Shipment.objects.filter(pk=pk)
            if shipment: 
                serializer = ShipmentSerializer(shipment, many=True)
                data = serializer.data
                return Response(data[0])
            else:
                return Response(status=status.HTTP_404_NOT_FOUND)
        else:
            items = Shipment.objects.all()

        if items:
            serializer = ShipmentSerializer(items, many=True)
            data = serializer.data
            return Response(data)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def post(self, request):
        serializer = ShipmentSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        item = Shipment.objects.get(pk=pk)
        data = ShipmentSerializer(instance=item, data=request.data)
    
        if data.is_valid():
            data.save()
            return Response(data.data)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        item = get_object_or_404(Shipment, pk=pk)
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
