# -*- coding: utf-8 -*-
"""
Created on Sun Aug 15 16:37:57 2021

@author: 78182
"""
import MySQLdb

from naming import names_map
import json
import pandas as pd
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

def get_bins_pe(df):
    df['log_normal'] = df['SHARES_DILUTED'].apply(lambda x: np.log(x+1))
    df['cut'] = pd.cut(df['log_normal'],bins=100)
    
    
def get_bins(serie,correction_coef):
    q_per_bin = int(len(serie)/100)
    qcut = pd.qcut(df.SHARES_DILUTED,q=int(len(df)/100),retbins=True)
    qcut.dropna(inplace=True)
    mean_range = int(np.mean([q.right-q.left for q in qcut[0]]))