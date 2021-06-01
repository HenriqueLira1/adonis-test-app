import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Customer from "App/Models/Customer";

export default class CustomersController {
    public async store({ request }: HttpContextContract) {
        const data = request.body();
        const customer = await Customer.create(data);
        return customer;
    }

    public async show({}: HttpContextContract) {
        return {
            ola: "teste",
        };
    }

    public async update({}: HttpContextContract) {}

    public async destroy({}: HttpContextContract) {}
}
