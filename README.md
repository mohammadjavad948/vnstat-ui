## About This Project

this project is using [vnStat](https://github.com/vergoh/vnstat) to monitor data, so you need it

it shows your data usage in a simple ui

## File Structure

- react-ui : contains interface made with react
- electron : contains electron wrapper for react

## Development

First install dependencies for both **electron** and **react-ui** with yarn

Then go to react ui and serv the project with **yarn start**

After server starts. You can go to electron directory and run **yarn run start-server**

That's it. Now you can start editing codes :)

## Bundling

In react-ui/package.json, set homepage to **./**

Go to react-ui and run **yarn run build**

Copy build folder to electron directory from react-ui/build => electron/build

In electron directory, run **yarn run package**

Now you can see an out directory and run the app

-------
**Note that you can ONLY run app when you have vnstat on your device installed**

I made this project to learn electron better
