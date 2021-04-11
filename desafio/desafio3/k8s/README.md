## Desafio 03

### Start api

```sh
kubectl apply -f backend/deploy.yaml
kubectl expose -f backend/deploy.yaml
kubectl port-forward service/backend 3000
```

### Start frontend

```sh
kubectl apply -f frontend/deploy.yaml
kubectl expose -f frontend/deploy.yaml
kubectl port-forward service/frontend 3001:3000
```

Acesse: http://localhost:3001
