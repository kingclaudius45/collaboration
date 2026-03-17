/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(email: string, password: string, name?: string) {
    //  Check if user exists
    const existingUser = await this.usersService.findByEmail(email);
    if (existingUser) {
      throw new Error('User already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const user = await this.usersService.createUser({
      email,
      password: hashedPassword,
      name,
    });

    return user;
  }

  async login(email: string, password: string) {
    // 1. Find user
    const user = await this.usersService.findByEmail(email);
    if (!user || !user.password) {
      throw new Error('Invalid credentials');
    }

    //  Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    //  Generate JWT
    const payload = { sub: user.id, email: user.email };

    const token = this.jwtService.sign(payload);

    return {
      access_token: token,
    };
  }

  async googleLogin(user: any) {
    // 1. Check if user exists
    let existingUser = await this.usersService.findByEmail(user.email);

    // 2. If not → create user
    if (!existingUser) {
      existingUser = await this.usersService.createUser({
        email: user.email,
        name: user.firstName,
        password: null,
      });
    }

    // 3. Generate JWT
    const payload = {
      sub: existingUser.id,
      email: existingUser.email,
    };

    const token = this.jwtService.sign(payload);

    return {
      access_token: token,
    };
  }
}
