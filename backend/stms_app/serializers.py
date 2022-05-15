from .models import *
from rest_framework import serializers
from django.contrib.auth.hashers import make_password



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", 'password']

    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        validated_data["password"] = make_password(validated_data["password"]) # hashes our password
        return super().create(validated_data)


class SoldierSerializer(serializers.ModelSerializer):
    user= UserSerializer(read_only=True)
    class Meta:
        model = Soldier
        fields = ["id", "user", "first_name", "middle_name", "last_name", "rank", "grade", "pebd", "date_of_rank", "expiration_term_of_service", "section", "team", "role", "acft_score", "m4_qual", "dlc_1_complete", "blc_complete", "dlc_2_complete", "alc_complete", "dlc_3_complete", "slc_complete", "jfo_qualified", "drivers_license"]

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'soldier', 'commentor', "category", "comment_text","date_added"]