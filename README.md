# Traveltime

## Instalacja
```
git clone https://github.com/dajogzum/Traveltime
```

## Aktualizacja
```
cd ../modules/Traveltime
git pull
```
### Aktualizacja jeśli były zmieniane pliki lokalnie<br>
```
cd ../modules/Traveltime
git reset --hard
git clean -df
git pull
```
## Config
```
{
  module: "Traveltime",
  position: "top_left",
  config: {
    link: "Google api directions"
  }
},
```
https://developers.google.com/maps/documentation/directions/
