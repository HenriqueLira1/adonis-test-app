import Customer from 'App/Models/Customer';

export default class CustomerRepository {
    async getAllCustomers() {
        return Customer.all();
    }
}
