from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from main.models import Shipment
from main.serializers import ShipmentSerializer

# Create your views here.
class ShipmentViews(APIView):
    def get(self, request, id=None):
        if id:
            item = Shipment.objects.get(id=id)
            serializer = ShipmentSerializer(item)
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)

        items = Shipment.objects.all()
        serializer = ShipmentSerializer(items, many=True)
        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)

    # def post(self, request):
    #     permission_classes = (IsAuthenticated,)

    #     serializer = CommentSerializer(data=request.data) #user=request.user
    #     print("Serializer initial_data:",serializer.initial_data)
        
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
    #     else:
    #         return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)