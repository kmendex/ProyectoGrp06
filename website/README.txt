ionic build prod
npx cap init
ionic capacitor add android
##
## Hacer estos comandos en la terminal como administrador.
##

## Comandos para correr la app en un emulador de android
## Hacerlo cada vez que se desee ver los cambios
ionic capacitor sync
ionic build
ionic capacitor copy
ionic capacitor run android

## Comando para correrlo en el navegador
ionic serve