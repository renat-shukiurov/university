#!/usr/bin/env python
"""generate.py"""

import sys
import numpy as np

for line in sys.stdin:
    line = line.strip()
    n, m = [int(i) for i in line.split()]

x = np.random.randn(n, m)
for xi in x:
    print(xi[0], xi[1])
