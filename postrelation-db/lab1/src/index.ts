abstract class Fridge {
    private _name!: string;
    private _capacity!: number;

    get name(): string{
        return this._name;
    }

    set name(value: string){
        if (value.length <= 25){
            this._name = value;
        }
        else{
            throw new Error("Max name length is 25");
        }
    }

    get capacity(): number{
        return this._capacity;
    }

    set capacity(value:number){
        if (value >= 100 && value <= 300){
            this._capacity = value;
        }
        else{
            throw new Error("Capacity must be in range of [100 - 300]");
        }
    }

    constructor(name: string, capacity: number) {
        this.name = name;
        this.capacity = capacity;
    }

    public getDescription(): string{
        return `
            <p>Fridge description:</p>
            <ul>
            <li><span>Name: </span>${this.name}</li>
            <li><span>Capacity: </span>${this.capacity}</li>
            </ul>
            `
    }
}

class SmartFridgeSoft{

    private _name!: string;
    private _version!: number;


    get version(): number {
        return this._version;
    }

    set version(value: number) {
        this._version = value;
    }
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }


    constructor(name: string, version: number) {
        this.name = name;
        this.version = version;
    }

    public SoftToUl(){
        return `<ul><li><span>Name: </span>${this.name}</li><span>Version: </span>${this.version}</ul>`
    }

}

class SmartFridge extends Fridge{

    private _smartFunctions!: string[];
    private _displaySize!: number;
    private _software!: SmartFridgeSoft;


    get displaySize(): number {
        return this._displaySize;
    }

    set displaySize(value: number) {
        if (value >= 5){
            this._displaySize = value;
        }else {
            throw new Error("Display size must be at least 4 inches");
        }
    }
    get smartFunctions(): string[] {
        return this._smartFunctions;
    }

    set smartFunctions(value: string[]) {
        if (value.length){
            this._smartFunctions = value;
        }
        else {
            throw new Error("Need at least one function");

        }
    }

    get software(): SmartFridgeSoft{
        return this._software;
    }

    set software(value: SmartFridgeSoft){
        this._software = value
    }


    constructor(name: string, capacity: number, functions: string[], displaySize: number, soft: SmartFridgeSoft) {
        super(name, capacity);
        this.displaySize = displaySize;
        this.smartFunctions = functions;
        this.software = soft;
    }

    private parseSmartFunctionsToUl(){
        let ul = "<ul>";
        let funcs = this.smartFunctions;

        for (const func of funcs) {
            ul += `<li>${func}</li>`;
        }

        ul += "</ul>"

        return ul;

    }

    public getDescription(): string{
        const funcsUl = this.parseSmartFunctionsToUl()
        return `
            <p>Description:</p>
            <ul>
            <li><span>Capacity: </span>${this.capacity}</li>
            <li><span>Display size: </span>${this.displaySize}</li>
            <li><span>Smart functions:</span>
                    ${funcsUl}
            </li>
            <li><span>Software:</span>
                ${this.software.SoftToUl()}
            </li>
            </ul>
            `
    }
}

let f1 = new SmartFridge('Nord', 150, ['DoorCooling+', 'FRESH Balancer', 'Smart Inverter'], 10, new SmartFridgeSoft("Android", 14));
let f2 = new SmartFridge('Samsung', 100, ['DoorCooling+', 'Smart Inverter'], 11, new SmartFridgeSoft("Android", 13));
let f3 = new SmartFridge('LG', 130, ['DoorCooling+', 'FRESH Balancer'], 8, new SmartFridgeSoft("Android", 16));

const fridges = [f1, f2, f3] as SmartFridge[];

let html = "<div class=\"row\">";

for (const f of fridges) {
    html += `
<div class="col-sm-3 mx-auto">
    <div class="card mx-auto p-1" style="width: 18rem;">
        <img style="width: 100px" class="mx-auto" src="https://content1.rozetka.com.ua/goods/images/big/12414912.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${f.name}</h5>
            <p class="card-text">${f.getDescription()}</p>
            <div class="text-center"><a href="#" class="btn btn-primary">Buy</a></div>
            
        </div>
    </div>
    </div>
    `
}
html += "</div>"

const app = document.getElementById("app");
// @ts-ignore
app.innerHTML = html;