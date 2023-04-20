import { faker } from '@faker-js/faker';

export type MockData = {
    uuid: string;
    name: string;
    address: string;
    company: string;
    gender: string;
    weight: number;
};

export default async function getMockData() {
    return new Promise<MockData[]>((resolve) => {
        setTimeout(() => {
            const data = Array.from({ length: 5 }).map(() => {
                return {
                    uuid: faker.datatype.uuid(),
                    name: faker.internet.userName(),
                    address: faker.address.cityName(),
                    company: faker.company.bs(),
                    gender: faker.name.sex(),
                    weight: faker.datatype.number({
                        max: 200,
                        min: 80,
                    }),
                };
            });
            resolve(data);
        }, 150);
    });
}
