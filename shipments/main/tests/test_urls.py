from django.test import SimpleTestCase
from django.urls import reverse, resolve
from main.views import ShipmentViews

class TestUrls(SimpleTestCase):
    
    def test_ship_url_resolved(self):
        url = reverse('shipments')
        self.assertEquals(resolve(url).func.view_class, ShipmentViews)
    
    def test_ship_url_params_resolved(self):
        url = reverse('shipments_params', args=['1'])
        self.assertEquals(resolve(url).func.view_class, ShipmentViews)