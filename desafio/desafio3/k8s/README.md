## Desafio 03

### Start api

```sh
kubectl apply -f backend-api/deploy.yaml
kubectl expose -f backend-api/deploy.yaml
kubectl port-forward service/backend-api 3000
```

### Start frontend

```sh
kubectl apply -f frontend/deploy.yaml
kubectl expose -f frontend/deploy.yaml
kubectl port-forward service/frontend 3001:3000
```

Acesse: http://localhost:3001
