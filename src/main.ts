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
  // .addOAuth2()
  .build();

  const options2 = {
    // customCss: '.swagger-ui .topbar { display: none }'
      customCss: `
      .topbar-wrapper img {content:url('https://v.fastcdn.co/t/8b8a4ef4/b8078b08/1555094668-36677806-327x59-Logo-neeru.png'); width:300px; height:auto;}
      .swagger-ui .topbar { background-color: #23232D; text-align: center }
  
      `,
      customSiteTitle: 'Neeru API'
  };

  const document = SwaggerModule.createDocument(app, options, {
    include: [TransactionModule]
  });
  SwaggerModule.setup('api', app, document, options2);

  await app.listen(3000);
}
bootstrap();
