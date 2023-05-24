const products = [
    {
      id: 1,
      name: "The Legend of Zelda: Breath of the Wild",
      img: "./Img/Juegos/",
      category: "Acción y aventura",
      description: "Explora el vasto mundo de Hyrule en esta emocionante aventura de Zelda.",
      price: 59.99,
      stock: 10,
      platform: "Nintendo Switch"
    },
    {
      id: 2,
      name: "FIFA 23",
      img: "fifa22.jpg",
      category: "Deportes",
      description: "Disfruta del fútbol virtual con gráficos impresionantes y emocionantes modos de juego.",
      price: 49.99,
      stock: 5,
      platform: "PlayStation 5, Xbox Series X/S, PlayStation 4, Xbox One, PC"
    },
    {
      id: 3,
      name: "Assassin's Creed Valhalla",
      img: "assassinscreedvalhalla.jpg",
      category: "Acción y aventura",
      description: "Embárcate en una épica saga vikinga en la última entrega de la serie Assassin's Creed.",
      price: 69.99,
      stock: 3,
      platform: "PlayStation 5, Xbox Series X/S, PlayStation 4, Xbox One, PC"
    },
    {
      id: 4,
      name: "Call of Duty: Modern Warfare",
      img: "callofdutymodernwarfare.jpg",
      category: "Acción",
      description: "Sumérgete en una intensa experiencia de combate moderno en el galardonado Call of Duty.",
      price: 59.99,
      stock: 8,
      platform: "PlayStation 5, Xbox Series X/S, PlayStation 4, Xbox One, PC"
    },
    {
      id: 5,
      name: "Super Mario Odyssey",
      img: "supermarioodyssey.jpg",
      category: "Plataformas",
      description: "Acompaña a Mario en una aventura por diferentes reinos en busca de la princesa Peach.",
      price: 49.99,
      stock: 12,
      platform: "Nintendo Switch"
    },
    {
      id: 6,
      name: "Red Dead Redemption 2",
      img: "reddeadredemption2.jpg",
      category: "Acción y aventura",
      description: "Explora el salvaje oeste en este épico juego de mundo abierto de los creadores de GTA.",
      price: 59.99,
      stock: 4,
      platform: "PlayStation 5, Xbox Series X/S, PlayStation 4, Xbox One, PC"
    },
    {
      id: 7,
      name: "Minecraft",
      img: "minecraft.jpg",
      category: "Sandbox",
      description: "Construye y explora un mundo infinito lleno de posibilidades en el popular juego de bloques.",
      price: 29.99,
      stock: 15,
      platform: "PlayStation 5, Xbox Series X/S, PlayStation 4, Xbox One, Nintendo Switch, PC"
    },
    {
      id: 8,
      name: "Resident Evil Village",
      img: "residentevilvillage.jpg",
      category: "Survival Horror",
      description: "Enfréntate a horrores sobrenaturales en el escalofriante pueblo de Resident Evil.",
      price: 69.99,
      stock: 2,
      platform: "PlayStation 5, Xbox Series X/S, PlayStation 4, Xbox One, PC"
    },
    {
      id: 9,
      name: "Mario Kart 8 Deluxe",
      img: "mariokart8deluxe.jpg",
      category: "Carreras",
      description: "Compite con tus amigos en emocionantes carreras de karts con los personajes de Mario.",
      price: 59.99,
      stock: 6,
      platform: "Nintendo Switch"
    },
    {
      id: 10,
      name: "The Last of Us Part II",
      img: "thelastofus2.jpg",
      category: "Acción y aventura",
      description: "Embárcate en una emotiva y peligrosa aventura en un mundo postapocalíptico infestado de infectados.",
      price: 59.99,
      stock: 7,
      platform: "PlayStation 4"
    },
    {
      id: 11,
      name: "Cyberpunk 2077",
      img: "cyberpunk2077.jpg",
      category: "Rol",
      description: "Sumérgete en la oscura metrópolis de Night City en este juego futurista de mundo abierto.",
      price: 49.99,
      stock: 4,
      platform: "PlayStation 5, Xbox Series X/S, PlayStation 4, Xbox One, PC"
    },
    {
      id: 12,
      name: "Halo Infinite",
      img: "haloinfinite.jpg",
      category: "Disparos",
      description: "Únete al Jefe Maestro en su nueva misión para salvar la galaxia en esta esperada entrega de Halo.",
      price: 59.99,
      stock: 5,
      platform: "Xbox Series X/S, PC"
    },
    {
      id: 13,
      name: "Sekiro™: Shadows Die Twice - GOTY Edition",
      img: "",
      category: "Acción y aventura",
      description: "Experimenta ser un shinobi del Período Sengoku, conocido como Lobo, que intenta vengarse de un clan de samuráis que atacó y secuestró a su maestro.",
      price: 59.99,
      stock: 8,
      platform: "PlayStation 4, Xbox One"
    },
    {
      id: 14,
      name: "Marvel's Spider-Man: Miles Morales",
      img: "spidermanmiles.jpg",
      category: "Acción y aventura",
      description: "Sigue los pasos de Miles Morales mientras se balancea por Nueva York en este emocionante juego de Spider-Man.",
      price: 49.99,
      stock: 6,
      platform: "PlayStation 5, PlayStation 4"
    },
    {
      id: 15,
      name: "Resident Evil 3",
      img: "residentevil3.jpg",
      category: "Survival Horror",
      description: "Vive el terror en las calles de Raccoon City en este remake del clásico juego de Resident Evil.",
      price: 39.99,
      stock: 5,
      platform: "PlayStation 4, Xbox One, PC"
    },
    {
      id: 16,
      name: "Genshin Impact",
      img: "genshinimpact.jpg",
      category: "RPG",
      description: "Explora un vasto mundo de fantasía y desata poderosos ataques en este popular juego de rol de acción.",
      price: 0,
      stock: 20,
      platform: "PlayStation 5, PlayStation 4, PC, Android, iOS"
    },
    {
      id: 17,
      name: "The Elder Scrolls V: Skyrim",
      img: "skyrim.jpg",
      category: "Rol",
      description: "Sumérgete en la épica y vasta tierra de Skyrim en este juego de rol aclamado por la crítica.",
      price: 39.99,
      stock: 3,
      platform: "PlayStation 4, Xbox One, Nintendo Switch, PC"
    },
    {
      id: 18,
      name: "Ghost of Tsushima",
      img: "ghostoftsushima.jpg",
      category: "Acción y aventura",
      description: "Explora el Japón feudal y conviértete en un samurái en este impresionante juego de mundo abierto.",
      price: 59.99,
      stock: 9,
      platform: "PlayStation 4"
    },
    {
      id: 19,
      name: "Elden Ring",
      img: "",
      category: "Estrategia",
      description: "Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden y encumbrarte como señor del Círculo en las Tierras Intermedias.",
      price: 0.99,
      stock: 15,
      platform: "PlayStation 5, PlayStation 4, Xbox One, PC"
    },
    {
      id: 20,
      name: "God of War",
      img: "godofwar.jpg",
      category: "Acción y aventura",
      description: "Acompaña a Kratos en su épica misión de venganza en este reinicio de la aclamada serie God of War.",
      price: 19.99,
      stock: 6,
      platform: "PlayStation 4, PC"
    },
    {
      id: 21,
      name: "Animal Crossing: New Horizons",
      img: "animalcrossing.jpg",
      category: "Simulación",
      description: "Crea tu propia isla paradisíaca y disfruta de la vida virtual en este encantador juego de simulación.",
      price: 59.99,
      stock: 10,
      platform: "Nintendo Switch"
    },
    {
      id: 22,
      name: "Destiny 2",
      img: "destiny2.jpg",
      category: "Disparos",
      description: "Únete a otros guardianes y defiende la última ciudad segura de la Tierra en este juego de disparos en línea.",
      price: 0,
      stock: 8,
      platform: "PlayStation 5, Xbox Series X/S, PlayStation 4, Xbox One, PC"
    },
    {
      id: 23,
      name: "Uncharted 4: A Thief's End",
      img: "uncharted4.jpg",
      category: "Acción y aventura",
      description: "Acompaña a Nathan Drake en su última y emocionante aventura en busca de un legendario tesoro pirata.",
      price: 19.99,
      stock: 3,
      platform: "PlayStation 4"
    },
    {
      id: 24,
      name: "Fortnite",
      img: "fortnite.jpg",
      category: "Battle Royale",
      description: "Únete a millones de jugadores en este popular juego de supervivencia y construcción en línea.",
      price: 0,
      stock: 20,
      platform: "PlayStation 5, Xbox Series X/S, PlayStation 4, Xbox One, Nintendo Switch, PC, Android, iOS"
    },
    {
      id: 25,
      name: "The Witcher 3: Wild Hunt",
      img: "witcher3.jpg",
      category: "Rol",
      description: "Embárcate en una épica cacería de monstruos en este aclamado juego de rol de mundo abierto.",
      price: 39.99,
      stock: 4,
      platform: "PlayStation 4, Xbox One, Nintendo Switch, PC"
    },
    {
      id: 26,
      name: "Super Smash Bros. Ultimate",
      img: "smashbros.jpg",
      category: "Lucha",
      description: "Lucha con personajes icónicos de diferentes franquicias en este juego de lucha para hasta 8 jugadores.",
      price: 59.99,
      stock: 6,
      platform: "Nintendo Switch"
    },
    {
      id: 27,
      name: "Mortal Kombat 11",
      img: "mortalkombat11.jpg",
      category: "Lucha",
      description: "Participa en brutales combates cuerpo a cuerpo con personajes icónicos en el último juego de la serie Mortal Kombat.",
      price: 49.99,
      stock: 7,
      platform: "PlayStation 4, Xbox One, Nintendo Switch, PC"
    },
    {
      id: 28,
      name: "Grand Theft Auto V",
      img: "gtav.jpg",
      category: "Acción y aventura",
      description: "Explora el vasto mundo abierto de Los Santos en este aclamado juego de la serie Grand Theft Auto.",
      price: 29.99,
      stock: 5,
      platform: "PlayStation 5, PlayStation 4, Xbox One, PC"
    },
    {
      id: 29,
      name: "Super Mario Party",
      img: "marioparty.jpg",
      category: "Tablero",
      description: "Disfruta de divertidos minijuegos y competiciones con tus amigos en este juego de fiesta de Mario.",
      price: 59.99,
      stock: 8,
      platform: "Nintendo Switch"
    },
    {
      id: 30,
      name: "Resident Evil 2 Remake",
      img: "residentevil2remake.jpg",
      category: "Survival Horror",
      description: "Revive el clásico survival horror en esta espectacular remake del juego de Resident Evil 2.",
      price: 39.99,
      stock: 10,
      platform: "PlayStation 4, Xbox One, PC"
    },
    {
      id: 31,
      name: "Bloodborne",
      img: "",
      category: "ARPG",
      description: "Encarna como el 'Cazador', un personaje que tendrá que buscar una misteriosa sustancia llamada Sangre pálida en la decrépita ciudad de Yharnam, cuyos habitantes han sido infectados por una misteriosa enfermedad sanguínea.",
      price: 34.99,
      stock: 3,
      platform: "PlayStation 4"
    },
    {
      id: 32,
      name: "The Outlast Trials",
      img: "",
      category: "Terror",
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
          resolve(products.find(prod => prod.id === productId))
      }, 500);
  })
}

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve(products.find(prod => prod.category === category))
  }, 500)     
})
}