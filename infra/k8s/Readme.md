## Create JWT Secret in Kubernetes using the commands
```bash
$ kubectl create secret generic jwt-secret --from-literal=JWT_KEY=<JWT_KEY>
```