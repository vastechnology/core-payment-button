import { TransactionModule } from './transaction/transaction.module';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
  .setTitle('Payment example')
  .setDescription('The payment button api')
  .setVersion('1.0')
  .addTag('transaction')
  .addOAuth2()
  .build();

  const document = SwaggerModule.createDocument(app, options, {
    include: [TransactionModule]
  });
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
