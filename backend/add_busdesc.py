# -*- coding: utf-8 -*-
"""
Created on Tue Oct 12 22:07:30 2021

@author: 78182
"""
from sqlalchemy import create_engine



def dtype_mapping():
    return {
        'str': 'TEXT',
        'int' : 'INT',
        'float' : 'FLOAT',
        'date' : 'DATE',}
'''
Create a sqlalchemy engine
'''
def mysql_engine(user = 'root', password = 'qqwrv!123', host = '194.163.166.72', port = '3306', database = 'stock'):
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
    
    

create_mysql_tbl_schema(concat, mysql_conn(mysql_engine()), 'stock', 'busdesc')
df_to_mysql(concat, mysql_engine(), 'busdesc')