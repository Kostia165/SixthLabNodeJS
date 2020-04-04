#!/bin/bash

kubectl delete deployment node-deployment
kubectl delete deployment mysql-deployment

kubectl delete service node-service
kubectl delete service mysql-service

kubectl delete ingress node-ingress