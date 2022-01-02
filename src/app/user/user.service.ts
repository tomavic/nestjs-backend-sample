import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDTO } from './user.dto';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  // fetch all customers
  async getAll(): Promise<User[]> {
    return await this.userModel.find();
  }

  // Get a single customer
  async getOne(customerID: string): Promise<User> {
    return await this.userModel.findById(customerID);
  }

  // post a single customer
  async add(createCustomerDTO: UserDTO): Promise<User> {
    const newCustomer = new this.userModel(createCustomerDTO);
    return await newCustomer.save();
  }

  // Edit customer details
  async update(customerID: string, customerDTO: UserDTO): Promise<User> {
    const updatedCustomer = await this.userModel.findByIdAndUpdate(
      customerID,
      customerDTO,
      { new: true },
    );
    return updatedCustomer;
  }

  // Delete a customer
  async delete(customerID: string): Promise<User> {
    const deletedCustomer = await this.userModel.findByIdAndRemove(customerID);
    return deletedCustomer;
  }
}
