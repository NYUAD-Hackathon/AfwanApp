from django.conf.urls import patterns, include, url
from django.contrib import admin
# from jsonRequest.models import User

urlpatterns = patterns('',
                       # Examples:
                       # url(r'^$', 'server.views.home', name='home'),
                       # url(r'^blog/', include('blog.urls')),
                       # url(r'^$', views.index, name='index'),
                       url(r'unsolved/list/', 'jsonRequest.views.getUnsolved'),
                       url(r'req/ans/(?P<id>\d+)', 'jsonRequest.views.reqAns'),
                       url(r'res/check/', 'jsonRequest.views.resCheck'),

                       url(r'res/', 'jsonRequest.views.postRes'),
                       url(r'req/', 'jsonRequest.views.postReq'),
                       url(r'^admin/', include(admin.site.urls)),
                       url(r'^user/(?P<id>\d+)',
                           'jsonRequest.views.getUser')
                       )
