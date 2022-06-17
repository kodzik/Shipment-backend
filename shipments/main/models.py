from django.db import models


class Address(models.Model):
    street_name = models.CharField(max_length=100)
    street_number = models.IntegerField()
    building_number = models.IntegerField()
    city = models.CharField(max_length=100)
    postcode = models.CharField(max_length=5)
    country = models.CharField(max_length=100)


class Customer(models.Model):
    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    address = models.ForeignKey(Address, on_delete=models.CASCADE)
    email = models.EmailField(max_length = 254)

    def __str__(self):
        return str(self.id)

class Shipment(models.Model):
    shipment_id = models.AutoField(primary_key=True)
    order_id = models.IntegerField()
    ship_date = models.DateTimeField(auto_now_add=True)
    origin = models.CharField(max_length=100)
    destination = models.CharField(max_length=100)
    # customer = models.ManyToManyField(Customer)
    customer = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    carrier = models.CharField(max_length=100)
    status = models.CharField(max_length=100)

    def __str__(self):
        return str(self.shipment_id)
