#%%
import pandas as pd
import json
#%%
rodiny = pd.read_csv('./tools/rodiny.tsv', sep='\t').set_index('orp').to_dict(orient='index')
data = pd.read_csv('./tools/data.tsv', sep='\t')
data.orp = data.orp.apply(lambda x: x.split(' (')[0])
data = data.set_index('orp').to_dict(orient='index')

with open('./tools/orp.json', 'r', encoding='utf-8') as f:
    geo = json.loads(f.read())

#%%
ftrs = []
for feature in geo['features']:
    if feature['properties']['NAZ_ORP'] in data:
        feature['properties'].update(data[feature['properties']['NAZ_ORP']])
        feature['properties'].update(rodiny[feature['properties']['NAZ_ORP']])
        ftrs.append(feature)
    else:
        print('missing ', feature['properties']['NAZ_ORP'])

geo['features'] = ftrs

#%%
with open('./tools/orp_data.json', 'w', encoding='utf-8') as f:
    f.write(json.dumps(geo, ensure_ascii=False))