#!/bin/bash

> $2

for i in $(seq 1 1000); do
  next=$((i + 1))
  sed "s/__1__/__${next}__/g" $1 >> $2
done
