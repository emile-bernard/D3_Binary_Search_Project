var tree;

function setup() {
    createCanvas(800, 600);
    background(51);
    tree = new Tree();
    for (var i = 0; i < 100; i++) {
        tree.addValue(floor(random(0, 100)));
    }
    console.log(tree);
    tree.traverse();

    var result = tree.search(10);
    if (result == null) {
        console.log('not found');
    } else {
        console.log('found');
        console.log(result);
    }
}
