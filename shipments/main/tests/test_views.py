from django.test import TestCase, Client
from django.urls import reverse
from main.models import Shipment

class TestViews(TestCase):

    def setUp(self):
        self.client = Client()
        self.main_url = reverse('shipments')
        self.params_url = reverse('shipments_params', args=['1'])

        Shipment.objects.create(
            order_id= 1,
            origin= "test",
            destination= "test",
            customer= "test",
            type= "test",
            carrier= "test",
            status= "test"
        )

        self.test_data = {
            "order_id": 1,
            "origin": "origin_test_case",
            "destination": "test",
            "customer": "test",
            "type": "test",
            "carrier": "test",
            "status": "test"
        }
        
    def test_list_GET(self):
        response = self.client.get(self.main_url)
        self.assertEquals(response.status_code, 200)

    def test_retrive_GET(self):
        response = self.client.get(self.params_url)
        self.assertEquals(response.status_code, 200)
    
    def test_create_POST(self):
        response = self.client.post(self.main_url, self.test_data)
        created_shipment = Shipment.objects.get(shipment_id=2)
        self.assertEquals(response.status_code, 200)
        self.assertEquals(created_shipment.origin, "origin_test_case")

    def test_create_POST_no_data(self):
        response = self.client.post(self.main_url)
        created_shipment = Shipment.objects.count()
        self.assertEquals(response.status_code, 400)#Bad request
        self.assertEquals(created_shipment, 1)#No additional objects created

    def test_update_PUT(self):
        self.test_data['shipment_id'] = 1
        response = self.client.put(self.params_url, data=self.test_data, content_type='application/json')
        updated_shipment = Shipment.objects.get(shipment_id=1)
        self.assertEquals(response.status_code, 200)
        self.assertEquals(updated_shipment.origin, "origin_test_case")

    def test_delete_DELETE(self):
        response = self.client.delete(self.params_url)
        self.assertEquals(response.status_code, 202)