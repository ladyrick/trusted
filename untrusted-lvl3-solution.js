/************************
 * validationEngaged.js *
 ************************
 *
 * They're really on to us now! The validateLevel function
 * has been activated to enforce constraints on what you can
 * do. In this case, you're not allowed to remove any blocks.
 *
 * They're doing all they can to keep you here. But you
 * can still outsmart them.
 */

function startLevel(map) {
    map.placePlayer(map.getWidth()-7, map.getHeight()-5);
    var numBlocks = 2 * (map.getHeight()-13) + 2 * (map.getWidth()-10);
    for (var i = 0; i < numBlocks; i++) {
        var x = i % map.getWidth();
        var y = Math.floor(i / map.getWidth());
        map.placeObject(x, y, 'block');
    }

    map.placeObject(7, 5, 'exit');
}

function validateLevel(map) {
    numBlocks = 2 * (map.getHeight()-13) + 2 * (map.getWidth()-10);

    map.validateAtLeastXObjects(numBlocks, 'block');
    map.validateExactlyXManyObjects(1, 'exit');
}
