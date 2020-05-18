#!/bin/bash

SCRIPTNAME=`realpath $0`
BUILDPATH=`dirname $SCRIPTNAME`
CODEPATH=`dirname $BUILDPATH`

cd $CODEPATH

echo "===== Construyendo sitio ====="

yarn build

echo "===== Construyendo imagen de docker ====="

mv build/ docker/site

cd $BUILDPATH

docker build -t nginx-react:latest .

echo "===== Imagen construida. Borrando código de build..."

rm -rf site

HASH=$(docker ps -a | grep nginx-react | awk '{print $1}')

! [ -z "$HASH" ] && echo "===== Contenedor viejo corriendo. Borrandolo" && docker rm -f $HASH || echo "===== No hay contenedores viejos corriendo..."

docker run -d -p 8000:80 --name nginx-react nginx-react:latest

echo "===== Finalizado!"