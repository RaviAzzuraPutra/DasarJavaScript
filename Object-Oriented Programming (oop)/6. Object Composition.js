//superclass
class Developper {
    constructor(name) {
        this.name = name;
    }
    comitChange() {
        console.log(`${this.name} is commiting change.....`);
    }
}

function canBuildUI(Developper) {
    return {
        buildUI: () => {
            console.log(`${Developper.name} is building UI...`);
        }
    }
}

function canBuildAPI(Developper) {
    return {
        buildAPI: () => {
            console.log(`${Developper.name} is building API...`);
        }
    }
}

function canDeployAPPS(Developper) {
    return {
        deployAPPS: () => {
            console.log(`${Developper.name} is deploying APPS...`);
        }
    }
}

function createFrontEndDevelopper(name) {
    const developper = new Developper(name);
    return Object.assign(developper, canBuildUI(developper));
}

function createBackEndDevelopper(name) {
    const developper = new Developper(name);
    return Object.assign(developper, canBuildAPI(developper));
}

function createDevOps(name) {
    const developper = new Developper(name);
    return Object.assign(developper, canDeployAPPS(developper));
}

function createFullStackDevelopper(name) {
    const developper = new Developper(name);
    return Object.assign(developper, canBuildUI(developper), canBuildAPI(developper), canDeployAPPS(developper));
}

const FrontEndDevelopper = createFrontEndDevelopper('Rudeus');
FrontEndDevelopper.comitChange();
FrontEndDevelopper.buildUI();
console.log(`is ${FrontEndDevelopper.name} developper?`, FrontEndDevelopper instanceof Developper);

const BackendEndDevelopper = createBackEndDevelopper('Ravi');
BackendEndDevelopper.comitChange();
BackendEndDevelopper.buildAPI();
console.log(`is ${BackendEndDevelopper.name} developper?`, BackendEndDevelopper instanceof Developper);

const DevOps = createDevOps('Kanon');
DevOps.comitChange();
DevOps.deployAPPS();
console.log(`is ${DevOps.name} developper?`, DevOps instanceof Developper);

const FullStackDevelopper = createFullStackDevelopper('Azzura');
FullStackDevelopper.comitChange();
FullStackDevelopper.buildUI();
FullStackDevelopper.buildAPI();
FullStackDevelopper.deployAPPS();
console.log(`${FullStackDevelopper.name} developper?`, FullStackDevelopper instanceof Developper);