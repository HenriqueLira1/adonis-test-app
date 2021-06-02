import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema } from '@ioc:Adonis/Core/Validator';
import CustomerRepository from 'App/Repositories/CustomerRepository';

export default class CustomersController {
    private repository: CustomerRepository;

    constructor() {
        this.repository = new CustomerRepository();
    }

    public async store({ request }: HttpContextContract) {
        const newCustomerSchema = schema.create({
            name: schema.string(),
        });

        const payload = await request.validate({ schema: newCustomerSchema });

        console.log('olha o payload aqui', payload);

        const customer = await this.repository.getAllCustomers();
        return customer;
    }

    public async show({}: HttpContextContract) {
        return {
            ola: 'teste',
        };
    }

    public async update({}: HttpContextContract) {
        // Customer.
    }

    public async destroy({}: HttpContextContract) {}
}
