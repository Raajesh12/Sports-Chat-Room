from django.test import TestCase
from .models import *


# Create your tests here.
class PortfolioTest(TestCase):
    def setUp(self):
        Portfolio()

    def test_portfolio_to_str(self):
        port = Portfolio()

        port.name = "Women's Fund"
        name = Portfolio.__str__(port)
        self.assertEqual(self, name, "Women's Fund", msg="Failed: names don't match!")

        port.name = "UIUC memes for underfunded teens"
        name = Portfolio.__str__(port)
        self.assertEqual(self, name, "UIUC memes for underfunded teens", msg="Failed: names don't match!")

        port.name = ""
        name = Portfolio.__str__(port)
        self.assertEqual(self, name, "", msg="Failed: names don't match!")

        port.name = "\n"
        name = Portfolio.__str__(port)
        self.assertEqual(self, name, "\n", msg="Failed: names don't match!")


class CategoryTest(TestCase):
    def setUp(self):
        Category()

    def test_category_to_str(self):
        cat = Category()

        cat.name = "Underprivileged Youth"
        name = Category.__str__(cat)
        self.assertEqual(self, name, "Underprivileged Youth", msg="Failed: names don't match!")

        cat.name = "Meowser"
        name = Category.__str__(cat)
        self.assertEqual(self, name, "Meowser", msg="Failed: names don't match!")

        cat.name = ""
        name = Category.__str__(cat)
        self.assertEqual(self, name, "", msg="Failed: names don't match!")

        cat.name = "\n"
        name = Category.__str__(cat)
        self.assertEqual(self, name, "\n", msg="Failed: names don't match!")


class DonorTest(TestCase):
    def setUp(self):
        Donor()

    def test_donor_to_str(self):
        don = Donor()

        don.first_name = "tron"
        don.last_name = ""
        name = Donor.__str__(don)
        self.assertEqual(self, name, "tron", msg="Failed: names don't match!")

        don.first_name = "Illinois budget... oh wait, lol jk"
        don.last_name = ""
        name = Donor.__str__(don)
        self.assertEqual(self, name, "Illinois budget... oh wait, lol jk", msg="Failed: names don't match!")

        don.first_name = ""
        don.last_name = ""
        name = Donor.__str__(don)
        self.assertEqual(self, name, "", msg="Failed: names don't match!")

        don.first_name = "\n"
        don.last_name = ""
        name = Donor.__str__(don)
        self.assertEqual(self, name, "\n", msg="Failed: names don't match!")


class DonationTest(TestCase):
    def setUp(self):
        DonationTest()

    def test_donation_to_str(self):
        donate = DonationTest()

        donate.name = "Monies"
        name = Donation.__str__(donate)
        self.assertEqual(self, name, "Monies", msg="Failed: names don't match!")

        donate.name = "memes for the ppl who need them most"
        name = Donation.__str__(donate)
        self.assertEqual(self, name, "memes for the ppl who need them most", msg="Failed: names don't match!")

        donate.name = ""
        name = Donation.__str__(donate)
        self.assertEqual(self, name, "", msg="Failed: names don't match!")

        donate.name = "\n"
        name = Donation.__str__(donate)
        self.assertEqual(self, name, "\n", msg="Failed: names don't match!")