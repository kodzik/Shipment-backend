from datetime import date
from django.db import models

class Shipment(models.Model):
    shipment_id = models.AutoField(primary_key=True)
    order_id = models.IntegerField()
    ship_date = models.DateTimeField(auto_now_add=True)#Erase auto
    origin = models.CharField(max_length=100)
    destination = models.CharField(max_length=100)
    customer = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    carrier = models.CharField(max_length=100)
    status = models.CharField(max_length=100)

    def __str__(self):
        return str(self.shipment_id)
