#%%
import numpy as np
sys.path.append('./tools/')
import jenks
import json

#%%
with open('./tools/orp_data.json', 'r', encoding='utf-8') as f:
    d = json.loads(f.read())

#%%
cuts = {
    'Rodiny v bytové nouzi': ['nouze_rodiny', 'rodin'],
    'Rodiny v ubytovnách': ['ubyt_rodiny', 'rodin'],
    'Rodiny v azylových domech': ['azyl_rodiny', 'rodin'],
    'Osoby bez přístřeší': ['bezdom', 'POCET_OBYV'],
}

#%%
vls = {
    'Rodiny v bytové nouzi': [],
    'Rodiny v ubytovnách': [],
    'Rodiny v azylových domech': [],
    'Osoby bez přístřeší': [],
}
#%%
vls
#%%
for orp in d['features']:
    for cut in cuts:
        vls[cut].append(orp['properties'][cuts[cut][0]] / orp['properties'][cuts[cut][1]])

#%%
breaks = {}
for p in vls:
    casp = jenks.jenksCaspall(vls[p], 6, 3, initStyle='kpp')
    breaks[p] = list(map(lambda x: round(x, 4), casp.breaks))

#%%
breaks

#%%
with open('./js/breaks.js', 'w', encoding='utf-8') as f:
    f.write('export const breaks = ' + json.dumps(breaks, ensure_ascii=False))