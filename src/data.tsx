interface IData {
    id: number,
    imageSrc: string,
    title: string,
    price: number
}

const Data: IData[] = [
    {
        id: 0,
        imageSrc: './images/spark.png',
        title: 'Spark',
        price: 8500
    },
    {
        id: 1,
        imageSrc: './images/damas.png',
        title: 'Damas',
        price: 8500
    },
    {
        id: 2,
        imageSrc: './images/cobalt.png',
        title: 'Cobalt',
        price: 12000
    },
    {
        id: 3,
        imageSrc: './images/nexia.png',
        title: 'Nexia',
        price: 13000
    },
    {
        id: 4,
        imageSrc: './images/gentra.png',
        title: 'Gentra',
        price: 17000
    },
    {
        id: 5,
        imageSrc: './images/malibu.png',
        title: 'Malibu',
        price: 37000
    }
]

export default Data;
