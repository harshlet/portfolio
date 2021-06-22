from django.contrib.admin.options import csrf_protect_m
from django.shortcuts import render
from django.views.generic import TemplateView
from .models import skill,Project,ContactForm
from django.http import JsonResponse
# Create your views here.

class IndexView(TemplateView):
    template_name="index.html"

    def get_context_data(self,*args,**kwargs) :
        context = super().get_context_data(**kwargs)
        sk = skill.objects.all()
        pr = Project.objects.all()
        context['project'] = pr
        context['skill'] = sk
        return context

def contactform(request):
    if request.method == "POST":
        contactno = request.POST.get("contactno")
        email = request.POST.get("email")
        name = request.POST.get("name")
        comments = request.POST.get("comments")
        print(request.POST)
        c = ContactForm(contactno = contactno,email = email,name=name,comments=comments)
        c.save()
        res = {}
        res['suc'] = True
        res['email'] = email
        return JsonResponse(res)
    else:
        res = {}
        res['suc'] = False
        return JsonResponse(res)



