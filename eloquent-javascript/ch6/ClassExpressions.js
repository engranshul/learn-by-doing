// named class expressions

const namedClass = class school {
    constructor(type) {
        this.type = type;
    }
    printSchoolNameAndType(name) {
        console.log(`school name is ${name} and its type is ${this.type}`)
    }
}

new namedClass("primary").printSchoolNameAndType("lawrence");

// unnamed class expressions

const unnamedClass = class {
    constructor(type) {
        this.type = type;
    }
    printSchoolNameAndType(name) {
        console.log(`school name is ${name} and its type is ${this.type}`)
    }
}

new unnamedClass("secondary").printSchoolNameAndType("rainbow");







