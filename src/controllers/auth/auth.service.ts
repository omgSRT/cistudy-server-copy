import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common"
import { AccountMySqlEntity, CartMySqlEntity} from "@database"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { MailerService, Sha256Service } from "@global"
import { SignInInput, SignUpInput } from "./auth.input"
import { EmptyObject } from "@common"

@Injectable()
export class AuthService {
    constructor(
    @InjectRepository(AccountMySqlEntity)
    private readonly accountMySqlRepository: Repository<AccountMySqlEntity>,
    @InjectRepository(CartMySqlEntity)
    private readonly cartMySqlRepository: Repository<CartMySqlEntity>,
    private readonly sha256Service: Sha256Service,
    private readonly mailerService: MailerService,
    ) {}

    async signIn(input: SignInInput): Promise<EmptyObject> {
        const { data } = input
        const found = await this.accountMySqlRepository.findOneBy({
            email: data.email,
        })
        if (!found) throw new NotFoundException("Account not found.")

        if (!this.sha256Service.verifyHash(data.password, found.password))
            throw new UnauthorizedException("Invalid credentials.")
        return {}
    }

    async signUp(input: SignUpInput): Promise<string> {
        const { data } = input
  	const found = await this.accountMySqlRepository.findOne({
  		where: {
  			email: data.email,
  		},
  	})
  	if (found) {
  		throw new ConflictException(
  			`Account with email ${data.email} has existed.`,
  		)
  	}
  	data.password = this.sha256Service.createHash(data.password)
  	const created = await this.accountMySqlRepository.save(data)
	//create cart here
  	await this.mailerService.sendMail(created.accountId, data.email)
  	return `An account with id ${created.accountId} has been created`
    }
}