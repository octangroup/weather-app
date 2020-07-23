export class  City{
    id: number;
    name: string
    temperature: string;
    humidity: string;

    constructor(
        id: number,
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

export default City;