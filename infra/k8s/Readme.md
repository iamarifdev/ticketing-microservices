## Create JWT Secret in Kubernetes using the commands
```bash
$ kubectl create secret generic jwt-secret --from-literal=JWT_KEY=<JWT_KEY>
```

## Create STRIPE_KEY Secret in Kubernetes using the commands
```bash
$ kubectl create secret generic stripe-secret --from-literal STRIPE_KEY=<STRIPE_KEY>
```