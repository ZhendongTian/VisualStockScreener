# -*- coding: utf-8 -*-
"""
Created on Sun Aug 15 16:43:12 2021

@author: 78182
"""

#08/18/2021
in_use_mapping = {'Shares (Basic)': 'SHARES_BASIC',
'Earnings Per Share, Basic': 'EPS_BASIC',
'EBITDA': 'EBITDA',
'Return on Equity': 'ROE',
'Free Cash Flow Per Share': 'FCF_PS',
}

names_map = {'Shares (Basic)': 'SHARES_BASIC',
 'Shares (Diluted)': 'SHARES_DILUTED',
 'Cash, Cash Equivalents & Short Term Investments': 'CASH_EQUIV_ST_INVEST',
 'Cash & Cash Equivalents': 'CASH_EQUIV',
 'Short Term Investments': 'ST_INVEST',
 'Accounts & Notes Receivable': 'ACC_NOTES_RECV',
 'Accounts Receivable, Net': 'ACC_RECV_NET',
 'Inventories': 'INVENTORIES',
 'Other Short Term Assets': 'OTHER_ST_ASSETS',
 'Prepaid Expenses': 'PREPAID_EXPENSES',
 'Deferred Tax Assets (Short Term)': 'DEF_TAX_ASSETS_ST',
 'Misc. Short Term Assets': 'MISC_ST_ASSETS',
 'Total Current Assets': 'TOTAL_CUR_ASSETS',
 'Property, Plant & Equipment, Net': 'PPE_NET',
 'Property, Plant & Equipment': 'PPE',
 'Long Term Investments & Receivables': 'LT_INVEST_RECV',
 'Other Long Term Assets': 'OTHER_LT_ASSETS',
 'Intangible Assets': 'INTANGIBLES',
 'Goodwill': 'GOODWILL',
 'Deferred Tax Assets (Long Term)': 'DEF_TAX_ASSETS_LT',
 'Misc. Long Term Assets': 'MISC_LT_ASSETS',
 'Total Noncurrent Assets': 'TOTAL_NONCUR_ASSETS',
 'Total Assets': 'TOTAL_ASSETS',
 'Payables & Accruals': 'PAYABLES_ACCRUALS',
 'Accounts Payable': 'ACCOUNTS_PAYABLE',
 'Accrued Taxes': 'ACCRUED_TAXES',
 'Other Payables & Accruals': 'OTHER_PAYABLES',
 'Short Term Debt': 'ST_DEBT',
 'Other Short Term Liabilities': 'OTHER_ST_LIAB',
 'Deferred Revenue (Short Term)': 'DEF_REVENUE_ST',
 'Misc. Short Term Liabilities': 'MISC_ST_LIAB',
 'Total Current Liabilities': 'TOTAL_CUR_LIAB',
 'Long Term Debt': 'LT_DEBT',
 'Other Long Term Liabilities': 'OTHER_LT_LIAB',
 'Deferred Tax Liabilities (Long Term)': 'DEF_TAX_LIAB_LT',
 'Misc. Long Term Liabilities': 'MISC_LT_LIAB',
 'Total Noncurrent Liabilities': 'TOTAL_NONCUR_LIAB',
 'Total Liabilities': 'TOTAL_LIAB',
 'Preferred Equity': 'PREFERRED_EQUITY',
 'Share Capital & Additional Paid-In Capital': 'SHARE_CAPITAL_ADD',
 'Treasury Stock': 'TREASURY_STOCK',
 'Retained Earnings': 'RETAINED_EARNINGS',
 'Other Equity': 'OTHER_EQUITY',
 'Equity Before Minority Interest': 'EQUITY_BEFORE_MINORITY',
 'Total Equity': 'TOTAL_EQUITY',
 'Total Liabilities & Equity': 'TOTAL_LIAB_EQUITY',
 'Net Income/Starting Line': 'NET_INCOME_START',
 'Non-Cash Items': 'NON_CASH_ITEMS',
 'Change in Working Capital': 'CHG_WORKING_CAPITAL',
 'Net Cash from Operating Activities': 'NET_CASH_OPS',
 'Change in Fixed Assets & Intangibles': 'CAPEX',
 'Acquisition of Fixed Assets & Intangibles': 'ACQ_FIX_ASSETS_INT',
 'Net Change in Long Term Investment': 'NET_CHG_LT_INVEST',
 'Net Cash from Acquisitions & Divestitures': 'NET_CASH_ACQ_DIVEST',
 'Other Investing Activities': 'OTHER_INVEST_ACT',
 'Net Cash from Investing Activities': 'NET_CASH_INV',
 'Dividends Paid': 'DIVIDENDS_PAID',
 'Cash from (Repayment of) Debt': 'CASH_REPAY_DEBT',
 'Cash from (Repurchase of) Equity': 'CASH_REPURCHASE_EQUITY',
 'Increase in Capital Stock': 'INCR_CAPITAL_STOCK',
 'Decrease in Capital Stock': 'DECR_CAPITAL_STOCK',
 'Other Financing Activities': 'OTHER_FIN_ACT',
 'Net Cash from Financing Activities': 'NET_CASH_FIN',
 'Net Cash Before Disc. Operations and FX': 'NET_CASH_BEFORE_DISCOP_FX',
 'Net Cash Before FX': 'NET_CASH_BEFORE_FX',
 'Effect of Foreign Exchange Rates': 'EFFECT_FX_RATES',
 'Net Change in Cash': 'NET_CHG_CASH',
 'EBITDA': 'EBITDA',
 'Total Debt': 'TOTAL_DEBT',
 'Free Cash Flow': 'FCF',
 'Gross Profit Margin': 'GROSS_PROFIT_MARGIN',
 'Operating Margin': 'OP_MARGIN',
 'Net Profit Margin': 'NET_PROFIT_MARGIN',
 'Return on Equity': 'ROE',
 'Return on Assets': 'ROA',
 'Free Cash Flow to Net Income': 'FCF_NET_INCOME',
 'Current Ratio': 'CURRENT_RATIO',
 'Liabilities to Equity Ratio': 'LIABILITIES_EQUITY',
 'Debt Ratio': 'DEBT_RATIO',
 'Earnings Per Share, Basic': 'EPS_BASIC',
 'Earnings Per Share, Diluted': 'EPS_DILUTED',
 'Sales Per Share': 'SPS',
 'Equity Per Share': 'EQ_PS',
 'Free Cash Flow Per Share': 'FCF_PS',
 'Dividends Per Share': 'DPS',
 'Pietroski F-Score': 'PIETROSKI',
 'Revenue': 'REVENUE',
 'Cost of Revenue': 'COST_REVENUE',
 'Gross Profit': 'GROSS_PROFIT',
 'Operating Expenses': 'OPERATING_EXPENSES',
 'Selling, General & Administrative': 'SELLING_GEN_ADMIN',
 'Research & Development': 'RD',
 'Depreciation & Amortization': 'DEPR_AMOR',
 'Other Operating Expenses': 'OTHER_OP_EXPENSE',
 'Operating Income (Loss)': 'OPERATING_INCOME',
 'Non-Operating Income (Loss)': 'NON_OPERATING_INCOME',
 'Interest Expense, Net': 'INTEREST_EXP_NET',
 'Other Non-Operating Income (Loss)': 'OTHER_NON_OP_INCOME',
 'Pretax Income (Loss), Adj.': 'PRETAX_INCOME_LOSS_ADJ',
 'Abnormal Gains (Losses)': 'ABNORM_GAIN_LOSS',
 'Pretax Income (Loss)': 'PRETAX_INCOME_LOSS',
 'Income Tax (Expense) Benefit, Net': 'INCOME_TAX',
 'Income (Loss) from Continuing Operations': 'INCOME_CONT_OP',
 'Income (Loss) Incl. Minority Interest': 'INCOME_INCL_MINORITY',
 'Net Income': 'NET_INCOME',
 'Net Income (Common)': 'NET_INCOME_COMMON',
 'Fiscal Year': 'Fiscal_Year',
 'Report Date': 'Report_Date'}
