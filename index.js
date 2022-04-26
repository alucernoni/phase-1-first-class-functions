function spy() {
    console.log("spoooooky spy");
}

function receivesAFunction(spy) {
    spy();
};



function returnsANamedFunction(receivesAFunction) {
    spy();
    return function test2() {
        console.log("Does this seem right?")
    };
};


function returnsAnAnonymousFunction(returnsANamedFunction) {
    spy();
    return function () {
        console.log('random string for test')
    }
}