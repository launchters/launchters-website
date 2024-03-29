# Launchters

[![Netlify Status](https://api.netlify.com/api/v1/badges/c541dd3b-ba2e-494e-b29e-61495c370382/deploy-status)](https://app.netlify.com/sites/remarkable-bombolone-fe9768/deploys)

> Repo de la Web oficial publicada en: [https://launchters.com](https://launchters.com).

## Prohibiciones

#### Hacer cambios que afecten a las ramas:

- `main`

## Objetivo

Que desarrolles una pequeña tarea de desarrollo front-end de manera profesional y en un entorno real, que involucre no solo desarrollo de código sobre una base de código ya existente si no también ciertos componentes de trabajo en equipo. No te desanimes cuando no sepas cómo hacerlo, se trata de aprender y mejorar y solidificar ciertos conocimientos que reduzcan las dudas de potenciales empleadores para contratarte al reducir sus riesgos.

En este proyecto desarrollarás un formulario multi-etapa en una ruta separada: `lm/profit-calc-gp-001`. Este formulario deberá tener un solo campo en cada etapa.
He agregado un proyecto de referencia para que te inspires. Esa carpeta será eliminada en el futuro pero puedes usarlo ahora para inspirarte y ver como hice un formulario multietapa (para agregar empleados) y que incluía varios campos en cada etapa y que además permitía inyectar otros formularios diferentes (para agregar empresas o clientes también).
Esto podrás verlo dentro de la carpeta `form-by-steps`.
Puedes usar el código que quieras de ahí como referncia, pero esa carpeta y su contenido serán eliminados.

## Instrucciones para David

> Estos son los pasos a seguir, estructurados con tal de que practiques ciertas habilidades útiles y busques por ti mismo soluciones a problemas sin que yo te los resuelva, convirtiéndote así en un mejor desarrollador.

He cogido un codigo más complejo y he eliminado gran parte de ese codigo que no es relevante para este caso de uso concreto que buscamos.
No lo he eliminado todo, por lo que encontrarás algunas partes del codigo que pensarás que no tienen sentido (porque otros bloques de codigo relacionados han sido eliminados).

## Proceso a seguir

1. **Desde la rama de desarrollo `develop`**, desarrollarás las tareas listadas abajo de manera individual y en orden y adaptando nombres y funcionalidades al objetivo de negocio buscado.
2. Por cada tarea individual deberás crear una rama nueva llamada `feature/<ticket_de_la_tarea>` y trabajar de manera aislada en esa funcionalidad desde esa rama. Si trabajas en varias funcionalidades a la vez (o vuelves a trabajar en alguna pasada), te asegurarás de cambiar a la rama adecuada. El trabajo en proceso puedes guardarlo con `git stash` y volver a ello más tarde.
3. Una vez terminada una tarea, la **marcarás en la lista**, harás **commit** y también **PR (Pull Request)**.
   Yo mismo revisaré y "mergearé" (hacer merge) sobre la rama principal si corresponde, si no, te daré feedback para que lo arregles (deberás arreglarlo en la rama `feature` que corresponda a esa tarea).
4. Cambiarás de rama para el desarrollo de otra de las funcionalidades.
5. Usar el codigo de referencia como referencia unicamente, las nuevas funcionalidades deben desarrollarse en la web que está en producción.

## ¿Qué hacer si no se cómo hacer algo?

Acostumbrarte a esa sensación y tirar palante sin darle tanta importancia. Es el día a día del desarrollador. Nos pagan por solucionar problemas y buscarnos la vida. Google, StackOverflow y en muchísima menor medida ChatGPT, son tus amigos.

## To-do list:

> Puedes usar el formulario actual como referencia de las preguntas que se van a hacer. Pero NO utilizar imágenes de fondo.

Ejecuta las siguientes tareas y márcalas como completadas con [x] cuando vayas a hacer el commit.

#### Lista de tareas:

- [x] Hacer `git clone` del proyecto y ejecutarlo en local (`start`) tras haber instalado las dependencias (`install`).

- [x] Asegurarme de haber instalado Node, SourceTree y Yarn en mi pc antes de empezar.

- [x] Posicionarme en la rama `feature/lead-magnets` (usando `git checkout` o SourceTree). Esta será tu rama de trabajo por ahora.

- [x] Agregar algún cambio. Por ejemplo: agregar mi propio script al `package.json` que diga `echo COMPLETADO`.

- [x] Hacer mi primer commit con `git commit` o con SourceTree.

- [x] Traerse los cambios que hubiese en el servidor, dentro de esta rama a mi local, utilizando `git fetch` (consulta) y `git pull` (Traerselo).

- [x] Crear mi propia rama de tipo `feature/*`.

- [x] Abrir mi primer PULL REQUEST solicitando que la rama `feature/lead-magnets` se una a `develop`.

- [x] Crear nueva ruta `lm/profit-calc-gp-001` en `AppRouter.tsx` donde carguemos un componente 'dummy' como placeholder.

- [x] `#feature/form-start`: Cargar un nuevo componente por separado llamado `ProfitCalcGPLeadMagnetForm` con cualquier texto de ejemplo y comprobar que se muestre al cargar la ruta `/#/lm/profit-calc-gp-001` (nótese el hashtag).

- [x] `#feature/form-steps`: Crear un componente `ProfitCalcGPLeadMagnetForm`, que contiene un formulario básico de ejemplo que incluye 3 campos y basárse en el otro proyecto de referencia (`form-by-steps`) consiguiendo hacer que tenga navegación por etapas/pasos. Para ello:

- [x] `#feature/form-fields`: Crearemos campos de formulario básicos y títulos de pregunta grandes de tipo h3 o h4, que serán similares a los que se muestran en el formulario de la web oficial que puedes visitar al hacer click en el boton naranja de abajo. Ignorar imágenes de fondo. Estos campos se mostrarán uno por cada "etapa/paso" de formulario que se haya avanzado. Los campos del formulario serían:

  1. [x] Instagram del usuario (obligatorio)
  1. [x] Email de usuario (obligatorio)
  1. [x] ¿Cuántas visualizaciones tienes de media en tus últimas 6 Stories de Instagram (en días diferentes)?
  1. [x] ¿Cuántos ingresos mensuales MÍNIMOS, necesitarías para alcanzar VIVIR DE TU COACHING? (deseo)
  1. [x] ¿Cuánto ingresa tu negocio al mes (promedio)?
  1. [x] ¿Cuántas horas promedio dedicas al día a tu negocio (estrategia y ejecución)?
  1. [x] ¿Cuánto gasta tu negocio al mes (gastos operativos promedio)? (gastos que se verían aumentados si recibes nuevos clientes).
  1. [ ] ¿Cuál es tu nivel de inglés escrito y hablado? ¿Estarías dispuesto/a a tratar directamente con clientes en Inglés?
  1. [ ] (Checkboxes) ¿Cuáles de los siguientes aspectos has implementado de manera efectiva y estás contento con los resultados actuales?
     - Embudo de ventas efectivo con Lead Magnet
     - Plan de contenidos estratégico y estrategias guionizadas con un objetivo
     - Edición persuasiva de mi contenido en Redes Sociales
     - Anuncios de pago eficientes con ROAS positivo
     - Comunidad Online de pago premium recurrente
     - Secuencias de nutrición por email

- [x] Aplicar validacion a los campos de formulario para evitar que se introduzcan datos no deseados y si se hace informar con un error al usuario.

- [x] `#feature/thank-you-screen`: Hay que crear varias a las que dirigiremos al usuario segun si cualifica o no a lo largo del proceso:

  - [x] CREAR AMBAS PAGINAS CON RUTA PROPIA COMO subrutas de la del formulario en concreto.
  - [x] **Sí cualifica**: Página de confirmación con icono de un reloj, diciendo que los resultados serán enviados en las próximas 24-72 horas ya que son generados manualmente.
  - [x] **No cualifica**: Página de confirmación con icono de cara triste y mensaje diciéndole que su perfil actual no cumple con los requisitos necesarios para el programa de 'Growth Partner' todavía, pero que presionando el siguiente botón de confirmación, entrará en lista de espera para un evento online donde le enseñaré a llevar su negocio de coaching desde 0 a 3000€/mes.

- [ ] Diseño. Inspirarse en la imagen de la carpeta `PARA DAVID` o en el formulario del projecto `form-by-steps` como referencia para ver el diseño y el código, concretamente la **ruta** que carga el formulario de **AGREGAR STAFF** en `routes.tsx`, el `FormLayout` y el formulario que carga. Nótese como va incrustado como parámetro dentro de un componente algo más genérico llamado `FormLayout` que carga el mismo layout para todos los formularios que se le pasen como un hijo. Aplicar el mismo enfoque a nuestro caso de uso, ya que formularios para lead magnets habrá de distintos tipos en el futuro.

- [x] `#feature/next-step-handler`: Queremos que al pasar al siguiente paso, se llame a una función `handleNextStep`. Esta función puede estar definida de manera independiente para cada paso del formulario (dentro de la configuración de los pasos), o bien, de manera única con una estructura de tipo switch dentro que detecte en qué paso está el usuario cuando la función es llamada.

  - [x] Desarrolaremos la lógica de negocio interna de `handleNextStep`.
  - [x] Haremos checks para saber si el lead (usuario) cualifica o no para el programa: Aplicaremos **SALTO DINÁMICO**: Si no cualifica, le haremos saltar directamente a la "thank-you page" de los que no cualifican. Si sí que cualifica continuaremos el flow sin interrumpirlo.
  - [ ] Haremos también llamadas http a una API en alguno de los switch case, para que los datos sean guardados.

- [ ] `#feature/improvements`: Aplicar algunas mejoras, incluyendo:
  - [ ] Asegurarse de que el formulario es responsive en tamaños grandes, medianos y pequeños de pantalla. Los tamaños de letra y demás se leen con facilidad sin romperse el diseño en diferentes tamaños de pantalla.
  - [ ] Hacer comprobaciones de **edge cases** y solucionar defectos que vayan surgiendo. Revisar todos los comentarios que inician con `// TODO`.

#### Para Alex

- [ ] Automatizar checkeo del numero de reels o story views en IG via oAuth ?
- [ ] `#feature/transactional-emails--unqualified`: En caso de NO cualificar en cualquier momento: Disparar email transaccional con lower-ticker offer.
- [ ] `#feature/transactional-emails--qualified`: En caso de SÍ cualificar: Envío automático de email transaccional conteniendo calculadora de profits del lead magnet. Es necesario generar gráficos adecuados y personalizar las cifras segun datos respondidos en el formulario.

<!-- ! PARA LA LLAMADA -->
<!-- 1. En este momento, ¿cuáles son los principales obstáculos, problemas o retos que enfrentáis tu negocio y tú, personalmente? -->
<!-- 1. ¿Qué esperas de mí para considerar nuestra colaboración todo un éxito? (sé específico/a) -->
<!-- 1. ¿Estarías dispuesto a trabajar en tu proyecto más de 10h/día por vivir de tu pasión dejando todo de lado a pesar del riesgo? -->
<!-- 1. ¿Qué tipo de marketing estás haciendo y cuánto tiempo y dinero le dedicas? -->
<!-- 1. ¿Qué servicios/productos ofreces, a qué precio y cuántos clientes tienes actualmente en cada uno de ellos? -->
<!-- 1. ¿A qué audiencia objetivo estás apuntando esos esfuerzos? -->
<!-- 1. ¿Tienes a alguna agencia o freelancer contratados? Si es así, ¿cuánto pagas y qué incluye? -->
<!-- 1. Núm. de WhatsApp (opcional) para una conversación más cercana y personal. -->

<!-- ! NO AUTOMATIZAR LA GENERACIÓN DEL EMAIL DE RESULTADOS HASTA QUE COMPROBEMOS SI ES UN LEAD MAGNET EFECTIVO QUE NOS TRAE LLAMADAS. -->

<!--
- [ ] `#feature/lead-magnet-profit-calculator-logic`: Agregaremos los cálculos necesarios para calcular el aumento de ingresos a lo largo del año en base a este excel:
      y generar gráficos de manera acorde que luzcan atractivos y simbolicen el rango de ingresos medio que obtendría hipotéticamente el cliente al trabajar con nosotros. La linea de ingresos estimados será naranja o verde fuerte. También mostraremos el rango entre el mínimo y el máximo con un color verde con opacidad 0.15. Algunos calculos a considerar, además de los del Excel:
-->

#### Mejoras extra:

- [ ] `#feature/instagram-oauth`: Integrar Instagram oAuth, para que nos concedan los permisos necesarios para extraer tantos datos como podamos para calcular esos potenciales retornos (ingresos o ganancias).
