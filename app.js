// Banco de datos global de las lecciones
const leccionesData = [
  {
    "id": 1,
    "titulo": "Lección 1: Lo que la Biblia dice acerca de Dios",
    "lectura":"./Adicional/Ad2_01.png",
    "imagen":"https://i.ibb.co/35vSxMYk/Lecc-1.png",
    "preguntas": [
      {
        "id": 1,
        "pregunta": "¿Cuántos dioses hay?",
        "cita": "Fesios 4:6",
        "opciones": ["Uno", "Cinco", "Siete"],
        "correcta": 0
      },
      {
        "id": 2,
        "pregunta": "¿Cuál es la Naturaleza de Dios?",
        "cita": "S. Juan 4:24",
        "opciones": ["Dios es Espiritu", "Una presencia santa", "Un ser invisible"],
        "correcta": 0
      },
      {
        "id": 3,
        "pregunta": "¿Cuáles son las Tres Personas de La Triidad?",
        "cita": "2da Corintios 13:14",
        "opciones": ["Padre y Espiritu Santo", "Espiritu Santo y El Hijo", "Padre, Hijo y Espiritu Santo"],
        "correcta": 2
      },
      {
        "id": 4,
        "pregunta": "¿Cómo es el caracter de Dios?",
        "cita": "1era Juan 4:8",
        "opciones": ["Dios es malo", "Dios es divertido", "Dios es Amor"],
        "correcta": 2
      }

    ],
    "compromiso": "¿Crees en Dios Padre, el Hijo y El Espitu Santo. Prometes amarle y obedecerle como tú Padre Celestial?"
  },
  {
    "id": 2,
    "titulo": "Lección 2: La Santa Biblia",
    "lectura":"./Adicional/Ad2_02.png",
    "imagen": "https://i.ibb.co/XfsVH6kZ/Lecc-2.png",
    "preguntas": [
      {
        "id": 5,
        "pregunta": "¿Quién reveló las Santas escrituras?",
        "cita": "2da Timoteo 3:16",
        "opciones": ["Un ser material visible", "Dios", "Una fuerza impersonal"],
        "correcta": 1
      },
      {
        "id": 6,
        "pregunta": "¿Quiénes recibieron la revelación?",
        "cita": "Hebreos 1:1",
        "opciones": ["Los Profetas", "Los Discipulos", "Moisés, Elías y Jesús"],
        "correcta": 0
      },
      {
        "id": 7,
        "pregunta": "¿A qué se compara la Santa Biblia?",
        "cita": "Salmo 119:105",
        "opciones": ["Una lampara", "Una antorcha", "Una linterna"],
        "correcta": 0
      },
      {
        "id": 8,
        "pregunta": "¿Qué beneficios proporciona el estudio de la Santa Biblia?",
        "cita": "2da Timoteo 3:15-17",
        "opciones": ["Pérdida de tiempo", "Sabiduría y Salvación", "Eventos azarosos"],
        "correcta": 1
      },
      {
        "id": 9,
        "pregunta": "¿Qué bendiciones da la Santa Biblia?",
        "cita": "Romanos 15:4",
        "opciones": ["Esperanzas", "Desengaño", "Frustración"],
        "correcta": 0
      },
      {
        "id": 10,
        "pregunta": "¿Cuánto tiempo perdurará la santa Biblia?",
        "cita": "Isaías 40:8",
        "opciones": ["Un poquito de tiempo", "Hasta el 2030", "Perdurará para siempre"],
        "correcta": 2
      }
    ],
    "compromiso": "¿Crees que la Santa Bibli es inspirada por Dios. La aceptas como regla de fe. Prometes estudiarla diariamente?"
  },
  {
    "id": 3,
    "titulo": "Lección 3: La Oración y La Fe",
    "lectura":"./Adicional/Ad2_03.png",
    "imagen": "https://i.ibb.co/JR1y6ZQ4/Lecc-3.png",
    "preguntas": [
      {
        "id": 11,
        "pregunta": "¿Cómo nos comunicamos con Dios?",
        "cita": "Daniel 9:3",
        "opciones": ["Por teléfono", "Usando el Internet", "A través de La Oración"],
        "correcta": 2
      },
      {
        "id": 12,
        "pregunta": "¿Qué es La Oración?",
        "cita": "1era Samuel 1:9-15",
        "opciones": ["Una forma de hablar con Dios", "Repetir frases para Dios", "Decir palabras sin sentido"],
        "correcta": 0
      },
      {
        "id": 13,
        "pregunta": "¿Cuánto poder tiene la Oración sincera?",
        "cita": "Santigo 5:16",
        "opciones": ["La oración del justo es poderosa y eficaz", "Solo historias del pasado", "No tiene poder"],
        "correcta": 0
      },
      {
        "id": 14,
        "pregunta": "¿En nombre de quién debemos orar?",
        "cita": "S Juan 14:13",
        "opciones": ["En el nombre de Pablo", "En el nombre de Pedro", "En el Nombre de Jesús"],
        "correcta": 2
      },
      {
        "id": 15,
        "pregunta": "¿Contesta Dios las oraciones?",
        "cita": "S Mateo 7:7-11",
        "opciones": ["De vez en cuando", "Una si y otras no", "Siempre responde"],
        "correcta": 2
      },
      {
        "id": 16,
        "pregunta": "¿Qué es la Fe?",
        "cita": "Hebreos 11: 1,6",
        "opciones": ["Angustia e inseguridad", "Temor y desesperanza", "La certeza de lo que se espera y la convicción de lo que no se ve"],
        "correcta": 2
      },
      {
        "id": 17,
        "pregunta": "¿Cómo se desarrolla la Fe?",
        "cita": "Romanos 10:17",
        "opciones": ["A través de Oir la Palabra de Dios", "Viviendo la vida buena", "Tranquilo en casa"],
        "correcta": 0
      }
    
    ],
    "compromiso": "¿Crees que Dios escucha y Contesta las oraciones. Resuelves orar con fe todos los días?"
  },
  {
    "id": 4,
    "titulo": "Lección 4: El regreso de Cristo",
    "lectura":"./Adicional/Ad2_04.png",
    "imagen": "https://i.ibb.co/LDGk7K0n/Lecc-4.png",
    "preguntas": [
      {
        "id": 18,
        "pregunta": "¿Qué Maravillosa promesa hizo Jesús?",
        "cita": "S Juan 14:1-3",
        "opciones": ["Preparar lugar para nosotros", "Dejarnos tranquilos", "Preparar lugar para él"],
        "correcta": 0
      },
      {
        "id": 19,
        "pregunta": "¿Cómo debemos considerar esta promesa?",
        "cita": "Tito 2:13",
        "opciones": ["Estar preparados y activos", "No hacer nada de nada", "Esperar que Jesús haga todo"],
        "correcta": 0
      },
      {
        "id": 20,
        "pregunta": "¿En qué forma regresará Jesús?",
        "cita": "S Mateo 24:30",
        "opciones": ["Será en secreto", "Nadie lo sabrá", "Será visible para todos"],
        "correcta": 2
      },
      {
        "id": 21,
        "pregunta": "¿Cuántos verán su glorioso advenimiento?",
        "cita": "Apocalipsis 1:7",
        "opciones": ["Y todo ojo le verá", "Nadie lo vera venir", "Solamente los cristianos"],
        "correcta": 0
      },
      {
        "id": 22,
        "pregunta": "¿Cuál es el objeto del regreso de Jesús?",
        "cita": "S Mateo 16:27",
        "opciones": ["El castigo de la tierra", "Pagará a cada uno según sean sus obras", "No se sabe aún"],
        "correcta": 1
      },
      {
        "id": 23,
        "pregunta": "¿Qué sucederá con los muertos justos?",
        "cita": "1era Tesalonicenses 4:13-16",
        "opciones": ["Los muertos en Cristo serán los últimos", "No pasará nada", "Los muertos en Cristo resucitarán primero"],
        "correcta": 2
      },
      {
        "id": 24,
        "pregunta": "¿A dónde irán los justos?",
        "cita": "1era Tesalonicenses 4:17",
        "opciones": ["Vivir con Jesús para siempre", "Pasar unos días con Jesús", "No irán a ningún lado"],
        "correcta": 0
      }
    ],
    "compromiso": "¿Crees en el segundo advenimiento de Jesús. Quieres prepararte para estar con él en el cielo?"
  },
  {
    "id": 5,
    "titulo": "Lección 5: Señales del regreso de Cristo",
    "lectura":"./Adicional/Ad2_05.png",
    "imagen": "https://i.ibb.co/Q784PrB7/Lecc-5.png",
    "preguntas": [
      {
        "id": 25,
        "pregunta": "¿Qué preguntaron los discípulos a Jesús?",
        "cita": "S Mateo 24:3",
        "opciones": ["No preguntaron nada", "Se queron dormidos", "Dinos ¿Cuándo serán estas cosas y que señal habrá de tu venida?"],
        "correcta": 2
      },
       {
        "id": 26,
        "pregunta": "¿Se sabe la fecha del regreso de Cristo?",
        "cita": "S Mateo 24:36",
        "opciones": ["Pero el día ni la hora nadie lo sabe", "El 24de diembre", "En semana santa"],
        "correcta": 0
      },
      {
        "id": 27,
        "pregunta": "¿Estamos en tinieblas respecto a la venida de Jesús?",
        "cita": "1era Tesalonicenses 5:1-4",
        "opciones": ["No estamos en tinieblas", "No sabemos nada de nada", "Ni tanto"],
        "correcta": 0
      },
      {
        "id": 28,
        "pregunta": "¿Qué condiciones sociales prevalecerán en los últimos días?",
        "cita": "2da Timoteo 3:1-5",
        "opciones": ["Hombres amadores de sí mismos", "Hombres buena gente", "Hombres santos"],
        "correcta": 0
      },
      {
        "id": 29,
        "pregunta": "¿Cuál sería la condición moral de la humanidad?",
        "cita": "S Mateo 24:12",
        "opciones": ["Reinará la maldad", "Reinará el Bien", "Reinará la Bondad"],
        "correcta": 0
      },
      {
        "id": 30,
        "pregunta": "¿Qué ocurriría con la ciencia?",
        "cita": "Daniel 12:4",
        "opciones": ["La ciencia se olvidará", "La ciencia se incrementará", "No pasará nada con la ciencia"],
        "correcta": 1
      },
      {
        "id": 31,
        "pregunta": "¿Qué no entiende la mayor parte de la humanidad?",
        "cita": "S Mateo 24:37-39",
        "opciones": ["Sobre la segunda venida de Jesús", "Amazar riquezas para el mañana", "La gente está entendida en todo"],
        "correcta": 0
      },
      {
        "id": 32,
        "pregunta": "¿Qué solemne advertencia nos dejó el señor Jesucristo?",
        "cita": "S Lucas 21:34",
        "opciones": ["Que no nos entreguemos a este mundo", "Que vivamos felices", "Que estemos tranquilos"],
        "correcta": 0
      },
    ],
    "compromiso": "¿Crees que Jesús regresará muy pronto. Decides prepararte para ir con él a la Tierra Nueva?"
  },
  {
    "id": 6,
    "titulo": "Lección 6: El Origen del pecado",
    "lectura":"./Adicional/Ad2_06.png",
    "imagen": "https://i.ibb.co/d4s28Hx8/Lecc-6.png",
    "preguntas": [
      {
        "id": 33,
        "pregunta": "¿Dónde y cuándo comenzó el pecado?",
        "cita": "Apocalipsis 12:7-12",
        "opciones": ["En Jerusalen", "En el cielo", "En el desierto"],
        "correcta": 1
      },
      {
        "id": 34,
        "pregunta": "¿En quién se originó el pecado?",
        "cita": "Ezequiel 28:14-17",
        "opciones": ["En un querubin", "En un sacerdote", "En un partizano"],
        "correcta": 0
      },
      {
        "id": 35,
        "pregunta": "¿Qué prueba de obediencia estableció Dios?",
        "cita": "Génesis 2:15-17",
        "opciones": ["No comer del árbol del bien y del mal", "Comer de todo árbol", "Comer solo frutas"],
        "correcta": 0
      },
      {
        "id": 36,
        "pregunta": "¿En qué consistió el primer pecado?",
        "cita": "Génesis 3:1-6",
        "opciones": ["En la desobediencia", "En no hacer nada", "En no cuidar el jardin"],
        "correcta": 0
      },
      {
        "id": 37,
        "pregunta": "¿Qué es pecado?",
        "cita": "1ra Juan 3:4",
        "opciones": ["Hacer lo malo", "Infracción de la Ley de Dios", "Comer demasiado"],
        "correcta": 1
      },
      {
        "id": 38,
        "pregunta": "¿A quién se somete el pecador?",
        "cita": "1era Juan 3:8",
        "opciones": ["A la mala vida", "A los demonios", "Al Diablo"],
        "correcta": 2
      },
      {
        "id": 39,
        "pregunta": "¿Cuál es el resultado del pecado?",
        "cita": "Romanos 6:23",
        "opciones": ["Vida eterna", "Vejez prematura", "Muerte"],
        "correcta": 2
      }
    ],
    "compromiso": "¿Procurarás, con la ayuda de Dios, limpiar tu vida de todo pecado?"
  },
  {
    "id": 7,
    "titulo": "Lección 7: La Salvación",
    "lectura":"./Adicional/Ad2_07.png",
    "imagen": "https://i.ibb.co/ymsf39YY/Lecc-7.png",
    "preguntas": [
      {
        "id": 40,
        "pregunta": "¿Cuál es la consecuencia del pecado?",
        "cita": "Romanos 5:12",
        "opciones": ["La entrada de la muerte", "Mejor calidad de vida", "No hay consecuencias"],
        "correcta": 0
      },
      {
        "id": 41,
        "pregunta": "¿Podemos resolver el problema del pecado?",
        "cita": "Jeremías 2:22",
        "opciones": ["Algunas veces", "Si insistimos podemos", "Nadie puede resolverlo solo"],
        "correcta": 2
      },
      {
        "id": 42,
        "pregunta": "¿Qué provisión hizo Dios para salvarnos?",
        "cita": "S. Juan 3:16, S Mateo 20:28",
        "opciones": ["Nos dió la libertad de hacerlo", "Proveyó a su Hijo Jesús", "No hizo provisión alguna"],
        "correcta": 1
      },
      {
        "id": 43,
        "pregunta": "¿Cómo describió Jesús la misión?",
        "cita": "S. Lucas 19:10",
        "opciones": ["Nadie nos puede salvar", "Porque el Hijo del Hombre vino a buscar y a salvar lo que se había perdido", "Ninguna de las anteriores"],
        "correcta": 1
      },
       {
        "id": 44,
        "pregunta": "¿Cometió Jesús algún pecado?",
        "cita": "Hebreos 4:15",
        "opciones": ["Fue tentado en todo según nuestra semejanza, pero sin pecado", "Fue tentado en todo según nuestra semejanza, pero pecó", "Fue tentado en todo según nuestra semejanza, y no pasó nada."],
        "correcta": 0
      },
      {
      "id": 45,
        "pregunta": "¿Cómo pagó Jesús nuestra deuda?",
        "cita": "Isaías 23:3-7, 1era Pedro 1:18.19",
        "opciones": ["Cargó con nuestros pecados", "No hizo nada", " No quizo asumir nada."],
        "correcta": 0
      },
      {
      "id": 46,
        "pregunta": "¿Qué acto da evidencia de nuestra salvación?",
        "cita": "1era Corintios 15:20-22",
        "opciones": ["La Resurreción de Jesús", "La muerte de Jesús", "Ninguna de las anteriores"],
        "correcta": 0
      }
    ],
    "compromiso": "¿Crees que Jesús murió por tí. Lo aceptas como tu único Salvador. Le entregas tu vida y tu corazón?"
  },
  {
    "id": 8,
    "titulo": "Lección 8: El perdón de los pecados",
    "lectura":"./Adicional/Ad2_08.png",
    "imagen": "https://i.ibb.co/sJV2t27L/Lecc-8.png",
    "preguntas": [
      {
        "id": 47,
        "pregunta": "¿Gracias a quién y a qué somos salvos?",
        "cita": "1era Pedro 2:24",
        "opciones": ["Gracias a Jesús y su muerte en la cruz", "Gracias a Moisés y la salida de Egipto", "Gracias a Bernabé y su muerte"],
        "correcta": 0
      },
      {
        "id": 48,
        "pregunta": "¿Cuánto cuesta nuestra salvación?",
        "cita": "Romanos 3:24",
        "opciones": ["Un millón de dólares", "diez milloes de euros", "Nada...es gratuita"],
        "correcta": 2
      },
      {
        "id": 49,
        "pregunta": "¿Qué reconocimiento sincero debe experimentar el pecador?",
        "cita": "Lucas 18:10-13",
        "opciones": ["Humildad y arrepentimiento", "Su propio esfuezo", "No reconocer nada"],
        "correcta": 0
      },
      {
        "id": 50,
        "pregunta": "¿Qué profundo sentimiento es indispensable?",
        "cita": "Hechos 2:37,38",
        "opciones": ["Arrepentimiento sincero", "Alegría absoluta", "Desprecio por la vida"],
        "correcta": 0
      },
      {
        "id": 51,
        "pregunta": "¿Qué se debe hacer con los pecados?",
        "cita": "Salmo 32:3-5",
        "opciones": ["Guardarlos en el corazón", "Olvidarlos...no pasa nada", "Confesarlos"],
        "correcta": 2
      },
      {
        "id": 52,
        "pregunta": "¿Qué ofrecimiento nos hace Dios?",
        "cita": "Efesios 1:7; Isaías 1:18",
        "opciones": ["En Jesús tenemos redención", "Pablo nos salvará", "Estamos perdidos para siempre"],
        "correcta": 0
      },
      {
        "id": 53,
        "pregunta": "¿Cuán completo es el perdón divino?",
        "cita": "Isaías 43:25",
        "opciones": ["Dios te castigará", "te perdona con amor", "te sentencia a muerte eterna"],
        "correcta": 1
      }
	  ],
    "compromiso": "Pide humildemente perdón por tus pecados. ¿Crees que Dios te perdonará. Quieres vivir una vida de santificación en Jesús?"
  },
  {
    "id": 9,
    "titulo": "Lección 9: El Juicio",
    "lectura":"./Adicional/Ad2_09.png",
    "imagen": "https://i.ibb.co/BVZ6NfpJ/Lecc-9.png",
    "preguntas": [
      {
        "id": 54,
        "pregunta": "¿Qué juzgará Dios?",
        "cita": "Eclesiastés 12:14",
        "opciones": ["Dios traerá toda obra a juicio", "Dios juzgará los pecados blancos", "Juzgará el 50% de los pecados"],
        "correcta": 1
      },
      {
        "id": 55,
        "pregunta": "¿Quiénes comparecerán ante el juicio?",
        "cita": "2da Corintios 5:10",
        "opciones": ["Sólo los cumpables", "Algunos comparecerán", "Todos comparecerán ante el juicio"],
        "correcta": 2
      },
      {
        "id": 56,
        "pregunta": "¿Quién es el juez?",
        "cita": "Romanos 2:16",
        "opciones": ["Lucifer", "Pedro", "Jesucristo"],
        "correcta": 2
      },
      {
        "id": 57,
        "pregunta": "¿Dónde están registradas nuestras acciones?",
        "cita": "Apocalipsis 20:12",
        "opciones": ["En el Registro civil", "En las actas de nacimiento", "En el Libro de La vida y del Cordeo"],
        "correcta": 2
      },
      {
        "id": 58,
        "pregunta": "¿Por qué código seremos juzgados?",
        "cita": "Santiago 2:12",
        "opciones": ["El Código Civil", "El Código Penal", "La Ley de la libertad divina"],
        "correcta": 2
      },
      {
        "id": 59,
        "pregunta": "¿Cómo podemos estar seguros de salir absueltos en el juicio?",
        "cita": "S juan 5:24; 1era Juan 2:1",
        "opciones": ["Si oimos la voz de Jesús", "No seremos absueltos", "No tenemos perdón"],
        "correcta": 0
      }
    ],
    "compromiso": "¿Aceptas a Jesús como tu abogado. Deseas respetar y obedecer los Mandamientos de dios?"
  },
  {
    "id": 10,
    "titulo": "Lección 10: La Ley de Dios",
    "lectura":"./Adicional/Ad2_10.png",
    "imagen": "https://i.ibb.co/Fq6ppHHR/Lecc-10.png",
    "preguntas": [
      {
        "id": 60,
        "pregunta": "¿Quién y cómo se escribió la Santa Ley?",
        "cita": "Exodo 31:18",
        "opciones": ["Moisés en tablas de madera", "Jesús en tablas de mármol", "Dios en ablas de piedra"],
        "correcta": 2
      },
      {
        "id": 61,
        "pregunta": "¿Qué revela la Santa Ley?",
        "cita": "1era Juan 3:4",
        "opciones": [" Que pecar es infringir La Ley", "No revela nada", "La ley fue abolida"],
        "correcta": 0
      },
      {
        "id": 62,
        "pregunta": "¿A quién nos conduce la Santa Ley?",
        "cita": "Gálatas 3:24",
        "opciones": ["A Moisés", "A Dios", "Al principio"],
        "correcta": 1
      },
      {
        "id": 63,
        "pregunta": "Los Diez Mandamientos",
        "cita": "Exodo 20:3-17",
        "opciones": ["La Santa Ley de Dios", "La ley de los judios", "La ley de los romanos"],
        "correcta": 0
      },
      {
        "id": 64,
        "pregunta": "¿Cuál fue la actitud de Jesús hacia la Ley?",
        "cita": "S Juan 15:10",
        "opciones": ["No les hizo caso", "Les restó importancia", "Guardó los Mandamientos de Dios"],
        "correcta": 2
      },
      {
        "id": 65,
        "pregunta": "¿Realizó cambios Jesús en Los Mandamientos?",
        "cita": "S Mateo 5:17-18",
        "opciones": ["No, Él vino a cumplirla", "Sí, no le parecian", "No habló más de ello"],
        "correcta": 0
      },
      {
        "id": 66,
        "pregunta": "¿Puede alguien cambiar los Mandamientos de Dios?",
        "cita": "Eclesiastés 3:14",
        "opciones": ["Sí, de vez en cuando", "No, ansolutamente nadie puede", "Solo los judios"],
        "correcta": 1
      }
	   ],
     "compromiso": "¿Crees que Dios escucha y Contesta las oraciones. Resuelves orar con fe todos los días?"
  },
  {
    "id":11,
    "titulo": "Lección 11: El Día de descanso",
    "lectura":"./Adicional/Ad2_11.png",
    "imagen": "https://i.ibb.co/WpNPB5Zg/Lecc-11.png",
    "preguntas": [
      {
        "id": 67,
        "pregunta": "¿Cuál es el día de descanso según La Ley de Dios?",
        "cita": "Exodo 20:8-11",
        "opciones": ["El día domingo por la mañana", "El día viernes", "El día Sábado"],
        "correcta": 2
    },
    {
        "id": 68,
        "pregunta": "¿Para beneficio de quién se dio el Sábado?",
        "cita": "S Marcos 2:27",
        "opciones": ["Fue hecho por causa del hombre", "Fue hecho para los animales", "No se sabe"],
        "correcta": 0
    },
    {
        "id": 69,
        "pregunta": "¿Quién instituyó el Sábado y cuándo lo hizo?",
        "cita": "Génesis 2:1-3",
        "opciones": ["Dios, descansó el día 7mo y lo bendijo", "Adan, al final de todo", "La serpiente en el árbol"],
        "correcta": 0
    },
    {
        "id": 70,
        "pregunta": "¿Qué día respetó nuestro Señor Jesucristo?",
        "cita": "S Lucas 4:16",
        "opciones": ["El día domingo por la mañana", "El Día de reposo, Sábado", "El día lunes tempranito"],
        "correcta": 1
    },
    {
        "id": 71,
        "pregunta": "¿Qué día guardaba la María la madre de Jesús?",
        "cita": "S Lucas 23:56",
        "opciones": ["El día domingo por la mañana", "El día viernes", "El día Sábado de reposo"],
        "correcta": 2
    },
    {
        "id": 72,
        "pregunta": "¿Qué día respetaban los apóstoles?",
        "cita": "Hechos 17:2",
        "opciones": ["El Día de reposo, Sábado", "El día miércoles", "El día Jueves por la tarde"],
        "correcta": 0
    },
    {
        "id": 73,
        "pregunta": "¿Qué día se guardará en el cielo?",
        "cita": "Isaías 66:22,23",
        "opciones": ["El Día de Reposo", "El Día de pentescostés", "El día del Sol"],
        "correcta": 0
    }
      ],
      "compromiso": "¿Crees que Dios escucha y Contesta las oraciones. Resuelves orar con fe todos los días?"
  },
  {
    "id":12,
    "titulo": "Lección 12: El Día de descanso",
    "lectura":"./Adicional/Ad2_12.png",
    "imagen": "https://i.ibb.co/Ndv6P299/Lecc-12.png",
    "preguntas": [
      {
        "id": 74,
        "pregunta": "¿Qué hizo Dios con el sábado?",
        "cita": "Génesis 2:1-3",
        "opciones": ["Lo Bendijo y lo Santificó", "No hizo nada", "Celebró ese día"],
        "correcta": 2
    },
    {
        "id": 75,
        "pregunta": "¿En qué día se deben hacer los preparativos?",
        "cita": "Éxodo 16:22,28",
        "opciones": ["En el sexto día", "En el quinto día", "En el septimo día"],
        "correcta": 0
    },
    {
        "id": 76,
        "pregunta": "¿Cuando comienza el sábado?",
        "cita": "Levítico 23:32",
        "opciones": ["El sábado en la mañana", "Despues del medio día", "A la puesta del sol del día sexto"],
        "correcta": 2
    },
    {
        "id": 77,
        "pregunta": "¿A dónde debemos ir el día sábado?",
        "cita": "S Lucas 4:16",
        "opciones": ["Al mercado", "A las plazas", "A la Iglesia"],
        "correcta": 2
    },
    {
        "id": 78,
        "pregunta": "¿Qué se puede hacer el sábado?",
        "cita": "Mateo 12:12",
        "opciones": ["Lo que quieras", "No hay limites", "Hacer el bien"],
        "correcta": 2
    },
    {
        "id": 79,
        "pregunta": "¿Qué promesa hace Dios a quie es fiel?",
        "cita": "Salmo 37:3,4,25",
        "opciones": ["Dios los sostendrá siempre", "Dios los abandonará", "Dios los volverá ricos"],
        "correcta": 0
    },
    {
        "id": 80,
        "pregunta": "¿Qué protección brindará Dios a quien lo obedece?",
        "cita": "Deuteronomio 11:13-15",
        "opciones": ["ninguna protección", "Nos abandonará a nuestra suerte por ser tan malos", "Dará la lluvia de vuestra tierra a su tiempo, la temprana y la tardía; y recogerás tu grano, tu vino y tu aceite. Daré también hierba en tu campo para tus ganados; y comerás, y te saciarás."],
        "correcta": 0
    }
      ],
      "compromiso": "He decidio guardar fielmente el santo sábado, siguiendo el ejemplode Jesús"
  },
  {
    "id":13,
    "titulo": "Lección 13: Qué es la muerte",
    "lectura":"./Adicional/Ad2_13.png",
    "imagen": "https://i.ibb.co/gbxwkdg7/Lecc-13.png",
    "preguntas": [
    {
        "id": 81,
        "pregunta": "¿Quién creó al hombre y a la mujer?",
        "cita": "Génesis 1:27; 2:7",
        "opciones": ["El Ángel Gabriel", "La serpiente", "Dios"],
        "correcta": 2
    },
    {
        "id": 82,
        "pregunta": "¿A qué compara Jesús la muerte?",
        "cita": "Juan 11:11-13",
        "opciones": ["Un estado inerte", "A una noche oscura", "Un estado de sueño"],
        "correcta": 2
    },
    {
        "id": 83,
        "pregunta": "¿Saben algo los muertos?",
        "cita": "Eclesiatés 9:5,6",
        "opciones": ["Conocen el futuro", "Conocen el pasado", "Los muertos nada saben"],
        "correcta": 2
    },
    {
        "id": 84,
        "pregunta": "¿Qué ocurre con el alma?",
        "cita": "Ezequiel 18:4",
        "opciones": ["Se queda vagando", "No pasa nada", "Vuelve a Dios"],
        "correcta": 2
    },
    {
        "id": 85,
        "pregunta": "¿En qué momento recibiremos la inmortalidad?",
        "cita": "1era Corientios 15:52-53",
        "opciones": ["En abrir y cerrar de ojos a la final trompeta", "Cuando sea el eclipse solar", "Con la lluvia de estrellas"],
        "correcta": 0
    },
    {
        "id": 86,
        "pregunta": "¿Debemos consultar a los muertos?",
        "cita": "Deuteronomio 18:10-12; Isaías 8:19,20",
        "opciones": ["Esta prohibido por Dios", "De vez en cuando", "Sólo por las noches"],
        "correcta": 0
    }
    ],
    "compromiso": "¿Confías en las maravillosas promesas de Dios. Te entregas a Jesús para obtener la vida eterna?"
  },
  {
    "id":14,
    "titulo": "Lección 14: La Iglesia de Cristo",
    "lectura":"./Adicional/Ad2_14.png",
    "imagen": "https://i.ibb.co/nsrGMWDG/Lecc-14.png",
    "preguntas": [
    {
        "id": 87,
        "pregunta": "¿Quién es la piedra angular de la iglesia?",
        "cita": "Efesios 2:20",
        "opciones": ["Pedro", "Moisés", "Jesucristo"],
        "correcta": 2
    },
    {
        "id": 88,
        "pregunta": "¿Cuáles son algunos de los dones que el señor ha dado para la edificación de su iglesia?",
        "cita": "Efesios 4:11,12",
        "opciones": ["Apóstoles, profetas, evangelistas, pastores y maestros", "Adivinos, hechiceros, videntes, horoscopistas, brujos", "Ninguna de las anteriores"],
        "correcta": 0
    },
    {
        "id": 89,
        "pregunta": "¿Cuál es la triple misión de la iglesia?",
        "cita": "Mateo 4:23",
        "opciones": ["Enseñar, Proclamar el evangelio, hacer el bien a otros, ", "Quedar inerte", "Dormir, Comer y Pasear"],
        "correcta": 0
    },
    {
        "id": 90,
        "pregunta": "¿Cómo debe gobernarse la iglesia?",
        "cita": "Hechos 6:1-4; 1era Corintios 12:25,27",
        "opciones": ["El modelo bíblico de gobierno es un liderazgo servicial y compartido", "No tiene una organización definida", "Según lo decidan los miembros de la iglesia"],
        "correcta": 0
    },
    {
        "id": 91,
        "pregunta": "¿Qué ejemplo debe seguir la iglesia?",
        "cita": "Juan 13:15",
        "opciones": ["La autodeterminación", "La autocompasión", "El ejemplo de Jesucristo"],
        "correcta": 2
    },
    {
        "id": 92,
        "pregunta": "¿Cuáles son las características de la verdadera iglesia?",
        "cita": "Apocalipsis 12:17",
        "opciones": ["La que guarda los mandamientos de Dios y guarda la fe de jesús", "La que se organiza mejor", "La que da más diezmos"],
        "correcta": 0
    },
    {
        "id": 93,
        "pregunta": "¿Qué don en particular poseerá la iglesia?",
        "cita": "Apocalipsis 19:10",
        "opciones": ["El Don de sanar", "El don de predicar", "El Don de Profecia"],
        "correcta": 2
    }
    ],
    "compromiso": "Creo que Jesús fundó la iglesia. Unirme a ella y ser fiel hasta el fin"
  },
  {
    "id":15,
    "titulo": "Lección 15: El Don de Profecía",
    "lectura":"./Adicional/Ad2_15.png",
    "imagen": "https://i.ibb.co/bjR8M95Y/Lecc-15.png",
    "preguntas": [
    {
        "id": 94,
        "pregunta": "¿A quién revela Dios sus designios?",
        "cita": "Amós 3:7",
        "opciones": ["A los apóstoles", "A los escribas", "A los profetas"],
        "correcta": 2
    },
    {
        "id": 95,
        "pregunta": "¿Cómo se comunica Dios con los profetas?",
        "cita": "Números 12:6",
        "opciones": ["De manera directa", "Hablando con ellos", "A través visiones y sueños"],
        "correcta": 2
    },
    {
        "id": 96,
        "pregunta": "¿Puede una mujer ser profeta?",
        "cita": "Joel 2:28; Hechos 21:9",
        "opciones": ["De ninguna manera", "Si pueden ser profetas", "Algunas veces"],
        "correcta": 1
    },
    {
        "id": 97,
        "pregunta": "¿Tuvo profetas la iglesia primitiva?",
        "cita": "1era Corintios 12:28",
        "opciones": ["Nunca", "Solo en el Pentescontés", "Si hubo profetas"],
        "correcta": 2
    },
    {
        "id": 98,
        "pregunta": "¿Qué está predicho del don profético en la iglesia verdadera?",
        "cita": "Apocalipsis 12:17; 19:10",
        "opciones": ["El ataque del dragón contra los fieles", "Una fiesta de celebración", "Ninguna acción"],
        "correcta": 0
    }
  ],
  "compromiso": "¿Aceptas el don profético otorgado por Dios a su iglesia?"
  },
  {
    "id":16,
    "titulo": "Lección 16: Normas Cristianas",
    "lectura":"./Adicional/Ad2_16.png",
    "imagen": "https://i.ibb.co/B5JQ3Vvy/Lecc-16.png?w=500&q=80",
    "preguntas": [
    {
        "id": 99,
        "pregunta": "¿Cómo considera Dios el cuerpo humano?",
        "cita": "1era Corintios 6:19,20",
        "opciones": ["Una casa vacía", "Templo del Espíritu santo", "Un vaso de barro"],
        "correcta": 1
    },
    {
        "id": 100,
        "pregunta": "¿Cuál es la alimentación ideal para los seres humanos?",
        "cita": "Génesis 1:29",
        "opciones": ["Toda la proteína animal", "Frutas, plantas y semillas", "Sólo lecha animal"],
        "correcta": 1
    },
    {
        "id": 101,
        "pregunta": "¿Qué carnes son particularmente inconvenientes?",
        "cita": "Levítico 11:3-20",
        "opciones": ["Animales que tiene  pezuña hendida y rumian", "Animales que no tienen pezuña hendida y rumian", "Animales que no tienen pezuña hendida y no rumian"],
        "correcta": 0
    },
    {
        "id": 102,
        "pregunta": "¿Por qué prescindimos de bebidas alcohólicas?",
        "cita": "Probervios 20:1",
        "opciones": ["Porque cualquiera que ceda a ellas no es sabio", "Porque nos hace más poderosos", "Porque no nos hace importantes"],
        "correcta": 0
    },
    {
        "id": 103,
        "pregunta": "¿Por qué conviene abstenerse del tabaco, las drogas, el café y otras sustancias dañinas?",
        "cita": "1era Corintios 3:16,17",
        "opciones": ["Porque debemos cuidar nuestro cuerpo", "De ninguna manera", "Todo es lícito"],
        "correcta": 0
    },
    {
        "id": 104,
        "pregunta": "¿Cómo debe ser nuestro arreglo personal?",
        "cita": "1era Timoteo 2:9,10",
        "opciones": ["A la última moda", "Clásico comtemporáneo", "Con modestia y decoro"],
        "correcta": 2
    },
    {
        "id": 105,
        "pregunta": "¿Por qué debemos elegir cuidadosamente nuestros pasatiempos (películas, música, lectura,  etc.?",
        "cita": "Filipenses 4:8; Colosenses 3:2",
        "opciones": ["Porque si hay virtud alguna en esto pensad", "Para pasar el tiempo bien", "Para no aburrirnos"],
        "correcta": 0
    },
  ],
  "compromiso": "¿Crees que tu cuerpo es templo del Espiritu Santo. Por lo tanto, te abstienes de todo alimento y bebida perjudiciales; además, adoptarás un estilo de vida cristiana en tu forma de vestir y de recrearte ?"
},
{
    "id":17,
    "titulo": "Lección 17: El Bautismo",
    "lectura":"./Adicional/Ad2_17.png",
    "imagen": "https://i.ibb.co/fVzgVcP3/Lecc-17.png?w=500&q=80",
    "preguntas": [
    {
        "id": 106,
        "pregunta": "¿Quién estableció el bautismo?",
        "cita": "Mateo 28:18-20",
        "opciones": ["Jesucristo", "El Angel Gabriel", "Juan El Bautista"],
        "correcta": 0
    },
    {
        "id": 107,
        "pregunta": "¿Qué simboliza el bautismo bíblico (el que se practica por medio de la inmersión en el agua?",
        "cita": "Romanos 6:4,5",
        "opciones": ["Simboliza vivir para siempre", "Simboliza calidad de vida", "Simboliza muerte al pecado"],
        "correcta": 2
    },
    {
        "id": 108,
        "pregunta": "¿Quéimportancia tiene el bautismo para el creyente?",
        "cita": "Marcos 16:15,16",
        "opciones": ["Recoge el mandato final a sus discipulos", "No tiene efecto alguno", "Ninguna importancia"],
        "correcta": 0
    },
    {
        "id": 109,
        "pregunta": "¿Qué dos bendiciones se reciben con el bautismo?",
        "cita": "Hechos 2:38",
        "opciones": ["Un millón de dólares", "Nada en absoluto", "Perdón de pecados y el Don de Profecía"],
        "correcta": 2
    },
    {
        "id": 110,
        "pregunta": "¿A qué institución divina se unen los bautizados?",
        "cita": "Hechos 2:41,42,47",
        "opciones": ["Al ministerio de Jesús", "A la Santa Iglesia", "Al Grupu pequeño"],
        "correcta": 1
    },
    {
        "id": 111,
        "pregunta": "¿Qué cambio produce el bautismo?",
        "cita": "Romanos 6:4",
        "opciones": ["Andar en vida nueva", "Andar como siempre", "No hay cambios"],
        "correcta": 0
    }
  ],
  "compromiso": "¿Crees en el bautismo por inmersión. Deseas ser bautizado siguiendo el ejemplo de Jesús?"
},
{
    "id":18,
    "titulo": "Lección 18: Socios de Dios",
    "lectura":"./Adicional/Ad2_18.png",
    "imagen": "https://i.ibb.co/hJMpxpXF/Lecc-18.png?w=500&q=80",
    "preguntas": [
    {
        "id": 112,
        "pregunta": "¿A quién pertenece el universo?",
        "cita": "Salmo 24:1; 50:12",
        "opciones": ["Jesucristo", "De Jehová es la Tierra...,El Mundo y los que en el habitan", "A Lucifer"],
        "correcta": 1
    },
    {
        "id": 113,
        "pregunta": "¿Qué enormes riquezas posee Dios?",
        "cita": "Ageo 2:8",
        "opciones": ["La plata y el oro", "Los diamantes y el cobre", "El niquel y el uránio"],
        "correcta": 0
    },
    {
        "id": 114,
        "pregunta": "¿Gracias a quién obtenemos nuestros bienes?",
        "cita": "Deuteronomio 8:17,18",
        "opciones": ["A nadie", "A Dios", "A mi trabajo"],
        "correcta": 1
    },
    {
        "id": 115,
        "pregunta": "¿Qué proporción de nuestros ingresos pertenece a Dios?",
        "cita": "Levítico 27:30,32; Mateo 23:23",
        "opciones": ["Todo", "Una décima parte", "El 50%"],
        "correcta": 1
    },
    {
        "id": 116,
        "pregunta": "¿De cuánto tenemos que dar el diezmo?",
        "cita": "Deuteronomio 14:22",
        "opciones": ["De la mitat", "De un tercio", "De todo"],
        "correcta": 2
    },
    {
        "id": 117,
        "pregunta": "¿Para qué se emplea el diezmo?",
        "cita": "1era Corinetios 9:13,14",
        "opciones": ["Para las fiestas", "Para los pobres", "Para el sosten de la Obra de Dios"],
        "correcta": 2
    },
    {
        "id": 118,
        "pregunta": "¿Qué bendición promete Dios?",
        "cita": "Malaquías 3:10",
        "opciones": ["Bendiciones hasta que sobreabunden", "Bendiciones por un mes", "Bendiciones para ti nada más"],
        "correcta": 0
    }
  ],
   "compromiso": "¿Te comprometes a entregar con alegría lo que pertenece a Dios?"
},
{
    "id":19,
    "titulo": "Lección 19: La Vida Cristiana",
    "lectura":"./Adicional/Ad2_19.png",
    "imagen": "https://i.ibb.co/0v72RCh/Lecc-19.png?w=500&q=80",
    "preguntas": [
    {
        "id": 119,
        "pregunta": "¿Qué cambio ocurre en la vida al aceptar a Jesús?",
        "cita": "2da Corintios 5:17",
        "opciones": ["Sigue igual", "Mejora un poquito", "Pasa a ser una nueva criatura"],
        "correcta": 2
    },
    {
        "id": 120,
        "pregunta": "¿Qué nueva experiencia tendremos?",
        "cita": "1era Tesalonicenses 5:23",
        "opciones": ["Conservarnos puros hasat el retorno de Jesús", "Vivir los últimos días con dignidad", "Conservar el mismo carácter de siempre"],
        "correcta": 0
    },
    {
        "id": 121,
        "pregunta": "¿Cuál es la actitud correcta ante las pruebas?",
        "cita": "!era Pedro 4:12,13",
        "opciones": ["No debemos sorprendernos", "Estar preocupados", "Salir de viaje"],
        "correcta": 0
    },
    {
        "id": 122,
        "pregunta": "¿Cuál es el el indispensable alimento espiritual diario?",
        "cita": "Deuteronomio 6:6-9; Jeremías 15:16",
        "opciones": ["Estudiar la Palabra de Dios", "Comer carne", "Comer pollo"],
        "correcta": 0
    },
    {
        "id": 123,
        "pregunta": "¿Cómo establecemos comunión con Dios?",
        "cita": "1era Tesalonicenses 5:17",
        "opciones": ["Cantando", "Orando", "Hablando"],
        "correcta": 1
    },
    {
        "id": 124,
        "pregunta": "¿Qué día debemos dedicar a la adoración a Dios?",
        "cita": "Isaías 58:12-14",
        "opciones": ["El día de reposo (domingo)", "El día de reposo (viernes)", "El día de reposo sábado"],
        "correcta": 2
    },
    {
        "id": 125,
        "pregunta": "¿CQué acostumbraba a ahcer Jesús los sábados?",
        "cita": "Lucas 4:16",
        "opciones": ["Ir al jardín de los olivos", "Irs a ver a sus hermanos", "Ir a la sinagoga"],
        "correcta": 2
    },
    {
        "id": 126,
        "pregunta": "¿Qué misión confió Dios a su iglesia?",
        "cita": "Mateo 24:14; 28:19",
        "opciones": ["Predicad el evangelio", "Cantar todos los sábados", "Salir a visitar"],
        "correcta": 0
    }
  ],
  "compromiso": "¿Con la ayuda de Dios, y siguiendo a jesús, procurarás ser fiel?"
},
{
    "id":20,
    "titulo": "Lección 20: Dios nos llama",
    "imagen": "https://i.ibb.co/WNDMWzc2/Lecc-20.png?w=500&q=80",
    "preguntas": [
    {
        "id": 127,
        "pregunta": "¿Cuál es la invitación que nos hace el Señor?",
        "cita": "Hechos 2:38",
        "opciones": ["Arrepentirnos y bautizarnos", "Seguir viviendo felices", "No pasará nada"],
        "correcta": 0
    },
    {
        "id": 128,
        "pregunta": "¿Qué llamado dirigió Jesús a Mateo?",
        "cita": "Lucas 5:27",
        "opciones": ["Ven y sígueme", "Vete a tu casa", "Llamado de atención"],
        "correcta": 0
    },
    {
        "id": 129,
        "pregunta": "¿Cómo respondió Mateo?",
        "cita": "Lucas 5:28",
        "opciones": ["Se quedó mudo", "Salió corriéndo", "Dejo todo y le siguió"],
        "correcta": 2
    },
    {
        "id": 130,
        "pregunta": "¿Qué tierno otro llamado hace Jesús?",
        "cita": "Apocalipsis 3:20",
        "opciones": ["Todos vengan conmigo", "Súbete a mi moto", "El está a la puerta y llama"],
        "correcta": 2
    },
    {
        "id": 131,
        "pregunta": "¿Qué decisión debemos tomar?",
        "cita": "Hechos 22:16",
        "opciones": ["Levántate y Bautízate", "Seguir la senda ancha", "Caminar solo por la vida"],
        "correcta": 0
    }
  ],
  "compromiso":"¿Reconoces que el señor Jesús te llama para unirte a su Iglesia. Gozoso respóndes a su invitación y le entregas tu vida"
}
];

// REEMPLAZA ESTE ENLACE CON TU PROPIA URL DE APPS SCRIPT QUE COPIASTE EN EL PASO 3
const URL_GOOGLE_SCRIPT = "https://script.google.com/macros/s/AKfycbya4hOl-h-FTf5k8E4RjqYzUJFhS0ZsRGI1QgT3drx1sdA1rDqXMhR6tl4A7GsX4WqV/exec";

let estudianteActual = "Invitado Anónimo";

let leccionActual = null;
let respuestasUsuario = {};

// --- CONTROL DE VISTAS ---

function mostrarMenu() {
    document.getElementById('app-header').style.display = 'block';
    document.getElementById('vista-leccion').classList.remove('activa');
    document.getElementById('vista-felicitacion').classList.remove('activa');
    document.getElementById('vista-menu').classList.add('activa');
    cargarMenuPrincipal();
}

function mostrarLeccion(idLeccion) {
    leccionActual = leccionesData.find(l => l.id === idLeccion);
    respuestasUsuario = {}; 
    
    document.getElementById('vista-menu').classList.remove('activa');
    document.getElementById('vista-leccion').classList.add('activa');
    document.getElementById('btn-siguiente').style.display = 'none';
    document.getElementById('progreso').style.width = '0%';
    
    // --- ASEGURAR QUE LAS PREGUNTAS SE VEAN AL ENTRAR Y LA LECTURA ESTÉ OCULTA ---
    document.getElementById('contenido-preguntas-bloque').style.display = 'block';
    document.getElementById('bloque-lectura-interno').style.display = 'none';
    
    cargarContenidoLeccion();
}

function mostrarFelicitaciones() {
    document.getElementById('app-header').style.display = 'none'; // Escondemos header para dar protagonismo
    document.getElementById('vista-menu').classList.remove('activa');
    document.getElementById('vista-leccion').classList.remove('activa');
    document.getElementById('vista-felicitacion').classList.add('activa');
}

// --- GENERACIÓN DE INTERFAZ ---

function cargarMenuPrincipal() {
    const contenedor = document.getElementById('contenedor-menu');
    contenedor.innerHTML = '';

    const completadas = JSON.parse(localStorage.getItem('leccionesCompletadas')) || [];

    leccionesData.forEach(leccion => {
        const estaCompletada = completadas.includes(leccion.id);
        
        const itemHTML = `
            <div class="item-leccion ${estaCompletada ? 'completada' : ''}" onclick="mostrarLeccion(${leccion.id})">
                <div class="item-leccion-info">
                    <h3>${leccion.titulo}</h3>
                </div>
                <span class="badge ${estaCompletada ? 'hecho' : 'pendiente'}">
                    ${estaCompletada ? '✓ Hecho' : 'Pendiente'}
                </span>
            </div>
        `;
        contenedor.innerHTML += itemHTML;
    });

    // Evaluar si completó absolutamente TODO el curso (20 lecciones)
    evaluarEstadoCertificado(completadas.length);
}

function cargarContenidoLeccion() {
    document.getElementById('leccion-titulo').innerText = leccionActual.titulo;
    const contenedor = document.getElementById('contenedor-preguntas');
    contenedor.innerHTML = '';

    // --- CONTROL INTELIGENTE AUTOMÁTICO PARA TODAS LAS LECCIONES ---
    const btnLectura = document.getElementById('btn-lectura');
    if (btnLectura) {
        if (leccionActual.lectura) {
            btnLectura.style.display = 'block'; // Muestra el botón si la lección tiene lectura complementaria
        } else {
            btnLectura.style.display = 'none';  // Lo oculta por completo si no tiene
        }
    }

    if (leccionActual.imagen && leccionActual.imagen.startsWith('http')) {
        contenedor.innerHTML += `<img src="${leccionActual.imagen}" alt="${leccionActual.titulo}" class="leccion-banner">`;
    }

    leccionActual.preguntas.forEach((p, indexPregunta) => {
        let preguntaHTML = `
            <div class="card-pregunta">
                <div class="cita-tag">📖 Leer: ${p.cita}</div>
                <div class="texto-pregunta">${indexPregunta + 1}. ${p.pregunta}</div>
                <div id="opciones-p${p.id}">
        `;

        p.opciones.forEach((opcion, indexOpcion) => {
            preguntaHTML += `
                <button class="opcion-btn" onclick="seleccionarOpcion(${p.id}, ${indexOpcion}, this)">
                    ${opcion}
                </button>
            `;
        });

        preguntaHTML += `</div></div>`;
        contenedor.innerHTML += preguntaHTML;
    });
}

// --- LÓGICA DE INTERACCIÓN ---

function seleccionarOpcion(preguntaId, opcionIndex, elemento) {
    const pregunta = leccionActual.preguntas.find(p => p.id === preguntaId);
    const hermanos = elemento.parentNode.children;
    
    for(let boton of hermanos) {
        boton.disabled = true;
        boton.style.opacity = "0.5";
    }

    elemento.style.opacity = "1";
    elemento.classList.add('seleccionada');

    respuestasUsuario[preguntaId] = opcionIndex;

    // --- NUEVO: ENVÍO AUTOMÁTICO A LA NUBE ---
    const datosARegistrar = {
        estudiante: estudianteActual,
        leccion: leccionActual.titulo,
        pregunta: pregunta.pregunta,
        respuesta: pregunta.opciones[opcionIndex],
        compromiso: "N/A" // En este punto aún no evalúa el compromiso
    };
    
    sincronizarConGoogleSheets(datosARegistrar);
    // ----------------------------------------

    actualizarProgreso();
}

function actualizarProgreso() {
    const totalPreguntas = leccionActual.preguntas.length;
    const respondidas = Object.keys(respuestasUsuario).length;
    const porcentaje = (respondidas / totalPreguntas) * 100;
    
    document.getElementById('progreso').style.width = `${porcentaje}%`;

    if (respondidas === totalPreguntas) {
        document.getElementById('btn-siguiente').style.display = 'block';
    }
}

function evaluarCompromiso() {
    let acepta = confirm(`Compromiso de Fe:\n\n${leccionActual.compromiso}`);
    
    if(acepta) {
        let completadas = JSON.parse(localStorage.getItem('leccionesCompletadas')) || [];
        
        if (!completadas.includes(leccionActual.id)) {
            completadas.push(leccionActual.id);
            localStorage.setItem('leccionesCompletadas', JSON.stringify(completadas));
        }

        // --- REGISTRAR COMPROMISO EN LA NUBE ---
        const datosCompromiso = {
            estudiante: estudianteActual,
            leccion: leccionActual.titulo,
            pregunta: "SECCIÓN DE COMPROMISO FINAL",
            respuesta: leccionActual.compromiso,
            compromiso: "SÍ"
        };
        sincronizarConGoogleSheets(datosCompromiso);
        // ---------------------------------------------

        alert("¡Excelente! Tu decisión ha sido registrada. 🙏");

        // --- DIAGNÓSTICO EN CONSOLA ---
        console.log("Lecciones completadas actualmente:", completadas.length);
        console.log("Total de lecciones del curso:", leccionesData.length);

        // CONDICIÓN BLINDADA: Solo pasa si completó las 20 lecciones del banco de datos
        if (completadas.length === leccionesData.length) {
            mostrarFelicitaciones();
        } else {
            mostrarMenu(); // Esto lo devolverá a la lista de lecciones obligatoriamente
        }
    }
}

// --- GESTIÓN DEL CERTIFICADO ---

function evaluarEstadoCertificado(cantCompletadas) {
    const contenedorCert = document.getElementById('contenedor-certificado-menu');
    const total = leccionesData.length;

    if (cantCompletadas === total) {
        contenedorCert.innerHTML = `
            <div class="seccion-certificado-desbloqueado">
                <h3 style="color: #92400e; margin-bottom: 6px;">🏆 ¡Curso Completado!</h3>
                <p style="font-size: 0.9rem; color: #78350f; margin-bottom: 12px;">Has finalizado con éxito las ${total} lecciones.</p>
                <button class="btn-action btn-accent" style="margin: 0; padding: 10px;" onclick="mostrarFelicitaciones()">Reclamar Certificado</button>
            </div>
        `;
    } else {
        contenedorCert.innerHTML = `
            <div class="seccion-certificado-bloqueado">
                <p style="font-size: 0.9rem; color: var(--text-muted);">
                    🔒 Certificado disponible al completar todo el curso (${cantCompletadas}/${total} lecciones).
                </p>
            </div>
        `;
    }
}

function generarCertificado() {
    const nombre = document.getElementById('nombre-estudiante').value.trim();
    
    if (nombre === "") {
        alert("Por favor, introduce tu nombre para personalizar el certificado.");
        return;
    }

    // Configurar los campos del certificado imprimible oculto
    document.getElementById('cert-nombre-txt').innerText = nombre;
    
    const fechaActual = new Date();
    const fechaFormateada = `${fechaActual.getDate()}/${fechaActual.getMonth() + 1}/${fechaActual.getFullYear()}`;
    document.getElementById('cert-fecha-txt').innerText = `Fecha de emisión: ${fechaFormateada}`;

    // Disparar la ventana de impresión nativa del sistema
    // En móviles/PC esto abrirá la opción de "Guardar como PDF" de forma automática
    window.print();
}

// Función conectora encargada del envío en segundo plano
function sincronizarConGoogleSheets(datos) {
    // CORREGIDO: Ahora solo bloquea el envío si olvidaste cambiar la URL de plantilla
    if(!URL_GOOGLE_SCRIPT || URL_GOOGLE_SCRIPT.includes("AQUÍ_VA_TU_ID_DE_SCRIPT")) {
        console.warn("Transmisión local: Falta configurar la URL real de Google Apps Script.");
        return;
    }

    fetch(URL_GOOGLE_SCRIPT, {
        method: 'POST',
        mode: 'no-cors', // Evita problemas de restricciones en entornos compilados/móviles
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    })
    .then(() => console.log("Datos despachados hacia la API de Google Sheets."))
    .catch(err => console.error("Error de conexión al sincronizar:", err));
}

// Actualizar el nombre del estudiante global cuando empiece a escribirlo en el casillero del certificado
document.addEventListener("DOMContentLoaded", () => {
    const inputNombre = document.getElementById('nombre-estudiante');
    if(inputNombre) {
        inputNombre.addEventListener('input', (e) => {
            estudianteActual = e.target.value.trim() || "Invitado Anónimo";
        });
    }
});

// --- NUEVAS FUNCIONES PARA LECTURA COMPLEMENTARIA ---

function abrirLecturaAdicional() {
    if (leccionActual && leccionActual.lectura) {
        const imgElement = document.getElementById('img-lectura-adicional');
        
        let rutaLimpia = leccionActual.lectura;
        if (rutaLimpia.startsWith('./')) {
            rutaLimpia = rutaLimpia.substring(2);
        }

        imgElement.src = rutaLimpia;

        // Ocultamos las preguntas y el botón naranja, mostramos la lectura
        document.getElementById('contenido-preguntas-bloque').style.display = 'none';
        document.getElementById('btn-lectura').style.display = 'none';
        document.getElementById('bloque-lectura-interno').style.display = 'block';

        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        alert("No hay material adicional registrado para esta lección.");
    }
}

function cerrarLecturaAdicional() {
    // Ocultamos la lectura, volvemos a mostrar las preguntas y el botón naranja
    document.getElementById('bloque-lectura-interno').style.display = 'none';
    document.getElementById('contenido-preguntas-bloque').style.display = 'block';
    document.getElementById('btn-lectura').style.display = 'block';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Inicialización
window.onload = cargarMenuPrincipal;
// Al final de tu app.js, donde inicializas el curso:
if (estudianteActual) {
    mostrarMenu();
}
