from .models import *
from rest_framework import serializers
from django.contrib.auth.hashers import make_password


class SoldierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Soldier
        fields = ["id", "username", "password", "first_name", "middle_name", "last_name", "rank", "grade", "pebd", "date_of_rank", "expiration_term_of_service", "section", "team", "role", "acft_score", "m4_qual", "dlc_1_complete", "blc_complete", "dlc_2_complete", "alc_complete", "dlc_3_complete", "slc_complete", "jfo_qualified", "drivers_license", "unit_position"]

    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        validated_data["password"] = make_password(validated_data["password"]) # hashes our password
        return super().create(validated_data)


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'soldier', 'commentor', "category", "comment_text", "date_added"]