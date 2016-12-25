/**
 * Created by Prayansh on 2016-12-21.
 */
var targetAbility,
    abilities = [];

targetAbility = $x("//ul[@class='AbilityList']/li");
targetAbility.forEach(function (element, index) {
    var abilityName = element.innerText;
    var abilityCode = abilityName.toLowerCase().replace(' ', '-');
    var ability = {
        name: abilityName,
        code: abilityCode,
        index: index,
        div: element
    };
    //give element an id for future
    element.id = abilityName.charAt(0) + index;

    // Setup loading animation for each popover
    $('#' + abilityName.charAt(0) + index).each(function () {
        var $elem = $(this);
        $elem.popover(popoverOptionsAbility($elem, ability));
    });

    abilities.push(ability);
});

for (var i = 0; i < abilities.length; i++) {
    bindPopupsToAbility(abilities[i]);
}