#!/bin/bash

#create deployment
kubectl create -f .\\deployment\\deployment.yaml
kubectl create -f .\\database\\deployment\\deployment.yaml

#create service
kubectl create -f .\\deployment\\service.yaml
kubectl create -f .\\database\\deployment\\service.yaml

#create ingress
kubectl create -f .\\deployment\\ingress.yaml