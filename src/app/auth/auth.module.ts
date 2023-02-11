import { Module } from '@nestjs/common';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';

// Module.
import { UserModule } from '../user/user.module';

// Controller.
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    controllers: [AuthController],
    imports: [UserModule, PassportModule],
    providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
