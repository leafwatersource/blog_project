from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'blog/index.html')


def error(request,exception):
    from django.shortcuts import render_to_response
    response = render_to_response('blog/404.html',{})  #first/404.html html页面
    response.status_code = 404
    return response


def test(request):
    return render(request,'blog/test.html')