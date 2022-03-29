import faker from '@faker-js/faker';
import _ from 'lodash';
import writtenNumber from 'written-number';

/**
 * Generates random users with fake data using faker.js
 * @param {number} n
 */
const getRandomUsers = n =>
	_.times(n, index => {
		const name = faker.name.firstName();
		const lastName = faker.name.lastName();
		const fullPrice = Math.floor(Math.random() * 3_000);
		const rate1 = Math.floor(Math.random() * fullPrice);
		const rate2 = fullPrice - rate1;

		return {
			lp: index,
			data: faker.date.past().toISOString().slice(0, 10),
			url: faker.internet.url(),
			serwer: faker.internet.url(),
			nrUmowy: `${faker.datatype.number({ min: 10, max: 99 })}/${faker.datatype.number({
				min: 10,
				max: 99,
			})}/${faker.datatype.number({ min: 2000, max: 2022 })}`,
			firma: faker.company.companyName(),
			reprezentant: `${name} ${lastName}`,
			adres: faker.address.secondaryAddress(),
			nip: Math.floor(Math.random() * 10_000_000_000),
			telefon: faker.phone.phoneNumber('+48 #########'),
			email: faker.internet.email(name, lastName),
			calkowita: fullPrice,
			rata1: rate1,
			rata2: rate2,
			calkowitaSlownie: writtenNumber(fullPrice),
			rata1Slownie: writtenNumber(rate1),
			rata2Slownie: writtenNumber(rate2),
		};
	});

export default getRandomUsers;
