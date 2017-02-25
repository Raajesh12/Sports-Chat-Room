from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=5000)
    amount_raised = models.FloatField(default=0)


    # def getThreePopular(self):
        # l = []
        # return l

    def __str__(self):
        return self.name

class Donor(models.Model):
    username = models.OneToOneField(User, on_delete=models.CASCADE, limit_choices_to = {'is_staff':False})

    first_name = models.CharField('FirstName', max_length=40)
    last_name = models.CharField('LastName', max_length=40)
    email = models.EmailField(blank=True)
    phone = models.CharField(max_length=20, blank=True)
    interest = models.ManyToManyField(Category)
    affiliation = models.CharField(max_length=100)

    def getDonation(self):
        dict_data = {}

        # query all the donations made by this user and add them up for display
        # potentially cache this in a non relational database
        for donation in self.donation_set.all():
            for catagory in donation.catagory_set.all: 
                if catagory.name not in dict_cata:
                    dict_data[catagory.name] = donation.amount
                else:
                    dict_data[catagory.name] += donation.amount
            

    def __str__(self):
        return "{}, {}".format(self.last_name, self.first_name)



# class Organization(models.Model):
    # name = models.CharField(max_length=100)
    # description = models.TextField(max_length=5000)
    # # staff maybe


class Portfolio(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=5000)
    category = models.ManyToManyField(Category)
    img = models.CharField(max_length=500, blank=True, default="")

    # TODO add this line with correct method call
    # image = models.UploadField()

    def __str__(self):
        return self.name


class Donation(models.Model):
    donor = models.ForeignKey(Donor)

    portfolio = models.ForeignKey(Portfolio)
    amount = models.FloatField()
    date = models.DateField()
    honor = models.TextField(max_length = 1000)
    usage = models.TextField(max_length = 1000, blank=True, default="")

    # TODO revise to change of the recurrence
    recurrence = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return "{} from {} to {}".format(self.amount, self.donor, self.portfolio)

    # TODO override the save method to automatically update the total amount of a portfolio
