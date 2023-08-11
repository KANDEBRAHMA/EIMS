FROM public.ecr.aws/lambda/nodejs:18.2023.08.02.09-x86_64

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 3000

CMD [ "npm","start" ]