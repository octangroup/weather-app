export class  City{
    id: String;
    name: string
    temperature: string;
    humidity: string;

    constructor(
        id: string,
        name: string,
        temperature: string,
        humidity: string
    ){
        this.id = id,
        this.name = name,
        this.temperature = temperature,
        this.humidity = humidity
    }
}