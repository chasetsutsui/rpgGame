$(document).ready(function () {
    var characters = {
        "Goku": {
            name: "Goku",
            health: 125,
            attack: 10,
            imageUrl: "assets/images/goku.jpg",
            enemyAttackBack: 14
        },
        "Gohan": {
            name: "Gohan",
            health: 115,
            attack: 14,
            imageUrl: "assets/images/gohan.jpeg",
            enemyAttackBack: 12
        },
        "Frieza": {
            name: "Frieza",
            health: 120,
            attack: 11,
            imageUrl: "assets/images/frieza.jpg",
            enemyAttackBack: 24
        },
        "Majin Buu": {
            name: "Majin Buu",
            health: 140,
            attack: 9,
            imageUrl: "assets/images/buu.jpg",
            enemyAttackBack: 19
        }
    };
    console.log(characters);

    var renderOne = function (character, renderArea) {
        var charDiv = $("<div class= 'character' data-name= '" + character.name + "'>");
        var charName = $("<div class='character-name'>").text(character.name);
        var charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageUrl);
        var charHealth = $("<div class='character-health'>").text(character.health);

        charDiv.append(charName).append(charImage).append(charHealth);
        $(renderArea).append(charDiv)
    }

    var renderCharacters = function (charObj, areaRender) {
        if (areaRender === "#character-section") {
            $(areaRender).empty();
            for (var key in charObj) {
                if (charObj.hasOwnProperty(key)) {
                    renderOne(charObj[key], areaRender);
                }
            }
        }
    }
    renderCharacters(characters, "#character-section")
});