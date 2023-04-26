import { faker } from '@faker-js/faker';

export type MockData = {
    uuid: string;
    name: string;
    address: string;
    company: string;
    gender: string;
    weight: number;
};

const data: MockData[] = [];

export default async function getMockData({ current, pageSize, search, sorter, filters }: any) {
    if (!data.length) {
        data.push(
            ...Array.from({ length: 200 }).map(() => {
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
            })
        );
    }

    const start = (current - 1) * pageSize;

    let next = data.filter((i) => (search ? i.name.includes(search) : true));

    if (filters) {
        next = next.filter((i) => (filters as string[]).includes(i.gender));
    }

    if (sorter) {
        next.sort((a: any, b: any) => {
            if (sorter[0].asc) {
                return a[sorter[0].field] - b[sorter[0].field];
            }

            return b[sorter[0].field] - a[sorter[0].field];
        });
    }

    return {
        data: next.slice(start, start + pageSize),
        total: next.length,
    };
}
