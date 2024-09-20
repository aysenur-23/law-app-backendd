import { BasicStrategy as Strategy } from 'passport-http';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
//import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      passReqToCallback: true,
    });
  }

  public validate = async (req, username, password): Promise<boolean> => {
    let data = fs.readFileSync('./login.env', 'utf-8');
    data = data.replaceAll('\r', '');
    const lines = data.split('\n');
    const login = lines[0].split(':');
    console.log(login);
    if (login[0] === username && login[1] === password) {
      return true;
    }
    throw new UnauthorizedException();
  };
}
