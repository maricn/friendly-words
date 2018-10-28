# Word Friends

This repository contains Node.JS solution to **The Friendly Words Challenge**.

## Problem

Two words are considered “friendly” if there exists a one to one mapping of letters between the two.

For instance…

`GAGA` and `BOBO` are friendly because mapping `G<->B` and `A<->O` would make them the same.

`HHHH` and `BOBO` are not friendly. Neither are `JKKJ` and `JKKJJ`.

This list…
* `LALALA`
* `XOXOXO`
* `GCGCGC`
* `HHHCCC`
* `BBBMMM`
* `EGONUH`
* `HHRGOE`

… contains 5 words that have at least one friend. How many words are there in the list with at least one friend?

## Prerequisites

* Node.JS (used `v10.11.0`)

## Build & Run

1) Place the wordlist file in the directory and name it `words.txt`. One example is present.
2) Run `npm install` to install dependencies (runtime: `file-system`, test: `mocha`, `chai`)
3) Run `npm test` to run test suite
4) Run `npm run count-friends` to run the word friends counting algorithm on provided wordlist file.
