# coding: utf-8
import json
import csv
import os

c = 0
_keys = set()
_german = {}
_italian = {}
_english = {}


def main():
  
  with open(os.path.dirname(os.path.realpath(__file__)) + '/bkube.csv', 'rt') as file:
    reader = csv.reader(file)
    for line in reader:
      

      key, german, italian, english, location = line

      if key in _keys:
        print("WARNING: key {} already presented".format(key))

      _keys.add(key)
      _german[key] = german
      _italian[key] = italian
      _english[key] = english

      for fn, m in (
        ('de.tr.js', _german),
        ('it.tr.js', _italian),
        ('en.tr.js', _english),
      ):
        with open(fn, 'wt') as f:
          f.write('export var tr_map  = {};'.format(json.dumps(m, indent=4, ensure_ascii=False)))


if __name__ == "__main__":
  main()