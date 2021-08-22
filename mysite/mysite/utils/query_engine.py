# -*- coding: utf-8 -*-







import mysql.connector
from mysite.utils.naming import names_map
import json
import pandas as pd
import math
import numpy as np

millnames = ['','K','M','B','T']

class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

def millify(n):
    n = float(n)
    millidx = max(0,min(len(millnames)-1,
                        int(math.floor(0 if n == 0 else math.log10(abs(n))/3))))

    return '{:.2f}{}'.format(n / 10**(3 * millidx), millnames[millidx])

def query_from_db(raw_json):
    list_of_filters = json.loads(raw_json)
    

def add_filter(filter_name):
    conn = mysql.connector.connect('localhost','stk','qqwrv!123','stock')
    curs = conn.cursor()
    result = select(names_map['Shares (Diluted)'],conn)


def get_filter_df_from_db(filter_abv):
    #database_conn()
    print(bcolors.OKGREEN + '[QUery_Engine(get_filter_df_from_db)]: ' + bcolors.ENDC + 'Requesting DB')
    conn = mysql.connector.connect(host='localhost',user='stk',password='qqwrv!123',database='stock')
    df = pd.read_sql("""
        SELECT Ticker,{0} FROM financial WHERE Fiscal_Year > '2019-01-01';
        """.format(filter_abv), con=conn)
    print(bcolors.OKGREEN + '[QUery_Engine(get_filter_df_from_db)]: ' + bcolors.ENDC + 'Selected from DB: ' +filter_abv)
    conn.close()
    df.dropna(inplace=True)
    return df

def normalize_for_display(df,filter):
    if filter == 'SHARES_BASIC':
        df['normal'] = df[filter].apply(lambda x: np.log(x+1))
        df['cut'] = pd.cut(df['normal'],bins=100)
    if filter == 'EBITDA':
        offset = df[filter].min() - 50
        df['offset'] = offset
        #df['normal'] = df[filter].apply(lambda x: np.log(x+abs(offset)))
        df['normal'] = df[filter]
        df['cut'] = pd.cut(df['normal'],bins=100)
    if filter == 'EPS_BASIC':
        df['normal'] = df[filter]
        df['cut'] = pd.cut(df['normal'],bins=100)
    
def get_bins(serie,correction_coef):
    q_per_bin = int(len(serie)/100)
    qcut = pd.qcut(df.SHARES_DILUTED,q=int(len(df)/100),retbins=True)
    qcut.dropna(inplace=True)
    mean_range = int(np.mean([q.right-q.left for q in qcut[0]]))


def get_display_histogram_data(serie):
    out, bins = pd.cut(serie,bins=100,retbins=True)
    vc = out.value_counts(sort=False)
    return bins, vc

def get_real_histogram_data(serie):
    out, bins = pd.cut(serie,bins=100,retbins=True)
    vc = out.value_counts(sort=False)
    return bins, vc

def remove_outliers(df):
    if df.columns[1] == 'EBITDA':
        df.dropna(inplace=True)
        lessthan = df['normal'] < np.percentile(df['normal'],85)
        largerthan = df['normal'] > np.percentile(df['normal'],3)
        mask = largerthan * lessthan
        final = df[mask]
        return final
    df.dropna(inplace=True)
    lessthan = df['normal'] < np.percentile(df['normal'],97)
    largerthan = df['normal'] > np.percentile(df['normal'],3)
    mask = largerthan * lessthan
    final = df[mask]
    return final

def generate_histogram_json(bins, vc):
    data = [{'x0':a,'x':a+1,'y':b} for a,b in zip(range(0,100),vc.tolist())]
    js = json.dumps(data)
    return js


def get_bin_mapping(df,real_bins,filter):
    bin_df = pd.DataFrame(real_bins)
    if filter == 'SHARES_BASIC':
        bin_df['real_value'] = bin_df[0].apply(lambda x: np.exp(x) - 1)
    if filter == 'EBITDA':
        #bin_df['real_value'] = bin_df[0].apply(lambda x: np.exp(x) + df['offset'].iloc[0])
        bin_df['real_value'] = bin_df[0]
    if filter == 'EPS_BASIC':
        bin_df['real_value'] = bin_df[0]
    bin_df['readable'] = bin_df['real_value'].apply(lambda x: millify(x))
    return bin_df['readable'].tolist()

def get_filter_data(filter):
    filter_name = names_map[filter]
    print(bcolors.OKGREEN + '[QUery_Engine(get_filter_data)]: ' + bcolors.ENDC + 'The abv. name of the filter requested: ' +filter_name)
    df = get_filter_df_from_db(filter_name)
    map,data = get_display_data(df,filter_name)
    return map,data
    
def get_display_data(df,filter):
    normalize_for_display(df,filter)
    df = remove_outliers(df)
    bins, vc = get_display_histogram_data(df['normal'])
    real_bins, _ = get_real_histogram_data(df['normal'])
    map = json.dumps(get_bin_mapping(df,real_bins,filter))
    data = generate_histogram_json(bins, vc)
    return map,data

'''
def get_filter_data(filter):
    filter_name = names_map[filter]
    print(bcolors.OKGREEN + '[QUery_Engine(get_filter_data)]: ' + bcolors.ENDC + 'The abv. name of the filter requested: ' +filter_name)
    df = get_filter_df_from_db(filter_name)
    #First NormalizeData
    normalize_for_display(df,filter)
    #Then remove outliers
    df = remove_outliers(df)
    #Get data for display
    bins, vc = get_display_histogram_data(df['normal'])
    #Get real data for map
    real_bins, _ = get_real_histogram_data(df['normal'])
    
    map = json.dumps(get_bin_mapping(df,real_bins,filter))
    data = generate_histogram_json(bins, vc)
    return map,data
'''