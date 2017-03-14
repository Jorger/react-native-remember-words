# Actualización.

Se ha realizado la versión para Android.

![ANDROID](https://raw.githubusercontent.com/Jorger/react-native-remember-words/master/imgExample/AndroidAndiOS.gif)

* Se hace uso del paquete [react-native-prompt-android] para realizar la entrada de datos en Android, ya que la versión por defecto de [Alert] que tiene react-native no permite la opción de captura de datos.

* Se hace uso del módulo [Platform] para así detectar el sistema operativo móvil en el cual se está desplegando la aplicación.

* Se ha creado el APK de la aplicación, los pasos para crearlo se puede encontrar en la documentación de react-antive en la sección [Generating Signed APK]

# React Native Remember Words

Versión móvil de la extensión [Remember Words] desarrollada en React Native

![RW](https://raw.githubusercontent.com/Jorger/react-native-remember-words/master/imgExample/App.gif)

# Motivación.

La motivación de desarrollo de esta aplicación es la de aprender acerca de esta nueva herramienta que tenemos aquellos desarrolladores que no tenemos mucha experiencia en el mundo del desarrollo nativo para móviles.

# Opciones

La extensión permite que desde el navegador se almacen las palabras, pero ésta no es funcional en equipos móviles, el objetivo es poder visualizar aquellas palabras que se han almacenado desde el navegador en un equipo móvil, teniendo en cuenta que se comparten los mismos servicios.

## Agregar una palabra en el navegador, visualizarla en la APP.

![EP](https://raw.githubusercontent.com/Jorger/react-native-remember-words/master/imgExample/GuardaPalabraExtension.gif)

## Guardar palabra en la APP, visualizarla en el navegador.

![PE](https://raw.githubusercontent.com/Jorger/react-native-remember-words/master/imgExample/GuardapalabraApp.gif)

# Servicios utilizado.

* [React Native]: Framework para el desarrollo de aplicaciones nativas
* [mLab]: Servicio que permite manejar una base de datos NoSQL (Mongo), en la cual se almacenan las palabras.
* [now]: Servicio que permite desplegar el backend de la extensión.

# Backend

Se hace uso del mismo [backend] usado en la extensión creada para Google Chrome.

# Configuración de Backend

En el archivo [fetcher] se deberá establecer la url del backen, está url es la misma usada por la extensión.

```javascript
  const URL_SERVICE = "https://CHANGE_URL_DEPLOY.now.sh";
```

# Futuras opciones.

* ~~Versión para Android~~.
* Autenticación de usuarios a través de redes sociales.


# Enlaces.

* https://facebook.github.io/react-native/
* https://www.youtube.com/watch?v=cuMezEwKFLU

Jorge Rubiano

[@ostjh]

License
----
MIT

[@ostjh]:https://twitter.com/ostjh
[Remember Words]:https://github.com/Jorger/Extension-Remember_Words
[React Native]:https://facebook.github.io/react-native/
[backend]:https://github.com/Jorger/Extension-Remember_Words/tree/master/server
[fetcher]:https://github.com/Jorger/react-native-remember-words/blob/master/utils/fetcher.js#L2
[mLab]:https://mlab.com/
[now]:https://zeit.co/now
[react-native-prompt-android]:https://github.com/shimohq/react-native-prompt-android
[Platform]:https://facebook.github.io/react-native/docs/platform-specific-code.html
[Generating Signed APK]:https://facebook.github.io/react-native/docs/signed-apk-android.html
[Alert]:http://facebook.github.io/react-native/releases/0.42/docs/alert.html#alert

