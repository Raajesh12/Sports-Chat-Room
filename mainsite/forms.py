from django import forms

class LoginForm(forms.Form):
    username = forms.CharField(label='Username', max_length=50)
    password = forms.CharField(widget=forms.PasswordInput(), label='Password', max_length=50)


class SignUpForm(forms.Form):
    username = forms.CharField(label='Username', max_length=50)

    first_name = forms.CharField(label='FirstName', max_length=50)
    last_name = forms.CharField(label='LastName', max_length=30)
    password = forms.CharField(widget=forms.PasswordInput(), label='Password', max_length=50)
    email = forms.EmailField(label='email',required=False)
    affiliation = forms.CharField(label='affiliation', required=False)

    

    

    
