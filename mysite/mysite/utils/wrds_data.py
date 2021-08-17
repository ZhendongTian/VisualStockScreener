#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Aug  6 16:19:02 2021

@author: jamestian
"""

#Load up the csv file.
import pandas as pd
df = pd.read_csv('ratios_all.csv')

#Keep wanted columns

#Keep diluted P/E as PE
df['PE'] = df['pe_op_dil']
PE_nan = df[df['PE'].notna()]

df['adate'].astype('int64')
#Keep wanted columns


#Converting dividend yield to numbers
df['divyield_num'] = df['divyield'].str.rstrip('%').astype('float') / 100.0


# =============================================================================
# The dividend yield data is a long tail distribution, with less than 0.2% of the data that's larger than 
# 0.5, those can be comfortably removed.
# =============================================================================
df = df[df['divyield_num'] < 0.2]

# =============================================================================
# Converting adate to Int64, (strange bugs from csv import)
# =============================================================================
df['adate'] = df['adate'].astype('Int64')
df['adate'] = pd.to_datetime(df['DataFrame Column'], format=specify your format)