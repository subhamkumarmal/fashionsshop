from .models import Shirt
from rest_framework import serializers

class ShirtSeri(serializers.ModelSerializer):
    class Meta:
        model=Shirt
        fields='__all__'


