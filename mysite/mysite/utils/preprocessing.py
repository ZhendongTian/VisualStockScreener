# -*- coding: utf-8 -*-
"""
Created on Sat Aug 14 10:50:13 2021

@author: 78182
"""

from collections import Counter
from sqlalchemy import create_engine
def majority(arr):
  
    # convert array into dictionary
    freqDict = Counter(arr)
  
    # traverse dictionary and check majority element
    size = len(arr)
    for (key,val) in freqDict.items():
         if (val > (size/2)):
             return key
    print('None')



import pandas as pd
annual_balance = pd.read_csv('us-balance-annual-full-asreported.csv',sep=';')
annual_balance['Report Date'] = pd.to_datetime(annual_balance['Report Date'], format='%Y-%m-%d').dt.date
annual_balance['Fiscal Year'] = pd.to_datetime(annual_balance['Fiscal Year'], format='%Y').dt.date

annual_cashflow = pd.read_csv('us-cashflow-annual-full-asreported.csv',sep=';')
annual_cashflow['Report Date'] = pd.to_datetime(annual_cashflow['Report Date'], format='%Y-%m-%d').dt.date
annual_cashflow['Fiscal Year'] = pd.to_datetime(annual_cashflow['Fiscal Year'], format='%Y').dt.date
annual_cashflow.drop('Net Income',axis=1,inplace=True)
annual_cashflow.drop('Depreciation & Amortization',axis=1,inplace=True)

annual_derived = pd.read_csv('us-derived-annual-asreported.csv',sep=';')
annual_derived['Report Date'] = pd.to_datetime(annual_derived['Report Date'], format='%Y-%m-%d').dt.date
annual_derived['Fiscal Year'] = pd.to_datetime(annual_derived['Fiscal Year'], format='%Y').dt.date

annual_income = pd.read_csv('us-income-annual-full-asreported.csv',sep=';')
annual_income['Report Date'] = pd.to_datetime(annual_income['Report Date'], format='%Y-%m-%d').dt.date
annual_income['Fiscal Year'] = pd.to_datetime(annual_income['Fiscal Year'], format='%Y').dt.date


concat = pd.concat([annual_balance,annual_cashflow,annual_derived,annual_income],axis=1)
concat = concat.T.drop_duplicates().T

concat.drop('Source',axis=1,inplace=True)
concat.drop('Publish Date',axis=1,inplace=True) 
concat.drop('Restated Date',axis=1,inplace=True)
concat.drop('Fiscal Period',axis=1,inplace=True)
concat.drop('Minority Interest',axis=1,inplace=True)
concat.drop('Other Adjustments',axis=1,inplace=True)
concat.drop('Unbilled Revenues',axis=1,inplace=True)
concat.drop('Notes Receivable, Net',axis=1,inplace=True)
concat.dropna(thresh=5000,axis=1,inplace=True)
concat = concat.where(pd.notnull(concat), None)


from tqdm import tqdm
from simfin import names
all_cols = list(concat.columns)[5:]
all_vars = vars(names)
l_of_abvs = []
for col in tqdm(all_cols):
    found = False
    for abv,full in all_vars.items():
        if full == col:
            l_of_abvs.append(abv)
            found = True
            break
    if found == False:
        print('not found',col)

new_names = {o:n for o,n in zip(all_cols,l_of_abvs)}
new_names['Fiscal Year'] = 'Fiscal_Year'
new_names['Report Date'] = 'Report_Date'
concat.rename(columns=new_names,inplace=True)

'''
Create a mapping of df dtypes to mysql data types (not perfect, but close enough)
'''
def dtype_mapping():
    return {
        'str': 'TEXT',
        'int' : 'INT',
        'float' : 'FLOAT',
        'date' : 'DATE',}
'''
Create a sqlalchemy engine
'''
def mysql_engine(user = 'stk', password = 'qqwrv!123', host = '194.163.166.72', port = '3306', database = 'stock'):
    engine = create_engine("mysql://{0}:{1}@{2}:{3}/{4}?charset=utf8".format(user, password, host, port, database))
    return engine

'''
Create a mysql connection from sqlalchemy engine
'''
def mysql_conn(engine):
    conn = engine.raw_connection()
    return conn
'''
Create sql input for table names and types
'''
def gen_tbl_cols_sql(df):
    dmap = dtype_mapping()
    sql = "id INT AUTO_INCREMENT PRIMARY KEY"
    df1 = df.rename(columns = {"" : "nocolname"})
    hdrs = df1.dtypes.index
    hdrs_list = [(hdr, majority([type(item).__name__ for item in df1[hdr].dropna().sample(200).tolist()])) for hdr in hdrs]
    for i, hl in enumerate(hdrs_list):
        sql += " ,{0} {1}".format(hl[0], dmap[hl[1]])
    return sql

'''
Create a mysql table from a df
'''
def create_mysql_tbl_schema(df, conn, db, tbl_name):
    tbl_cols_sql = gen_tbl_cols_sql(df)
    sql = "USE {0}; CREATE TABLE {1} ({2})".format(db, tbl_name, tbl_cols_sql)
    cur = conn.cursor()
    cur.execute(sql)
    cur.close()
    conn.commit()

'''
Write df data to newly create mysql table
'''
def df_to_mysql(df, engine, tbl_name):
    df.to_sql(tbl_name, engine, if_exists='replace')


create_mysql_tbl_schema(concat, mysql_conn(mysql_engine()), 'stock', 'financial')
df_to_mysql(concat, mysql_engine(), 'financial')