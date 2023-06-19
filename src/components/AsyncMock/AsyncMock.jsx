const products = [
    {
      id: 1,
      name: "FIFA 23",
      img: "https://bolavip.com/__export/1671668411392/sites/bolavip/img/2022/12/21/campeon_crop1671668411063.jpg_242310155.jpg",
      category: "Deportes",
      description: "Disfruta del fútbol virtual con gráficos impresionantes y emocionantes modos de juego.",
      price: 49.99,
      stock: 5,
      platform: "PlayStation 5, Xbox Series X/S, PlayStation 4, Xbox One, PC"
    },
    {
        id: 2,
        name: "WoW: Wrath of the Lich King Classic™",
        img: "https://i.ytimg.com/vi/SivbL5wproA/maxresdefault.jpg",
        category: "MMORPG",
        description: "World of Warcraft es un popular juego de rol multijugador masivo en línea (MMORPG) desarrollado por Blizzard Entertainment. Ambientado en un vasto mundo de fantasía llamado Azeroth, los jugadores pueden crear y personalizar sus propios personajes de diferentes razas y clases. Exploran un mundo lleno de misiones, combates contra monstruos, mazmorras desafiantes y batallas jugador contra jugador. Con una comunidad masiva, actualizaciones regulares y una historia épica, World of Warcraft ofrece una experiencia inmersiva y emocionante para los amantes de los juegos de rol y la exploración en línea.",
        price: 13.99,
        stock: 12,
        platform: "PC"
    },
    {
      id: 3,
      name: "Path Of Exile",
      img: "https://cdn.cloudflare.steamstatic.com/steam/apps/238960/header.jpg?t=1680737814",
      category: "ARPG",
      description: "Path of Exile es un juego de rol y acción en línea con un mundo oscuro de fantasía llamado Wraeclast. Los jugadores luchan contra monstruos, completan misiones y mejoran su equipamiento. Destaca por su sistema de habilidades flexible y su alta dificultad. También tiene un sistema de comercio y se actualiza regularmente con nuevo contenido.",
      price: 0,
      stock: 10,
      platform: "PlayStation 4, Xbox One, PC"
    },
    {
      id: 4,
      name: "Assassin's Creed Valhalla",
      img: "https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC%20KINGDOM%20PREORDER_STANDARD%20EDITION_EPIC_Key_Art_Wide_3840x2160-3840x2160-485fe17203671386c71bde8110886c7d.jpg",
      category: "Acción y aventura",
      description: "Embárcate en una épica saga vikinga en la última entrega de la serie Assassin's Creed.",
      price: 69.99,
      stock: 3,
      platform: "PlayStation 5, Xbox Series X/S, PlayStation 4, Xbox One, PC"
    },
    {
      id: 5,
      name: "Call of Duty: Modern Warfare",
      img: "https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/kronos/common/social-share/social-share-image.jpg",
      category: "Acción",
      description: "Sumérgete en una intensa experiencia de combate moderno en el galardonado Call of Duty.",
      price: 59.99,
      stock: 8,
      platform: "PlayStation 5, Xbox Series X/S, PlayStation 4, Xbox One, PC"
    },
    {
      id: 6,
      name: "Red Dead Redemption 2",
      img: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg?t=1618851907",
      category: "Acción y aventura",
      description: "Explora el salvaje oeste en este épico juego de mundo abierto de los creadores de GTA.",
      price: 59.99,
      stock: 4,
      platform: "PlayStation 5, Xbox Series X/S, PlayStation 4, Xbox One, PC"
    },
    {
      id: 7,
      name: "Minecraft",
      img: "https://gaming-cdn.com/images/products/442/orig-fallback-v1/minecraft-java-y-bedrock-edition-pc-juego-cover.jpg?v=1674156218",
      category: "Sandbox",
      description: "Construye y explora un mundo infinito lleno de posibilidades en el popular juego de bloques.",
      price: 29.99,
      stock: 15,
      platform: "PlayStation 5, Xbox Series X/S, PlayStation 4, Xbox One, Nintendo Switch, PC"
    },
    {
      id: 8,
      name: "Resident Evil Village",
      img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1196590/header.jpg?t=1681094558",
      category: "Survival Horror",
      description: "Enfréntate a horrores sobrenaturales en el escalofriante pueblo de Resident Evil.",
      price: 69.99,
      stock: 2,
      platform: "PlayStation 5, Xbox Series X/S, PlayStation 4, Xbox One, PC"
    },
    {
      id: 9,
      name: "Resident Evil 4",
      img: "https://cdn.akamai.steamstatic.com/steam/apps/254700/header.jpg?t=1679690571",
      category: "Survival Horror",
      description: "Resident Evil 4 es un juego de terror y acción que sigue la historia de Leon S. Kennedy en su misión de rescatar a la hija del presidente de los Estados Unidos en un oscuro pueblo plagado de criaturas infectadas, combinando una jugabilidad intensa, una trama envolvente y una atmósfera inquietante.",
      price: 19.99,
      stock: 6,
      platform: "PlayStation 4, Xbox One, PC"
    },
    {
      id: 10,
      name: "The Last of Us Part II",
      img: "https://i.ytimg.com/vi/Ibn9uxH5PdM/maxresdefault.jpg",
      category: "Acción y aventura",
      description: "Embárcate en una emotiva y peligrosa aventura en un mundo postapocalíptico infestado de infectados.",
      price: 59.99,
      stock: 7,
      platform: "PlayStation 4"
    },
    {
      id: 11,
      name: "Cyberpunk 2077",
      img: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg?t=1680026109",
      category: "Rol",
      description: "Sumérgete en la oscura metrópolis de Night City en este juego futurista de mundo abierto.",
      price: 49.99,
      stock: 4,
      platform: "PlayStation 5, Xbox Series X/S, PlayStation 4, Xbox One, PC"
    },
    {
      id: 12,
      name: "Halo Infinite",
      img: "https://cdn.akamai.steamstatic.com/steam/apps/1240440/capsule_616x353.jpg?t=1683115079",
      category: "Disparos",
      description: "Únete al Jefe Maestro en su nueva misión para salvar la galaxia en esta esperada entrega de Halo.",
      price: 59.99,
      stock: 5,
      platform: "Xbox Series X/S, PC"
    },
    {
      id: 13,
      name: "Sekiro™: Shadows Die Twice - GOTY",
      img: "https://cdn.akamai.steamstatic.com/steam/apps/814380/header.jpg?t=1678991267",
      category: "Acción y aventura",
      description: "Experimenta ser un shinobi del Período Sengoku, conocido como Lobo, que intenta vengarse de un clan de samuráis que atacó y secuestró a su maestro.",
      price: 59.99,
      stock: 8,
      platform: "PlayStation 4, Xbox One"
    },
    {
      id: 14,
      name: "Marvel's Spider-Man: Miles Morales",
      img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1817190/header.jpg?t=1672784176",
      category: "Acción y aventura",
      description: "Sigue los pasos de Miles Morales mientras se balancea por Nueva York en este emocionante juego de Spider-Man.",
      price: 49.99,
      stock: 6,
      platform: "PlayStation 5, PlayStation 4"
    },
    {
      id: 15,
      name: "Resident Evil 3",
      img: "https://steamcdn-a.akamaihd.net/steam/apps/952060/header.jpg",
      category: "Survival Horror",
      description: "Vive el terror en las calles de Raccoon City en este remake del clásico juego de Resident Evil.",
      price: 39.99,
      stock: 5,
      platform: "PlayStation 4, Xbox One, PC"
    },
    {
      id: 16,
      name: "Genshin Impact",
      img: "https://cdn2.unrealengine.com/key-art-3840x2160-0d97dea78d6f.png",
      category: "RPG",
      description: "Explora un vasto mundo de fantasía y desata poderosos ataques en este popular juego de rol de acción.",
      price: 0,
      stock: 20,
      platform: "PlayStation 5, PlayStation 4, PC, Android, iOS"
    },
    {
      id: 17,
      name: "The Elder Scrolls V: Skyrim",
      img: "https://cdn.cloudflare.steamstatic.com/steam/apps/489830/header.jpg?t=1650909796",
      category: "Rol",
      description: "Sumérgete en la épica y vasta tierra de Skyrim en este juego de rol aclamado por la crítica.",
      price: 39.99,
      stock: 3,
      platform: "PlayStation 4, Xbox One, Nintendo Switch, PC"
    },
    {
      id: 18,
      name: "Ghost of Tsushima",
      img: "https://sm.ign.com/t/ign_es/screenshot/default/got-keyart-80677_3tev.1280.jpg",
      category: "Acción y aventura",
      description: "Explora el Japón feudal y conviértete en un samurái en este impresionante juego de mundo abierto.",
      price: 59.99,
      stock: 9,
      platform: "PlayStation 4"
    },
    {
      id: 19,
      name: "Elden Ring",
      img: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg?t=1683618443",
      category: "Rol",
      description: "Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden y encumbrarte como señor del Círculo en las Tierras Intermedias.",
      price: 59.99,
      stock: 15,
      platform: "PlayStation 5, PlayStation 4, Xbox One, PC"
    },
    {
      id: 20,
      name: "God of War",
      img: "https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S1_2560x1440-5d74d9b240bba8f2c40920dcde7c5c67_2560x1440-5d74d9b240bba8f2c40920dcde7c5c67?h=270&quality=medium&resize=1&w=480",
      category: "Acción y aventura",
      description: "Acompaña a Kratos en su épica misión de venganza en este reinicio de la aclamada serie God of War.",
      price: 19.99,
      stock: 6,
      platform: "PlayStation 4, PC"
    },
    {
      id: 21,
      name: "Animal Crossing: New Horizons",
      img: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000027619/9989957eae3a6b545194c42fec2071675c34aadacd65e6b33fdfe7b3b6a86c3a",
      category: "Simulación",
      description: "Crea tu propia isla paradisíaca y disfruta de la vida virtual en este encantador juego de simulación.",
      price: 59.99,
      stock: 10,
      platform: "Nintendo Switch"
    },
    {
      id: 22,
      name: "Destiny 2",
      img: "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2017/07/destiny-2-art.jpg?fit=1900%2C1068&quality=50&strip=all&ssl=1",
      category: "Disparos",
      description: "Únete a otros guardianes y defiende la última ciudad segura de la Tierra en este juego de disparos en línea.",
      price: 0,
      stock: 8,
      platform: "PlayStation 5, Xbox Series X/S, PlayStation 4, Xbox One, PC"
    },
    {
      id: 23,
      name: "Uncharted 4: A Thief's End",
      img: "https://i.ytimg.com/vi/Ow2cL-pp6p8/maxresdefault.jpg",
      category: "Acción y aventura",
      description: "Acompaña a Nathan Drake en su última y emocionante aventura en busca de un legendario tesoro pirata.",
      price: 19.99,
      stock: 3,
      platform: "PlayStation 4"
    },
    {
      id: 24,
      name: "Fortnite",
      img: "https://cdn1.epicgames.com/offer/fn/24BR_S24_EGS_Launcher_Blade_2560x1440_2560x1440-437d0424d02f5fd286ab659ddade30db?h=270&quality=medium&resize=1&w=480",
      category: "Battle Royale",
      description: "Únete a millones de jugadores en este popular juego de supervivencia y construcción en línea.",
      price: 0,
      stock: 20,
      platform: "PlayStation 5, Xbox Series X/S, PlayStation 4, Xbox One, Nintendo Switch, PC, Android, iOS"
    },
    {
      id: 25,
      name: "The Witcher 3: Wild Hunt",
      img: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg?t=1675178392",
      category: "Rol",
      description: "Embárcate en una épica cacería de monstruos en este aclamado juego de rol de mundo abierto.",
      price: 39.99,
      stock: 4,
      platform: "PlayStation 4, Xbox One, Nintendo Switch, PC"
    },
    {
      id: 26,
      name: "Super Smash Bros. Ultimate",
      img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000012332/ac4d1fc9824876ce756406f0525d50c57ded4b2a666f6dfe40a6ac5c3563fad9",
      category: "Lucha",
      description: "Lucha con personajes icónicos de diferentes franquicias en este juego de lucha para hasta 8 jugadores.",
      price: 59.99,
      stock: 6,
      platform: "Nintendo Switch"
    },
    {
      id: 27,
      name: "Mortal Kombat 11",
      img: "https://cdn.akamai.steamstatic.com/steam/apps/976310/header.jpg?t=1684790351",
      category: "Lucha",
      description: "Participa en brutales combates cuerpo a cuerpo con personajes icónicos en el último juego de la serie Mortal Kombat.",
      price: 49.99,
      stock: 7,
      platform: "PlayStation 4, Xbox One, Nintendo Switch, PC"
    },
    {
      id: 28,
      name: "Grand Theft Auto V",
      img: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg?t=1678296348",
      category: "Acción y aventura",
      description: "Explora el vasto mundo abierto de Los Santos en este aclamado juego de la serie Grand Theft Auto.",
      price: 29.99,
      stock: 5,
      platform: "PlayStation 5, PlayStation 4, Xbox One, PC"
    },
    {
      id: 29,
      name: "Super Mario Party",
      img: "https://s3.gaming-cdn.com/images/products/3002/orig/super-mario-party-switch-switch-juego-nintendo-eshop-europe-cover.jpg?v=1653562253",
      category: "Tablero",
      description: "Disfruta de divertidos minijuegos y competiciones con tus amigos en este juego de fiesta de Mario.",
      price: 59.99,
      stock: 8,
      platform: "Nintendo Switch"
    },
    {
      id: 30,
      name: "Resident Evil 2 Remake",
      img: "https://cdn.cloudflare.steamstatic.com/steam/apps/883710/capsule_616x353.jpg?t=1682297945",
      category: "Survival Horror",
      description: "Revive el clásico survival horror en esta espectacular remake del juego de Resident Evil 2.",
      price: 39.99,
      stock: 10,
      platform: "PlayStation 4, Xbox One, PC"
    },
    {
      id: 31,
      name: "Bloodborne",
      img: "https://image.api.playstation.com/vulcan/img/rnd/202010/2614/KKLEVc2SIIgrFVjsZChZJk1d.jpg",
      category: "ARPG",
      description: "Encarna como el 'Cazador', un personaje que tendrá que buscar una misteriosa sustancia llamada Sangre pálida en la decrépita ciudad de Yharnam, cuyos habitantes han sido infectados por una misteriosa enfermedad sanguínea.",
      price: 34.99,
      stock: 3,
      platform: "PlayStation 4"
    },
    {
      id: 32,
      name: "The Outlast Trials",
      img: "https://cdn1.epicgames.com/6504cc61472e498796e0b4963a201438/offer/EGS_TheOutlastTrials_RedBarrels_S1-2560x1440-94e9ca382991373a4a464665014a78d4.jpg",
      category: "Survival Horror",
      description: "Ambientada en la era de la Guerra Fría, la buena gente de Murkoff Corporation recluta involuntariamente conejillos de indias humanos para probar métodos avanzados de lavado de cerebro y control mental. En un mundo de desonfianza, miedo y violencia, tu moral será desafiada, tu resistencia será puesta a prueba y tu cordura será aplastada. Todo en nombre del progreso, la ciencia y el beneficio. Sobrevive junto a tus amigos o atrévete a afrontar los experimentos tú solo.",
      price: 10.99,
      stock: 7,
      platform: "PC"
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
      }, 500)
  })
}

export const getProductsById = (productId) => {
    return new Promise ((resolve) => {
      setTimeout(() => {
          resolve(products.find(prod => prod.id === parseInt(productId)))
      }, 500);
  })
}

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve(products.filter(prod => prod.category === category))
    }, 500)
  })
}