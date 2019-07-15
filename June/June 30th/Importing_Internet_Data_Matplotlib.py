import matplotlib.pyplot as plt
import numpy as np
import urllib.request
import matplotlib.dates as mdates

def graph_data(stock):

    stock_price_url = 'http://chartapi.finance.yahoo.com/instrument/1.0/'+stock+'/chartdata;type=quote;range=10y/csv'

    source_code = urllib.request.urlopen(stock_price_url).read().decode()
    
    stock_data =[]
    split_source = source_code.splt('\n')

    plt.xlabel('x')
    plt.ylabel('y')
    plt.title('Interesting Graph\nCheck it out')
    plt.legend()
    plt.show()

graph_data('TSLA')