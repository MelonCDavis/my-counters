# React + Vite
This is a simple app made to count A Thing or several Things all at once and keep up with them.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Get Countin!

Currently, two official plugins are available:
the meat of the app is in the main.jsx -----> then the App.jsx -----> can't forget the Counter.jxs or the counterLabel.jsx a little tweaking in the index.css, hover.ss and app.css 

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
basically....it creates a counter that counts in your chosen increment once you've names it.  No you can't name four counters the same thng.  Where is the fun in that?  You can't make it count below zero.  A thing can only be so small.  I've gone with a label system that way all Things are unique.  You can reset and unThing a thing.  It will show you when Things change and alert you when you've done a thing incorectly.  It even shows off just how many Things it's currently keeping track of.  Don't worry a Thing keeps track well....even if you refresh or close it out.  Your Thing is immortal....until you unThing it.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
over all it is a simple Thing that does simple THINGS.