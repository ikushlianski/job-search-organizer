# IT job search organizer

A small tool helping organize your job options and pick the best one.

## Project setup
- install lerna globally `npm i -g lerna` or use `npx`
- install all dependencies `lerna bootstrap`
- install common root dev dependencies by running `npm i` in the root directory
- if you don't have a docker volume "jobsearchorg", add it by running: `docker volume create jobsearchorg`
- mark dist folder as `excluded` in your IDE so you don't see generated JS files

## Generating new modules
Use `npx nest generate module entities/<module name>`

## Pre-commit hooks
Pre-commit hooks use native Git hooks. The following should be done for hooks to work:

- the `pre-commit` hook in `git-hooks` directory must be made executable
- ensure your git config knows about the `git-hooks` folder. If needed, run `git config core.hooksPath ./git-hooks`.

The pre-commit scripts use Lerna's `lerna run <npm or yarn command>` feature, which ensures that the script with the same name runs in all known repositories.

