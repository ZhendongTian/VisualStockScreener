from django.shortcuts import render
from django.http import HttpResponse
from json import dumps as jdumps
import json
from time import time as ttime
import sys
from mysite.utils.query_engine import get_filter_data,process_on_criteria_change



def getAllFilters(request):
    names = ['Shares (Basic)','Earnings Per Share, Basic','EBITDA','Return on Equity','Free Cash Flow Per Share']
    all_data = {}
    for n in names:
        dic = {}
        map, data = get_filter_data(n)
        dic['map'] = map
        dic['data'] = data
        all_data[n] = dic
    return HttpResponse(jdumps(all_data), content_type="application/json")


def onCriteriaChange(request):
    criteria = json.loads(request.body)
    response = process_on_criteria_change(criteria)
    return HttpResponse(jdumps(response), content_type="application/json")


def getFilterData(request):
    name = request.GET.get('name')
    map, data = get_filter_data(name)    
    resp = {'map':map,'data':data}
    return HttpResponse(jdumps(resp), content_type="application/json")
