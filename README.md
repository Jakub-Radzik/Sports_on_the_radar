# Sports on the radar

## Run app locally:

1. Use node version defined in `.nvmrc` / `.node-version` file
2. If you use `nvm` to manage node versions run `nvm use` to use the correct node version
3. Being in the root directory of the project run `yarn install` to install dependencies
4. Run `yarn start:backend` to start the backend server
5. Run `yarn start:frontend` to start the frontend server
6. Open `http://localhost:3000` in your browser

## Run tests:

To test frontend: `yarn test:frontend`  
To test backend: `yarn test:backend`

## Additional info:
- I did not want to play with `.env` files, so I hardcoded it in config files, where `.env` files should be readed
- I forgot to add simulation name in the backend and send it through websocket - thats why you will see simulation name in the backend, frontend store and hardocded as a prop in component - I would fix it but it is 22:00 and I have to go to sleep because I have to wake up at 6:30