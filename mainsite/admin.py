from django.contrib import admin
from mainsite.models import *

class CategoryAdmin(admin.ModelAdmin):
    pass
admin.site.register(Category, CategoryAdmin)

class PortfolioAdmin(admin.ModelAdmin):
    filter_horizontal = ('category',)
admin.site.register(Portfolio, PortfolioAdmin)

class DonationAdmin(admin.ModelAdmin):
    list_display = ('donor', 'amount', 'date')
admin.site.register(Donation, DonationAdmin)

class DonorAdmin(admin.ModelAdmin):
    filter_horizontal = ('interest',)
admin.site.register(Donor, DonorAdmin)

# class CatagoryAdmin(admin.ModelAdmin)
    # pass
# admin.site.register(Catagory, StudentAdmin)
