#!/usr/bin/env python
"""claster.py"""

import sys
import numpy as np

num_cluster = 3
iterations = 3
x = []

for line in sys.stdin:
    line = line.strip()
    x.append([float(i) for i in line.split()])

x = np.array(x)
N = len(x)
y = np.zeros(N)

for t in range(iterations):
    if t == 0:
        index_ = np.random.choice(range(N),num_cluster,replace=False)
        mean = x[index_]
    else:
        for k in range(num_cluster):
            mean[k] = np.mean(x[y==k], axis=0)
    for i in range(N):
        dist = np.sum((mean - x[i])**2, axis=1)
        pred = np.argmin(dist)
        y[i] = pred

print(y)
