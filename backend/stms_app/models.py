from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.contrib.auth.models import (AbstractUser)
from stms_app.utils import assign_unit_position


# Create your models here.
class Soldier(AbstractUser):
    """Detailed Information about each soldier."""

    middle_name = models.CharField(max_length=30, null=True, blank=True)
    rank_choices = [
        ("PVT", "PVT"),
        ("PV2", "PV2"),
        ("PFC", "PFC"),
        ("SPC", "SPC"),
        ("SGT", "SGT"),
        ("SSG", "SSG"),
        ("SFC", "SFC"),
        ("2LT", "2LT"),
        ("1LT", "1LT"),
        ("CPT", "CPT"),
    ]
    rank = models.CharField(max_length=5, choices=rank_choices, null=True, blank=True)
    grade_choices = [
        ("E1", "E1"),
        ("E2", "E2"),
        ("E3", "E3"),
        ("E4", "E4"),
        ("E5", "E5"),
        ("E6", "E6"),
        ("E7", "E7"),
        ("O1", "O1"),
        ("O2", "O2"),
        ("O3", "O3"),
    ]
    grade = models.CharField(max_length=3, choices=grade_choices, null=True, blank=True)
    pebd = models.DateField(auto_now=False, auto_now_add=False, null=True, blank=True)
    date_of_rank = models.DateField(auto_now=False, auto_now_add=False, null=True, blank=True)
    expiration_term_of_service = models.DateField(auto_now=False, auto_now_add=False, null=True, blank=True)
    section_choices = [
        ("BN STAFF", "BN STAFF"),
        ("ALPHA", "ALPHA"),
        ("BRAVO", "BRAVO"),
        ("CHARLIE", "CHARLIE"),
        ("DELTA", "DELTA"),
        ("UNASSIGNED", "UNASSIGNED"),
    ]
    section = models.CharField(
        max_length=10, choices=section_choices, default="UNASSIGNED"
    )
    team_choices = [
        ("HQ", "HQ"),
        ("1", "1"),
        ("2", "2"),
        ("3", "3"),
        ("UNASSIGNED", "UNASSIGNED"),
    ]
    team = models.CharField(max_length=10, choices=team_choices, default="UNASSIGNED")
    role_choices = [
        ("BN FSO", "BN FSO"),
        ("BN FSNCO", "BN FSNCO"),
        ("AFATDS", "AFATDS"),
        ("BN FO", "BN FO"),
        ("BN RTO", "BN RTO"),
        ("CO FSO", "CO FSO"),
        ("CO FSNCO", "CO FSNCO"),
        ("FO", "FO"),
        ("RTO", "RTO"),
        ("UNASSIGNED", "UNASSIGNED"),
    ]
    role = models.CharField(max_length=10, choices=role_choices, default="UNASSIGNED")
    acft_score = models.PositiveIntegerField(
        validators=[MinValueValidator(0), MaxValueValidator(600)], null=True, blank=True
    )
    m4_qual = models.PositiveIntegerField(
        validators=[MinValueValidator(0), MaxValueValidator(40)], null=True, blank=True
    )
    dlc_1_complete = models.BooleanField(default=False, blank=True)
    blc_complete = models.BooleanField(default=False, blank=True)
    dlc_2_complete = models.BooleanField(default=False, blank=True)
    alc_complete = models.BooleanField(default=False, blank=True)
    dlc_3_complete = models.BooleanField(default=False, blank=True)
    slc_complete = models.BooleanField(default=False, blank=True)
    jfo_qualified = models.BooleanField(default=False, blank=True)
    drivers_license = models.BooleanField(default=False, blank=True)
    is_staff = models.BooleanField(default=False, blank=True)
    unit_position = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    def save(self, *args, **kwargs):
        if self.role == "BN FSO" or self.role == "BN FSNCO" or self.role == "CO FSO" or self.role == "CO FSNCO":
            self.is_staff = True
        else:
            self.is_staff = False
        self.unit_position = assign_unit_position(self.section, self.team, self.role)
        super(Soldier, self).save(*args, **kwargs)



class Comment(models.Model):
    """Comments about each team members performance."""

    soldier = models.ForeignKey(Soldier, on_delete=models.CASCADE, related_name="soldier_comments")
    commentor = models.ForeignKey(Soldier, on_delete=models.CASCADE, related_name="commentor_coments")
    category_choices = [
        ("CHARACTER", "CHARACTER"),
        ("PRESENCE", "PRESENCE"),
        ("INTELLECT", "INTELLECT"),
        ("LEADS", "LEADS"),
        ("DEVELOPS", "DEVELOPS"),
        ("ACHIEVES", "ACHIEVES"),
        ("OVERALL", "OVERALL"),
    ]
    category = models.CharField(max_length=10, choices=category_choices)
    comment_text = models.TextField()
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.soldier} {self.category}"
