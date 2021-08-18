# -*- coding: utf-8 -*-







import MySQLdb

from mysite.utils.naming import names_map
import json
import pandas as pd
import math

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
    conn = MySQLdb.connect('194.163.166.72','stk','qqwrv!123','stock')
    curs = conn.cursor()
    result = select(names_map['Shares (Diluted)'],conn)


def select(filter_abv,conn):
    #database_conn()
    print ("inside select")    
    filter_abv = names_map['Shares (Diluted)']
    df = pd.read_sql("""
        SELECT Ticker,{0} FROM financial WHERE Fiscal_Year > '2019-01-01';
        """.format(filter_abv), con=conn)

    result = df

    return result

def get_bins_SHARES_DILUTED(df):
    df['log_normal'] = df['SHARES_DILUTED'].apply(lambda x: np.log(x+1))
    df['cut'] = pd.cut(df['log_normal'],bins=100)
    
    
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

def generate_histogram_json(bins, vc):
    data = [{'x0':a,'x':a+1,'y':b} for a,b in zip(range(0,100),vc.tolist())]
    js = json.dumps(data)
    js = "{" + js + "}"
    
def remove_outliers(serie):
    serie.dropna(inplace=True)
    lessthan = serie < np.percentile(serie,97)
    largerthan = serie > np.percentile(serie,3)
    mask = largerthan * lessthan
    final = serie[mask]
    return final

def generate_histogram_json(bins, vc):
    data = [{'x0':a,'x':a+1,'y':b} for a,b in zip(range(0,100),vc.tolist())]
    js = json.dumps(data)
    js = "{" + js + "}"
    return js


def get_bin_mapping(real_bins):
    bin_df = pd.DataFrame(real_bins)
    bin_df['real_value'] = bin_df[0].apply(lambda x: np.exp(x) - 1)
    bin_df['readable'] = bin_df['real_value'].apply(lambda x: millify(x))
    return bin_df['readable'].tolist()

def get_filter_data(filter):
    print(bcolors.OKGREEN + '{[QUery_Engine]: ' + bcolors.ENDC + 'The name of the filter requested' +filter + bcolors.OKGREEN + '}' + bcolors.ENDC)
    return 0,0
    
